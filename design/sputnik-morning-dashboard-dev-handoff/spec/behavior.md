# Morning Dashboard — data model, navigation and states

## Named regions

1. **Top navigation:** `Morning` active, `Trends`, `Doctor`, `Profile`; network, mission day, battery, `Emergency`.
2. **Morning plan:** section title, `0 of 6 completed`, six progress marks, two collapsible groups, single CTA.
3. **Overnight summary:** sleep, cabin CO₂, SpO₂, contextual notice.
4. **Doctor:** new-message indicator plus excerpt; opens Doctor conversation (must not silently mark orders complete).
5. **Schedule:** morning session and scheduled ultrasound; opens schedule detail when appropriate.
6. **Sputnik footer:** orb + text + Talk action.

## Interaction mapping

| UI | User action | Intended behavior |
|---|---|---|
| Morning tab | Tap | Current page, selected |
| Trends tab | Tap | Show trends, preserve user profile |
| Doctor tab | Tap | Show consultations/orders |
| Profile tab | Tap | Show private profile |
| Emergency | Tap | Enter approved emergency flow, not mock button |
| Daily check chevron | Tap | Expand/collapse four routine rows |
| Doctor orders chevron | Tap | Expand/collapse two ordered tests |
| `Start morning plan` | Tap | Start unified six-step task session; show priority fasting blood test first |
| Doctor message | Tap | Open full Doctor message thread |
| Schedule row | Tap | Open related agenda entry |
| `Talk to Sputnik` | Tap | Engage voice assistant; show listening/speaking and network/permission states |
| Sputnik orb | Activity indicator | Expand/contract during assistant speech; no fake voice data |

## Data/flags (examples only)

`mission_day`, `crew_name`, `plan_steps`, `plan_completed_count`,
`doctor_order_ids`, `fasting_required`, `added_today_reason`,
`overnight_sleep`, `co2_sensor_value`, `co2_baseline`,
`overnight_spo2_value`, `source_device`, `messages_unread_count`,
`schedule_events`, `assistant_mode` (`idle/listening/speaking/error`).

The screenshot contains presentation strings, *not* an underlying API/schema. Types/IDs above are proposed integration fields.

## States that still need separate designs

Loading/sensor unavailable, no doctor message, no additional check, morning plan partly/fully completed, measurement skipped, new doctor order while in session, voice permission denied, emergency entered, lower battery, other language, and no internet/Earth connection. No such state is shown in the source screenshot.
