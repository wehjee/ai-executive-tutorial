# Caliber — The Open Healthcare AI Value Platform (clickable prototype)

> Decide *which* AI to build, ship it in weeks, and prove the dollars in real time — on an open, auditable framework the customer owns.

This is a self-contained, dependency-free clickable HTML prototype built directly
from the Caliber PRD (sections 9–11: information architecture, screen specs, and the
demo click-path). It is a front-end mock with realistic sample data — no backend.

## Run it

It's pure static files. Either:

```bash
# option A — just open it
open caliber/index.html        # macOS  (xdg-open on Linux)

# option B — serve it (recommended, so hash routing + fonts behave)
cd caliber && python3 -m http.server 8080
# then visit http://localhost:8080
```

## Tech

- **No build step, no framework.** Vanilla HTML/CSS/JS.
  - `index.html` — entry point / app shell mount
  - `styles.css` — design tokens + component library (palette, typography per PRD §9)
  - `data.js` — all sample data (use cases, agents, deployments, metrics, audit…)
  - `app.js` — hash router + every screen + inline SVG charts
- Charts (line, bar, sparkline, 2×2 Value/Viability matrix, knowledge graph) are
  hand-drawn inline SVG, so it works fully offline.

## Information architecture (PRD §9)

| Module | Route(s) | Job-to-be-done |
|---|---|---|
| **Dashboard** | `#/` | Executive "is our AI working?" home |
| **Atlas** | `#/atlas` · `/graph` · `/sops` | Connect data, regs & knowledge → open context layer |
| **Compass** | `#/compass/objectives` · `/usecases` · `/usecases/new` · `/usecases/:id` · `/matrix` | Intake, **open** Value & Viability scoring, ROI sim, prioritize |
| **Forge** | `#/forge` · `/sandbox` | SOP → agent builder + step-by-step sandbox trace |
| **Fleet** | `#/fleet/marketplace` · `/deployments` · `/deployments/:id` | Marketplace of validated agents + deploy & monitor |
| **Pulse** | `#/pulse` · `/initiative/:id` · `/reconciliation/:id` | Actual vs. projected + finance-grade reconciliation |
| **Trust Center** | `#/trust` · `/audit` · `/model-risk` · `/hitl` | Compliance, immutable audit, model-risk register, HITL queue |
| **Settings** | `#/settings/org` · `/users` · `/integrations` · `/billing` | Org, RBAC, integrations, value-based pricing |

## Recommended demo click-path (PRD §11)

1. **`#/login`** → *Sign in with SSO* → **Dashboard**
2. Dashboard → click **Prior Auth Automation** (attention table) → use-case detail
   (transparent scorecard + the shown-not-hidden formula + ROI simulation)
3. Use-case detail → **Approve** → **Find marketplace agent**
4. Marketplace → **Prior Auth Autopilot** → **Deploy** → confirm
5. **Deployments** shows it **Live** → open it → deployment detail
6. Deployment detail → **View performance** → initiative actual-vs-projected
7. → **Value Reconciliation Report** → open methodology → **Export PDF** 🎉

Secondary (governance) path: Dashboard → **Trust Center** → **HITL Queue** →
approve an item → see it appear in the **Audit Log**.

## What's mocked vs. real

Interactions are simulated client-side (deploys add a live row, approvals flip
status and toast, HITL approvals write to the in-memory audit log, weights
re-score the matrix). State resets on reload. There is no real PHI, no network
calls, and no persistence — it exists to communicate the product, not to run it.
