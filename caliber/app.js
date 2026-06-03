/* ═══════════════════════════════════════════════════════════════════
   CALIBER — SPA router + views (vanilla JS, no build step)
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  const DB = window.DB;

  /* ───────────────────────── Icons (inline SVG) ───────────────────────── */
  const I = {
    dashboard: 'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
    atlas: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20',
    compass: 'M12 22a10 10 0 100-20 10 10 0 000 20zM16.2 7.8l-2 6.2-6.2 2 2-6.2 6.2-2z',
    forge: 'M14.7 6.3a4 4 0 00-5.4 5.4l-6 6a1.5 1.5 0 002 2l6-6a4 4 0 005.4-5.4l-2.8 2.8-2-2 2.8-2.8z',
    fleet: 'M3 7l9-4 9 4-9 4-9-4zm0 5l9 4 9-4M3 17l9 4 9-4',
    pulse: 'M3 12h4l3 8 4-16 3 8h4',
    trust: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z',
    settings: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 13a7.8 7.8 0 000-2l2-1.6-2-3.4-2.4 1a7.8 7.8 0 00-1.7-1l-.4-2.6h-4l-.4 2.6a7.8 7.8 0 00-1.7 1l-2.4-1-2 3.4L4.6 11a7.8 7.8 0 000 2l-2 1.6 2 3.4 2.4-1a7.8 7.8 0 001.7 1l.4 2.6h4l.4-2.6a7.8 7.8 0 001.7-1l2.4 1 2-3.4L19.4 13z',
    search: 'M21 21l-4.3-4.3M11 19a8 8 0 100-16 8 8 0 000 16z',
    bell: 'M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0',
    plus: 'M12 5v14M5 12h14',
    check: 'M20 6L9 17l-5-5',
    arrow: 'M5 12h14M13 6l6 6-6 6',
    dollar: 'M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6',
    up: 'M12 19V5M5 12l7-7 7 7',
    down: 'M12 5v14M5 12l7 7 7-7',
    export: 'M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3',
    graph: 'M5 9a2 2 0 100-4 2 2 0 000 4zM19 9a2 2 0 100-4 2 2 0 000 4zM12 21a2 2 0 100-4 2 2 0 000 4zM6.5 7.5l4 8M17.5 7.5l-4 8',
    doc: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zM14 2v6h6',
    bolt: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
    box: 'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8',
    shield: 'M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z',
    list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
    target: 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 18a6 6 0 100-12 6 6 0 000 12zM12 14a2 2 0 100-4 2 2 0 000 4z',
    play: 'M5 3l14 9-14 9V3z',
    x: 'M18 6L6 18M6 6l12 12',
    grid: 'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z',
    user: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z',
    link: 'M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1.5 1.5M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1.5-1.5',
    alert: 'M12 9v4M12 17h.01M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z',
    eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7zM12 15a3 3 0 100-6 3 3 0 000 6z',
    money: 'M2 7h20v10H2zM12 15a3 3 0 100-6 3 3 0 000 6z',
    flag: 'M4 22V4s2-2 6-2 6 2 6 2v12s-2 2-6 2-6-2-6-2',
    book: 'M4 19.5A2.5 2.5 0 016.5 17H20M4 4.5A2.5 2.5 0 016.5 2H20v15H6.5A2.5 2.5 0 004 19.5z',
    drag: 'M9 5h.01M9 12h.01M9 19h.01M15 5h.01M15 12h.01M15 19h.01',
    sliders: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6',
    clock: 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2',
    menu: 'M3 12h18M3 6h18M3 18h18',
  };
  function icon(name, cls) {
    return `<svg class="ico ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${I[name] || ''}"/></svg>`;
  }

  /* ───────────────────────── Tiny DOM helpers ───────────────────────── */
  const $ = (s, r = document) => r.querySelector(s);
  const app = () => $('#app');
  const fmt$ = (m) => '$' + (m >= 1 ? m.toLocaleString(undefined, { maximumFractionDigits: 1 }) + 'M' : (m * 1000).toFixed(0) + 'k');
  const fmtK = (k) => '$' + (k >= 1000 ? (k / 1000).toFixed(1) + 'M' : k + 'k');

  function toast(msg) {
    let w = $('.toast-wrap');
    if (!w) { w = document.createElement('div'); w.className = 'toast-wrap'; document.body.appendChild(w); }
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = icon('check') + msg;
    w.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 320); }, 2600);
  }

  /* drawer + modal singletons */
  function openDrawer(title, sub, bodyHTML, footHTML) {
    closeOverlays();
    const scrim = document.createElement('div'); scrim.className = 'scrim';
    const d = document.createElement('div'); d.className = 'drawer';
    d.innerHTML = `<div class="drawer__head"><div><div class="eyebrow">${sub || ''}</div><h2>${title}</h2></div><button class="x-btn" data-close>${icon('x')}</button></div>
      <div class="drawer__body">${bodyHTML}</div>${footHTML ? `<div class="drawer__foot">${footHTML}</div>` : ''}`;
    document.body.append(scrim, d);
    requestAnimationFrame(() => { scrim.classList.add('open'); d.classList.add('open'); });
    scrim.addEventListener('click', closeOverlays);
    d.querySelector('[data-close]').addEventListener('click', closeOverlays);
    return d;
  }
  function openModal(title, bodyHTML, footHTML) {
    closeOverlays();
    const wrap = document.createElement('div'); wrap.className = 'modal-wrap';
    wrap.innerHTML = `<div class="modal"><div class="modal__head flex between center"><h2>${title}</h2><button class="x-btn" data-close>${icon('x')}</button></div><div class="modal__body">${bodyHTML}</div>${footHTML ? `<div class="modal__foot">${footHTML}</div>` : ''}</div>`;
    document.body.append(wrap);
    requestAnimationFrame(() => wrap.classList.add('open'));
    wrap.addEventListener('click', e => { if (e.target === wrap) closeOverlays(); });
    wrap.querySelector('[data-close]').addEventListener('click', closeOverlays);
    return wrap;
  }
  function closeOverlays() {
    document.querySelectorAll('.drawer, .scrim, .modal-wrap').forEach(n => {
      n.classList.remove('open');
      setTimeout(() => n.remove(), 240);
    });
  }

  /* ───────────────────────── Charts ───────────────────────── */
  function lineChart(trend, w = 640, h = 240) {
    const pad = { l: 40, r: 16, t: 16, b: 28 };
    const max = 16, n = trend.labels.length;
    const xs = i => pad.l + (i / (n - 1)) * (w - pad.l - pad.r);
    const ys = v => h - pad.b - (v / max) * (h - pad.t - pad.b);
    const path = arr => arr.map((v, i) => `${i ? 'L' : 'M'}${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');
    const area = arr => path(arr) + ` L${xs(n - 1)},${ys(0)} L${xs(0)},${ys(0)} Z`;
    let grid = '';
    for (let g = 0; g <= 16; g += 4) grid += `<line x1="${pad.l}" x2="${w - pad.r}" y1="${ys(g)}" y2="${ys(g)}" stroke="#EFF2F6"/><text x="${pad.l - 8}" y="${ys(g) + 3}" text-anchor="end" font-size="10" fill="#94A3B8">$${g}M</text>`;
    let xlab = trend.labels.map((l, i) => `<text x="${xs(i)}" y="${h - 8}" text-anchor="middle" font-size="10" fill="#94A3B8">${l}</text>`).join('');
    return `<svg class="chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
      ${grid}${xlab}
      <defs><linearGradient id="lg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#14B8A6" stop-opacity=".22"/><stop offset="1" stop-color="#14B8A6" stop-opacity="0"/></linearGradient></defs>
      <path d="${area(trend.realized)}" fill="url(#lg)"/>
      <path d="${path(trend.projected)}" fill="none" stroke="#94A3B8" stroke-width="2" stroke-dasharray="5 4"/>
      <path d="${path(trend.realized)}" fill="none" stroke="#0F6E6E" stroke-width="2.5"/>
      ${trend.realized.map((v, i) => `<circle cx="${xs(i)}" cy="${ys(v)}" r="2.6" fill="#0F6E6E"/>`).join('')}
    </svg>
    <div class="legend"><span><i style="background:#0F6E6E"></i>Verified value realized</span><span><i style="background:#94A3B8"></i>Projected</span></div>`;
  }

  function barChart(items, w = 640, h = 230) {
    const pad = { l: 40, r: 12, t: 12, b: 52 };
    const max = Math.max(...items.map(i => i.v)) * 1.1;
    const bw = (w - pad.l - pad.r) / items.length;
    const ys = v => h - pad.b - (v / max) * (h - pad.t - pad.b);
    let grid = '';
    for (let g = 0; g <= max; g += Math.ceil(max / 4)) grid += `<line x1="${pad.l}" x2="${w - pad.r}" y1="${ys(g)}" y2="${ys(g)}" stroke="#EFF2F6"/><text x="${pad.l - 8}" y="${ys(g) + 3}" text-anchor="end" font-size="10" fill="#94A3B8">$${g}M</text>`;
    const bars = items.map((it, i) => {
      const x = pad.l + i * bw + bw * 0.18, bWidth = bw * 0.64, y = ys(it.v);
      return `<rect x="${x}" y="${y}" width="${bWidth}" height="${h - pad.b - y}" rx="5" fill="${it.c || '#0F6E6E'}"/>
        <text x="${x + bWidth / 2}" y="${y - 6}" text-anchor="middle" font-size="11" font-weight="700" fill="#0F172A">$${it.v}M</text>
        <text x="${x + bWidth / 2}" y="${h - 34}" text-anchor="middle" font-size="10.5" fill="#475569">${it.label}</text>
        ${it.sub ? `<text x="${x + bWidth / 2}" y="${h - 20}" text-anchor="middle" font-size="9.5" fill="#94A3B8">${it.sub}</text>` : ''}`;
    }).join('');
    return `<svg class="chart" viewBox="0 0 ${w} ${h}">${grid}${bars}</svg>`;
  }

  function miniSpark(arr, color = '#0F6E6E', w = 120, h = 34) {
    const max = Math.max(...arr), min = Math.min(...arr);
    const xs = i => (i / (arr.length - 1)) * w;
    const ys = v => h - 3 - ((v - min) / (max - min || 1)) * (h - 6);
    const p = arr.map((v, i) => `${i ? 'L' : 'M'}${xs(i).toFixed(1)},${ys(v).toFixed(1)}`).join(' ');
    return `<svg class="spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><path d="${p}" fill="none" stroke="${color}" stroke-width="2"/></svg>`;
  }

  function matrix(w = 640, h = 460) {
    const pad = 46;
    const qx = pad + (w - 2 * pad) / 2, qy = pad + (h - 2 * pad) / 2;
    const sx = v => pad + (v / 100) * (w - 2 * pad);
    const sy = v => (h - pad) - (v / 100) * (h - 2 * pad);
    const qColor = { 'Quick Wins': '#16A34A', 'Big Bets': '#7C3AED', 'Fill-ins': '#0EA5E9', 'Avoid': '#94A3B8' };
    const bubbles = DB.useCases.map(uc => {
      const x = sx(DB.viabilityScore(uc)), y = sy(DB.valueScore(uc));
      const r = 9 + Math.sqrt(uc.impact) * 7;
      const c = qColor[uc.quadrant] || '#0F6E6E';
      return `<g class="bubble" data-uc="${uc.id}"><circle cx="${x}" cy="${y}" r="${r}" fill="${c}" fill-opacity=".2" stroke="${c}" stroke-width="2"/>
        <circle cx="${x}" cy="${y}" r="3" fill="${c}"/>
        <text x="${x}" y="${y - r - 6}" text-anchor="middle" font-size="10.5" font-weight="600" fill="#0F172A">${uc.name}</text>
        <text x="${x}" y="${y - r - 6 + 13}" text-anchor="middle" font-size="9.5" fill="#64748B">${fmt$(uc.impact)}</text></g>`;
    }).join('');
    return `<svg class="chart" viewBox="0 0 ${w} ${h}">
      <rect x="${pad}" y="${pad}" width="${w - 2 * pad}" height="${h - 2 * pad}" fill="none"/>
      <rect x="${pad}" y="${pad}" width="${qx - pad}" height="${qy - pad}" fill="#7C3AED" fill-opacity=".03"/>
      <rect x="${qx}" y="${pad}" width="${w - pad - qx}" height="${qy - pad}" fill="#16A34A" fill-opacity=".04"/>
      <rect x="${pad}" y="${qy}" width="${qx - pad}" height="${h - pad - qy}" fill="#94A3B8" fill-opacity=".05"/>
      <rect x="${qx}" y="${qy}" width="${w - pad - qx}" height="${h - pad - qy}" fill="#0EA5E9" fill-opacity=".03"/>
      <line x1="${qx}" y1="${pad}" x2="${qx}" y2="${h - pad}" stroke="#E2E8F0" stroke-dasharray="4 4"/>
      <line x1="${pad}" y1="${qy}" x2="${w - pad}" y2="${qy}" stroke="#E2E8F0" stroke-dasharray="4 4"/>
      <text x="${pad + 8}" y="${pad + 16}" class="matrix-quadlbl" style="fill:#7C3AED">Big Bets</text>
      <text x="${w - pad - 8}" y="${pad + 16}" text-anchor="end" class="matrix-quadlbl" style="fill:#16A34A">Quick Wins</text>
      <text x="${pad + 8}" y="${h - pad - 8}" class="matrix-quadlbl">Avoid</text>
      <text x="${w - pad - 8}" y="${h - pad - 8}" text-anchor="end" class="matrix-quadlbl" style="fill:#0EA5E9">Fill-ins</text>
      <text x="${w / 2}" y="${h - 10}" text-anchor="middle" font-size="11" font-weight="600" fill="#475569">Viability →</text>
      <text x="14" y="${h / 2}" text-anchor="middle" font-size="11" font-weight="600" fill="#475569" transform="rotate(-90 14 ${h / 2})">Value →</text>
      ${bubbles}
    </svg>`;
  }

  function knowledgeGraph(w = 640, h = 440) {
    const g = DB.graph;
    const kindColor = { dept: '#0F6E6E', system: '#2563EB', reg: '#DC2626', wf: '#7C3AED' };
    const px = n => 30 + n.x * (w - 60), py = n => 24 + n.y * (h - 48);
    const byId = id => g.nodes.find(n => n.id === id);
    const edges = g.edges.map(([a, b]) => {
      const na = byId(a), nb = byId(b);
      return `<line x1="${px(na)}" y1="${py(na)}" x2="${px(nb)}" y2="${py(nb)}" stroke="#CBD5E1" stroke-width="1.4"/>`;
    }).join('');
    const nodes = g.nodes.map(n => {
      const c = kindColor[n.kind];
      return `<g class="kg-node" data-node="${n.id}"><circle cx="${px(n)}" cy="${py(n)}" r="11" fill="#fff" stroke="${c}" stroke-width="2.2"/>
        <circle cx="${px(n)}" cy="${py(n)}" r="4" fill="${c}"/>
        <text x="${px(n)}" y="${py(n) - 16}" text-anchor="middle">${n.label}</text></g>`;
    }).join('');
    return `<svg class="chart" viewBox="0 0 ${w} ${h}">${edges}${nodes}</svg>
      <div class="legend"><span><i style="background:#0F6E6E"></i>Department</span><span><i style="background:#2563EB"></i>System</span><span><i style="background:#DC2626"></i>Regulation</span><span><i style="background:#7C3AED"></i>Workflow</span></div>`;
  }

  /* ───────────────────────── App shell ───────────────────────── */
  const NAV = [
    { key: '', icon: 'dashboard', label: 'Dashboard', route: '/' },
    { key: 'atlas', icon: 'atlas', label: 'Atlas', route: '/atlas', subs: [['Connections', '/atlas'], ['Knowledge Graph', '/atlas/graph'], ['SOPs', '/atlas/sops']] },
    { key: 'compass', icon: 'compass', label: 'Compass', route: '/compass/usecases', subs: [['Objectives', '/compass/objectives'], ['Use Cases', '/compass/usecases'], ['Matrix', '/compass/matrix']] },
    { key: 'forge', icon: 'forge', label: 'Forge', route: '/forge', subs: [['Agent Builder', '/forge'], ['Sandbox', '/forge/sandbox']] },
    { key: 'fleet', icon: 'fleet', label: 'Fleet', route: '/fleet/marketplace', subs: [['Marketplace', '/fleet/marketplace'], ['Deployments', '/fleet/deployments']] },
    { key: 'pulse', icon: 'pulse', label: 'Pulse', route: '/pulse', subs: [['Portfolio', '/pulse'], ['Reconciliation', '/pulse/reconciliation/auto-coding']] },
    { key: 'trust', icon: 'trust', label: 'Trust Center', route: '/trust', subs: [['Compliance', '/trust'], ['Audit Log', '/trust/audit'], ['Model Risk', '/trust/model-risk'], ['HITL Queue', '/trust/hitl']] },
    { key: 'settings', icon: 'settings', label: 'Settings', route: '/settings/org', subs: [['Organization', '/settings/org'], ['Users & Roles', '/settings/users'], ['Integrations', '/settings/integrations'], ['Billing', '/settings/billing']] },
  ];

  function shell(content, activeKey, activeSub) {
    const nav = NAV.map(n => {
      const active = n.key === activeKey;
      const subs = (active && n.subs) ? `<div class="nav-sub">${n.subs.map(([l, r]) => `<a href="#${r}" class="${activeSub === r ? 'active' : ''}">${l}</a>`).join('')}</div>` : '';
      return `<div class="nav-group"><div class="nav-item ${active ? 'active' : ''}" data-route="${n.route}">${icon(n.icon)}<span>${n.label}</span></div>${subs}</div>`;
    }).join('');
    return `<div class="app">
      <div class="sidebar-scrim" id="sidebar-scrim"></div>
      <aside class="sidebar" id="sidebar">
        <div class="sidebar__brand">${brandMark(26)}<span>Caliber</span><button class="iconbtn sidebar__close" id="sidebar-close" title="Close menu">${icon('x')}</button></div>
        <nav class="sidebar__nav">${nav}</nav>
        <div class="sidebar__foot">Open AI value platform<br><b>Verity Health System</b> · Strategic tier</div>
      </aside>
      <div class="main">
        <header class="topbar">
          <button class="iconbtn menu-btn" id="menu-toggle" title="Menu" aria-label="Open menu">${icon('menu')}</button>
          <button class="orgswitch"><span class="logo">VH</span><span class="orgswitch__name">Verity Health System</span> ▾</button>
          <div class="topbar__search">${icon('search')}<input placeholder="Search use cases, agents, reports…"></div>
          <div class="topbar__spacer"></div>
          <button class="iconbtn" title="Notifications">${icon('bell')}<span class="badge-dot"></span></button>
          <div class="avatar" title="Dana Whitfield · Chief AI Officer">DW</div>
        </header>
        <main class="content fade-in">${content}</main>
      </div>
    </div>`;
  }

  function brandMark(s = 26) {
    return `<svg width="${s}" height="${s}" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#14B8A6"/><path d="M16 6a10 10 0 100 20" stroke="#06302C" stroke-width="2.6" stroke-linecap="round"/><circle cx="16" cy="16" r="3.2" fill="#06302C"/></svg>`;
  }

  function pageHead(title, lead, actions, crumb) {
    return `<div class="page-head"><div>${crumb ? `<div class="breadcrumb">${crumb}</div>` : ''}<h1>${title}</h1>${lead ? `<div class="lead">${lead}</div>` : ''}</div>${actions ? `<div class="flex gap-8 wrap">${actions}</div>` : ''}</div>`;
  }

  function tabs(items, current) {
    return `<div class="tabs">${items.map(([l, r]) => `<a class="tab ${r === current ? 'active' : ''}" href="#${r}">${l}</a>`).join('')}</div>`;
  }

  function statusPill(s) {
    const map = {
      Approved: 'success', Scored: 'info', Intake: 'neutral', Parked: 'warning', Rejected: 'danger',
      Deployed: 'accent', Scaling: 'violet', Live: 'success', Canary: 'warning', Paused: 'neutral',
      Healthy: 'success', Watch: 'warning', synced: 'success',
    };
    return `<span class="pill pill--${map[s] || 'neutral'}"><span class="pdot"></span>${s}</span>`;
  }

  /* ═══════════════════════════════════════════════════════════════════
     VIEWS
     ═══════════════════════════════════════════════════════════════════ */

  function vLogin() {
    return `<div class="login">
      <div class="login__panel">
        <div class="login__brand">${brandMark(30)}<span style="font-size:20px;font-weight:600;letter-spacing:-.01em">Caliber</span></div>
        <div class="login__card">
          <h1>Sign in</h1>
          <p class="sub">Open AI value for healthcare — owned by you, trusted by your CFO.</p>
          <button class="btn btn--primary btn--block" id="sso-btn" style="padding:11px;font-size:14px">${icon('shield')} Sign in with SSO</button>
          <div class="login__divider">or continue with email</div>
          <div class="field mb-16"><label>Work email</label><input class="input" value="dana@verityhealth.org"></div>
          <div class="field mb-16"><label>Password</label><input class="input" type="password" value="••••••••••"></div>
          <button class="btn btn--block" id="email-btn">Sign in</button>
          <p class="small muted" style="margin-top:18px;text-align:center">HIPAA · HITRUST · SOC 2 Type II</p>
        </div>
      </div>
      <div class="login__aside"><div class="login__aside-inner">
        <div class="eyebrow">Caliber</div>
        <h2>Turn AI ambition into verified, finance-grade returns.</h2>
        <p style="color:rgba(255,255,255,.8);margin-bottom:28px">Decide which AI to build, ship it in weeks, and prove the dollars in real time — on an open, auditable framework you own.</p>
        <div class="login__pillars">
          ${[['Open', 'Transparent, customer-owned value scoring — no black box.'],
            ['Fast', 'Marketplace of pre-validated agents — first value in weeks.'],
            ['Governed', 'HIPAA/HITRUST, model-risk & human-in-the-loop, first-class.'],
            ['Guaranteed', 'Outcome-linked pricing — our revenue at risk against your savings.']]
            .map(([b, s]) => `<div class="login__pillar"><span class="dot"></span><div><b>${b}</b><span>${s}</span></div></div>`).join('')}
        </div>
      </div></div>
    </div>`;
  }
  function bindLogin() {
    $('#sso-btn') && $('#sso-btn').addEventListener('click', () => location.hash = '/');
    $('#email-btn') && $('#email-btn').addEventListener('click', () => location.hash = '/');
  }

  /* ── Dashboard ── */
  function vDashboard() {
    const kpis = [
      { label: 'Verified Value Realized', icon: 'dollar', value: '$12.4M', delta: '+18% vs last Q', dir: 'up', spark: [7, 8.1, 9.2, 10.3, 11.5, 12.4] },
      { label: 'Projected Pipeline Value', icon: 'target', value: '$41M', delta: '58 use cases', dir: 'flat', spark: [30, 33, 36, 38, 40, 41] },
      { label: 'Active Agents', icon: 'box', value: '23', delta: '+4 this month', dir: 'up', spark: [16, 18, 19, 21, 22, 23] },
      { label: 'Use Cases in Backlog', icon: 'list', value: '58', delta: '12 awaiting score', dir: 'flat', spark: [40, 44, 49, 52, 55, 58] },
    ];
    const kpiCards = kpis.map(k => `<div class="kpi">
      <div class="kpi__label">${icon(k.icon)} ${k.label}</div>
      <div class="kpi__value">${k.value}</div>
      <div class="kpi__delta ${k.dir}">${k.dir === 'up' ? '▲' : k.dir === 'down' ? '▼' : '•'} ${k.delta}</div>
      <div class="kpi__spark">${miniSpark(k.spark, '#14B8A6', 96, 34)}</div>
    </div>`).join('');

    const funMax = Math.max(...DB.funnel.map(f => f.value));
    const fun = DB.funnel.map(f => `<div class="funnel__row"><span class="funnel__lbl">${f.label}</span><div class="funnel__bar" style="width:${(f.value / funMax) * 100}%">${f.value}</div></div>`).join('');

    // First row is the demo entry point: a high-scoring use case ready for a decision
    // (PRD §11 step 2 → click "Prior Auth Automation" → use-case detail).
    const pa = DB.ucById('prior-auth');
    const paRow = `<tr class="clickable" data-route="/compass/usecases/prior-auth">
        <td class="strong">${pa.name}</td><td><span class="pill pill--info"><span class="pdot"></span>Ready to approve</span></td>
        <td class="right num">—</td><td class="right num">${fmt$(pa.impact)}</td>
        <td class="right num strong" style="color:var(--accent)">Quick Win</td>
        <td class="right"><span class="btn btn--sm btn--ghost">Review ${icon('arrow')}</span></td></tr>`;
    const attRows = paRow + [DB.initById('eligibility'), DB.initById('auto-coding')].map(i => {
      const flag = i.flag === 'drifting' ? statusPill('Watch') : `<span class="pill pill--success"><span class="pdot"></span>On track</span>`;
      const pct = Math.round(i.actual.ret / i.projected.ret * 100);
      return `<tr class="clickable" data-route="/pulse/initiative/${i.id}">
        <td class="strong">${i.name}</td><td>${flag}</td>
        <td class="right num">${fmtK(i.actual.ret)}</td><td class="right num">${fmtK(i.projected.ret)}</td>
        <td class="right num ${pct < 90 ? '' : 'strong'}" style="${pct < 90 ? 'color:var(--danger)' : ''}">${pct}%</td>
        <td class="right"><span class="btn btn--sm btn--ghost">View ${icon('arrow')}</span></td></tr>`;
    }).join('');

    return shell(`
      ${pageHead('Executive Dashboard', 'Is our AI working? The whole portfolio, at a glance.', `<button class="btn" data-route="/compass/usecases/new">${icon('plus')} Submit a use case</button><button class="btn btn--primary" data-route="/fleet/marketplace">${icon('grid')} Browse marketplace</button>`)}
      <div class="banner">${icon('check')}<div><b>You're 88% to plan this quarter.</b> $12.4M of $14.1M projected value verified. One initiative is drifting — review it below.</div></div>
      <div class="grid grid--kpi mb-24" data-clickkpi>${kpiCards}</div>
      <div class="grid grid--2 mb-24">
        <div class="card col-2"><div class="card__head"><h3>Value realized vs. projected</h3><span class="sub">Last 12 months</span></div><div class="card__body">${lineChart(DB.valueTrend)}</div></div>
      </div>
      <div class="grid grid--2">
        <div class="card"><div class="card__head"><h3>Portfolio by stage</h3><span class="sub">Lifecycle funnel</span></div><div class="card__body"><div class="funnel">${fun}</div></div></div>
        <div class="card"><div class="card__head"><h3>Initiatives needing attention</h3><a class="small" href="#/pulse">View all ›</a></div><div class="card__body" style="padding:6px 0">
          <div class="table-wrap"><table class="tbl"><thead><tr><th>Initiative</th><th>Status</th><th class="right">Actual</th><th class="right">Projected</th><th class="right">To plan</th><th></th></tr></thead><tbody>${attRows}</tbody></table></div>
        </div></div>
      </div>
      ${protoNote()}
    `, '', '/');
  }

  /* ── Atlas ── */
  function vAtlasConnections() {
    const statusCell = c => {
      if (c.status === 'synced') return `<td>${statusPill('synced')}</td><td class="num muted">${c.last}</td><td class="num">${c.records}</td><td class="right"><button class="btn btn--sm btn--ghost">Manage</button></td>`;
      if (c.status === 'auth') return `<td><span class="pill pill--warning"><span class="pdot"></span>Needs auth</span></td><td class="muted">—</td><td>—</td><td class="right"><button class="btn btn--sm btn--primary">Reconnect</button></td>`;
      return `<td><span class="pill pill--neutral">Not connected</span></td><td class="muted">—</td><td>—</td><td class="right"><button class="btn btn--sm">${icon('plus')} Add</button></td>`;
    };
    const rows = DB.connections.map(c => `<tr><td class="strong">${c.name}</td><td class="muted">${c.type}</td>${statusCell(c)}</tr>`).join('');
    return shell(`
      ${pageHead('Atlas', 'Connect data, regulations & institutional knowledge into your org\'s open context layer.', `<button class="btn btn--primary" id="add-conn">${icon('plus')} Add connection</button>`)}
      ${tabs([['Connections', '/atlas'], ['Knowledge Graph', '/atlas/graph'], ['SOPs', '/atlas/sops']], '/atlas')}
      <div class="banner banner--info">${icon('link')}<div><b>No-ETL, FHIR/OMOP-native.</b> Open connectors with full data lineage and one-click export — your ontology is portable and yours to keep.</div></div>
      <div class="card"><div class="card__head"><h3>Connected systems</h3><span class="sub">${DB.connections.filter(c => c.status === 'synced').length} active · 16.6M records indexed</span></div>
        <div class="table-wrap"><table class="tbl"><thead><tr><th>System</th><th>Type</th><th>Status</th><th>Last sync</th><th>Records</th><th></th></tr></thead><tbody>${rows}</tbody></table></div>
      </div>${protoNote()}`, 'atlas', '/atlas');
  }
  function bindAtlasConnections() {
    const b = $('#add-conn');
    b && b.addEventListener('click', () => {
      const grid = ['Epic', 'Cerner', 'Snowflake', 'Databricks', 'ServiceNow', 'SharePoint', 'Salesforce', 'Workday', 'Box'].map(n =>
        `<div class="palette-item" style="cursor:pointer">${icon('link')}<span>${n}</span></div>`).join('');
      openModal('Add a connection', `<p class="muted mb-16">Choose a system to connect. Caliber uses open standards (FHIR R4, X12, OMOP) — no custom ETL required.</p><div class="grid grid--conn">${grid}</div>`,
        `<button class="btn" data-close>Cancel</button><button class="btn btn--primary" id="conn-go">Connect</button>`);
      $('#conn-go').addEventListener('click', () => { closeOverlays(); toast('Connection initiated — OAuth handshake started'); });
    });
  }

  function vAtlasGraph() {
    return shell(`
      ${pageHead('Atlas', 'Knowledge Graph', `<button class="btn" id="export-graph">${icon('export')} Export graph</button>`)}
      ${tabs([['Connections', '/atlas'], ['Knowledge Graph', '/atlas/graph'], ['SOPs', '/atlas/sops']], '/atlas/graph')}
      <div class="card"><div class="card__head"><h3>Organizational knowledge graph</h3><span class="sub">10 entities · 13 relationships · click a node for lineage</span></div>
        <div class="card__body">${knowledgeGraph()}</div></div>${protoNote()}`, 'atlas', '/atlas/graph');
  }
  function bindAtlasGraph() {
    $('#export-graph') && $('#export-graph').addEventListener('click', () => toast('Graph + ontology exported (JSON-LD) — portability is a pillar'));
    document.querySelectorAll('.kg-node').forEach(n => n.addEventListener('click', () => {
      const node = DB.graph.nodes.find(x => x.id === n.dataset.node);
      const linked = DB.useCases.filter(u => u.dataNeeded.some(d => node.label.split(' ')[0] && d.toLowerCase().includes(node.label.split(' ')[0].toLowerCase()))).map(u => u.name);
      openDrawer(node.label, node.kind === 'dept' ? 'Department' : node.kind === 'system' ? 'System' : node.kind === 'reg' ? 'Regulation' : 'Workflow', `
        <p class="muted mb-16">This node is part of Verity Health's context layer. Lineage and provenance are tracked for every connected entity.</p>
        <dl class="kvs mb-24"><dt>Type</dt><dd>${node.kind}</dd><dt>Source</dt><dd>${node.kind === 'system' ? 'Live connector' : 'Derived'}</dd><dt>Last updated</dt><dd>2h ago</dd><dt>Provenance</dt><dd>Verified ✓</dd></dl>
        <h3 style="font-size:13px;margin-bottom:8px">Linked use cases</h3>
        ${linked.length ? linked.map(l => `<div class="tag" style="margin:0 6px 6px 0">${l}</div>`).join('') : '<p class="small muted">No linked use cases yet.</p>'}`,
        `<button class="btn" data-close>Close</button><button class="btn btn--primary">${icon('export')} Export lineage</button>`);
    }));
  }

  function vAtlasSops() {
    const rows = DB.sops.map(s => `<tr><td class="strong">${s.name} <span class="tag">${s.ver}</span></td><td class="muted">${s.dept}</td><td class="num">${s.steps} steps</td><td class="muted">${s.updated}</td>
      <td class="right"><button class="btn btn--sm btn--primary" data-route="/forge">${icon('forge')} Generate agent</button></td></tr>`).join('');
    return shell(`
      ${pageHead('Atlas', 'SOP Library', `<button class="btn" id="upload-sop">${icon('plus')} Upload SOP</button>`)}
      ${tabs([['Connections', '/atlas'], ['Knowledge Graph', '/atlas/graph'], ['SOPs', '/atlas/sops']], '/atlas/sops')}
      <div class="card"><div class="card__head"><h3>Ingested SOPs & workflows</h3><span class="sub">Auto-parsed into structured steps · synced from Confluence</span></div>
        <div class="table-wrap"><table class="tbl"><thead><tr><th>Document</th><th>Department</th><th>Parsed</th><th>Updated</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></div>${protoNote()}`, 'atlas', '/atlas/sops');
  }
  function bindAtlasSops() {
    $('#upload-sop') && $('#upload-sop').addEventListener('click', () => { toast('SOP uploaded — parsing into structured workflow…'); });
  }

  /* ── Compass ── */
  function vCompassObjectives() {
    const rows = DB.objectives.map(o => `<div class="obj-row" data-obj="${o.id}">
      <span class="grip">${icon('drag')}</span><span class="obj-name">${o.name}</span>
      <input type="range" min="0" max="50" value="${o.weight}" data-w="${o.id}"><span class="wt"><span data-wt="${o.id}">${o.weight}</span>%</span></div>`).join('');
    return shell(`
      ${pageHead('Compass · True North', 'Define and rank enterprise objectives. These weights drive every Value score — transparently.', `<button class="btn btn--primary" id="save-obj">${icon('check')} Save weights</button>`)}
      ${tabs([['Objectives', '/compass/objectives'], ['Use Cases', '/compass/usecases'], ['Matrix', '/compass/matrix']], '/compass/objectives')}
      <div class="card"><div class="card__head"><h3>Enterprise objectives</h3><span class="sub" id="wt-total">Total weight: ${DB.objectives.reduce((s, o) => s + o.weight, 0)}%</span></div>
        <div class="card__body">${rows}<p class="small muted mt-16">Drag to reorder priority. Adjusting a weight instantly re-scores the Value axis for all use cases — and every change is written to the audit log.</p></div></div>${protoNote()}`, 'compass', '/compass/objectives');
  }
  function bindCompassObjectives() {
    document.querySelectorAll('[data-w]').forEach(s => s.addEventListener('input', e => {
      $(`[data-wt="${e.target.dataset.w}"]`).textContent = e.target.value;
      const obj = DB.objectives.find(o => o.id === e.target.dataset.w); obj.weight = +e.target.value;
      $('#wt-total').textContent = 'Total weight: ' + DB.objectives.reduce((a, o) => a + o.weight, 0) + '%';
    }));
    $('#save-obj') && $('#save-obj').addEventListener('click', () => toast('True North weights saved & re-scored · logged to audit trail'));
  }

  function vCompassUseCases() {
    const rows = DB.useCases.map(uc => `<tr class="clickable" data-route="/compass/usecases/${uc.id}">
      <td class="strong">${uc.name}</td><td class="muted">${uc.dept}</td>
      <td class="num">${score(DB.valueScore(uc))}</td><td class="num">${score(DB.viabilityScore(uc))}</td>
      <td class="right num strong">${fmt$(uc.impact)}</td><td>${statusPill(uc.status)}</td><td class="muted">${uc.owner}</td></tr>`).join('');
    return shell(`
      ${pageHead('Compass', 'Crowdsource, score, and prioritize AI use cases on an open, customer-owned rubric.', `<button class="btn btn--primary" data-route="/compass/usecases/new">${icon('plus')} Submit use case</button>`)}
      ${tabs([['Objectives', '/compass/objectives'], ['Use Cases', '/compass/usecases'], ['Matrix', '/compass/matrix']], '/compass/usecases')}
      <div class="card"><div class="card__head">
        <div class="flex gap-8 wrap">
          <select class="select" style="width:auto"><option>All departments</option><option>Revenue Cycle</option><option>Clinical</option><option>Population Health</option></select>
          <select class="select" style="width:auto"><option>All stages</option><option>Intake</option><option>Scored</option><option>Approved</option><option>Deployed</option></select>
          <select class="select" style="width:auto"><option>All statuses</option><option>Approved</option><option>Parked</option><option>Rejected</option></select>
        </div>
        <span class="sub">${DB.useCases.length} use cases</span></div>
        <div class="table-wrap"><table class="tbl"><thead><tr><th>Use case</th><th>Department</th><th>Value</th><th>Viability</th><th class="right">$ impact</th><th>Status</th><th>Owner</th></tr></thead><tbody>${rows}</tbody></table></div></div>${protoNote()}`, 'compass', '/compass/usecases');
  }
  function score(n) {
    const c = n >= 75 ? 'var(--success)' : n >= 55 ? 'var(--warning)' : 'var(--slate-400)';
    return `<span style="font-weight:700;color:${c}">${n}</span>`;
  }

  function vCompassMatrix() {
    return shell(`
      ${pageHead('Compass · Value & Viability Matrix', 'Open scoring you can inspect and reproduce. Bubble size = $ impact. Click any bubble for the transparent scorecard.')}
      ${tabs([['Objectives', '/compass/objectives'], ['Use Cases', '/compass/usecases'], ['Matrix', '/compass/matrix']], '/compass/matrix')}
      <div class="card"><div class="card__body">${matrix()}
        <div class="legend"><span><i style="background:#16A34A"></i>Quick Wins</span><span><i style="background:#7C3AED"></i>Big Bets</span><span><i style="background:#0EA5E9"></i>Fill-ins</span><span><i style="background:#94A3B8"></i>Avoid</span></div></div></div>${protoNote()}`, 'compass', '/compass/matrix');
  }
  function bindCompassMatrix() {
    document.querySelectorAll('.bubble').forEach(b => b.addEventListener('click', () => location.hash = '/compass/usecases/' + b.dataset.uc));
  }

  function vUseCaseNew() {
    return shell(`
      ${pageHead('Submit a use case', 'Anyone in the org can propose an AI idea. It\'s auto-scored on the open rubric and lands in the backlog.', '', '<a href="#/compass/usecases">Compass</a> / New')}
      <div class="card" style="max-width:760px"><div class="card__body">
        <div class="grid grid--2">
          <div class="field col-2"><label>Title</label><input class="input" placeholder="e.g., Automate prior-auth intake"></div>
          <div class="field col-2"><label>Problem statement</label><textarea class="input" placeholder="What's broken today, and who feels the pain?"></textarea></div>
          <div class="field"><label>Department</label><select class="select"><option>Revenue Cycle</option><option>Clinical</option><option>Population Health</option><option>Member Services</option><option>HIM / Coding</option></select></div>
          <div class="field"><label>Expected $ benefit / yr</label><input class="input" placeholder="$2.5M"></div>
          <div class="field col-2"><label>Qualitative benefit</label><input class="input" placeholder="Faster turnaround, less burnout, fewer denials…"></div>
          <div class="field col-2"><label>Data sources needed</label><input class="input" placeholder="Epic (FHIR), Claims (X12), SOPs…"></div>
        </div>
        <div class="flex gap-8 mt-24"><button class="btn btn--primary" id="submit-uc">${icon('check')} Submit & auto-score</button><button class="btn" data-route="/compass/usecases">Cancel</button></div>
      </div></div>`, 'compass', '/compass/usecases');
  }
  function bindUseCaseNew() {
    $('#submit-uc') && $('#submit-uc').addEventListener('click', () => { toast('Use case submitted & auto-scored — added to backlog'); setTimeout(() => location.hash = '/compass/usecases', 700); });
  }

  function vUseCaseDetail(id) {
    const uc = DB.ucById(id);
    if (!uc) return shell(pageHead('Not found', 'Unknown use case.'), 'compass');
    const vS = DB.valueScore(uc), viS = DB.viabilityScore(uc);
    const scoreBlock = (title, data, weights, total, axis) => `
      <div class="card mb-16"><div class="card__head"><h3>${title} <span class="sub" style="margin-left:8px">composite ${total}/100</span></h3><span class="pill pill--accent">weighted sum</span></div>
        <div class="card__body" style="padding-top:8px">
          <div class="score-line" style="border-bottom:2px solid var(--line)"><span class="sc-name small" style="color:var(--slate-400)">Sub-score</span><span class="sc-wt">weight</span><span></span><span class="sc-val small" style="color:var(--slate-400)">value</span></div>
          ${Object.entries(data).map(([k, v]) => `<div class="score-line"><span class="sc-name">${k}</span><span class="sc-wt">${weights[k]}%</span><span class="meter ${v >= 75 ? 'success' : v >= 55 ? 'warning' : 'danger'}"><span style="width:${v}%"></span></span><span class="sc-val">${v}</span></div>`).join('')}
        </div></div>`;
    const formula = axisFormula(uc);
    const approved = uc.status === 'Approved';

    return shell(`
      ${pageHead(uc.name, '', `${approved ? `<span class="pill pill--success" style="padding:8px 14px">${icon('check')} Approved</span>` : `<button class="btn btn--primary" id="approve-uc">${icon('check')} Approve</button>`}<button class="btn" id="find-agent">${icon('grid')} Find marketplace agent</button><button class="btn" data-route="/forge">${icon('forge')} Build in Forge</button>`, `<a href="#/compass/usecases">Use Cases</a> / ${uc.name}`)}
      <div class="flex gap-8 wrap mb-24">${statusPill(uc.status)}<span class="tag">${uc.dept}</span><span class="tag">Owner: ${uc.owner}</span><span class="tag">${uc.quadrant}</span></div>
      <div class="grid grid--detail">
        <div>
          <div class="card mb-16"><div class="card__body">
            <h3 style="font-size:13px;margin-bottom:6px">Problem</h3><p class="muted mb-16">${uc.problem}</p>
            <h3 style="font-size:13px;margin-bottom:6px">Expected benefit</h3><p class="muted mb-16">${uc.benefit}</p>
            <h3 style="font-size:13px;margin-bottom:8px">Data needed</h3>${uc.dataNeeded.map(d => `<span class="tag" style="margin:0 6px 6px 0">${d}</span>`).join('')}
          </div></div>
          ${scoreBlock('Value', uc.value, DB.valueWeights, vS, 'value')}
          ${scoreBlock('Viability', uc.viability, DB.viabilityWeights, viS, 'viability')}
          <div class="card"><div class="card__head"><h3>The math — shown, not hidden</h3><span class="sub">vs. Optura's proprietary ROAI™</span></div><div class="card__body">${formula}<p class="small muted mt-16">Every weight and sub-score above is editable in True North. The formula is open and reproducible — your CFO and compliance officer can both inspect it.</p></div></div>
        </div>
        <div>
          <div class="card mb-16"><div class="card__head"><h3>ROI simulation</h3><span class="sub">Monte-Carlo · 10k runs</span></div><div class="card__body">
            <div class="stat-row mb-16"><div class="stat"><b class="num">${fmtK(uc.roi.cost)}</b><span>Projected cost</span></div><div class="stat"><b class="num" style="color:var(--success)">${fmtK(uc.roi.ret)}</b><span>Annual return</span></div></div>
            <div class="stat-row mb-16"><div class="stat"><b class="num">${uc.roi.payback} mo</b><span>Payback period</span></div><div class="stat"><b class="num">±${uc.roi.conf}%</b><span>Confidence range</span></div></div>
            <div class="divider"></div>
            <div class="small muted mb-8">Return distribution (P10 · P50 · P90)</div>
            ${miniSpark([uc.roi.ret * (1 - uc.roi.conf / 100), uc.roi.ret * .92, uc.roi.ret, uc.roi.ret * 1.05, uc.roi.ret * (1 + uc.roi.conf / 100)], '#16A34A', 280, 50)}
          </div></div>
          <div class="card"><div class="card__head"><h3>Governance thread</h3></div><div class="card__body">
            <div class="audit-item" style="padding-top:0"><div class="audit-ico">${icon('user')}</div><div><b>Dana Whitfield</b> · CAIO<br><span class="muted">Strong objective alignment. Approving for Q3.</span><div class="audit-time">2h ago</div></div></div>
            <div class="audit-item"><div class="audit-ico">${icon('user')}</div><div><b>Frank Reyes</b> · CFO<br><span class="muted">Payback under 3mo and the math checks out. 👍 Approve.</span><div class="audit-time">3h ago</div></div></div>
            <div class="audit-item" style="border-bottom:none"><div class="audit-ico">${icon('shield')}</div><div><b>Omar Diallo</b> · Compliance<br><span class="muted">HITL required on denials — noted in model-risk register.</span><div class="audit-time">5h ago</div></div></div>
            <div class="flex gap-8 mt-8"><input class="input" placeholder="Add a comment…"><button class="btn btn--sm btn--primary">Post</button></div>
          </div></div>
        </div>
      </div>${protoNote()}`, 'compass', '/compass/usecases');
  }
  function axisFormula(uc) {
    const vw = DB.valueWeights;
    const parts = Object.entries(uc.value).map(([k, v]) => `<span class="hl">${(vw[k] / 100).toFixed(2)}</span>·${v}`).join(' + ');
    return `<div class="formula">Value = ${parts}<br>&nbsp;&nbsp;&nbsp;&nbsp;= <span class="hl">${DB.valueScore(uc)}</span> / 100</div>`;
  }
  function bindUseCaseDetail(id) {
    const uc = DB.ucById(id);
    $('#approve-uc') && $('#approve-uc').addEventListener('click', () => { uc.status = 'Approved'; toast('Use case approved · logged to audit trail'); render(); });
    $('#find-agent') && $('#find-agent').addEventListener('click', () => location.hash = '/fleet/marketplace');
  }

  /* ── Forge ── */
  function vForge() {
    const steps = [
      { type: 'Trigger', t: 'New prior-auth request', d: 'Webhook from Epic (FHIR)', ico: 'bolt', c: '#2563EB' },
      { type: 'Fetch data', t: 'Pull clinical context', d: 'FHIR bundle + payer rules (X12 278)', ico: 'box', c: '#0F6E6E' },
      { type: 'Decision', t: 'Meets auto-approval criteria?', d: 'Claude · clinical-tuned · guardrails on', ico: 'compass', c: '#7C3AED' },
      { type: 'Human checkpoint', t: 'Route low-confidence to nurse', d: 'HITL · threshold < 0.85', ico: 'user', c: '#F59E0B', hitl: true },
      { type: 'Action', t: 'Submit determination', d: 'Write back to Epic + notify', ico: 'check', c: '#16A34A' },
      { type: 'Output', t: 'Log to Pulse + audit', d: 'Value event + immutable record', ico: 'doc', c: '#475569' },
    ];
    const nodes = steps.map((s, i) => `${i ? '<div class="node-connector"></div>' : ''}
      <div class="node ${i === 2 ? 'sel' : ''}" data-step="${i}">
        ${s.hitl ? '<span class="pill pill--warning hitl-badge">HITL</span>' : ''}
        <div class="node__type"><span class="node__ico" style="background:${s.c}">${icon(s.ico)}</span>${s.type}</div>
        <div class="node__title">${s.t}</div><div class="node__desc">${s.d}</div></div>`).join('');
    const sources = DB.sops.map((s, i) => `<div class="src-item ${i === 0 ? 'sel' : ''}">${icon('doc')}<div><div style="font-weight:600">${s.name}</div><div class="small muted">${s.dept} · ${s.ver}</div></div></div>`).join('');
    return shell(`
      ${pageHead('Forge · Agent Builder', 'Turn an Atlas-parsed SOP into a draft agent. Drag steps, set guardrails, add human checkpoints.', `<button class="btn" data-route="/forge/sandbox">${icon('play')} Test in sandbox</button><button class="btn" id="save-ver">Save version</button><button class="btn btn--primary" id="deploy-forge">${icon('fleet')} Deploy</button>`)}
      <div class="forge-layout">
        <div><div class="card"><div class="card__head"><h3 style="font-size:13px">Source SOP</h3></div><div class="card__body" style="padding:12px">${sources}</div></div>
          <div class="card mt-16"><div class="card__head"><h3 style="font-size:13px">Add step</h3></div><div class="card__body" style="padding:12px">
            ${['Trigger', 'Fetch data', 'Decision', 'Action', 'Human checkpoint', 'Output'].map(p => `<div class="palette-item">${icon('plus')}${p}</div>`).join('')}</div></div></div>
        <div class="canvas">${nodes}</div>
        <div><div class="card"><div class="card__head"><h3 style="font-size:13px">Decision step config</h3></div><div class="card__body">
          <div class="field mb-16"><label>Model</label><select class="select"><option>Claude · clinical-tuned</option><option>Claude</option><option>Bring your own model</option></select></div>
          <div class="field mb-16"><label>Guardrails</label><div class="flex gap-8 wrap"><span class="tag">PHI redaction</span><span class="tag">No external egress</span><span class="tag">Citation grounding</span></div></div>
          <div class="field mb-16"><label>Human-in-the-loop threshold</label><input type="range" min="0" max="100" value="85" style="width:100%;accent-color:var(--primary)"><div class="small muted">Route below confidence 0.85 to a human reviewer.</div></div>
          <div class="field"><label>Inputs / outputs</label><div class="small muted">In: FHIR bundle, payer rules · Out: determination, rationale, audit event</div></div>
        </div></div></div>
      </div>${protoNote()}`, 'forge', '/forge');
  }
  function bindForge() {
    $('#deploy-forge') && $('#deploy-forge').addEventListener('click', () => deployFlow({ name: 'Prior Auth Autopilot', uc: 'prior-auth' }));
    $('#save-ver') && $('#save-ver').addEventListener('click', () => toast('Agent saved — version v0.3 · rollback available'));
    document.querySelectorAll('.node').forEach(n => n.addEventListener('click', () => { document.querySelectorAll('.node').forEach(x => x.classList.remove('sel')); n.classList.add('sel'); }));
  }

  function vSandbox() {
    const steps = [
      { t: 'Trigger fired', d: 'Received PA request #PA-88142 · MRI lumbar spine', ok: true },
      { t: 'Fetched clinical context', d: 'FHIR bundle (14 resources) + payer rule LCD-33797', ok: true },
      { t: 'Evaluated criteria', d: 'Conservative therapy documented · imaging indicated', ok: true },
      { t: 'Confidence check', d: 'Model confidence 0.91 ≥ 0.85 threshold → auto-determine', ok: true },
      { t: 'Determination', d: 'APPROVED · rationale attached · written to Epic', ok: true },
      { t: 'Logged value event', d: '+1 touchless auth · 17 min saved · audit record 0x3f…', ok: true },
    ];
    return shell(`
      ${pageHead('Forge · Sandbox', 'Run the agent on sample data and inspect the full step-by-step trace before you deploy.', `<button class="btn btn--primary" id="deploy-sb">${icon('check')} Looks good → Deploy</button>`, '<a href="#/forge">Forge</a> / Sandbox')}
      <div class="grid grid--2">
        <div class="card"><div class="card__head"><h3>Sample input</h3><span class="sub">PA-88142</span></div><div class="card__body"><div class="formula" style="color:#CBD5E1;background:#0F172A">{
  "<span class="hl">request</span>": "prior_auth",
  "procedure": "MRI lumbar spine (72148)",
  "member": "M-4471882",
  "diagnosis": "M54.5 low back pain",
  "documentation": ["PT 6wks", "NSAIDs trial"]
}</div><button class="btn btn--accent mt-16" id="run-sb">${icon('play')} Run agent</button></div></div>
        <div class="card"><div class="card__head"><h3>Execution trace</h3><span class="sub" id="trace-status">Ready</span></div><div class="card__body" id="trace">
          ${steps.map((s, i) => `<div class="trace-step pending" data-i="${i}"><div class="trace-num">${i + 1}</div><div class="trace-body"><b>${s.t}</b><br><span class="muted">${s.d}</span></div></div>`).join('')}
        </div></div>
      </div>${protoNote()}`, 'forge', '/forge/sandbox');
  }
  function bindSandbox() {
    const run = () => {
      const steps = document.querySelectorAll('#trace .trace-step');
      $('#trace-status').textContent = 'Running…';
      steps.forEach((s, i) => setTimeout(() => {
        s.classList.remove('pending');
        if (i === steps.length - 1) $('#trace-status').innerHTML = '<span style="color:var(--success);font-weight:600">✓ Passed</span>';
      }, 300 * (i + 1)));
    };
    $('#run-sb') && $('#run-sb').addEventListener('click', run);
    $('#deploy-sb') && $('#deploy-sb').addEventListener('click', () => deployFlow({ name: 'Prior Auth Autopilot', uc: 'prior-auth' }));
  }

  /* ── Fleet ── */
  let mktFilter = 'All';
  function vMarketplace() {
    const cats = ['All', 'Revenue Cycle', 'Prior Auth', 'Clinical Docs', 'Member Services', 'Care Gaps', 'Coding'];
    const chips = cats.map(c => `<button class="chip ${c === mktFilter ? 'active' : ''}" data-cat="${c}">${c}</button>`).join('');
    const list = DB.marketplace.filter(m => mktFilter === 'All' || m.cat === mktFilter);
    const cards = list.map(m => `<div class="mkt-card" data-mkt="${m.id}">
      <div class="mkt-card__ico" style="background:${m.color}">${icon('box')}</div>
      <div class="flex between center"><h4>${m.name}</h4>${m.validated ? `<span class="validated">${icon('shield')}Validated</span>` : '<span class="pill pill--warning small">In validation</span>'}</div>
      <p class="one">${m.one}</p>
      <div class="flex between center mb-8"><span class="small muted">Typical ROI</span><span class="roi">${m.roi}</span></div>
      <div class="flex between center mb-8"><span class="small muted">${m.metric}</span></div>
      <div class="flex gap-8 wrap mb-16">${m.data.map(d => `<span class="tag">${d}</span>`).join('')}</div>
      <div class="flex between center"><span class="small muted">${m.compliance}</span><button class="btn btn--sm btn--primary" data-deploy="${m.id}">Deploy</button></div>
    </div>`).join('');
    return shell(`
      ${pageHead('Fleet · Marketplace', 'Pre-validated healthcare agents that deliver first measured value in weeks — not quarters.', `<button class="btn" data-route="/fleet/deployments">${icon('fleet')} View deployments</button>`)}
      ${tabs([['Marketplace', '/fleet/marketplace'], ['Deployments', '/fleet/deployments']], '/fleet/marketplace')}
      <div class="chips">${chips}</div>
      <div class="mkt-grid">${cards}</div>${protoNote()}`, 'fleet', '/fleet/marketplace');
  }
  function bindMarketplace() {
    document.querySelectorAll('[data-cat]').forEach(c => c.addEventListener('click', () => { mktFilter = c.dataset.cat; render(); }));
    document.querySelectorAll('[data-deploy]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openListing(b.dataset.deploy); }));
    document.querySelectorAll('[data-mkt]').forEach(c => c.addEventListener('click', () => openListing(c.dataset.mkt)));
  }
  function openListing(id) {
    const m = DB.mktById(id);
    openDrawer(m.name, m.cat + ' agent', `
      <div class="flex gap-8 wrap mb-16">${m.validated ? `<span class="validated">${icon('shield')} Validated</span>` : '<span class="pill pill--warning">In validation</span>'}<span class="tag">${m.compliance}</span></div>
      <p class="muted mb-16">${m.desc}</p>
      <dl class="kvs mb-24"><dt>Typical ROI</dt><dd style="color:var(--success)">${m.roi}</dd><dt>Key metric</dt><dd>${m.metric}</dd><dt>Data requirements</dt><dd>${m.data.join(', ')}</dd><dt>Compliance posture</dt><dd>${m.compliance}</dd><dt>Validation status</dt><dd>${m.validated ? 'Validated ✓' : 'In progress'}</dd></dl>
      <div class="banner">${icon('check')}<div>This agent has been validated against de-identified data from 3 health systems. Human-in-the-loop checkpoints are pre-configured.</div></div>`,
      `<button class="btn" data-close>Close</button><button class="btn btn--primary" id="drawer-deploy">${icon('fleet')} Deploy</button>`);
    $('#drawer-deploy').addEventListener('click', () => deployFlow({ name: m.name, uc: m.id === 'pa-autopilot' ? 'prior-auth' : null }));
  }

  /* Deploy flow — shared by Forge, sandbox, marketplace */
  function deployFlow(opts) {
    openModal('Deploy ' + opts.name, `
      <div class="grid grid--2">
        <div class="field"><label>Environment</label><select class="select" id="dep-env"><option>Production</option><option>Staging (Canary)</option></select></div>
        <div class="field"><label>Scope</label><select class="select"><option>All eligible cases</option><option>Pilot — single department</option></select></div>
        <div class="field col-2"><label>Linked use case</label><select class="select"><option>${opts.uc ? DB.ucById(opts.uc).name : 'Prior Auth Automation'}</option></select></div>
        <div class="field col-2"><label>Schedule</label><select class="select"><option>Real-time (event-driven)</option><option>Hourly batch</option></select></div>
      </div>
      <div class="banner mt-16">${icon('shield')}<div>HITL checkpoints and model-risk registration are applied automatically on deploy.</div></div>`,
      `<button class="btn" data-close>Cancel</button><button class="btn btn--primary" id="confirm-deploy">${icon('check')} Confirm deploy</button>`);
    $('#confirm-deploy').addEventListener('click', () => {
      const env = $('#dep-env').value;
      // add a live deployment if not present
      if (!DB.deployments.find(d => d.id === 'dep-pa')) {
        DB.deployments.unshift({ id: 'dep-pa', agent: opts.name, uc: opts.uc || 'prior-auth', env: env.startsWith('Prod') ? 'Production' : 'Staging', status: env.startsWith('Prod') ? 'Live' : 'Canary', health: 'Healthy', roi: 4.2, runs: 0, errPct: 0, owner: 'Mei Tanaka' });
        const uc = DB.ucById(opts.uc || 'prior-auth'); if (uc) { uc.deployed = true; uc.stage = 'Deployed'; }
      }
      closeOverlays();
      toast(opts.name + ' deployed — now Live');
      setTimeout(() => location.hash = '/fleet/deployments', 600);
    });
  }

  function vDeployments() {
    const rows = DB.deployments.map(d => {
      const uc = DB.ucById(d.uc);
      return `<tr class="clickable" data-route="/fleet/deployments/${d.id}">
        <td class="strong">${d.agent}</td><td class="muted">${uc ? uc.name : '—'}</td><td>${d.env}</td>
        <td>${statusPill(d.status)}</td><td>${statusPill(d.health)}</td><td class="right num strong" style="color:var(--success)">${fmt$(d.roi)}</td></tr>`;
    }).join('');
    return shell(`
      ${pageHead('Fleet · Deployments', 'Every live, canary, and paused agent — with health, owner, and linked ROI.', `<button class="btn btn--primary" data-route="/fleet/marketplace">${icon('plus')} Deploy new agent</button>`)}
      ${tabs([['Marketplace', '/fleet/marketplace'], ['Deployments', '/fleet/deployments']], '/fleet/deployments')}
      <div class="card"><div class="card__head"><h3>Agent deployments</h3><span class="sub">${DB.deployments.filter(d => d.status === 'Live').length} live · ${DB.deployments.filter(d => d.status === 'Canary').length} canary</span></div>
        <div class="table-wrap"><table class="tbl"><thead><tr><th>Agent</th><th>Linked use case</th><th>Environment</th><th>Status</th><th>Health</th><th class="right">Projected ROI</th></tr></thead><tbody>${rows}</tbody></table></div></div>${protoNote()}`, 'fleet', '/fleet/deployments');
  }

  function vDeploymentDetail(id) {
    const d = DB.depById(id);
    if (!d) return shell(pageHead('Not found'), 'fleet');
    const uc = DB.ucById(d.uc);
    const hasPulse = !!DB.initById(d.uc);
    return shell(`
      ${pageHead(d.agent, '', `${hasPulse ? `<button class="btn btn--primary" data-route="/pulse/initiative/${d.uc}">${icon('pulse')} View performance</button>` : ''}<button class="btn btn--danger" id="kill">Pause / kill switch</button>`, `<a href="#/fleet/deployments">Deployments</a> / ${d.agent}`)}
      <div class="flex gap-8 wrap mb-24">${statusPill(d.status)}${statusPill(d.health)}<span class="tag">${d.env}</span><span class="tag">Owner: ${d.owner}</span></div>
      <div class="grid grid--kpi mb-24">
        <div class="kpi"><div class="kpi__label">${icon('pulse')} Total runs</div><div class="kpi__value num">${d.runs.toLocaleString()}</div><div class="kpi__delta flat">since deploy</div></div>
        <div class="kpi"><div class="kpi__label">${icon('alert')} Error rate</div><div class="kpi__value num">${d.errPct}%</div><div class="kpi__delta ${d.errPct < 1 ? 'up' : 'down'}">${d.errPct < 1 ? 'within SLA' : 'watch'}</div></div>
        <div class="kpi"><div class="kpi__label">${icon('dollar')} Projected ROI</div><div class="kpi__value num">${fmt$(d.roi)}</div><div class="kpi__delta flat">annualized</div></div>
        <div class="kpi"><div class="kpi__label">${icon('clock')} Avg latency</div><div class="kpi__value num">1.8s</div><div class="kpi__delta up">healthy</div></div>
      </div>
      <div class="grid grid--2">
        <div class="card"><div class="card__head"><h3>Recent runs</h3></div><div class="card__body" style="padding:6px 0"><div class="table-wrap"><table class="tbl"><thead><tr><th>Run</th><th>Result</th><th>Latency</th><th>Time</th></tr></thead><tbody>
          ${[['#R-9921', 'Auto-approved', '1.6s', '2m ago'], ['#R-9920', 'Routed to HITL', '2.1s', '4m ago'], ['#R-9919', 'Auto-approved', '1.5s', '7m ago'], ['#R-9918', 'Auto-approved', '1.9s', '9m ago'], ['#R-9917', 'Error · retried', '3.2s', '12m ago']].map(r => `<tr><td class="num">${r[0]}</td><td>${r[1].includes('Error') ? `<span class="pill pill--danger small">${r[1]}</span>` : r[1].includes('HITL') ? `<span class="pill pill--warning small">${r[1]}</span>` : `<span class="pill pill--success small">${r[1]}</span>`}</td><td class="num">${r[2]}</td><td class="muted">${r[3]}</td></tr>`).join('')}
        </tbody></table></div></div></div>
        <div class="card"><div class="card__head"><h3>Linked context</h3></div><div class="card__body">
          <dl class="kvs"><dt>Originating use case</dt><dd><a href="#/compass/usecases/${d.uc}">${uc ? uc.name : '—'}</a></dd><dt>Environment</dt><dd>${d.env}</dd><dt>Model-risk entry</dt><dd><a href="#/trust/model-risk">Registered ✓</a></dd><dt>HITL checkpoints</dt><dd>Active</dd><dt>Performance tracking</dt><dd>${hasPulse ? `<a href="#/pulse/initiative/${d.uc}">Pulse ›</a>` : 'Warming up'}</dd></dl>
          <div class="divider"></div>
          <h3 style="font-size:13px;margin-bottom:8px">Staged rollout</h3>
          <div class="meter accent mb-8"><span style="width:${d.status === 'Canary' ? 25 : 100}%"></span></div>
          <p class="small muted">${d.status === 'Canary' ? 'Canary at 25% of eligible traffic. Promote to full once health holds.' : 'Full rollout — 100% of eligible traffic.'}</p>
        </div></div>
      </div>${protoNote()}`, 'fleet', '/fleet/deployments');
  }
  function bindDeploymentDetail() {
    $('#kill') && $('#kill').addEventListener('click', () => toast('Kill switch armed — agent paused, event logged to audit'));
  }

  /* ── Pulse ── */
  function vPulse() {
    const bars = DB.initiatives.map(i => ({ label: i.name.split(' ')[0], sub: i.flag === 'drifting' ? 'drifting' : 'on track', v: +(i.actual.ret / 1000).toFixed(1), c: i.flag === 'drifting' ? '#F59E0B' : '#0F6E6E' }));
    const allOnTrack = DB.initiatives.filter(i => i.flag === 'on-track').length;
    const alerts = [
      { t: 'Eligibility Verification Bot drifting', d: 'Return at 70% of plan — quality below threshold', sev: 'warning' },
      { t: 'Auto-coding Assistant on track', d: 'DNFB days down 2.1 — exceeding projection', sev: 'success' },
      { t: 'Denial Appeal Drafter scaling candidate', d: 'Consistent +4% over plan for 3 months', sev: 'info' },
    ];
    return shell(`
      ${pageHead('Pulse · Portfolio Performance', 'Verified value, in real time — actual vs. projected, finance-grade.', `<button class="btn" data-route="/pulse/reconciliation/auto-coding">${icon('doc')} Reconciliation reports</button>`)}
      ${tabs([['Portfolio', '/pulse'], ['Reconciliation', '/pulse/reconciliation/auto-coding']], '/pulse')}
      <div class="grid grid--2 mb-24">
        <div class="card"><div class="card__body">
          <div class="kpi__label">${icon('dollar')} Verified value realized</div>
          <div class="flex center gap-12" style="margin:6px 0"><div class="kpi__value num" style="margin:0">$12.4M</div><span class="pill pill--success">88% to plan</span></div>
          <p class="small muted">vs. $14.1M projected · trailing 12 months</p>
          <div class="meter success mt-16" style="height:10px"><span style="width:88%"></span></div>
          <div class="stat-row mt-24">
            <div class="stat"><b class="num" style="color:var(--success)">${allOnTrack}</b><span>On track</span></div>
            <div class="stat"><b class="num" style="color:var(--warning)">1</b><span>Drifting</span></div>
            <div class="stat"><b class="num" style="color:var(--danger)">0</b><span>Off track</span></div>
          </div>
        </div></div>
        <div class="card"><div class="card__head"><h3>Realized value by initiative</h3></div><div class="card__body">${barChart(bars, 560, 220)}</div></div>
      </div>
      <div class="grid grid--2">
        <div class="card col-2"><div class="card__head"><h3>Alerts & recommendations</h3></div><div class="card__body" style="padding:6px 18px">
          ${alerts.map(a => `<div class="audit-item"><div class="audit-ico" style="color:var(--${a.sev})">${icon(a.sev === 'success' ? 'check' : a.sev === 'warning' ? 'alert' : 'pulse')}</div><div style="flex:1"><b>${a.t}</b><br><span class="muted">${a.d}</span></div><span class="pill pill--${a.sev}">${a.sev === 'warning' ? 'Fix' : a.sev === 'success' ? 'Scale' : 'Review'}</span></div>`).join('')}
        </div></div>
      </div>${protoNote()}`, 'pulse', '/pulse');
  }

  function vInitiativeDetail(id) {
    const i = DB.initById(id);
    if (!i) return shell(pageHead('Not found'), 'pulse');
    const flagPill = i.flag === 'drifting' ? statusPill('Watch') : `<span class="pill pill--success"><span class="pdot"></span>On track</span>`;
    const metric = (label, act, proj, unit, inverse) => {
      const pct = Math.round((act / proj) * 100);
      const good = inverse ? act <= proj : act >= proj;
      return `<div class="card"><div class="card__body">
        <div class="kpi__label">${label}</div>
        <div class="flex between center" style="margin:6px 0"><div class="kpi__value num" style="margin:0;font-size:24px">${unit === '$' ? fmtK(act) : act + unit}</div><span class="pill pill--${good ? 'success' : 'warning'}">${good ? 'on plan' : 'variance'}</span></div>
        <p class="small muted">Projected ${unit === '$' ? fmtK(proj) : proj + unit} · ${pct}% to plan</p>
        <div class="meter ${good ? 'success' : 'warning'} mt-8"><span style="width:${Math.min(pct, 100)}%"></span></div>
      </div></div>`;
    };
    return shell(`
      ${pageHead(i.name, '', `<button class="btn btn--primary" data-route="/pulse/reconciliation/${i.id}">${icon('doc')} View reconciliation report</button>`, `<a href="#/pulse">Pulse</a> / ${i.name}`)}
      <div class="flex gap-8 wrap mb-24">${flagPill}<span class="tag">Linked deployment</span><span class="tag">Real-time ingestion</span></div>
      ${i.flag === 'drifting' ? `<div class="banner" style="background:var(--warning-dim);border-color:#FDE68A;color:#92400E">${icon('alert')}<div><b>Drifting from projection.</b> Realized return is 70% of plan and quality dipped below threshold. Recommended action: <b>Fix</b> — investigate the eligibility edge cases routed to error.</div></div>` : ''}
      <div class="grid grid--kpi mb-24">
        ${metric('Annual return ($)', i.actual.ret, i.projected.ret, '$', false)}
        ${metric('Run cost ($)', i.actual.cost, i.projected.cost, '$', true)}
        ${metric('Payback (mo)', i.actual.time, i.projected.time, ' mo', true)}
        ${metric('Quality score', i.actual.quality, i.projected.quality, '', false)}
      </div>
      <div class="card"><div class="card__head"><h3>Realized value trend</h3><span class="sub">cumulative · last 12 months ($k)</span></div><div class="card__body">
        ${lineChart({ labels: DB.valueTrend.labels, projected: i.months.map(m => m / 60), realized: i.months.map(m => (m * (i.flag === 'drifting' ? .72 : .96)) / 60) }, 640, 220)}
      </div></div>${protoNote()}`, 'pulse', '/pulse');
  }

  function vReconciliation(id) {
    const i = DB.initById(id) || DB.initById('auto-coding');
    const real = i.actual.ret, proj = i.projected.ret, variance = real - proj;
    return shell(`
      ${pageHead('Value Reconciliation Report', '', `<button class="btn" data-route="/pulse/initiative/${i.id}">${icon('arrow')} Back to initiative</button><button class="btn btn--primary" id="export-pdf">${icon('export')} Export PDF</button>`, `<a href="#/pulse">Pulse</a> / Reconciliation / ${i.name}`)}
      <div class="banner banner--info">${icon('eye')}<div><b>Finance-grade & reproducible.</b> Unlike a proprietary ROAI™ black box, every input, source, and formula below is shown so your CFO can reproduce the number independently.</div></div>
      <div class="card mb-24"><div class="card__head"><h3>${i.name} — Q2 FY26 reconciliation</h3><span class="sub">Prepared for Finance · ${'Jun 03, 2026'}</span></div><div class="card__body">
        <div class="stat-row mb-24">
          <div class="stat"><b class="num" style="color:var(--success)">${fmtK(real)}</b><span>Verified realized value</span></div>
          <div class="stat"><b class="num">${fmtK(proj)}</b><span>Projected value</span></div>
          <div class="stat"><b class="num" style="color:${variance >= 0 ? 'var(--success)' : 'var(--danger)'}">${variance >= 0 ? '+' : ''}${fmtK(Math.abs(variance))}</b><span>Variance</span></div>
          <div class="stat"><b class="num">${Math.round(real / proj * 100)}%</b><span>To plan</span></div>
        </div>
        <div class="divider"></div>
        <h3 style="font-size:13px;margin:8px 0">Open methodology</h3>
        <div class="formula">Realized value = (baseline_cost − observed_cost) × volume − run_cost<br>&nbsp;&nbsp;baseline: <span class="hl">manual coding $X/case</span> · observed: <span class="hl">assisted $Y/case</span><br>&nbsp;&nbsp;volume: <span class="hl">14,820 encounters</span> · run_cost: <span class="hl">${fmtK(i.actual.cost)}</span></div>
      </div></div>
      <div class="grid grid--2">
        <div class="card"><div class="card__head"><h3>Inputs & data sources</h3></div><div class="card__body" style="padding:6px 0"><div class="table-wrap"><table class="tbl"><tbody>
          ${[['Encounters processed', '14,820', 'Epic (FHIR) · live'], ['Baseline cost / case', '$31.40', 'Finance · GL 6120'], ['Observed cost / case', '$9.10', 'Caliber metering'], ['Coder review rate', '100% (HITL)', 'Trust Center'], ['Run cost (compute+license)', fmtK(i.actual.cost), 'Billing'], ['Quality (code accuracy)', i.actual.quality + '%', 'Audit sampling 5%']].map(r => `<tr><td class="muted">${r[0]}</td><td class="right strong num">${r[1]}</td><td class="right muted small">${r[2]}</td></tr>`).join('')}
        </tbody></table></div></div></div>
        <div class="card"><div class="card__head"><h3>Audit trail</h3><span class="sub">immutable</span></div><div class="card__body" style="padding:6px 18px">
          ${DB.audit.slice(0, 4).map(a => `<div class="audit-item"><div class="audit-ico">${icon('shield')}</div><div style="flex:1"><b>${a.action}</b> — ${a.target}<br><span class="audit-hash">${a.hash}</span></div><span class="audit-time">${a.time.split('·')[0]}</span></div>`).join('')}
          <p class="small muted mt-8">Full chain available in <a href="#/trust/audit">Trust Center › Audit Log</a>.</p>
        </div></div>
      </div>${protoNote()}`, 'pulse', '/pulse/reconciliation/auto-coding');
  }
  function bindReconciliation() {
    $('#export-pdf') && $('#export-pdf').addEventListener('click', () => { toast('Reconciliation report exported to PDF — ready for the board'); });
  }

  /* ── Trust Center ── */
  function vTrustCompliance() {
    const posture = [['HIPAA', 'Compliant', 'success'], ['HITRUST r2', 'Certified', 'success'], ['SOC 2 Type II', 'Attested', 'success'], ['NIST AI RMF', 'Aligned', 'success']];
    return shell(`
      ${pageHead('Trust Center', 'Governance, compliance, model-risk & human oversight — first-class, enforceable, and visible.', `<button class="btn">${icon('export')} Download attestations</button>`)}
      ${tabs([['Compliance', '/trust'], ['Audit Log', '/trust/audit'], ['Model Risk', '/trust/model-risk'], ['HITL Queue', '/trust/hitl']], '/trust')}
      <div class="grid grid--kpi mb-24">${posture.map(p => `<div class="kpi"><div class="kpi__label">${icon('shield')} ${p[0]}</div><div class="flex center gap-8" style="margin-top:10px"><span class="pill pill--${p[2]}">${icon('check')} ${p[1]}</span></div><p class="small muted mt-8">Last reviewed May 2026</p></div>`).join('')}</div>
      <div class="grid grid--2">
        <div class="card"><div class="card__head"><h3>Data handling</h3></div><div class="card__body">
          <dl class="kvs"><dt>Encryption in transit</dt><dd>TLS 1.3 ✓</dd><dt>Encryption at rest</dt><dd>AES-256 ✓</dd><dt>PHI residency</dt><dd>US · customer VPC</dd><dt>Data export</dt><dd>Enabled (portability)</dd><dt>Model egress</dt><dd>Blocked by default</dd></dl></div></div>
        <div class="card"><div class="card__head"><h3>Business Associate Agreements</h3></div><div class="card__body" style="padding:6px 0"><div class="table-wrap"><table class="tbl"><tbody>
          ${[['Caliber, Inc.', 'Active', 'Signed Jan 2026'], ['Model provider (Anthropic)', 'Active', 'Signed Jan 2026'], ['Cloud (AWS)', 'Active', 'Signed Dec 2025']].map(r => `<tr><td class="strong">${r[0]}</td><td>${statusPill('Live')}</td><td class="muted small">${r[2]}</td></tr>`).join('')}
        </tbody></table></div></div></div>
      </div>${protoNote()}`, 'trust', '/trust');
  }

  function vTrustAudit() {
    const rows = DB.audit.map(a => `<div class="audit-item"><div class="audit-ico">${icon('list')}</div>
      <div style="flex:1"><b>${a.actor}</b> — ${a.action}<br><span class="muted">${a.target}</span> · <span class="audit-hash">${a.hash}</span></div>
      <span class="audit-time">${a.time}</span></div>`).join('');
    return shell(`
      ${pageHead('Trust Center · Audit Log', 'Immutable record of who did what — every score change, deploy, and override.', `<div class="flex gap-8"><select class="select" style="width:auto"><option>All actors</option><option>Dana Whitfield</option><option>Mei Tanaka</option><option>Omar Diallo</option></select><button class="btn">${icon('export')} Export</button></div>`)}
      ${tabs([['Compliance', '/trust'], ['Audit Log', '/trust/audit'], ['Model Risk', '/trust/model-risk'], ['HITL Queue', '/trust/hitl']], '/trust/audit')}
      <div class="card"><div class="card__body">${rows}</div></div>${protoNote()}`, 'trust', '/trust/audit');
  }

  function vTrustModelRisk() {
    const ratePill = r => r === 'High' ? '<span class="pill pill--danger">High</span>' : r === 'Medium' ? '<span class="pill pill--warning">Medium</span>' : '<span class="pill pill--success">Low</span>';
    const rows = DB.modelRisk.map(m => `<tr><td class="strong">${m.model}</td><td class="muted">${m.base}</td><td>${ratePill(m.rating)}</td><td class="muted">${m.owner}</td><td class="muted">${m.review}</td><td class="small muted">${m.mit}</td></tr>`).join('');
    return shell(`
      ${pageHead('Trust Center · Model-Risk Register', 'Every deployed model with risk rating, owner, review date, and mitigations — NIST AI RMF-aligned.', `<button class="btn btn--primary">${icon('plus')} Register model</button>`)}
      ${tabs([['Compliance', '/trust'], ['Audit Log', '/trust/audit'], ['Model Risk', '/trust/model-risk'], ['HITL Queue', '/trust/hitl']], '/trust/model-risk')}
      <div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>Model / Agent</th><th>Base</th><th>Risk</th><th>Owner</th><th>Next review</th><th>Mitigations</th></tr></thead><tbody>${rows}</tbody></table></div></div>${protoNote()}`, 'trust', '/trust/model-risk');
  }

  function vTrustHitl() {
    const rows = DB.hitlQueue.map(h => `<div class="card mb-16" data-hitl="${h.id}"><div class="card__body"><div class="flex between center wrap gap-12">
      <div style="flex:1;min-width:240px"><div class="flex gap-8 center mb-8"><b>${h.item}</b>${h.risk === 'Medium' ? '<span class="pill pill--warning">Medium risk</span>' : '<span class="pill pill--success">Low risk</span>'}</div>
        <div class="small muted">${h.agent} · ${h.reason} · waiting ${h.age}</div></div>
      <div class="flex gap-8"><button class="btn btn--danger btn--sm" data-reject="${h.id}">Reject</button><button class="btn btn--primary btn--sm" data-approve="${h.id}">${icon('check')} Approve</button></div>
    </div></div></div>`).join('');
    return shell(`
      ${pageHead('Trust Center · Human-in-the-Loop Queue', 'Items agents flagged for human approval. Every decision writes to the audit log.', `<span class="pill pill--warning" style="padding:8px 14px">${DB.hitlQueue.length} awaiting review</span>`)}
      ${tabs([['Compliance', '/trust'], ['Audit Log', '/trust/audit'], ['Model Risk', '/trust/model-risk'], ['HITL Queue', '/trust/hitl']], '/trust/hitl')}
      <div id="hitl-list">${rows || '<div class="card"><div class="card__body center" style="text-align:center;padding:40px"><b>Queue clear ✓</b><p class="muted">All flagged items have been reviewed.</p></div></div>'}</div>${protoNote()}`, 'trust', '/trust/hitl');
  }
  function bindHitl() {
    const act = (id, ok) => {
      const item = DB.hitlQueue.find(h => h.id === id);
      const idx = DB.hitlQueue.indexOf(item);
      if (idx > -1) DB.hitlQueue.splice(idx, 1);
      DB.audit.unshift({ id: 'a' + Date.now(), actor: 'Omar Diallo', action: ok ? 'Approved HITL item' : 'Rejected HITL item', target: item.item, time: 'Just now', hash: '0x' + Math.random().toString(16).slice(2, 6) + '…' + Math.random().toString(16).slice(2, 6) });
      toast((ok ? 'Approved' : 'Rejected') + ' — written to audit log');
      render();
    };
    document.querySelectorAll('[data-approve]').forEach(b => b.addEventListener('click', () => act(b.dataset.approve, true)));
    document.querySelectorAll('[data-reject]').forEach(b => b.addEventListener('click', () => act(b.dataset.reject, false)));
  }

  /* ── Settings ── */
  function settingsShell(active, body) {
    const links = [['Organization', '/settings/org'], ['Users & Roles', '/settings/users'], ['Integrations', '/settings/integrations'], ['Billing', '/settings/billing']];
    return shell(`
      ${pageHead('Settings', 'Manage your organization, access, integrations, and plan.')}
      <div class="settings-grid">
        <nav class="settings-nav">${links.map(([l, r]) => `<a href="#${r}" class="${r === active ? 'active' : ''}">${l}</a>`).join('')}</nav>
        <div>${body}</div>
      </div>${protoNote()}`, 'settings', active);
  }
  function vSettingsOrg() {
    return settingsShell('/settings/org', `<div class="card"><div class="card__head"><h3>Organization</h3></div><div class="card__body">
      <div class="grid grid--2"><div class="field"><label>Organization name</label><input class="input" value="Verity Health System"></div><div class="field"><label>Type</label><select class="select"><option>Provider (IDN)</option><option>Payer</option><option>Life Sciences</option></select></div>
      <div class="field"><label>Region</label><select class="select"><option>US — East</option></select></div><div class="field"><label>Deployment</label><select class="select"><option>Customer VPC (single-tenant)</option><option>Multi-tenant SaaS</option></select></div></div>
      <button class="btn btn--primary mt-16">${icon('check')} Save</button></div></div>`);
  }
  function vSettingsUsers() {
    const users = [['Dana Whitfield', 'Chief AI Officer', 'Admin'], ['Frank Reyes', 'CFO', 'Finance'], ['Carla Núñez', 'CIO/CISO', 'Admin'], ['Ravi Menon', 'VP Revenue Cycle', 'Contributor'], ['Mei Tanaka', 'AI/ML Engineer', 'Builder'], ['Omar Diallo', 'Compliance Officer', 'Governance'], ['Sam Okafor', 'Clinical Informaticist', 'Contributor']];
    const rows = users.map(u => `<tr><td class="strong">${u[0]}</td><td class="muted">${u[1]}</td><td><span class="tag">${u[2]}</span></td><td class="right"><button class="btn btn--sm btn--ghost">Edit</button></td></tr>`).join('');
    return settingsShell('/settings/users', `<div class="card"><div class="card__head"><h3>Users & Roles (RBAC)</h3><button class="btn btn--sm btn--primary">${icon('plus')} Invite</button></div><div class="table-wrap"><table class="tbl"><thead><tr><th>Name</th><th>Title</th><th>Role</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></div>`);
  }
  function vSettingsIntegrations() {
    const rows = DB.connections.map(c => `<tr><td class="strong">${c.name}</td><td class="muted">${c.type}</td><td>${c.status === 'synced' ? statusPill('synced') : c.status === 'auth' ? '<span class="pill pill--warning">Needs auth</span>' : '<span class="pill pill--neutral">Available</span>'}</td><td class="right"><button class="btn btn--sm">Configure</button></td></tr>`).join('');
    return settingsShell('/settings/integrations', `<div class="card"><div class="card__head"><h3>Integrations</h3><a class="small" href="#/atlas">Manage in Atlas ›</a></div><div class="table-wrap"><table class="tbl"><thead><tr><th>System</th><th>Type</th><th>Status</th><th></th></tr></thead><tbody>${rows}</tbody></table></div></div>`);
  }
  function vSettingsBilling() {
    return settingsShell('/settings/billing', `
      <div class="card mb-16"><div class="card__head"><h3>Current plan</h3><span class="pill pill--accent">Strategic</span></div><div class="card__body">
        <div class="stat-row mb-16"><div class="stat"><b>$240k</b><span>Annual platform fee</span></div><div class="stat"><b style="color:var(--success)">+ 8%</b><span>of verified savings (capped)</span></div><div class="stat"><b>5</b><span>connected systems</span></div></div>
        <div class="banner">${icon('check')}<div><b>Outcome-linked pricing.</b> Our value-based component puts Caliber's revenue at risk against your verified savings — the gap Optura's "measured but not guaranteed" model leaves open.</div></div>
      </div>
      <div class="card"><div class="card__head"><h3>Tiers</h3></div><div class="card__body"><div class="grid grid--3">
        ${[['Essentials', 'Mid-market · marketplace-led', '$60k/yr'], ['Enterprise', 'Full governance · VPC', '$180k/yr'], ['Strategic', 'Value-based · services', 'Custom']].map((t, i) => `<div class="card" style="${i === 2 ? 'border-color:var(--accent);box-shadow:0 0 0 2px var(--accent-dim)' : ''}"><div class="card__body"><h3 style="font-size:15px">${t[0]} ${i === 2 ? '<span class="pill pill--accent small">Current</span>' : ''}</h3><p class="muted small mb-16">${t[1]}</p><div class="kpi__value num" style="font-size:22px">${t[2]}</div></div></div>`).join('')}
      </div></div></div>`);
  }

  function protoNote() {
    return `<p class="proto-note">Caliber — clickable prototype · sample data per PRD §10. Open · Fast · Governed · Guaranteed. <a href="#/login">Sign out</a></p>`;
  }

  /* ═══════════════════════════════════════════════════════════════════
     ROUTER
     ═══════════════════════════════════════════════════════════════════ */
  function render() {
    const hash = location.hash.replace(/^#/, '') || '/';
    const parts = hash.split('/').filter(Boolean);
    let html, bind;

    if (hash === '/login') { html = vLogin(); bind = bindLogin; }
    else if (hash === '/') { html = vDashboard(); }
    else if (hash === '/atlas') { html = vAtlasConnections(); bind = bindAtlasConnections; }
    else if (hash === '/atlas/graph') { html = vAtlasGraph(); bind = bindAtlasGraph; }
    else if (hash === '/atlas/sops') { html = vAtlasSops(); bind = bindAtlasSops; }
    else if (hash === '/compass/objectives') { html = vCompassObjectives(); bind = bindCompassObjectives; }
    else if (hash === '/compass/usecases') { html = vCompassUseCases(); }
    else if (hash === '/compass/usecases/new') { html = vUseCaseNew(); bind = bindUseCaseNew; }
    else if (parts[0] === 'compass' && parts[1] === 'usecases' && parts[2]) { html = vUseCaseDetail(parts[2]); bind = () => bindUseCaseDetail(parts[2]); }
    else if (hash === '/compass/matrix') { html = vCompassMatrix(); bind = bindCompassMatrix; }
    else if (hash === '/compass') { location.hash = '/compass/usecases'; return; }
    else if (hash === '/forge') { html = vForge(); bind = bindForge; }
    else if (hash === '/forge/sandbox') { html = vSandbox(); bind = bindSandbox; }
    else if (hash === '/fleet/marketplace' || hash === '/fleet') { html = vMarketplace(); bind = bindMarketplace; }
    else if (hash === '/fleet/deployments') { html = vDeployments(); }
    else if (parts[0] === 'fleet' && parts[1] === 'deployments' && parts[2]) { html = vDeploymentDetail(parts[2]); bind = bindDeploymentDetail; }
    else if (hash === '/pulse') { html = vPulse(); }
    else if (parts[0] === 'pulse' && parts[1] === 'initiative' && parts[2]) { html = vInitiativeDetail(parts[2]); }
    else if (parts[0] === 'pulse' && parts[1] === 'reconciliation') { html = vReconciliation(parts[2]); bind = bindReconciliation; }
    else if (hash === '/trust') { html = vTrustCompliance(); }
    else if (hash === '/trust/audit') { html = vTrustAudit(); }
    else if (hash === '/trust/model-risk') { html = vTrustModelRisk(); }
    else if (hash === '/trust/hitl') { html = vTrustHitl(); bind = bindHitl; }
    else if (hash === '/settings/org' || hash === '/settings') { html = vSettingsOrg(); }
    else if (hash === '/settings/users') { html = vSettingsUsers(); }
    else if (hash === '/settings/integrations') { html = vSettingsIntegrations(); }
    else if (hash === '/settings/billing') { html = vSettingsBilling(); }
    else { html = vDashboard(); }

    closeOverlays();
    app().innerHTML = html;
    window.scrollTo(0, 0);
    wireRoutes();
    if (bind) bind();
  }

  // delegate [data-route] clicks across the app shell + tables
  function wireRoutes() {
    document.querySelectorAll('[data-route]').forEach(el => {
      el.addEventListener('click', e => {
        // avoid double-trigger from nested buttons that handle their own click
        if (e.target.closest('[data-deploy],[data-approve],[data-reject],[data-close],[data-mkt] [data-deploy]')) return;
        location.hash = el.dataset.route;
      });
    });
    const kpiWrap = $('[data-clickkpi]');
    if (kpiWrap) {
      const routes = ['/pulse', '/compass/matrix', '/fleet/deployments', '/compass/usecases'];
      kpiWrap.querySelectorAll('.kpi').forEach((k, i) => { k.style.cursor = 'pointer'; k.addEventListener('click', () => location.hash = routes[i]); });
    }
    // Mobile off-canvas sidebar
    const sidebar = $('#sidebar'), scrim = $('#sidebar-scrim');
    const openNav = () => { sidebar && sidebar.classList.add('open'); scrim && scrim.classList.add('open'); };
    const closeNav = () => { sidebar && sidebar.classList.remove('open'); scrim && scrim.classList.remove('open'); };
    $('#menu-toggle') && $('#menu-toggle').addEventListener('click', openNav);
    $('#sidebar-close') && $('#sidebar-close').addEventListener('click', closeNav);
    scrim && scrim.addEventListener('click', closeNav);
    // tapping any nav entry closes the drawer (navigation re-renders the shell anyway)
    sidebar && sidebar.querySelectorAll('.nav-item, .nav-sub a').forEach(el => el.addEventListener('click', closeNav));
  }

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', () => { if (!location.hash) location.hash = '/login'; render(); });
})();
