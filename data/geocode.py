#!/usr/bin/env python3
"""
One-off build-time geocoder for data/projects.js.

Reads every `address: "..."` string out of projects.js, geocodes each unique
address once via OSM Nominatim (free, no API key), and writes the resulting
lat/lng back into projects.js in place. Run manually whenever addresses
change — the live page never calls Nominatim itself.

Usage:
    python3 data/geocode.py

Manual overrides: edit data/geocode_overrides.json, keyed by the exact address
string as it appears in projects.js, e.g.:
    { "Kennington Road, London SE1": {"lat": 51.4989, "lng": -0.1116} }
Overrides are checked before calling Nominatim, and always win.
"""

import json
import re
import subprocess
import sys
import time
import urllib.parse
from pathlib import Path

DATA_DIR = Path(__file__).parent
PROJECTS_FILE = DATA_DIR / "projects.js"
OVERRIDES_FILE = DATA_DIR / "geocode_overrides.json"

NOMINATIM_URL = "https://nominatim.openstreetmap.org/search"
USER_AGENT = "SoWN-Map-Prototype/1.0 (contact: laurence2edwards@gmail.com)"
RATE_LIMIT_SECONDS = 1.0

ADDRESS_RE = re.compile(r'address:\s*"([^"]+)"')
# Matches the lat/lng/geocodeStatus block regardless of its current state, so the
# script is safe to re-run (e.g. after fixing an override) without a manual reset.
RESULT_RE = re.compile(
    r'lat:\s*(?:null|[\d.\-]+),\s*lng:\s*(?:null|[\d.\-]+),\s*geocodeStatus:\s*"[a-z_]+"'
)


def load_overrides():
    if OVERRIDES_FILE.exists():
        return json.loads(OVERRIDES_FILE.read_text())
    return {}


def geocode(address, overrides):
    if address in overrides:
        o = overrides[address]
        return o["lat"], o["lng"], "manual_override"

    query = urllib.parse.urlencode({
        "format": "json",
        "q": address,
        "countrycodes": "gb",
        "limit": 1,
    })
    url = f"{NOMINATIM_URL}?{query}"
    try:
        # Shelling out to curl sidesteps a broken local CA bundle for Python's own
        # urllib/ssl on this machine (curl uses the system trust store correctly).
        proc = subprocess.run(
            ["curl", "-s", "--max-time", "10", "-H", f"User-Agent: {USER_AGENT}", url],
            capture_output=True, text=True, check=True,
        )
        results = json.loads(proc.stdout)
    except Exception as exc:
        print(f"  ! request failed for {address!r}: {exc}", file=sys.stderr)
        return None, None, "failed"

    if not results:
        return None, None, "failed"

    result = results[0]
    return float(result["lat"]), float(result["lon"]), "ok"


def main():
    text = PROJECTS_FILE.read_text()
    overrides = load_overrides()

    addresses = list(dict.fromkeys(ADDRESS_RE.findall(text)))  # unique, order-preserving
    print(f"Found {len(addresses)} unique addresses.")

    resolved = {}
    for i, address in enumerate(addresses, 1):
        lat, lng, status = geocode(address, overrides)
        resolved[address] = (lat, lng, status)
        flag = "" if status in ("ok", "manual_override") else "  <-- FLAGGED: could not resolve"
        print(f"  [{i}/{len(addresses)}] {status:15s} {address}{flag}")
        if status == "ok":
            time.sleep(RATE_LIMIT_SECONDS)  # only throttle real API calls

    # Walk address-by-address, replacing only the very next lat/lng/geocodeStatus
    # block after each address match — each site object has exactly one such block
    # immediately following its own address, regardless of its current value.
    out = []
    pos = 0
    for m in ADDRESS_RE.finditer(text):
        address = m.group(1)
        result_match = RESULT_RE.search(text, m.end())
        if not result_match:
            continue
        lat, lng, status = resolved[address]
        lat_str = "null" if lat is None else repr(lat)
        lng_str = "null" if lng is None else repr(lng)
        out.append(text[pos:result_match.start()])
        out.append(f'lat: {lat_str}, lng: {lng_str}, geocodeStatus: "{status}"')
        pos = result_match.end()
    out.append(text[pos:])
    new_text = "".join(out)

    PROJECTS_FILE.write_text(new_text)

    failed = [a for a, (lat, lng, status) in resolved.items() if status == "failed"]
    if failed:
        print(f"\n{len(failed)} address(es) could not be geocoded — flagged as "
              f"geocodeStatus: \"failed\" in projects.js, excluded from the map:")
        for a in failed:
            print(f"  - {a}")
    else:
        print("\nAll addresses resolved.")


if __name__ == "__main__":
    main()
