const STORAGE_KEY = "blanco_tactical_playbook_v1";
const THEME_KEY = "blanco_tactical_theme";

const TEAM_COLORS = {
  blue: { fill: "#38bdf8", stroke: "#0c4a6e", text: "#082f49" },
  green: { fill: "#22c55e", stroke: "#052e16", text: "#052e16" },
  red: { fill: "#fb7185", stroke: "#881337", text: "#ffffff" },
  gold: { fill: "#facc15", stroke: "#713f12", text: "#422006" },
  gk: { fill: "#ef4444", stroke: "#ffffff", text: "#ffffff" }
};

const FALLBACK_PLAYBOOK = {
  version: "1.0",
  appName: "Blanco Tactical Studio",
  drills: [
    {
      id: "switchbacks-rondo-to-goal-01",
      title: "Rondo-to-Goal Transition (4v2 Boxes → 5v5+GK)",
      date: "2026-06-01",
      ageGroup: "U12",
      topic: "Transition",
      playerCount: 19,
      pitchType: "half-vertical",
      dimensions: "Half Pitch + Dual 7x7 Rondo Boxes",
      coachingPoints: {
        towardGoal: [
          "Green: Two from Rondo enter the attack — forward w/ pace",
          "Blue: One from each rondo box tracks back to defend (6 & fullback) — man mark"
        ],
        rondoAction: [
          "Green: Defending rondo... If they win it, they go towards goal",
          "Blue: Simple rondo, X passes & pass into mini goals"
        ],
        generalNotes: [
          "Switch rondo box every rep",
          "Forward",
          "Tempo",
          "Man marking"
        ]
      },
      equipment: [
        { type: "goal-main", x: 50, y: 4, rotation: 0 },
        { type: "goal-mini", x: 16, y: 96, rotation: 0 },
        { type: "goal-mini", x: 28, y: 96, rotation: 0 },
        { type: "goal-mini", x: 72, y: 96, rotation: 0 },
        { type: "goal-mini", x: 84, y: 96, rotation: 0 },
        { type: "zone", x: 13, y: 76, w: 18, h: 14, label: "7x7" },
        { type: "zone", x: 69, y: 76, w: 18, h: 14, label: "7x7" },
        { type: "cone", x: 13, y: 76 }, { type: "cone", x: 31, y: 76 },
        { type: "cone", x: 13, y: 90 }, { type: "cone", x: 31, y: 90 },
        { type: "cone", x: 69, y: 76 }, { type: "cone", x: 87, y: 76 },
        { type: "cone", x: 69, y: 90 }, { type: "cone", x: 87, y: 90 }
      ],
      phases: [
        {
          name: "Phase 1: Rondo Action (4v2)",
          note: "Blue circulates in the 7x7 rondo (X passes → score in mini goals). Green presses 2v4.",
          durationMs: 1800,
          players: [
            { id: "gk1", team: "gk", num: "1", x: 50, y: 9 },
            { id: "b1", team: "blue", num: "4", x: 28, y: 35 },
            { id: "b2", team: "blue", num: "5", x: 52, y: 35 },
            { id: "b3", team: "blue", num: "2", x: 76, y: 35 },
            { id: "g1", team: "green", num: "11", x: 17, y: 46 },
            { id: "g2", team: "green", num: "9", x: 43, y: 41 },
            { id: "g3", team: "green", num: "7", x: 78, y: 45 },
            { id: "lb1", team: "blue", num: "6", x: 16, y: 78 },
            { id: "lb2", team: "blue", num: "8", x: 28, y: 78 },
            { id: "lb3", team: "blue", num: "3", x: 16, y: 88 },
            { id: "lb4", team: "blue", num: "10", x: 28, y: 88 },
            { id: "lg1", team: "green", num: "8", x: 20, y: 82 },
            { id: "lg2", team: "green", num: "10", x: 25, y: 84 },
            { id: "rb1", team: "blue", num: "6", x: 72, y: 78 },
            { id: "rb2", team: "blue", num: "8", x: 84, y: 78 },
            { id: "rb3", team: "blue", num: "2", x: 72, y: 88 },
            { id: "rb4", team: "blue", num: "10", x: 84, y: 88 },
            { id: "rg1", team: "green", num: "8", x: 76, y: 82 },
            { id: "rg2", team: "green", num: "10", x: 81, y: 84 }
          ],
          balls: [{ id: "ball1", x: 18, y: 79 }],
          arrows: [
            { type: "pass", x1: 18, y1: 79, x2: 26, y2: 79 },
            { type: "pass", x1: 28, y1: 80, x2: 28, y2: 86 }
          ]
        },
        {
          name: "Phase 2: Green Wins Possession",
          note: "Green (#10) intercepts inside the left rondo box and looks forward immediately.",
          durationMs: 1500,
          players: [
            { id: "gk1", team: "gk", num: "1", x: 50, y: 9 },
            { id: "b1", team: "blue", num: "4", x: 28, y: 35 },
            { id: "b2", team: "blue", num: "5", x: 52, y: 35 },
            { id: "b3", team: "blue", num: "2", x: 76, y: 35 },
            { id: "g1", team: "green", num: "11", x: 17, y: 46 },
            { id: "g2", team: "green", num: "9", x: 43, y: 41 },
            { id: "g3", team: "green", num: "7", x: 78, y: 45 },
            { id: "lb1", team: "blue", num: "6", x: 16, y: 77 },
            { id: "lb2", team: "blue", num: "8", x: 29, y: 79 },
            { id: "lb3", team: "blue", num: "3", x: 16, y: 88 },
            { id: "lb4", team: "blue", num: "10", x: 28, y: 88 },
            { id: "lg1", team: "green", num: "8", x: 21, y: 79 },
            { id: "lg2", team: "green", num: "10", x: 25, y: 83 },
            { id: "rb1", team: "blue", num: "6", x: 72, y: 78 },
            { id: "rb2", team: "blue", num: "8", x: 84, y: 78 },
            { id: "rb3", team: "blue", num: "2", x: 72, y: 88 },
            { id: "rb4", team: "blue", num: "10", x: 84, y: 88 },
            { id: "rg1", team: "green", num: "8", x: 76, y: 82 },
            { id: "rg2", team: "green", num: "10", x: 81, y: 84 }
          ],
          balls: [{ id: "ball1", x: 25, y: 81 }],
          arrows: [
            { type: "dribble", x1: 25, y1: 81, x2: 32, y2: 60 },
            { type: "run", x1: 21, y1: 79, x2: 36, y2: 58 }
          ]
        },
        {
          name: "Phase 3: Two Enter Attack w/ Pace",
          note: "Both Green rondo players burst forward into the attack. One Blue from each box (#6 & fullback) triggers recovery.",
          durationMs: 2000,
          players: [
            { id: "gk1", team: "gk", num: "1", x: 50, y: 9 },
            { id: "b1", team: "blue", num: "4", x: 28, y: 34 },
            { id: "b2", team: "blue", num: "5", x: 52, y: 33 },
            { id: "b3", team: "blue", num: "2", x: 75, y: 34 },
            { id: "g1", team: "green", num: "11", x: 18, y: 38 },
            { id: "g2", team: "green", num: "9", x: 45, y: 34 },
            { id: "g3", team: "green", num: "7", x: 77, y: 37 },
            { id: "lb1", team: "blue", num: "6", x: 24, y: 64 },
            { id: "lb2", team: "blue", num: "8", x: 29, y: 79 },
            { id: "lb3", team: "blue", num: "3", x: 16, y: 88 },
            { id: "lb4", team: "blue", num: "10", x: 28, y: 88 },
            { id: "lg1", team: "green", num: "8", x: 38, y: 54 },
            { id: "lg2", team: "green", num: "10", x: 31, y: 57 },
            { id: "rb1", team: "blue", num: "6", x: 65, y: 60 },
            { id: "rb2", team: "blue", num: "8", x: 84, y: 78 },
            { id: "rb3", team: "blue", num: "2", x: 72, y: 88 },
            { id: "rb4", team: "blue", num: "10", x: 84, y: 88 },
            { id: "rg1", team: "green", num: "8", x: 76, y: 82 },
            { id: "rg2", team: "green", num: "10", x: 81, y: 84 }
          ],
          balls: [{ id: "ball1", x: 32, y: 56 }],
          arrows: [
            { type: "pass", x1: 32, y1: 56, x2: 44, y2: 36 },
            { type: "run", x1: 24, y1: 64, x2: 36, y2: 45 },
            { type: "run", x1: 65, y1: 60, x2: 58, y2: 42 }
          ]
        },
        {
          name: "Phase 4: Recovery & Man Marking",
          note: "Blue #6 and fullback track back to man-mark the late Green runners. Green plays at tempo.",
          durationMs: 1800,
          players: [
            { id: "gk1", team: "gk", num: "1", x: 49, y: 8 },
            { id: "b1", team: "blue", num: "4", x: 27, y: 29 },
            { id: "b2", team: "blue", num: "5", x: 51, y: 27 },
            { id: "b3", team: "blue", num: "2", x: 72, y: 29 },
            { id: "g1", team: "green", num: "11", x: 22, y: 27 },
            { id: "g2", team: "green", num: "9", x: 47, y: 25 },
            { id: "g3", team: "green", num: "7", x: 73, y: 26 },
            { id: "lb1", team: "blue", num: "6", x: 35, y: 42 },
            { id: "lb2", team: "blue", num: "8", x: 29, y: 79 },
            { id: "lb3", team: "blue", num: "3", x: 16, y: 88 },
            { id: "lb4", team: "blue", num: "10", x: 28, y: 88 },
            { id: "lg1", team: "green", num: "8", x: 42, y: 38 },
            { id: "lg2", team: "green", num: "10", x: 33, y: 40 },
            { id: "rb1", team: "blue", num: "6", x: 58, y: 40 },
            { id: "rb2", team: "blue", num: "8", x: 84, y: 78 },
            { id: "rb3", team: "blue", num: "2", x: 72, y: 88 },
            { id: "rb4", team: "blue", num: "10", x: 84, y: 88 },
            { id: "rg1", team: "green", num: "8", x: 76, y: 82 },
            { id: "rg2", team: "green", num: "10", x: 81, y: 84 }
          ],
          balls: [{ id: "ball1", x: 46, y: 26 }],
          arrows: [{ type: "pass", x1: 46, y1: 26, x2: 66, y2: 22 }]
        },
        {
          name: "Phase 5: Finish on Goal",
          note: "Green attacks the box with 5 players for a decisive finish. Next rep: switch to right rondo box!",
          durationMs: 1800,
          players: [
            { id: "gk1", team: "gk", num: "1", x: 53, y: 7 },
            { id: "b1", team: "blue", num: "4", x: 33, y: 21 },
            { id: "b2", team: "blue", num: "5", x: 50, y: 20 },
            { id: "b3", team: "blue", num: "2", x: 64, y: 21 },
            { id: "g1", team: "green", num: "11", x: 29, y: 19 },
            { id: "g2", team: "green", num: "9", x: 48, y: 17 },
            { id: "g3", team: "green", num: "7", x: 67, y: 20 },
            { id: "lb1", team: "blue", num: "6", x: 39, y: 28 },
            { id: "lb2", team: "blue", num: "8", x: 29, y: 79 },
            { id: "lb3", team: "blue", num: "3", x: 16, y: 88 },
            { id: "lb4", team: "blue", num: "10", x: 28, y: 88 },
            { id: "lg1", team: "green", num: "8", x: 44, y: 27 },
            { id: "lg2", team: "green", num: "10", x: 37, y: 26 },
            { id: "rb1", team: "blue", num: "6", x: 57, y: 27 },
            { id: "rb2", team: "blue", num: "8", x: 84, y: 78 },
            { id: "rb3", team: "blue", num: "2", x: 72, y: 88 },
            { id: "rb4", team: "blue", num: "10", x: 84, y: 88 },
            { id: "rg1", team: "green", num: "8", x: 76, y: 82 },
            { id: "rg2", team: "green", num: "10", x: 81, y: 84 }
          ],
          balls: [{ id: "ball1", x: 51, y: 6 }],
          arrows: [{ type: "shot", x1: 66, y1: 20, x2: 51, y2: 6 }]
        }
      ]
    }
  ]
};

let state = {
  playbook: null,
  activeDrillId: null,
  mode: "player",
  boardTool: "move",
  isPlaying: false,
  loop: true,
  speed: 1,
  phaseIndex: 0,
  phaseProgress: 0,
  lastFrameTime: null,
  dragTarget: null,
  drawingArrow: null
};

const el = (id) => document.getElementById(id);

function showToast(msg) {
  const t = el("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => t.classList.add("hidden"), 2500);
}

async function init() {
  applySavedTheme();
  const params = new URLSearchParams(window.location.search);
  if (params.get("embed") === "true") {
    document.body.classList.add("embed-mode");
  }

  state.playbook = await loadPlaybook();
  const requestedDrill = params.get("drill");
  if (requestedDrill && state.playbook.drills.some((d) => d.id === requestedDrill)) {
    state.activeDrillId = requestedDrill;
  } else if (state.playbook.drills.length > 0) {
    state.activeDrillId = state.playbook.drills[0].id;
  }

  bindEvents();
  renderAll();
}

async function loadPlaybook() {
  const cached = localStorage.getItem(STORAGE_KEY);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.drills) && parsed.drills.length > 0) {
        return parsed;
      }
    } catch (_) {}
  }

  try {
    const res = await fetch("playbook.json", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      savePlaybook(data);
      return data;
    }
  } catch (_) {}

  savePlaybook(FALLBACK_PLAYBOOK);
  return structuredClone(FALLBACK_PLAYBOOK);
}

function savePlaybook(data = state.playbook) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getActiveDrill() {
  return state.playbook.drills.find((d) => d.id === state.activeDrillId) || state.playbook.drills[0];
}

function applySavedTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === "sunlight") {
    document.body.classList.add("theme-sunlight");
    el("sunlightIcon").textContent = "🌙";
  }
}

function toggleTheme() {
  const isSun = document.body.classList.toggle("theme-sunlight");
  localStorage.setItem(THEME_KEY, isSun ? "sunlight" : "dark");
  el("sunlightIcon").textContent = isSun ? "🌙" : "☀️";
}

function openDrawer(drawerId) {
  closeAllDrawers();
  el("drawerBackdrop").classList.remove("hidden");
  el(drawerId).classList.remove("hidden");
}

function closeAllDrawers() {
  el("drawerBackdrop").classList.add("hidden");
  el("drillsDrawer").classList.add("hidden");
  el("notesDrawer").classList.add("hidden");
}

function renderAll() {
  renderDrillList();
  renderActiveDrillHeader();
  renderPhaseControls();
  renderCoachingNotes();
  renderPitch();
}

function renderDrillList() {
  const list = el("drillList");
  const query = el("searchInput").value.trim().toLowerCase();
  const age = el("filterAge").value;
  const topic = el("filterTopic").value;
  const pCount = el("filterPlayers").value;

  const filtered = state.playbook.drills.filter((d) => {
    const matchesSearch =
      !query ||
      d.title.toLowerCase().includes(query) ||
      (d.topic || "").toLowerCase().includes(query) ||
      JSON.stringify(d.coachingPoints || {}).toLowerCase().includes(query);
    const matchesAge = age === "all" || d.ageGroup === age;
    const matchesTopic = topic === "all" || d.topic === topic;
    const count = Number(d.playerCount || 0);
    const matchesCount =
      pCount === "all" ||
      (pCount === "1-6" && count <= 6) ||
      (pCount === "7-12" && count >= 7 && count <= 12) ||
      (pCount === "13+" && count >= 13);
    return matchesSearch && matchesAge && matchesTopic && matchesCount;
  });

  el("drillCountBadge").textContent = `${state.playbook.drills.length} Drill${state.playbook.drills.length === 1 ? "" : "s"}`;
  list.innerHTML = "";

  if (filtered.length === 0) {
    list.innerHTML = `<p style="font-size:12px;color:var(--text-secondary);padding:8px;">No matching drills.</p>`;
    return;
  }

  filtered.forEach((d) => {
    const card = document.createElement("div");
    card.className = `drill-card ${d.id === state.activeDrillId ? "active" : ""}`;
    card.innerHTML = `
      <div class="drill-card-title">${escapeHtml(d.title)}</div>
      <div class="drill-card-meta">${escapeHtml(d.ageGroup || "U10")} · ${escapeHtml(d.topic || "General")} · ${d.playerCount || 0}P</div>
    `;
    card.onclick = () => {
      state.activeDrillId = d.id;
      state.phaseIndex = 0;
      state.phaseProgress = 0;
      stopPlayback();
      closeAllDrawers();
      renderAll();
    };
    list.appendChild(card);
  });
}

function renderActiveDrillHeader() {
  const drill = getActiveDrill();
  if (!drill) return;
  el("activeDrillTitle").textContent = drill.title;
  el("pitchTypeSelect").value = drill.pitchType || "half-vertical";
  const parts = [drill.ageGroup, drill.topic, `${drill.playerCount || 0} Players`, drill.dimensions].filter(Boolean);
  el("activeDrillMeta").textContent = parts.join(" · ");
}

function renderPhaseControls() {
  const drill = getActiveDrill();
  if (!drill) return;
  const pills = el("phasePills");
  pills.innerHTML = "";

  drill.phases.forEach((p, idx) => {
    const btn = document.createElement("button");
    btn.className = `phase-pill ${idx === state.phaseIndex ? "active" : ""}`;
    btn.textContent = String(idx + 1);
    btn.title = p.name || `Phase ${idx + 1}`;
    btn.onclick = () => {
      stopPlayback();
      state.phaseIndex = idx;
      state.phaseProgress = 0;
      updateSliderFromState();
      renderPhaseControls();
      renderPitch();
    };
    pills.appendChild(btn);
  });

  const activePhase = drill.phases[state.phaseIndex] || drill.phases[0];
  el("phaseNoteTitle").textContent = activePhase.name || `Phase ${state.phaseIndex + 1}`;
  el("phaseNoteText").textContent = activePhase.note || "";
  updateSliderFromState();
}

function updateSliderFromState() {
  const drill = getActiveDrill();
  if (!drill || drill.phases.length <= 1) {
    el("phaseSlider").value = 0;
    return;
  }
  const totalSegments = drill.phases.length - 1;
  const globalPos = (state.phaseIndex + state.phaseProgress) / totalSegments;
  el("phaseSlider").value = Math.round(Math.min(1, Math.max(0, globalPos)) * 100);
}

function renderCoachingNotes() {
  const drill = getActiveDrill();
  const container = el("coachingPointsContainer");
  if (!drill || !drill.coachingPoints) {
    container.innerHTML = `<p style="font-size:13px;color:var(--text-secondary);">No coaching notes yet.</p>`;
    return;
  }

  const sections = [
    { key: "towardGoal", label: "Toward's Goal Action" },
    { key: "rondoAction", label: "Rondo Action" },
    { key: "generalNotes", label: "General Notes" }
  ];

  let html = "";
  sections.forEach((s) => {
    const items = drill.coachingPoints[s.key];
    if (Array.isArray(items) && items.length > 0) {
      html += `
        <div class="sticky-note-card">
          <h4>${s.label}</h4>
          <ul>${items.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
        </div>
      `;
    }
  });

  if (!html && Array.isArray(drill.coachingPoints)) {
    html = `
      <div class="sticky-note-card">
        <h4>Key Coaching Points</h4>
        <ul>${drill.coachingPoints.map((i) => `<li>${escapeHtml(i)}</li>`).join("")}</ul>
      </div>
    `;
  }
  container.innerHTML = html || `<p style="font-size:13px;color:var(--text-secondary);">No coaching notes yet.</p>`;
}

function renderPitch() {
  const drill = getActiveDrill();
  if (!drill) return;

  const svg = el("pitchSvg");
  const isWide = drill.pitchType === "full-horizontal" || drill.pitchType === "half-horizontal";
  svg.setAttribute("viewBox", isWide ? "0 0 140 100" : "0 0 100 100");

  renderPitchLines(drill.pitchType || "half-vertical", isWide ? 140 : 100, 100);
  renderEquipment(drill.equipment || []);

  const current = drill.phases[state.phaseIndex];
  const next = drill.phases[state.phaseIndex + 1] || current;
  const t = state.phaseProgress;

  renderArrows(current.arrows || []);
  renderPlayers(interpolateEntities(current.players || [], next.players || [], t));
  renderBalls(interpolateEntities(current.balls || [], next.balls || [], t));
}

function interpolateEntities(listA, listB, t) {
  if (t <= 0) return listA;
  const mapB = new Map(listB.map((item) => [item.id, item]));
  return listA.map((a) => {
    const b = mapB.get(a.id);
    if (!b) return a;
    return {
      ...a,
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t
    };
  });
}

function renderPitchLines(type, w, h) {
  const layer = el("pitchSurfaceLayer");
  let stripes = "";
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 1) {
      stripes += `<rect x="0" y="${i * 10}" width="${w}" height="10" fill="var(--pitch-stripe)" opacity="0.5" />`;
    }
  }

  let lines = "";
  const stroke = `stroke="var(--pitch-line)" stroke-width="var(--pitch-line-width)" fill="none"`;

  if (type === "half-vertical") {
    lines = `
      <rect x="4" y="4" width="92" height="92" ${stroke} />
      <rect x="22" y="4" width="56" height="22" ${stroke} />
      <rect x="35" y="4" width="30" height="9" ${stroke} />
      <path d="M 38 26 A 14 14 0 0 0 62 26" ${stroke} />
      <circle cx="50" cy="17" r="0.6" fill="var(--pitch-line)" />
    `;
  } else if (type === "half-horizontal") {
    lines = `
      <rect x="4" y="4" width="132" height="92" ${stroke} />
      <rect x="106" y="22" width="30" height="56" ${stroke} />
      <rect x="124" y="35" width="12" height="30" ${stroke} />
      <path d="M 106 38 A 14 14 0 0 0 106 62" ${stroke} />
    `;
  } else if (type === "full-horizontal") {
    lines = `
      <rect x="4" y="4" width="132" height="92" ${stroke} />
      <line x1="70" y1="4" x2="70" y2="96" ${stroke} />
      <circle cx="70" cy="50" r="12" ${stroke} />
      <rect x="4" y="24" width="20" height="52" ${stroke} />
      <rect x="116" y="24" width="20" height="52" ${stroke} />
    `;
  } else {
    for (let x = 10; x < w; x += 10) {
      lines += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="var(--pitch-line)" stroke-width="0.2" stroke-dasharray="1.5 1.5" opacity="0.35" />`;
    }
    for (let y = 10; y < h; y += 10) {
      lines += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="var(--pitch-line)" stroke-width="0.2" stroke-dasharray="1.5 1.5" opacity="0.35" />`;
    }
  }

  layer.innerHTML = stripes + lines;
}

function renderEquipment(equipment) {
  const layer = el("equipmentLayer");
  layer.innerHTML = "";
  equipment.forEach((item, idx) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.dataset.equipIndex = idx;

    if (item.type === "zone") {
      g.innerHTML = `
        <rect x="${item.x}" y="${item.y}" width="${item.w}" height="${item.h}"
          fill="rgba(250, 204, 21, 0.06)" stroke="#facc15" stroke-width="0.35" stroke-dasharray="1.5 1.2" />
        ${item.label ? `<text x="${item.x - 1.5}" y="${item.y + item.h / 2}" fill="#facc15" font-size="2.4" font-weight="700" text-anchor="end">${escapeHtml(item.label)}</text>` : ""}
      `;
    } else if (item.type === "cone") {
      g.innerHTML = `<polygon points="${item.x},${item.y - 1.2} ${item.x - 1},${item.y + 0.8} ${item.x + 1},${item.y + 0.8}" fill="#facc15" stroke="#713f12" stroke-width="0.25" />`;
    } else if (item.type === "goal-main") {
      g.innerHTML = `<rect x="${item.x - 7}" y="${item.y - 2.6}" width="14" height="2.8" fill="rgba(255,255,255,0.22)" stroke="#ffffff" stroke-width="0.45" rx="0.4" />`;
    } else if (item.type === "goal-mini") {
      g.innerHTML = `<rect x="${item.x - 3.6}" y="${item.y - 1.3}" width="7.2" height="2.4" fill="rgba(255,255,255,0.25)" stroke="#ffffff" stroke-width="0.35" rx="0.4" />`;
    }

    if (state.mode === "board") {
      g.style.cursor = "pointer";
      g.addEventListener("pointerdown", (e) => onEquipmentPointerDown(e, idx));
    }
    layer.appendChild(g);
  });
}

function renderArrows(arrows) {
  const layer = el("arrowsLayer");
  layer.innerHTML = "";
  arrows.forEach((a, idx) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", a.x1);
    line.setAttribute("y1", a.y1);
    line.setAttribute("x2", a.x2);
    line.setAttribute("y2", a.y2);

    const styleMap = {
      pass: { color: "#ffffff", dash: "none", marker: "url(#arrowPass)" },
      run: { color: "#facc15", dash: "1.6 1.2", marker: "url(#arrowRun)" },
      dribble: { color: "#38bdf8", dash: "0.9 0.9", marker: "url(#arrowDribble)" },
      shot: { color: "#fb7185", dash: "none", marker: "url(#arrowShot)" }
    };
    const cfg = styleMap[a.type] || styleMap.pass;
    line.setAttribute("stroke", cfg.color);
    line.setAttribute("stroke-width", a.type === "shot" ? "0.7" : "0.5");
    if (cfg.dash !== "none") line.setAttribute("stroke-dasharray", cfg.dash);
    line.setAttribute("marker-end", cfg.marker);

    if (state.mode === "board" && state.boardTool === "erase") {
      line.style.cursor = "pointer";
      line.addEventListener("pointerdown", (e) => {
        e.stopPropagation();
        getActiveDrill().phases[state.phaseIndex].arrows.splice(idx, 1);
        savePlaybook();
        renderPitch();
      });
    }
    layer.appendChild(line);
  });
}

function renderPlayers(players) {
  const layer = el("playersLayer");
  layer.innerHTML = "";
  players.forEach((p) => {
    const colors = TEAM_COLORS[p.team] || TEAM_COLORS.blue;
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.classList.add("player-token");
    g.innerHTML = `
      <circle cx="${p.x}" cy="${p.y}" r="2.35" fill="${colors.fill}" stroke="${colors.stroke}" stroke-width="0.4" />
      <text x="${p.x}" y="${p.y + 0.8}" text-anchor="middle" font-size="2.15" font-weight="800" fill="${colors.text}">${escapeHtml(String(p.num || ""))}</text>
    `;
    if (state.mode === "board") {
      g.addEventListener("pointerdown", (e) => onEntityPointerDown(e, "player", p.id));
    }
    layer.appendChild(g);
  });
}

function renderBalls(balls) {
  const layer = el("ballsLayer");
  layer.innerHTML = "";
  balls.forEach((b) => {
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.classList.add("player-token");
    g.innerHTML = `
      <circle cx="${b.x}" cy="${b.y}" r="1.35" fill="#ffffff" stroke="#0f172a" stroke-width="0.35" />
      <circle cx="${b.x}" cy="${b.y}" r="0.5" fill="#0f172a" />
    `;
    if (state.mode === "board") {
      g.addEventListener("pointerdown", (e) => onEntityPointerDown(e, "ball", b.id));
    }
    layer.appendChild(g);
  });
}

function getSvgCoords(e) {
  const svg = el("pitchSvg");
  const pt = svg.createSVGPoint();
  pt.x = e.clientX;
  pt.y = e.clientY;
  const transformed = pt.matrixTransform(svg.getScreenCTM().inverse());
  return {
    x: Number(Math.max(2, Math.min(138, transformed.x)).toFixed(1)),
    y: Number(Math.max(2, Math.min(98, transformed.y)).toFixed(1))
  };
}

function onEntityPointerDown(e, kind, id) {
  if (state.mode !== "board") return;
  e.stopPropagation();
  const phase = getActiveDrill().phases[state.phaseIndex];

  if (state.boardTool === "erase") {
    if (kind === "player") phase.players = phase.players.filter((p) => p.id !== id);
    if (kind === "ball") phase.balls = phase.balls.filter((b) => b.id !== id);
    savePlaybook();
    renderPitch();
    return;
  }

  if (state.boardTool === "move") {
    state.dragTarget = { kind, id };
  }
}

function onEquipmentPointerDown(e, idx) {
  if (state.mode !== "board") return;
  e.stopPropagation();
  const drill = getActiveDrill();
  if (state.boardTool === "erase") {
    drill.equipment.splice(idx, 1);
    savePlaybook();
    renderPitch();
  } else if (state.boardTool === "move") {
    state.dragTarget = { kind: "equipment", idx };
  }
}

function bindEvents() {
  el("btnSunlight").onclick = toggleTheme;

  el("btnToggleDrills").onclick = () => openDrawer("drillsDrawer");
  el("btnToggleNotes").onclick = () => openDrawer("notesDrawer");
  el("closeDrillsDrawer").onclick = closeAllDrawers;
  el("closeNotesDrawer").onclick = closeAllDrawers;
  el("drawerBackdrop").onclick = closeAllDrawers;

  el("btnMoreMenu").onclick = (e) => {
    e.stopPropagation();
    el("moreDropdown").classList.toggle("hidden");
  };
  window.addEventListener("click", () => el("moreDropdown").classList.add("hidden"));
  el("moreDropdown").onclick = (e) => e.stopPropagation();

  el("btnModePlayer").onclick = () => setMode("player");
  el("btnModeBoard").onclick = () => setMode("board");

  el("searchInput").oninput = renderDrillList;
  el("filterAge").onchange = renderDrillList;
  el("filterTopic").onchange = renderDrillList;
  el("filterPlayers").onchange = renderDrillList;

  el("pitchTypeSelect").onchange = (e) => {
    const drill = getActiveDrill();
    drill.pitchType = e.target.value;
    savePlaybook();
    renderPitch();
  };

  el("btnPlayPause").onclick = togglePlayback;
  el("btnLoop").onclick = () => {
    state.loop = !state.loop;
    el("btnLoop").classList.toggle("active", state.loop);
  };
  el("speedSelect").onchange = (e) => {
    state.speed = Number(e.target.value);
  };

  el("btnPrevPhase").onclick = () => stepPhase(-1);
  el("btnNextPhase").onclick = () => stepPhase(1);

  el("phaseSlider").oninput = (e) => {
    stopPlayback();
    const drill = getActiveDrill();
    if (!drill || drill.phases.length <= 1) return;
    const ratio = Number(e.target.value) / 100;
    const totalSeg = drill.phases.length - 1;
    const scaled = ratio * totalSeg;
    state.phaseIndex = Math.min(totalSeg - 1, Math.floor(scaled));
    state.phaseProgress = scaled - state.phaseIndex;
    if (ratio >= 1) {
      state.phaseIndex = totalSeg;
      state.phaseProgress = 0;
    }
    renderPhaseControls();
    renderPitch();
  };

  document.querySelectorAll("[data-tool]").forEach((btn) => {
    btn.onclick = () => {
      state.boardTool = btn.dataset.tool;
      document.querySelectorAll("[data-tool]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    };
  });

  document.querySelectorAll("[data-add]").forEach((btn) => {
    btn.onclick = () => addBoardItem(btn.dataset.add);
  });

  el("btnAddPhase").onclick = () => {
    const drill = getActiveDrill();
    const cloned = structuredClone(drill.phases[state.phaseIndex]);
    cloned.name = `Phase ${drill.phases.length + 1}`;
    cloned.arrows = [];
    drill.phases.push(cloned);
    state.phaseIndex = drill.phases.length - 1;
    state.phaseProgress = 0;
    savePlaybook();
    renderPhaseControls();
    renderPitch();
    showToast("Cloned to new phase");
  };

  el("btnDeletePhase").onclick = () => {
    const drill = getActiveDrill();
    if (drill.phases.length <= 1) {
      showToast("Drill must have at least 1 phase");
      return;
    }
    drill.phases.splice(state.phaseIndex, 1);
    state.phaseIndex = Math.max(0, state.phaseIndex - 1);
    savePlaybook();
    renderPhaseControls();
    renderPitch();
  };

  el("btnNewDrill").onclick = () => {
    el("moreDropdown").classList.add("hidden");
    createNewBlankDrill();
  };

  const svg = el("pitchSvg");
  svg.addEventListener("pointerdown", (e) => {
    if (state.mode !== "board") return;
    if (state.boardTool.startsWith("arrow-")) {
      const coords = getSvgCoords(e);
      state.drawingArrow = { type: state.boardTool.replace("arrow-", ""), x1: coords.x, y1: coords.y, x2: coords.x, y2: coords.y };
    }
  });

  svg.addEventListener("pointermove", (e) => {
    if (state.mode !== "board") return;
    const coords = getSvgCoords(e);

    if (state.dragTarget) {
      const drill = getActiveDrill();
      const phase = drill.phases[state.phaseIndex];
      if (state.dragTarget.kind === "player") {
        const p = phase.players.find((x) => x.id === state.dragTarget.id);
        if (p) { p.x = coords.x; p.y = coords.y; }
      } else if (state.dragTarget.kind === "ball") {
        const b = phase.balls.find((x) => x.id === state.dragTarget.id);
        if (b) { b.x = coords.x; b.y = coords.y; }
      } else if (state.dragTarget.kind === "equipment") {
        const eq = drill.equipment[state.dragTarget.idx];
        if (eq) { eq.x = coords.x; eq.y = coords.y; }
      }
      renderPitch();
    } else if (state.drawingArrow) {
      state.drawingArrow.x2 = coords.x;
      state.drawingArrow.y2 = coords.y;
      el("draftLayer").innerHTML = `<line x1="${state.drawingArrow.x1}" y1="${state.drawingArrow.y1}" x2="${coords.x}" y2="${coords.y}" stroke="#facc15" stroke-width="0.6" stroke-dasharray="1.5 1" />`;
    }
  });

  window.addEventListener("pointerup", () => {
    if (state.dragTarget) {
      state.dragTarget = null;
      savePlaybook();
    }
    if (state.drawingArrow) {
      const a = state.drawingArrow;
      state.drawingArrow = null;
      el("draftLayer").innerHTML = "";
      if (Math.hypot(a.x2 - a.x1, a.y2 - a.y1) > 2) {
        getActiveDrill().phases[state.phaseIndex].arrows.push(a);
        savePlaybook();
        renderPitch();
      }
    }
  });

  el("btnExportBackup").onclick = () => {
    el("moreDropdown").classList.add("hidden");
    exportPlaybookBackup();
  };
  el("btnImportJson").onclick = () => {
    el("moreDropdown").classList.add("hidden");
    el("importModal").classList.remove("hidden");
  };
  el("closeImportModal").onclick = () => el("importModal").classList.add("hidden");
  el("cancelImportBtn").onclick = () => el("importModal").classList.add("hidden");
  el("importFileInput").onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    file.text().then((txt) => { el("importTextarea").value = txt; });
  };
  el("confirmImportBtn").onclick = handleImportJson;

  el("btnEditMeta").onclick = openMetaModal;
  el("closeMetaModal").onclick = () => el("metaModal").classList.add("hidden");
  el("cancelMetaBtn").onclick = () => el("metaModal").classList.add("hidden");
  el("saveMetaBtn").onclick = saveMetaModal;

  el("btnCopyEmbed").onclick = () => {
    el("moreDropdown").classList.add("hidden");
    const drill = getActiveDrill();
    const url = new URL(window.location.href);
    url.searchParams.set("drill", drill.id);
    url.searchParams.set("embed", "true");
    navigator.clipboard?.writeText(url.toString());
    showToast("Copied Notion Embed URL");
  };
}

function setMode(mode) {
  state.mode = mode;
  stopPlayback();
  state.phaseProgress = 0;
  el("btnModePlayer").classList.toggle("active", mode === "player");
  el("btnModeBoard").classList.toggle("active", mode === "board");
  el("boardToolbar").classList.toggle("hidden", mode !== "board");
  renderPitch();
}

function addBoardItem(kind) {
  const drill = getActiveDrill();
  const phase = drill.phases[state.phaseIndex];
  const uid = `${kind}-${Date.now().toString(36)}`;
  if (kind === "ball") {
    phase.balls.push({ id: uid, x: 50, y: 50 });
  } else if (kind === "cone" || kind === "goal-mini") {
    drill.equipment.push({ type: kind, x: 50, y: 50 });
  } else {
    const teamCount = phase.players.filter((p) => p.team === kind).length + 1;
    phase.players.push({ id: uid, team: kind, num: String(teamCount), x: 50, y: 50 });
    drill.playerCount = phase.players.length;
  }
  savePlaybook();
  renderAll();
}

function createNewBlankDrill() {
  const id = `drill-${Date.now().toString(36)}`;
  const newDrill = {
    id,
    title: "New Custom Drill",
    ageGroup: "U10",
    topic: "Possession",
    playerCount: 0,
    pitchType: "half-vertical",
    dimensions: "20x20 Grid",
    coachingPoints: { generalNotes: ["Click 'Edit Info' in Edit Board mode to customize."] },
    equipment: [],
    phases: [{ name: "Phase 1: Setup", note: "Drag players onto the pitch.", durationMs: 1800, players: [], balls: [], arrows: [] }]
  };
  state.playbook.drills.unshift(newDrill);
  state.activeDrillId = id;
  state.phaseIndex = 0;
  state.phaseProgress = 0;
  savePlaybook();
  setMode("board");
  renderAll();
  showToast("Created new blank drill");
}

function togglePlayback() {
  if (state.isPlaying) {
    stopPlayback();
  } else {
    const drill = getActiveDrill();
    if (!drill || drill.phases.length <= 1) {
      showToast("Add at least 2 phases to animate");
      return;
    }
    state.isPlaying = true;
    el("btnPlayPause").textContent = "⏸";
    state.lastFrameTime = performance.now();
    requestAnimationFrame(animateLoop);
  }
}

function stopPlayback() {
  state.isPlaying = false;
  el("btnPlayPause").textContent = "▶";
}

function animateLoop(now) {
  if (!state.isPlaying) return;
  const dt = now - (state.lastFrameTime || now);
  state.lastFrameTime = now;

  const drill = getActiveDrill();
  const currentPhase = drill.phases[state.phaseIndex];
  const duration = (currentPhase.durationMs || 1800) / state.speed;
  state.phaseProgress += dt / duration;

  if (state.phaseProgress >= 1) {
    state.phaseProgress = 0;
    if (state.phaseIndex < drill.phases.length - 2) {
      state.phaseIndex++;
    } else if (state.loop) {
      state.phaseIndex = 0;
    } else {
      state.phaseIndex = drill.phases.length - 1;
      stopPlayback();
    }
    renderPhaseControls();
  } else {
    updateSliderFromState();
  }

  renderPitch();
  if (state.isPlaying) requestAnimationFrame(animateLoop);
}

function stepPhase(delta) {
  stopPlayback();
  const drill = getActiveDrill();
  state.phaseIndex = Math.max(0, Math.min(drill.phases.length - 1, state.phaseIndex + delta));
  state.phaseProgress = 0;
  renderPhaseControls();
  renderPitch();
}

function exportPlaybookBackup() {
  const blob = new Blob([JSON.stringify(state.playbook, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `blanco-playbook-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  showToast("Playbook backup exported");
}

function handleImportJson() {
  try {
    const raw = JSON.parse(el("importTextarea").value.trim());
    if (Array.isArray(raw.drills)) {
      raw.drills.forEach((d) => {
        if (!d.id) d.id = `drill-${Date.now().toString(36)}`;
        const existingIdx = state.playbook.drills.findIndex((x) => x.id === d.id);
        if (existingIdx >= 0) state.playbook.drills[existingIdx] = d;
        else state.playbook.drills.unshift(d);
      });
      state.activeDrillId = raw.drills[0]?.id || state.activeDrillId;
    } else if (raw.phases) {
      if (!raw.id) raw.id = `drill-${Date.now().toString(36)}`;
      state.playbook.drills.unshift(raw);
      state.activeDrillId = raw.id;
    } else {
      throw new Error("Invalid drill JSON");
    }
    savePlaybook();
    el("importModal").classList.add("hidden");
    el("importTextarea").value = "";
    state.phaseIndex = 0;
    state.phaseProgress = 0;
    renderAll();
    showToast("Drill imported");
  } catch (err) {
    showToast("Invalid JSON format");
  }
}

function openMetaModal() {
  const drill = getActiveDrill();
  el("metaTitle").value = drill.title || "";
  el("metaAge").value = drill.ageGroup || "U10";
  el("metaTopic").value = drill.topic || "Transition";
  el("metaPlayers").value = drill.playerCount || 0;
  el("metaDimensions").value = drill.dimensions || "";
  el("metaPhaseNote").value = drill.phases[state.phaseIndex]?.note || "";
  el("metaModal").classList.remove("hidden");
}

function saveMetaModal() {
  const drill = getActiveDrill();
  drill.title = el("metaTitle").value.trim() || drill.title;
  drill.ageGroup = el("metaAge").value;
  drill.topic = el("metaTopic").value;
  drill.playerCount = Number(el("metaPlayers").value) || drill.playerCount;
  drill.dimensions = el("metaDimensions").value.trim();
  if (drill.phases[state.phaseIndex]) {
    drill.phases[state.phaseIndex].note = el("metaPhaseNote").value.trim();
  }
  savePlaybook();
  el("metaModal").classList.add("hidden");
  renderAll();
  showToast("Drill details updated");
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));
}

init();
