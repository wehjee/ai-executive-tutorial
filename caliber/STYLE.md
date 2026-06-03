# Caliber — Design System

> **Active design language: _ElevenLabs_** — "Architect's blueprint on warm vellum."
> Type-first and almost severe, yet warm: a barely‑not‑white **eggshell** ground that lands
> pure‑black text with extraordinary weight, **light‑weight serif** headlines that whisper
> where competitors shout, an achromatic palette suppressed to near‑zero saturation, and
> **pure‑black pill buttons** as the only punctuation. Cards float on a hairline 1px shadow
> rather than elevation depth — everything stays in the same visual plane.

**Theme:** light · **Density:** comfortable · **Base unit:** 4px · **Page max‑width:** 1200–1320px

---

## How Caliber applies this

| Surface in the app | ElevenLabs treatment |
|---|---|
| Page ground (`--canvas`) | **Eggshell `#fdfcfc`** — never pure white |
| Cards / inputs that must pop | **Card White `#ffffff`** + hairline inset shadow |
| Hover / active row / chips | **Powder `#f5f3f1`** |
| Sidebar | Eggshell with a Chalk right border; **active item = black pill** with eggshell text |
| Primary & accent buttons | **Obsidian `#000` pill** (9999px), eggshell text |
| Secondary buttons | White **ghost pill**, black text, Chalk border |
| Page titles, login hero, drawer/modal headings | **Cormorant Garamond 300** (Waldenburg substitute), `-0.02em` tracking |
| Body, labels, tables, nav | **Inter 400/500**, `0.01em` tracking |
| Code / open‑methodology blocks | **JetBrains Mono** (Geist Mono substitute) on obsidian |
| Borders, dividers, outlines | **Chalk `#e5e5e5`** everywhere |
| Secondary / tertiary text | **Gravel `#777169`** / **Slate `#a59f97`** |
| Inputs | **0px radius**, white fill, Chalk border, inset shadow (editorial form style) |
| Status pills / charts | semantic colors kept but **muted**; saturated **Signal Blue `#0447ff`** / **Ember `#ff4704`** reserved for small dots only |
| Elevation | hairline `--shadow-sm` (≈1px), cards hover rather than float |

The tokens below live in `styles.css` `:root` (variable names are reused so the whole app
re‑skins from these values) and are loaded as fonts in `index.html`.

---

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Eggshell | `#fdfcfc` | `--color-eggshell` | Page background and primary surface — near‑white warmth lands type with extra weight |
| Powder | `#f5f3f1` | `--color-powder` | Secondary surface, hover states, subtle section backgrounds |
| Chalk | `#e5e5e5` | `--color-chalk` | All borders, dividers, card/button outlines — the single universal border color |
| Fog | `#b1b0b0` | `--color-fog` | Disabled states, placeholder elements, grayscale logo grid |
| Gravel | `#777169` | `--color-gravel` | Secondary body text, nav items, subheadings, captions — warm stone undertone |
| Slate | `#a59f97` | `--color-slate` | Tertiary text, icon strokes, deemphasized labels, placeholders |
| Cinder | `#575349` | `--color-cinder` | Mid‑tone text, secondary headings on light surfaces |
| Obsidian | `#000000` | `--color-obsidian` | Primary text, filled CTA background, logo mark — 20.5:1 contrast on eggshell |
| Signal Blue | `#0447ff` | `--color-signal-blue` | Agents product dot / brand avatar accent — small circular UI only |
| Ember | `#ff4704` | `--color-ember` | Creative product dot / brand avatar accent — small circular UI only |
| Voice Spectrum | conic blue→cyan gradient | `--color-voice-spectrum` | Logomark conic gradient (audio‑spectrum wheel) |

## Tokens — Typography

- **Waldenburg** → substitute **Cormorant Garamond 300** (or Libre Baskerville 300). All display
  and section headlines. Weight **300** is the signature move — a light serif for an AI platform
  inverts the bold‑grotesque SaaS convention. Sizes 32/36/48px, line‑height 1.08–1.17,
  letter‑spacing −0.02em (−0.64 / −0.72 / −0.96px). `--font-waldenburg`
- **WaldenburgFH** → substitute **Inter 700 + 0.7px tracking**. Product‑family labels only
  (ElevenCreative / ElevenAgents / ElevenAPI) at 14px. Compact, stamp‑like. `--font-waldenburgfh`
- **Inter** → all body, UI labels, nav, buttons, captions. 400 for body, 500 for interactive.
  Sizes 10–20px, 0.01em tracking, `"kern" 1`. `--font-inter`
- **Geist Mono** → substitute **JetBrains Mono 400**. Code and technical inline markers
  (`[whispers]`, `[sarcastic]`) at 13px. `--font-geist-mono`

### Type Scale

| Role | Size | Line height | Tracking | Token |
|------|------|-------------|----------|-------|
| caption | 10px | 1.2 | — | `--text-caption` |
| body | 14px | 1.43 | — | `--text-body` |
| body‑lg | 16px | 1.5 | — | `--text-body-lg` |
| subheading | 18px | 1.44 | — | `--text-subheading` |
| heading‑sm | 20px | 1.4 | — | `--text-heading-sm` |
| heading | 32px | 1.17 | −0.64px | `--text-heading` |
| heading‑lg | 36px | 1.13 | −0.72px | `--text-heading-lg` |
| display | 48px | 1.08 | −0.96px | `--text-display` |

## Tokens — Spacing, Radius, Shadows

**Spacing (4px base):** 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 36 · 40 · 48 · 56 · 64 · 72 · 96 · 160

**Border radius:** tags `9999px` · cards `16px` · badges `12px` · inputs `4px` (Caliber uses **0px** per the
editorial input rule) · modals `24px` · panels `20px` · buttons `9999px`

**Shadows (hairline elevation only):**
- `--shadow-subtle` `rgba(0,0,0,0.075) 0 0 0 0.5px inset` — replaces borders on white‑on‑eggshell
- `--shadow-subtle-2` `rgba(0,0,0,0.06) 0 0 0 1px, rgba(0,0,0,0.04) 0 1px 2px, rgba(0,0,0,0.04) 0 2px 4px`
- `--shadow-subtle-7` `rgba(0,0,0,0.4) 0 0 1px, rgba(0,0,0,0.04) 0 2px 4px`

## Surfaces & Elevation

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Page Ground | `#fdfcfc` | Base page background |
| 1 | Powder | `#f5f3f1` | Section highlights, active rows, hover |
| 2 | Card White | `#ffffff` | Demo cards / inputs that pop off eggshell |
| 3 | Obsidian | `#000000` | CTA fill, logo mark, full‑bleed dark sections |

Cards barely detach from the ground — they hover by a ~1px shadow, not by depth. The inset
shadow `rgba(0,0,0,0.075) 0 0 0 0.5px` is used instead of a border on white‑on‑eggshell surfaces.

## Components

- **Primary Pill Button (filled):** `#000` bg, `#fdfcfc` text, radius 9999px, 1px Chalk border, subtle shadow. Inter 500 14px.
- **Ghost Pill Button (outline):** `#fff` bg, `#000` text, radius 9999px, 1px Chalk border — floats subtly off eggshell.
- **Rounded Outline Tab/Toggle:** transparent, radius 18px, 1px Chalk; active upgrades to filled pill.
- **Product Demo Card:** `#fff`, radius 16px, hairline shadow; voice rows (name Inter 500 14px / descriptor Inter 400 13px Gravel).
- **Voice List Item:** 32px circular gradient avatar + name + descriptor; selected row Powder bg, 4px highlight.
- **Navigation Bar:** Eggshell, 36px, Chalk bottom border on scroll; links Inter 400 14px; product labels WaldenburgFH.
- **Section Divider Label (eyebrow):** Inter 400 14px Gravel, no background/border, 8–12px above the serif heading.
- **Text Input (contained):** `#fff`, 1px Chalk, **0px radius**, inset shadow.
- **Feature Platform Card (ghost):** transparent, no elevation — pure typographic block, differentiated only by a colored product dot.

## Do's

- Use the serif at **300** with −0.02em for every heading ≥32px — never a heavier weight.
- Apply `9999px` radius to all buttons and pill tags; 16–20px to cards/panels; **0px** to inputs.
- Keep the palette near‑zero saturation; reserve `#ff4704` / `#0447ff` for **avatar/dot indicators only**.
- Use the inset shadow on white UI surfaces over eggshell instead of border outlines.
- Use mono only for machine/technical inline annotations and code.
- Render third‑party logos at `#b1b0b0` with no hover color change.
- Size section gaps at 80–120px; element gaps at 8–12px.

## Don'ts

- Never use a weight above 300 for serif display headlines.
- Never introduce saturated color for text, fills, or buttons — Signal Blue / Ember are dot‑only.
- Never apply box‑shadow elevation larger than the hairline 1px float.
- Never use pure `#ffffff` for page surfaces — eggshell `#fdfcfc` is the ground.
- Never place Inter body below 13px in product UI / 14px in marketing prose.
- Never use more than two button variants in one cluster (one filled black + one ghost white).
- Never round input fields — 0px radius creates the editorial box/underline distinction.

## Similar brands

Linear · Notion · Vercel · Anthropic · Perplexity — achromatic discipline, accent confined to UI
indicators, custom light‑weight type, black pill CTAs, product demo card embedded in hero.

---

## Quick Start — CSS Custom Properties

```css
:root {
  /* Colors */
  --color-eggshell: #fdfcfc;
  --color-powder: #f5f3f1;
  --color-chalk: #e5e5e5;
  --color-fog: #b1b0b0;
  --color-gravel: #777169;
  --color-slate: #a59f97;
  --color-cinder: #575349;
  --color-obsidian: #000000;
  --color-signal-blue: #0447ff;
  --color-ember: #ff4704;
  --gradient-voice-spectrum: conic-gradient(from 180deg, rgb(61,117,216) 11.59deg, rgb(42,104,210) 26.32deg, rgb(117,190,229) 32.39deg, rgb(82,208,233) 38.91deg, rgb(33,89,186) 75.35deg, rgb(58,116,218) 85.04deg, rgb(108,215,236) 94.53deg, rgb(90,185,241) 122.11deg, rgb(51,161,229) 129.97deg, rgb(31,95,207) 136.72deg, rgb(44,84,202) 144.31deg, rgb(58,158,207) 175.99deg, rgb(49,103,197) 183.87deg, rgb(173,232,243) 201.64deg, rgb(216,241,245) 224.87deg, rgb(165,219,230) 239.73deg, rgb(43,157,214) 268.17deg, rgb(174,224,233) 286.21deg, rgb(32,186,208) 329.65deg, rgb(30,83,176) 343.55deg, rgb(47,64,210) 359.26deg);

  /* Fonts */
  --font-waldenburg: 'Cormorant Garamond', 'Libre Baskerville', Georgia, serif;
  --font-waldenburgfh: 'Inter', system-ui, sans-serif;        /* 700, +0.7px tracking, 14px labels */
  --font-inter: 'Inter', system-ui, -apple-system, sans-serif;
  --font-geist-mono: 'JetBrains Mono', ui-monospace, Menlo, Consolas, monospace;

  /* Type scale */
  --text-caption: 10px; --leading-caption: 1.2;
  --text-body: 14px; --leading-body: 1.43;
  --text-body-lg: 16px; --leading-body-lg: 1.5;
  --text-subheading: 18px; --leading-subheading: 1.44;
  --text-heading-sm: 20px; --leading-heading-sm: 1.4;
  --text-heading: 32px; --leading-heading: 1.17; --tracking-heading: -0.64px;
  --text-heading-lg: 36px; --leading-heading-lg: 1.13; --tracking-heading-lg: -0.72px;
  --text-display: 48px; --leading-display: 1.08; --tracking-display: -0.96px;

  /* Weights */
  --font-weight-light: 300; --font-weight-regular: 400; --font-weight-medium: 500; --font-weight-bold: 700;

  /* Spacing */
  --spacing-4: 4px;  --spacing-8: 8px;   --spacing-12: 12px; --spacing-16: 16px;
  --spacing-20: 20px; --spacing-24: 24px; --spacing-28: 28px; --spacing-32: 32px;
  --spacing-36: 36px; --spacing-40: 40px; --spacing-48: 48px; --spacing-56: 56px;
  --spacing-64: 64px; --spacing-72: 72px; --spacing-96: 96px; --spacing-160: 160px;

  /* Radius */
  --radius-md: 4px; --radius-lg: 8px; --radius-xl: 12px; --radius-2xl: 16px;
  --radius-2xl-2: 20px; --radius-3xl: 24px; --radius-full: 9999px;
  --radius-tags: 9999px; --radius-cards: 16px; --radius-badges: 12px;
  --radius-inputs: 4px; --radius-modals: 24px; --radius-panels: 20px; --radius-buttons: 9999px;

  /* Layout */
  --page-max-width: 1200px;

  /* Shadows */
  --shadow-subtle: rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset;
  --shadow-subtle-2: rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px;
  --shadow-subtle-7: rgba(0,0,0,0.4) 0px 0px 1px 0px, rgba(0,0,0,0.04) 0px 2px 4px 0px;

  /* Surfaces */
  --surface-page-ground: #fdfcfc;
  --surface-powder-surface: #f5f3f1;
  --surface-card-white: #ffffff;
  --surface-obsidian: #000000;
}
```
