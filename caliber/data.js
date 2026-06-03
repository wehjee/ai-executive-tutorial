/* ═══════════════════════════════════════════════════════════════════
   CALIBER — sample data for the clickable prototype
   All numbers mirror PRD §10 so the demo feels real.
   Mutable at runtime (deploy / approve actions update it in-memory).
   ═══════════════════════════════════════════════════════════════════ */
window.DB = (function () {

  const objectives = [
    { id: 'o1', name: 'Reduce administrative cost',  weight: 35 },
    { id: 'o2', name: 'Lower denial rate',           weight: 25 },
    { id: 'o3', name: 'Improve member experience',   weight: 20 },
    { id: 'o4', name: 'Close care gaps',             weight: 20 },
  ];

  // Value & Viability sub-scores are explicit so the scorecard can show the math.
  const useCases = [
    {
      id: 'prior-auth', name: 'Prior Auth Automation', dept: 'Revenue Cycle',
      owner: 'Ravi Menon', status: 'Scored', stage: 'Scored', quadrant: 'Quick Wins',
      impact: 4.2, // $M
      problem: 'Manual prior-authorization intake takes 18 min/case and creates a 4-day backlog that delays care and inflates admin cost.',
      benefit: 'Touchless intake + auto-determination for low-risk requests; est. $4.2M/yr admin savings and 3-day faster turnaround.',
      dataNeeded: ['Epic (FHIR)', 'Payer rules (X12 278)', 'Confluence SOPs'],
      value: { 'Business-objective alignment': 92, '$ impact': 88, 'Strategic fit': 84, 'Patient/member impact': 78 },
      viability: { 'Data readiness': 86, 'Technical feasibility': 82, 'Org readiness': 80, 'Compliance risk (inv.)': 88 },
      roi: { cost: 220, ret: 4200, payback: 2.1, conf: 18 },
      deployed: false,
    },
    {
      id: 'denial-pred', name: 'Denial Prediction', dept: 'Revenue Cycle',
      owner: 'Ravi Menon', status: 'Scored', stage: 'Scored', quadrant: 'Big Bets',
      impact: 6.1,
      problem: 'Claims are denied after submission with no early-warning, costing rework and lost revenue.',
      benefit: 'Predict denial likelihood pre-submission and route high-risk claims for correction; est. $6.1M/yr recovered.',
      dataNeeded: ['Claims (X12 837/835)', 'Snowflake', 'Epic (FHIR)'],
      value: { 'Business-objective alignment': 90, '$ impact': 95, 'Strategic fit': 80, 'Patient/member impact': 60 },
      viability: { 'Data readiness': 58, 'Technical feasibility': 62, 'Org readiness': 64, 'Compliance risk (inv.)': 70 },
      roi: { cost: 540, ret: 6100, payback: 3.6, conf: 27 },
      deployed: false,
    },
    {
      id: 'auto-coding', name: 'Auto-coding Assistant', dept: 'HIM / Coding',
      owner: 'Sam Okafor', status: 'Approved', stage: 'Deployed', quadrant: 'Quick Wins',
      impact: 3.5,
      problem: 'Inpatient coding is a manual bottleneck; coder shortage drives DNFB days up.',
      benefit: 'Suggest ICD-10/CPT codes from the clinical note with coder-in-the-loop review; est. $3.5M/yr.',
      dataNeeded: ['Epic (FHIR)', 'Confluence SOPs'],
      value: { 'Business-objective alignment': 82, '$ impact': 80, 'Strategic fit': 78, 'Patient/member impact': 55 },
      viability: { 'Data readiness': 84, 'Technical feasibility': 86, 'Org readiness': 78, 'Compliance risk (inv.)': 80 },
      roi: { cost: 180, ret: 3500, payback: 1.8, conf: 15 },
      deployed: true,
    },
    {
      id: 'chatbot-faq', name: 'Member FAQ Chatbot', dept: 'Member Services',
      owner: 'Priya Shah', status: 'Parked', stage: 'Scored', quadrant: 'Fill-ins',
      impact: 0.3,
      problem: 'High call volume for simple benefit/eligibility questions.',
      benefit: 'Self-service answers for top 20 FAQs; modest deflection, est. $0.3M/yr.',
      dataNeeded: ['ServiceNow', 'Confluence SOPs'],
      value: { 'Business-objective alignment': 40, '$ impact': 22, 'Strategic fit': 48, 'Patient/member impact': 66 },
      viability: { 'Data readiness': 88, 'Technical feasibility': 90, 'Org readiness': 82, 'Compliance risk (inv.)': 92 },
      roi: { cost: 60, ret: 300, payback: 7.2, conf: 22 },
      deployed: false,
    },
    {
      id: 'care-gap', name: 'Care-Gap Outreach', dept: 'Population Health',
      owner: 'Dr. Lena Park', status: 'Scored', stage: 'Scored', quadrant: 'Big Bets',
      impact: 2.8,
      problem: 'HEDIS care gaps close slowly; outreach is generic and low-yield.',
      benefit: 'Targeted, personalized outreach to close gaps; quality bonus + better outcomes, est. $2.8M/yr.',
      dataNeeded: ['Claims (X12)', 'Epic (FHIR)', 'Snowflake'],
      value: { 'Business-objective alignment': 78, '$ impact': 70, 'Strategic fit': 76, 'Patient/member impact': 92 },
      viability: { 'Data readiness': 60, 'Technical feasibility': 66, 'Org readiness': 58, 'Compliance risk (inv.)': 72 },
      roi: { cost: 240, ret: 2800, payback: 3.1, conf: 24 },
      deployed: false,
    },
    {
      id: 'denial-appeal', name: 'Denial Appeal Drafter', dept: 'Revenue Cycle',
      owner: 'Ravi Menon', status: 'Approved', stage: 'Deployed', quadrant: 'Quick Wins',
      impact: 1.9,
      problem: 'Appeal letters are drafted by hand, slow, and inconsistently sourced.',
      benefit: 'Auto-draft evidence-backed appeal letters for specialist review; est. $1.9M/yr recovered.',
      dataNeeded: ['Claims (X12 835)', 'Epic (FHIR)', 'Confluence SOPs'],
      value: { 'Business-objective alignment': 80, '$ impact': 66, 'Strategic fit': 72, 'Patient/member impact': 50 },
      viability: { 'Data readiness': 78, 'Technical feasibility': 82, 'Org readiness': 76, 'Compliance risk (inv.)': 78 },
      roi: { cost: 120, ret: 1900, payback: 2.3, conf: 19 },
      deployed: true,
    },
    {
      id: 'ambient-note', name: 'Ambient Clinical Documentation', dept: 'Clinical',
      owner: 'Dr. Lena Park', status: 'Intake', stage: 'Intake', quadrant: 'Big Bets',
      impact: 5.4,
      problem: 'Clinician documentation burden drives burnout and after-hours charting.',
      benefit: 'Ambient scribe drafts the encounter note for clinician sign-off; est. $5.4M/yr productivity + retention.',
      dataNeeded: ['Epic (FHIR)', 'Confluence SOPs'],
      value: { 'Business-objective alignment': 74, '$ impact': 86, 'Strategic fit': 82, 'Patient/member impact': 80 },
      viability: { 'Data readiness': 56, 'Technical feasibility': 60, 'Org readiness': 54, 'Compliance risk (inv.)': 64 },
      roi: { cost: 480, ret: 5400, payback: 3.9, conf: 29 },
      deployed: false,
    },
    {
      id: 'eligibility', name: 'Eligibility Verification Bot', dept: 'Patient Access',
      owner: 'Priya Shah', status: 'Scored', stage: 'Scored', quadrant: 'Quick Wins',
      impact: 1.4,
      problem: 'Front-desk staff manually verify eligibility, causing registration delays.',
      benefit: 'Real-time eligibility checks at scheduling; est. $1.4M/yr admin savings.',
      dataNeeded: ['Payer 270/271', 'Epic (FHIR)'],
      value: { 'Business-objective alignment': 70, '$ impact': 58, 'Strategic fit': 66, 'Patient/member impact': 62 },
      viability: { 'Data readiness': 82, 'Technical feasibility': 84, 'Org readiness': 80, 'Compliance risk (inv.)': 86 },
      roi: { cost: 90, ret: 1400, payback: 1.6, conf: 14 },
      deployed: false,
    },
  ];

  const connections = [
    { id: 'epic',       name: 'Epic',            type: 'EHR · FHIR R4',     status: 'synced',  last: '2h ago',   records: '4.2M' },
    { id: 'claims',     name: 'Claims Gateway',  type: 'X12 837/835/278',   status: 'synced',  last: '40m ago',  records: '11.8M' },
    { id: 'confluence', name: 'Confluence',      type: 'SOPs & Policy',     status: 'synced',  last: '1d ago',   records: '612 docs' },
    { id: 'snowflake',  name: 'Snowflake',       type: 'Data Warehouse',    status: 'auth',    last: '—',        records: '—' },
    { id: 'servicenow', name: 'ServiceNow',      type: 'ITSM / Tickets',    status: 'add',     last: '—',        records: '—' },
    { id: 'sharepoint', name: 'SharePoint',      type: 'Documents',         status: 'add',     last: '—',        records: '—' },
  ];

  const sops = [
    { id: 's1', name: 'Prior Auth Intake', ver: 'v3', dept: 'Revenue Cycle', steps: 9,  updated: 'May 12, 2026' },
    { id: 's2', name: 'Denial Appeal Workflow', ver: 'v2', dept: 'Revenue Cycle', steps: 7, updated: 'Apr 28, 2026' },
    { id: 's3', name: 'Inpatient Coding Review', ver: 'v5', dept: 'HIM / Coding', steps: 11, updated: 'May 30, 2026' },
    { id: 's4', name: 'Care-Gap Outreach Protocol', ver: 'v1', dept: 'Population Health', steps: 6, updated: 'May 04, 2026' },
    { id: 's5', name: 'Eligibility Verification', ver: 'v4', dept: 'Patient Access', steps: 5, updated: 'Mar 19, 2026' },
  ];

  const marketplace = [
    { id: 'pa-autopilot', name: 'Prior Auth Autopilot', cat: 'Prior Auth', color: '#000000',
      one: '60% touchless prior-auth intake and auto-determination for low-risk requests.',
      roi: '~$3–5M/yr', metric: 'avg 60% touchless', data: ['FHIR', 'X12 278'], compliance: 'HIPAA · HITRUST', validated: true,
      desc: 'Ingests prior-auth requests, checks payer rules and clinical criteria, auto-approves low-risk cases, and routes the rest to staff with a recommendation. Coder/nurse-in-the-loop on every denial.' },
    { id: 'denial-drafter', name: 'Denial Appeal Drafter', cat: 'Revenue Cycle', color: '#000000',
      one: 'Drafts evidence-backed appeal letters from the denial reason + clinical record.',
      roi: '~$1.5–2M/yr', metric: '4.2× faster drafting', data: ['X12 835', 'FHIR'], compliance: 'HIPAA · HITRUST', validated: true,
      desc: 'Reads the remittance denial code, pulls supporting documentation, and produces a specialist-ready appeal letter with citations. Human sign-off required before submission.' },
    { id: 'caregap-agent', name: 'Care-Gap Outreach Agent', cat: 'Care Gaps', color: '#000000',
      one: 'Identifies open HEDIS gaps and runs personalized, channel-aware outreach.',
      roi: '~$2–3M/yr', metric: '+18% gap closure', data: ['Claims', 'FHIR'], compliance: 'HIPAA · TCPA-aware', validated: true,
      desc: 'Stratifies members by open care gaps and likelihood-to-respond, then generates compliant outreach across SMS/portal/mail with opt-out handling.' },
    { id: 'ambient-coding', name: 'Ambient Coding Assistant', cat: 'Coding', color: '#000000',
      one: 'Suggests ICD-10/CPT codes from the clinical note with coder review.',
      roi: '~$3–4M/yr', metric: '−2.1 DNFB days', data: ['FHIR'], compliance: 'HIPAA · HITRUST', validated: true,
      desc: 'Analyzes documentation to recommend codes and flag documentation gaps. Every suggestion is reviewed by a certified coder before billing.' },
    { id: 'eligibility-bot', name: 'Eligibility Verification Bot', cat: 'Revenue Cycle', color: '#000000',
      one: 'Real-time 270/271 eligibility checks at scheduling and registration.',
      roi: '~$1–1.5M/yr', metric: '92% auto-verified', data: ['X12 270/271'], compliance: 'HIPAA', validated: true,
      desc: 'Runs eligibility and benefits verification automatically when an appointment is booked, surfacing coverage issues before the visit.' },
    { id: 'member-triage', name: 'Member Services Triage', cat: 'Member Services', color: '#000000',
      one: 'Deflects and triages member inquiries with grounded, policy-aware answers.',
      roi: '~$0.5–1M/yr', metric: '34% deflection', data: ['ServiceNow', 'SOPs'], compliance: 'HIPAA', validated: false,
      desc: 'Answers benefit/eligibility FAQs from approved policy sources and escalates complex cases with full context. In validation.' },
  ];

  // Deployments — linked to use cases.
  const deployments = [
    { id: 'dep-coding', agent: 'Ambient Coding Assistant', uc: 'auto-coding', env: 'Production', status: 'Live',
      health: 'Healthy', roi: 3.5, runs: 14820, errPct: 0.4, owner: 'Mei Tanaka' },
    { id: 'dep-appeal', agent: 'Denial Appeal Drafter', uc: 'denial-appeal', env: 'Production', status: 'Live',
      health: 'Healthy', roi: 1.9, runs: 6210, errPct: 0.9, owner: 'Mei Tanaka' },
    { id: 'dep-elig', agent: 'Eligibility Verification Bot', uc: 'eligibility', env: 'Staging', status: 'Canary',
      health: 'Watch', roi: 1.4, runs: 980, errPct: 2.1, owner: 'Mei Tanaka' },
  ];

  // Pulse — initiative performance (actual vs projected).
  const initiatives = [
    { id: 'auto-coding', name: 'Auto-coding Assistant', flag: 'on-track',
      projected: { cost: 180, ret: 3500, time: 1.8, quality: 95 },
      actual:    { cost: 168, ret: 3210, time: 1.9, quality: 96 },
      months: [120, 180, 240, 300, 360, 410, 470, 540, 600, 680, 760, 820] },
    { id: 'denial-appeal', name: 'Denial Appeal Drafter', flag: 'on-track',
      projected: { cost: 120, ret: 1900, time: 2.3, quality: 92 },
      actual:    { cost: 132, ret: 1980, time: 2.2, quality: 93 },
      months: [60, 95, 140, 180, 230, 290, 350, 410, 470, 520, 580, 640] },
    { id: 'eligibility', name: 'Eligibility Verification Bot', flag: 'drifting',
      projected: { cost: 90, ret: 1400, time: 1.6, quality: 90 },
      actual:    { cost: 104, ret: 980, time: 2.1, quality: 84 },
      months: [20, 40, 70, 110, 150, 180, 210, 250, 290, 330, 360, 400] },
  ];

  // 12-month value realized vs projected (for dashboard + pulse line).
  const valueTrend = {
    labels: ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun'],
    projected: [0.6, 1.4, 2.6, 4.0, 5.6, 7.2, 8.6, 9.8, 11.0, 12.1, 13.2, 14.1],
    realized:  [0.3, 0.9, 1.9, 3.1, 4.4, 5.8, 7.0, 8.1, 9.2, 10.3, 11.5, 12.4],
  };

  const funnel = [
    { label: 'Intake',   value: 58 },
    { label: 'Scored',   value: 41 },
    { label: 'Approved', value: 19 },
    { label: 'Deployed', value: 23 },
    { label: 'Scaling',  value: 7  },
  ];

  // Knowledge graph nodes/edges (positions are normalized 0..1).
  const graph = {
    nodes: [
      { id: 'rcm',   label: 'Revenue Cycle', kind: 'dept',   x: .22, y: .30 },
      { id: 'clin',  label: 'Clinical',      kind: 'dept',   x: .50, y: .14 },
      { id: 'pop',   label: 'Pop. Health',   kind: 'dept',   x: .80, y: .28 },
      { id: 'epic',  label: 'Epic (FHIR)',   kind: 'system', x: .40, y: .46 },
      { id: 'claims',label: 'Claims (X12)',  kind: 'system', x: .18, y: .62 },
      { id: 'snow',  label: 'Snowflake',     kind: 'system', x: .66, y: .58 },
      { id: 'hipaa', label: 'HIPAA',         kind: 'reg',    x: .50, y: .82 },
      { id: 'cms',   label: 'CMS Rules',     kind: 'reg',    x: .82, y: .74 },
      { id: 'wf-pa', label: 'Prior Auth WF', kind: 'wf',     x: .28, y: .80 },
      { id: 'wf-cg', label: 'Care-Gap WF',   kind: 'wf',     x: .88, y: .50 },
    ],
    edges: [
      ['rcm','epic'],['rcm','claims'],['clin','epic'],['pop','snow'],['pop','claims'],
      ['epic','hipaa'],['claims','hipaa'],['claims','cms'],['wf-pa','rcm'],['wf-pa','epic'],
      ['wf-cg','pop'],['wf-cg','snow'],['snow','cms'],
    ],
  };

  const modelRisk = [
    { id: 'mr1', model: 'Prior Auth Autopilot', base: 'Claude · clinical-tuned', rating: 'Medium', owner: 'Omar Diallo', review: 'Jul 15, 2026', mit: 'HITL on all denials; drift monitor; bias audit quarterly' },
    { id: 'mr2', model: 'Ambient Coding Assistant', base: 'Claude', rating: 'Medium', owner: 'Omar Diallo', review: 'Jun 30, 2026', mit: 'Coder sign-off; code-accuracy SLA; audit sampling 5%' },
    { id: 'mr3', model: 'Denial Appeal Drafter', base: 'Claude', rating: 'Low', owner: 'Omar Diallo', review: 'Aug 02, 2026', mit: 'Specialist review before submission; citation grounding' },
    { id: 'mr4', model: 'Eligibility Verification Bot', base: 'Rules + ML', rating: 'Low', owner: 'Omar Diallo', review: 'Jun 20, 2026', mit: 'Deterministic fallback; no PHI egress' },
    { id: 'mr5', model: 'Care-Gap Outreach Agent', base: 'Claude', rating: 'High', owner: 'Omar Diallo', review: 'Jun 12, 2026', mit: 'TCPA consent gate; opt-out enforcement; outreach cap' },
  ];

  const hitlQueue = [
    { id: 'h1', agent: 'Prior Auth Autopilot', item: 'Auth #PA-88142 — MRI lumbar spine', reason: 'Confidence 0.71 below 0.85 threshold', risk: 'Medium', age: '12m' },
    { id: 'h2', agent: 'Care-Gap Outreach Agent', item: 'Outreach batch — 412 members (SMS)', reason: 'Bulk send > 250 requires approval', risk: 'Medium', age: '34m' },
    { id: 'h3', agent: 'Denial Appeal Drafter', item: 'Appeal #AP-2207 — out-of-network', reason: 'Policy edge case flagged', risk: 'Low', age: '1h' },
    { id: 'h4', agent: 'Ambient Coding Assistant', item: 'Encounter #E-99431 — code conflict', reason: 'Two plausible DRG assignments', risk: 'Low', age: '2h' },
  ];

  const audit = [
    { id: 'a1', actor: 'Dana Whitfield', action: 'Approved use case', target: 'Prior Auth Automation', time: 'Jun 03, 2026 · 09:42', hash: '0x9f3a…b21c' },
    { id: 'a2', actor: 'Mei Tanaka', action: 'Deployed agent', target: 'Ambient Coding Assistant → Production', time: 'Jun 02, 2026 · 16:08', hash: '0x4c81…7de0' },
    { id: 'a3', actor: 'Omar Diallo', action: 'Approved HITL item', target: 'Auth #PA-88010', time: 'Jun 02, 2026 · 14:55', hash: '0x71aa…0f93' },
    { id: 'a4', actor: 'Frank Reyes', action: 'Exported reconciliation', target: 'Auto-coding · Q2 board pack', time: 'Jun 01, 2026 · 11:20', hash: '0xae22…cc41' },
    { id: 'a5', actor: 'Dana Whitfield', action: 'Edited Value weight', target: 'True North · Reduce admin cost 30%→35%', time: 'May 30, 2026 · 10:03', hash: '0x18bd…9a77' },
    { id: 'a6', actor: 'Sam Okafor', action: 'Score override', target: 'Denial Prediction · Data readiness 52→58', time: 'May 29, 2026 · 15:31', hash: '0x6f0e…12ab' },
  ];

  // Helpers ----------------------------------------------------------
  function valueScore(uc) {
    const w = { 'Business-objective alignment': .35, '$ impact': .30, 'Strategic fit': .20, 'Patient/member impact': .15 };
    return Math.round(Object.entries(uc.value).reduce((s, [k, v]) => s + v * w[k], 0));
  }
  function viabilityScore(uc) {
    const w = { 'Data readiness': .30, 'Technical feasibility': .30, 'Org readiness': .20, 'Compliance risk (inv.)': .20 };
    return Math.round(Object.entries(uc.viability).reduce((s, [k, v]) => s + v * w[k], 0));
  }
  const valueWeights = { 'Business-objective alignment': 35, '$ impact': 30, 'Strategic fit': 20, 'Patient/member impact': 15 };
  const viabilityWeights = { 'Data readiness': 30, 'Technical feasibility': 30, 'Org readiness': 20, 'Compliance risk (inv.)': 20 };

  function ucById(id) { return useCases.find(u => u.id === id); }
  function depById(id) { return deployments.find(d => d.id === id); }
  function initById(id) { return initiatives.find(i => i.id === id); }
  function mktById(id) { return marketplace.find(m => m.id === id); }

  return {
    objectives, useCases, connections, sops, marketplace, deployments,
    initiatives, valueTrend, funnel, graph, modelRisk, hitlQueue, audit,
    valueWeights, viabilityWeights,
    valueScore, viabilityScore, ucById, depById, initById, mktById,
  };
})();
