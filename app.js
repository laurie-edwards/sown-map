// SoWN Interactive Map — Leaflet app.
// Reads the global PROJECTS array (data/projects.js) and renders pins,
// multi-site groupings, the area-wide floating panel, and shared popup/modal detail.

const PROGRAMME_META = {
  "community-chest": { label: "Community Chest", color: "#66c0de" },
  "ncil": { label: "NCIL", color: "#ed7e3a" }
};

function escapeHtml(str) {
  if (str == null) return "";
  return String(str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

// ── Pin icons ──────────────────────────────────────────────────────────────

function pinSvg(fillColor, ringColor) {
  const stroke = ringColor || "#ffffff";
  const strokeWidth = ringColor ? 4 : 2;
  return `<svg viewBox="0 0 32 42" width="32" height="42" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C7.16 0 0 7.16 0 16c0 12 16 26 16 26s16-14 16-26C32 7.16 24.84 0 16 0z"
          fill="${fillColor}" stroke="${stroke}" stroke-width="${strokeWidth}" />
    <circle cx="16" cy="16" r="6.5" fill="#ffffff" />
  </svg>`;
}

function createPinIcon(project, siteIndex) {
  const meta = PROGRAMME_META[project.programme];
  const isMulti = project.locationType === "multi-site";
  const ringColor = isMulti ? project.groupColor : null;
  const badge = isMulti
    ? `<span class="pin-badge-letter">${String.fromCharCode(97 + siteIndex).toUpperCase()}</span>`
    : "";
  return L.divIcon({
    html: `<div class="pin-icon">${pinSvg(meta.color, ringColor)}${badge}</div>`,
    className: "",
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -38],
    tooltipAnchor: [0, -30]
  });
}

function createReferenceIcon() {
  const svg = `<svg viewBox="0 0 20 20" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="7" fill="#b3bfcb" stroke="#fff" stroke-width="2" stroke-dasharray="3 2" />
  </svg>`;
  return L.divIcon({
    html: `<div class="pin-icon">${svg}</div>`,
    className: "",
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8],
    tooltipAnchor: [0, -8]
  });
}

// ── Shared popup / modal detail content ─────────────────────────────────────

function renderDetailHTML(project, site, siteIndex) {
  const meta = PROGRAMME_META[project.programme];
  const isAreaWide = project.locationType === "area-wide";
  const badgeClass = isAreaWide ? "badge-area-wide" : `badge-${project.programme}`;
  const badgeText = isAreaWide ? "Area-wide" : `${meta.label} #${project.number}`;
  const siteLabelSuffix = site && site.label ? ` — ${escapeHtml(site.label)}` : "";

  let siteNote = "";
  if (site && project.locationType === "multi-site") {
    siteNote = `<p class="detail-site-note">Site ${siteIndex + 1} of ${project.sites.length} for this project.</p>`;
  } else if (site && site.note) {
    siteNote = `<p class="detail-site-note">${escapeHtml(site.note)}</p>`;
  }

  const linkHtml = project.projectInfoUrl
    ? `<a class="btn-project-info" href="${escapeHtml(project.projectInfoUrl)}" target="_blank" rel="noopener">Project Info</a>`
    : `<a class="btn-project-info" href="#" aria-disabled="true" tabindex="-1">Project Info — coming soon</a>`;

  return `<div class="detail">
    <img class="detail-photo" src="${escapeHtml(project.photo)}" alt="Placeholder photo for ${escapeHtml(project.name)}">
    <div class="detail-body">
      <span class="badge ${badgeClass}">${badgeText}</span>
      <h3>${escapeHtml(project.name)}${siteLabelSuffix}</h3>
      <p class="detail-org">${escapeHtml(project.org || "Lead org: TBC")}</p>
      ${siteNote}
      ${linkHtml}
    </div>
  </div>`;
}

// ── Map setup ────────────────────────────────────────────────────────────────

const map = L.map("map", { scrollWheelZoom: true }).setView([51.5023, -0.1109], 15);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: "abcd",
  maxZoom: 19
}).addTo(map);

const layerGroups = {
  "community-chest": L.layerGroup().addTo(map),
  "ncil": L.layerGroup().addTo(map)
};

function addSiteMarker(project, site, siteIndex) {
  if (site.lat == null || site.lng == null || site.geocodeStatus === "failed") {
    console.warn(`Skipping pin — could not geocode "${site.address}" for project "${project.name}" (${site.siteId}).`);
    return;
  }
  const marker = L.marker([site.lat, site.lng], { icon: createPinIcon(project, siteIndex) });
  const tooltipText = project.name
    + (site.label ? ` — ${site.label}` : "")
    + (project.locationType === "multi-site" ? ` (Site ${siteIndex + 1} of ${project.sites.length})` : "");
  marker.bindTooltip(tooltipText, { direction: "top", sticky: true, className: "sown-tooltip" });
  marker.bindPopup(renderDetailHTML(project, site, siteIndex), { maxWidth: 280, minWidth: 260 });
  marker.addTo(layerGroups[project.programme]);
}

function addReferenceMarker(project, site) {
  if (site.lat == null || site.lng == null || site.geocodeStatus === "failed") {
    console.warn(`Skipping reference pin — could not geocode "${site.address}" (${site.siteId}).`);
    return;
  }
  const marker = L.marker([site.lat, site.lng], { icon: createReferenceIcon() });
  marker.bindTooltip(`${site.label} (reference site)`, { direction: "top", sticky: true, className: "sown-tooltip" });
  marker.bindPopup(
    `<div class="detail"><div class="detail-body" style="padding-top:2px;">
      <span class="badge badge-ncil">Reference site</span>
      <h3>${escapeHtml(site.label)}</h3>
      <p class="detail-org">Reference location for the area-wide project “${escapeHtml(project.name)}”. See the Area-wide Projects panel for full details.</p>
    </div></div>`,
    { maxWidth: 260 }
  );
  marker.addTo(layerGroups[project.programme]);
}

// ── Area-wide panel + modal ──────────────────────────────────────────────────

const areaWideList = document.getElementById("area-wide-list");
const modalOverlay = document.getElementById("modal-overlay");
const modalContent = modalOverlay.querySelector(".modal-content");
const modalCloseBtn = modalOverlay.querySelector(".modal-close");

function openModal(project) {
  modalContent.innerHTML = renderDetailHTML(project, null, 0);
  modalOverlay.hidden = false;
}

function closeModal() {
  modalOverlay.hidden = true;
}

modalCloseBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalOverlay.hidden) closeModal();
});

function addAreaWideCard(project) {
  const meta = PROGRAMME_META[project.programme];
  const card = document.createElement("div");
  card.className = "area-card";
  card.dataset.programme = project.programme;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.innerHTML = `
    <span class="badge badge-${project.programme}">${meta.label} #${project.number}</span>
    <h4>${escapeHtml(project.name)}</h4>
    <p>${escapeHtml(project.org || "Lead org: TBC")}</p>
  `;
  card.addEventListener("click", () => openModal(project));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(project);
    }
  });
  areaWideList.appendChild(card);
}

// ── Build everything from PROJECTS ──────────────────────────────────────────

PROJECTS.forEach((project) => {
  if (project.locationType === "area-wide") {
    addAreaWideCard(project);
    if (project.referenceSites) {
      project.referenceSites.forEach((site) => addReferenceMarker(project, site));
    }
    return;
  }
  project.sites.forEach((site, i) => addSiteMarker(project, site, i));
});

// ── Filter toggle ────────────────────────────────────────────────────────────

function applyFilter(filter) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  Object.entries(layerGroups).forEach(([programme, group]) => {
    const shouldShow = filter === "all" || filter === programme;
    const isShown = map.hasLayer(group);
    if (shouldShow && !isShown) group.addTo(map);
    if (!shouldShow && isShown) map.removeLayer(group);
  });
  document.querySelectorAll(".area-card").forEach((card) => {
    const show = filter === "all" || filter === card.dataset.programme;
    card.style.display = show ? "" : "none";
  });
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyFilter(btn.dataset.filter));
});
