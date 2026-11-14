# Acceptance checklist for developer

- [ ] Screen matches source `reference/approved-morning-screen.png` at 1672×941, or matches scaled 1280×720 counterpart.
- [ ] Top navigation is one line, main action highlighted, and Emergency fixed at the right edge.
- [ ] Hero title is readable without intruding into status/navigation.
- [ ] Left and right columns align at top; right-hand cards have consistent visual borders and spacing.
- [ ] Progress has six indicators, and only confirmed completed tasks increment the count.
- [ ] Oxygen check appears as conditional **Added today** item.
- [ ] Blood test is marked **Fasting / Do first**, doctor's order, ~5 min in demo.
- [ ] Routine rows, doctor rows, and schedule rows remain separate semantic components.
- [ ] Assistant orb uses animated CSS only in speaking state and respects prefers-reduced-motion.
- [ ] Text remains editable and localizable; do not use baked screenshot text in production DOM.
- [ ] Dr. Rivera portrait and demo values are placeholders; actual data is profile-specific.
- [ ] Health data is not shown on locked shared tablet.
- [ ] Keyboard/touch areas are large enough; focus-visible, non-color status text and contrast reviewed.
- [ ] Dynamic source/interpretation of CO₂ `↑ 1,200 ppm` is clarified in API contract before real alerts.
- [ ] Network status, battery and mission day come from state rather than the screenshot.
- [ ] UI output never assumes mocked doctor instructions are real medical orders.
