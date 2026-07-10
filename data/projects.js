// SoWN Interactive Map — project/site data.
//
// One object per project. `sites` holds 1 entry for single-site projects, N entries
// for multi-site projects (each rendered as its own pin, grouped visually), or is
// empty for area-wide projects (rendered only in the floating panel).
//
// lat/lng are filled in by data/geocode.py (run once, results committed here).
// projectInfoUrl is left null everywhere until real "Project Info" page URLs on the
// live SoWN website are supplied — the popup shows a disabled "coming soon" link until then.

const PLACEHOLDER_PHOTO = "assets/placeholder.svg";

const PROJECTS = [
  // ─────────────────────────────  COMMUNITY CHEST  ─────────────────────────────
  {
    id: "cc-01",
    programme: "community-chest",
    number: 1,
    name: "Archbishop's Park Community Trust",
    org: "Archbishop's Park Community Trust",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-01-a", label: null, address: "Archbishop's Park, Lambeth Road, London SE1", lat: 51.4968157, lng: -0.1170284, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "cc-02",
    programme: "community-chest",
    number: 2,
    name: "Bankside Open Spaces Trust (Living Space)",
    org: "Bankside Open Spaces Trust",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-02-a", label: null, address: "1 Coral St, London SE1 7BE", lat: 51.5009242, lng: -0.1088646, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-03",
    programme: "community-chest",
    number: 3,
    name: "Bridge at Waterloo",
    org: "Bridge at Waterloo",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-03-a", label: null, address: "St John's Waterloo, 73 Waterloo Road, London SE1 8TY", lat: 51.5045614, lng: -0.111975, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-04",
    programme: "community-chest",
    number: 4,
    name: "Bright Centres",
    org: "Bright Centres",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-04-a", label: null, address: "18 Oakden Street, London SE11 4UG", lat: 51.4928575, lng: -0.109699, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-05",
    programme: "community-chest",
    number: 5,
    name: "Coin Street Centre Trust",
    org: "Coin Street Centre Trust",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-05-a", label: null, address: "Coin Street Neighbourhood Centre, 108 Stamford Street, London SE1 9NH", lat: 51.5062031, lng: -0.1106563, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-06",
    programme: "community-chest",
    number: 6,
    name: "Colombo Centre",
    org: "Colombo Centre",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-06-a", label: null, address: "34-68 Colombo Street, London SE1 8DP", lat: 51.5056471, lng: -0.1051462, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-07",
    programme: "community-chest",
    number: 7,
    name: "Futures Theatre",
    org: "Futures Theatre",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-07-a", label: null, address: "St John's Church, Waterloo, 73 Waterloo Road, London SE1 8TY", lat: 51.5045614, lng: -0.111975, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-08",
    programme: "community-chest",
    number: 8,
    name: "Garden Museum",
    org: "Garden Museum",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-08-a", label: null, address: "Garden Museum, St Mary-at-Lambeth, Lambeth Palace Road, London SE1", lat: 51.4948515, lng: -0.1197895, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "cc-09",
    programme: "community-chest",
    number: 9,
    name: "London City Mission (Webber Street Homeless Day Centre)",
    org: "London City Mission",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-09-a", label: null, address: "6-8 Webber Street, London SE1 8QA", lat: 51.5013824, lng: -0.1074991, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-10",
    programme: "community-chest",
    number: 10,
    name: "Oasis Hub Waterloo",
    org: "Oasis Hub Waterloo",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-10-a", label: null, address: "1A Kennington Road, London SE1 7QP", lat: 51.4980352, lng: -0.112114, geocodeStatus: "ok" }
    ]
  },
  {
    id: "cc-11",
    programme: "community-chest",
    number: 11,
    name: "Waterloo Community Counselling",
    org: "Waterloo Community Counselling",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-11-a", label: null, address: "Barley Mow Clinic, Greet House, Frazier Street, London SE1 7BD", lat: 51.5000663, lng: -0.1103774, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "cc-12",
    programme: "community-chest",
    number: 12,
    name: "Waterloo Sports and Football Club",
    org: "Waterloo Sports and Football Club",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-12-a", label: null, address: "Hatfields Football Pitches, Hatfields, London SE1", lat: 51.5050017, lng: -0.1063826, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "cc-13",
    programme: "community-chest",
    number: 13,
    name: "Wellington Mills Residents' Association",
    org: "Wellington Mills Residents' Association",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "cc-13-a", label: null, address: "24 Mead Row, London SE1 7JG", lat: 51.4976546, lng: -0.1109104, geocodeStatus: "ok" }
    ]
  },

  // ────────────────────────────────────  NCIL  ────────────────────────────────────
  {
    id: "ncil-01",
    programme: "ncil",
    number: 1,
    name: "Connecting Waterloo Community (Part 1)",
    org: "SoWN / Coin Street, St John's Waterloo, Oasis Hub Waterloo, Bright Centres",
    locationType: "multi-site",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-01-a", label: "Coin Street", address: "108 Stamford Street, London SE1 9NH", lat: 51.506283, lng: -0.1104804, geocodeStatus: "ok" },
      { siteId: "ncil-01-b", label: "St John's Waterloo", address: "73 Waterloo Road, London SE1 8TY", lat: 51.5045614, lng: -0.111975, geocodeStatus: "ok" },
      { siteId: "ncil-01-c", label: "Oasis Hub Waterloo", address: "1A Kennington Road, London SE1 7QP", lat: 51.4980352, lng: -0.112114, geocodeStatus: "ok" },
      { siteId: "ncil-01-d", label: "Bright Centres", address: "18 Oakden Street, London SE11 4UG", lat: 51.4928575, lng: -0.109699, geocodeStatus: "ok" }
    ]
  },
  {
    id: "ncil-02",
    programme: "ncil",
    number: 2,
    name: "Stakeholder Engagement",
    org: "Sustains Us",
    locationType: "area-wide",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: []
  },
  {
    id: "ncil-03",
    programme: "ncil",
    number: 3,
    name: "Waterloo East SuDS",
    org: "Sustains Us",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      {
        siteId: "ncil-03-a",
        label: null,
        address: "Greet Street, London SE1",
        note: "Street-level project spanning Cons Street, Windmill Walk, Greet Street and sections of The Cut — pinned at approximate Greet Street midpoint.",
        lat: 51.5037836, lng: -0.107378, geocodeStatus: "manual_override"
      }
    ]
  },
  {
    id: "ncil-04",
    programme: "ncil",
    number: 4,
    name: "Green Infrastructure Delivery and Investment Strategy",
    org: "Sustains Us",
    locationType: "area-wide",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [],
    referenceSites: [
      { siteId: "ncil-04-ref-a", label: "Victory Square", address: "Victory Square, London SE1", lat: 51.4970736, lng: -0.1134354, geocodeStatus: "manual_override" },
      { siteId: "ncil-04-ref-b", label: "Emma Cons Gardens", address: "Emma Cons Gardens, The Cut / Waterloo Road, London SE1", lat: 51.5025357, lng: -0.109865, geocodeStatus: "manual_override" },
      { siteId: "ncil-04-ref-c", label: "Royal Street", address: "Royal Street, London SE1", lat: 51.4986173, lng: -0.115724, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "ncil-05",
    programme: "ncil",
    number: 5,
    name: "North Lambeth/Waterloo Community Resilience Hub (Part 2)",
    org: "SoWN / Coin Street, St John's Waterloo, Oasis Hub Waterloo, Bright Centres",
    locationType: "multi-site",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-05-a", label: "Coin Street", address: "108 Stamford Street, London SE1 9NH", lat: 51.506283, lng: -0.1104804, geocodeStatus: "ok" },
      { siteId: "ncil-05-b", label: "St John's Waterloo", address: "73 Waterloo Road, London SE1 8TY", lat: 51.5045614, lng: -0.111975, geocodeStatus: "ok" },
      { siteId: "ncil-05-c", label: "Oasis Hub Waterloo", address: "1A Kennington Road, London SE1 7QP", lat: 51.4980352, lng: -0.112114, geocodeStatus: "ok" },
      { siteId: "ncil-05-d", label: "Bright Centres", address: "18 Oakden Street, London SE11 4UG", lat: 51.4928575, lng: -0.109699, geocodeStatus: "ok" }
    ]
  },
  {
    id: "ncil-06",
    programme: "ncil",
    number: 6,
    name: "Bernie Spain Gardens North (Phase 2)",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-06-a", label: null, address: "Bernie Spain Gardens North, Upper Ground, South Bank, London SE1", lat: 51.507464, lng: -0.109479, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "ncil-07",
    programme: "ncil",
    number: 7,
    name: "Jubilee Gardens — Lighting and CCTV",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-07-a", label: null, address: "Jubilee Gardens, London SE1", lat: 51.5039398, lng: -0.1181769, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "ncil-08",
    programme: "ncil",
    number: 8,
    name: "Emma Cons Events – Round 2",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-08-a", label: null, address: "Emma Cons Gardens, The Cut / Waterloo Road, London SE1", lat: 51.5025357, lng: -0.109865, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "ncil-09",
    programme: "ncil",
    number: 9,
    name: "Lower Marsh Retail Strategy (Phase 1)",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-09-a", label: null, address: "Lower Marsh, London SE1", lat: 51.5016814, lng: -0.1108205, geocodeStatus: "ok" }
    ]
  },
  {
    id: "ncil-10",
    programme: "ncil",
    number: 10,
    name: "SoWN Events and Awards",
    org: "SoWN",
    locationType: "area-wide",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: []
  },
  {
    id: "ncil-11",
    programme: "ncil",
    number: 11,
    name: "Waterloo Parades",
    org: "TBC",
    locationType: "multi-site",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-11-a", label: "Kennington Road", address: "Kennington Road, London SE1", lat: 51.4987505, lng: -0.1123173, geocodeStatus: "ok" },
      { siteId: "ncil-11-b", label: "Westminster Bridge Road", address: "Westminster Bridge Road, London SE1", lat: 51.5007275, lng: -0.118087, geocodeStatus: "ok" },
      { siteId: "ncil-11-c", label: "Hatfields", address: "Hatfields, London SE1", lat: 51.5050017, lng: -0.1063826, geocodeStatus: "ok" },
      { siteId: "ncil-11-d", label: "Waterloo Road", address: "Waterloo Road, London SE1", lat: 51.4998702, lng: -0.1070441, geocodeStatus: "ok" },
      { siteId: "ncil-11-e", label: "St George's Circus", address: "St George's Circus, London SE1", lat: 51.4985365, lng: -0.1078873, geocodeStatus: "ok" },
      { siteId: "ncil-11-f", label: "Blackfriars Road", address: "Blackfriars Road, London SE1", lat: 51.5034722, lng: -0.1044306, geocodeStatus: "ok" },
      { siteId: "ncil-11-g", label: "Bayliss Road", address: "Bayliss Road, London SE1", lat: 51.500785, lng: -0.1107216, geocodeStatus: "manual_override" },
      { siteId: "ncil-11-h", label: "Morley Street", address: "Morley Street, London SE1", lat: 51.4984467, lng: -0.1095236, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "ncil-12",
    programme: "ncil",
    number: 12,
    name: "Adventure Playground at Living Space",
    org: "Bankside Open Spaces Trust",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-12-a", label: null, address: "1 Coral St, London SE1 7BE", lat: 51.5009242, lng: -0.1088646, geocodeStatus: "ok" }
    ]
  },
  {
    id: "ncil-13",
    programme: "ncil",
    number: 13,
    name: "Tree Planting Partnership Programme",
    org: "Sustains Us",
    locationType: "area-wide",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: []
  },
  {
    id: "ncil-14",
    programme: "ncil",
    number: 14,
    name: "Lower Marsh Phase 2",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-14-a", label: null, address: "Lower Marsh, London SE1", lat: 51.5016814, lng: -0.1108205, geocodeStatus: "ok" }
    ]
  },
  {
    id: "ncil-15",
    programme: "ncil",
    number: 15,
    name: "Millennium Green Improvements",
    org: "Bankside Open Spaces Trust",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-15-a", label: null, address: "Waterloo Millennium Green, Baylis Road, Lambeth, London SE1 7AA", lat: 51.5015771, lng: -0.1098803, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "ncil-16",
    programme: "ncil",
    number: 16,
    name: "Emma Cons Events – Round 1",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-16-a", label: null, address: "Emma Cons Gardens, The Cut / Waterloo Road, London SE1", lat: 51.5025357, lng: -0.109865, geocodeStatus: "manual_override" }
    ]
  },
  {
    id: "ncil-17",
    programme: "ncil",
    number: 17,
    name: "Transforming Hercules Road",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-17-a", label: null, address: "Hercules Road, London SE1", lat: 51.4977216, lng: -0.1134344, geocodeStatus: "ok" }
    ]
  },
  {
    id: "ncil-18",
    programme: "ncil",
    number: 18,
    name: "Emma Cons Events – Round 3",
    org: "TBC",
    locationType: "single",
    photo: PLACEHOLDER_PHOTO,
    projectInfoUrl: null,
    sites: [
      { siteId: "ncil-18-a", label: null, address: "Emma Cons Gardens, The Cut / Waterloo Road, London SE1", lat: 51.5025357, lng: -0.109865, geocodeStatus: "manual_override" }
    ]
  }
];
