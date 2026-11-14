# Sputnik 2.0 — Blood test screen (Step 1 of Morning Plan): developer handoff

**Reference:** user-provided `План утра_ анализ крови и пропуск шага.png`, 1671 × 941 px (SHA256 `1625b3c72d3fc2f89ddbad0655c018324f450174d484cd30362d204f77fa8dea`). App uses 1280 × 720 logical stage. Pixel coordinates are estimates from a raster, **not** Figma exports. Source screenshot and crops are in the conversation ZIP, not this GitHub folder (see `ASSETS-TO-UPLOAD.md`).

## Existing component library to reuse

**`design/sputnik-morning-dashboard-dev-handoff/`**: `styles/tokens.css`, navigation, glass panels, status pills, common icons, Sputnik footer and active buttons. **Do not create a different palette or header.** Use a single shared layout and integrate this new step screen as content, keeping the six-step list and persistent Sputnik footer. `styles/blood-test.css` in this folder adds only the missing secondary action and reason prompt.

## Discrepancies to correct

1. Generated source image has **Пропустить** in the header position normally reserved for **Emergency**. This is an image generation error, not UX intent: restore **Emergency** there and keep its existing emergency action. **Skip belongs only within the Blood test work panel**, right of the main CTA.
2. Canonical English copy: `Complete your morning checks and today’s medical tasks in one session.`; correct generated gibberish in subtitle. `Blood oxygen (SpO₂)` must be spelled consistently.
3. Keep all six task rows: Blood test (ordered, first before breakfast); Blood pressure; Temperature; Mood & symptoms; Blood oxygen (conditional), Urine test (ordered). Do not assume the blood test is routine daily.
4. Approximate duration `≈ 5 minutes` is **active demo time**, **not** confirmed time to obtain a lab result. Per `docs/analizy-i-zamery-ux.md`, a panel may require 5–10 minutes for sampling/setup, with analyzer turnaround up to 2–3 hours. Keep exact actual analyzer workflow configurable, do not fabricate results.

## Detailed UI structure

- Header: Sputnik branding; Morning active, Trends, Doctor, Profile; onboard network, mission day, battery, **Emergency**.
- Title: **Morning Plan**, one-line subtitle.
- Stepper: **1 Blood test** active cyan; **2 Pressure**, **3 Temperature**, **4 Mood**, **5 Oxygen**, **6 Urine** inactive; right `Step 1 of 6 · ≈ 5 min`.
- Left glass card: **Plan for this session**, `0 of 6 completed`, six rows. Active doctor-order row highlighted amber.
- Right glass card: Doctor’s order, **Before breakfast** amber pill; **Blood test**, about 5 min; stages **Prepare / Collect / Analyze / Result**; illustrated analyzer (reference only), three short preparation instructions.
- Footer in right card: primary cyan **Continue to collect sample** and secondary outlined **Skip for now** on same row, aligned height.
- Bottom shared assistant bar with orb, text, `Talk to Sputnik`.

Detailed bounds in `spec/layout.json`; canonical copy in `spec/content.en.json`. Render text, icons and controls as real HTML/CSS/SVG, not screenshots.

## Skip behavior (approved rule + minimal-interaction UI proposal)

Source: `docs/04-interfeys-i-vzaimodeystvie.md`, **Пропуск шага (решение Анны 07.11.2026 23:22)**:
- Every step can be skipped without blocking the astronaut, even when a device fails.
- Skipped step is **grey Not measured / Нет замера**, never green completed.
- Sputnik asks one-tap reason: **Device not working**, **No time**, **Prefer not to say**.
- Only device problem creates a technical note for the onboard medic and engineer. Other private reasons are not transmitted.
- Scheduled reminders and later remeasurement remain possible. Three skips in a row trigger informational Sputnik observation, **not** a medical zone.
- Doctor-ordered mandatory steps may have stronger *protocol-defined* warnings, but do not invent a forced confirmation or escalation.

### Low-friction implementation

Tap **Skip for now** → immediately mark Blood test as **skipped/not measured** → keep doctor order outstanding and `0 of 6 completed` (with optional `1 skipped`) → open step **2 Blood pressure**. Show a small non-blocking reason prompt within the panel/assistant area. A reason is one tap; it can be dismissed. Give the short warning **“This doctor-ordered test will remain incomplete.”** without requiring a second confirmation.

This one-tap advance with a post-skip optional reason is a **design proposal** to implement the documented non-blocking principle, not a separately approved specification for prompt timing.

### Data and safety

- Store `status=skipped` separate from verified measurement results; never fake values.
- The doctor summary may say **Blood test: not performed**; do not transmit private skip reasons beyond the documented device-failure exception.
- Keep skipped test available for retry later and preserve audit history.
- Emergency remains globally accessible and its label must never change to Skip.
- Voice command **skip** follows the same transition.
- No color-only status: text/icon and accessible name required.

## Files

`spec/layout.json` — coordinates; `spec/content.en.json` — UI copy; `spec/interaction-state.json` — state machine; `spec/acceptance.md` — QA; `styles/blood-test.css` — extension of shared design tokens; `icons/skip.svg` — optional skip glyph; `ASSETS-TO-UPLOAD.md` — binary screenshot/crop list.

**No application logic, doctor orders or sensor source files are changed in this commit.**
