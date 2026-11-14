> **GitHub handoff status:** Only the textual specifications and editable SVG icons have been uploaded; the full ZIP with PNG/JPG is still in the conversation. See [ASSETS-TO-UPLOAD.md](ASSETS-TO-UPLOAD.md). The file list below describes the complete ZIP, not this GitHub folder.

# Sputnik 2.0 · Morning Dashboard — developer handoff

**Source:** user-approved screenshot `reference/approved-morning-screen.png`, **1672 × 941 px**.  
**Target scene:** **1280 × 720 px** logical pixels (16:9). Scale uniformly as configured in your app.  
**Status:** this is a **raster extraction and implementation specification**, **not** an editable original Figma design.

## What's inside

| Directory | Description |
|---|---|
| `reference/` | Exact original screenshot, numbered element map, and crop contact sheet |
| `crops/` | 37 accurately extracted rectangular screenshot references (PNG). **They include the original rendered background**. Not transparent web assets or components. |
| `assets/` | Separate previously supplied original transparent Sputnik logo, a trimmed transparent version, and an **approximate** extracted assistant orb |
| `icons/` | 29 clean approximate outline SVGs, editable as code. They are **not** the original icon vector source. |
| `styles/tokens.css` | CSS variables and component samples inferred from screenshot; not definitive hex codes or Figma values |
| `spec/layout.json` | Estimated coordinates for all regions in full-image pixels and 1280×720 stage pixels |
| `spec/visible-content.en.json` | Exact visible labels and demo values, grouped by interface section |
| `spec/behavior.md` | UI interaction states and what connects to other screens |
| `spec/acceptance-checklist.md` | Visual and UX completion checklist |

## 1. Visual hierarchy

- **Header** (0–76 px source height): SPUTNIK 2.0 brand, Morning (active), Trends, Doctor, Profile, onboard-network/mission/battery status, Emergency action.
- **Greeting** (left, below header): `Good morning, Alex.` and one-line description.
- **Primary card, left (x≈49…982, y≈185…758)**: `Your morning plan`, six-segment progress, collapsible routine and doctor-order groups, single full-width CTA.
- **Right cards**: overnight summary (sleep / cabin CO₂ / oxygen, elevated CO₂ alert); doctor message; today's schedule.
- **Bottom footer (x≈44…1618, y≈772…886)**: glowing Sputnik orb, assistant message, and Talk to Sputnik button.
- **Background**: near-black/navy, delicate orbital lines, tiny Earth and reddish Mars horizon in the *upper right only*. Keep the lower working area unobstructed.

## 2. Source → logical stage conversion

- x' = x × **0.765550** and y' = y × **0.765143**.
- Width/height also use the corresponding scale factors.
- Take the coordinates in `spec/layout.json` as **visual measurements of the screenshot**, not guaranteed CSS box bounds.
- Do not stretch children independently; render the app at 1280×720 and uniform-scale the entire scene, including font and hit targets, or implement carefully tested proportional layout.

## 3. Composition rule — extremely important

The crop PNGs are *screenshots of screenshot areas*. They already include text, color effects and sometimes overlapping elements. **Do not build the production UI by placing `left-plan-card.png` under `daily-check-panel.png`**, because it will double-render content and backgrounds.

**Implement text, progress, card borders, badges and buttons with HTML/CSS**. Use crop images only to compare. Source artwork (Mars and Earth) is **not** available as a clean background without UI. A clean background layer must be supplied by the designer or recreated independently. The transparent logo in `assets/` **is** usable as image asset; the separate assistant orb is only an alpha approximation.

## 4. Layout sizes at 1280×720 (approximate)

| Component | Source bbox (x,y,w,h) | Stage bbox (x,y,w,h) |
|---|---|---|
| `brand-logo-in-screenshot` | 64,9,172,60 | 49.0,6.9,131.7,45.9 |
| `headline-and-subtitle` | 65,84,807,81 | 49.8,64.3,617.8,62.0 |
| `left-plan-card` | 49,185,933,573 | 37.5,141.6,714.3,438.4 |
| `daily-check-panel` | 78,283,876,214 | 59.7,216.5,670.6,163.7 |
| `doctor-orders-panel` | 79,514,876,152 | 60.5,393.3,670.6,116.3 |
| `morning-start-cta` | 78,679,881,59 | 59.7,519.5,674.4,45.1 |
| `overnight-summary-card` | 1000,186,618,213 | 765.6,142.3,473.1,163.0 |
| `doctor-message-card` | 1000,412,619,140 | 765.6,315.2,473.9,107.1 |
| `today-schedule-card` | 1000,562,618,169 | 765.6,430.0,473.1,129.3 |
| `sputnik-assistant-footer` | 44,772,1574,114 | 33.7,590.7,1205.0,87.2 |
| `talk-to-sputnik-button` | 1342,801,254,60 | 1027.4,612.9,194.4,45.9 |

## 5. Main UX rules

- The whole morning plan is **one continuous session**, routine checks plus today's orders; no extra navigation between six tests.
- The first task in the illustrated session is the **fasting blood test** marked *Do first*, not the first routine item. The sequence is adjusted to clinical priorities.
- Progress starts at `0 of 6 completed` in this reference and counts only actually completed tasks; row circles are progress indicators, **not independent shortcuts for marking medical results**.
- `Daily check` and `Doctor’s orders` are expandable/collapsible but remain under one plan and share one Start button.
- The elevated cabin CO₂ notice adds the finger-oximeter check *today*. It must not be a permanent fourth routine measurement in all circumstances.
- The assistant footer stays visible across the measurement flow. The animated orb expands/contracts **only while Sputnik speaks**; include a reduced-motion fallback.
- `Emergency` stays at upper right on all signed-in screens. Its actual flow must follow the approved safety protocol; do not treat this mock as proof of implementation.
- Tablet should auto-lock after 5 minutes of inactivity under the previously agreed policy; account-specific data must not appear on lock screen.
- Do not hardcode `Alex`, `Day 186`, all values or schedule as global constants; these are **sample values from the reference**.

## 6. Domain accuracy notes

- In `Overnight summary`, the text **`↑ 1,200 ppm`** is exactly reproduced from the screenshot. The screenshot does not unambiguously indicate whether this is the **absolute** cabin CO₂ measurement or its **change relative to usual**. Make the data contract explicit before implementing the alert logic.
- `SpO₂ 96%` is displayed as a sample overnight value, not evidence of a confirmed pulse-oximeter reading. Keep the sensor/source distinction in actual code.
- The approximate durations and `8–10 min` are estimates in the design. Do not describe a completed blood laboratory analysis as finished after five minutes if the actual analyzer requires a longer processing phase.
- Doctor portrait and medical data are displayed as *demonstration content*. They are not validated real-world identities or clinical measurements.

## 7. Export notes

The reference logo from an earlier user-provided asset was inspected: **RGBA with transparent corners, 2048×682 px**. This is preferable to the screenshot brand crop. The icon SVGs are original simplified redraws, so compare them against the approved reference and adjust stroke/spacing if exact fidelity is required.