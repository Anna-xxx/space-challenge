# QA — Blood test + Skip (Step 1)

- [ ] Emergency remains the top-right orange emergency action; its label was accidentally changed to Пропустить in the generated image.
- [ ] Skip for now is only the secondary control beside Continue in the right-hand test panel.
- [ ] Uses shared Morning Dashboard components and tokens; 1280×720 scene, two panes and persistent footer.
- [ ] The left plan shows six task rows with correct order and durations; Blood test active/amber.
- [ ] Progress shows 0 of 6 completed before this step; six-step horizontal indicator highlights Blood test.
- [ ] Four substeps Prepare / Collect / Analyze / Result; first has three short setup instructions.
- [ ] Primary Continue moves to Collect without marking the full blood test completed.
- [ ] Skip advances immediately to Blood pressure with 0 completed and 1 skipped.
- [ ] Skipped blood test is grey Not measured, not a green check, and remains an outstanding doctor's order.
- [ ] Sputnik asks a single-tap reason without a blocking modal; dismissing reason cannot block next step.
- [ ] Device not working creates a technical fault notification to onboard medic and engineer; other reason texts are not transmitted.
- [ ] Doctor-facing report can say blood test not performed, without sharing personal reasons.
- [ ] User can retry the blood test later; previous skip remains auditable.
- [ ] No fake analyzer result, medical diagnosis, or danger-zone assignment from skipped status.
- [ ] English labels, SpO₂ formatting and accessible status icon/text are correct.
- [ ] Blood lab result is not promised in five minutes without a verified device/protocol.
