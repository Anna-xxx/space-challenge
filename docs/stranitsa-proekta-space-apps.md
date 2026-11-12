# Страница проекта Space Apps: семь полей, кейс «до и после», польза для Земли

11.11.2026, БА. По решению Анны «да, добавляем всё» (ветка «Анализ победителей», раздел 4, пункты 1, 2, 4, 5, 6, 7). Цифры только из листа фактов (ba/prezentatsiya-struktura-i-fakty.md) и правил Доктора (doctor/protokol-davleniya-i-normy.md, app/data/thresholds.json). Английский текст для формы Space Apps, под ним русский для проверки Анной. Ссылки на видео и сайт вставить в день подачи.

Статус: черновик БА, ждёт проверки Анны. Кейс «до и после» (раздел 2) просьба показать Доктору.

## 1. Семь полей страницы проекта

### 1.1 Summary (5–6 предложений)

**EN.** Sputnik 2.0 is a tablet app for a crew of four on the way to Mars, built on NASA-STD-3001 crew health requirements and the five hazards of NASA's Human Research Program. Each morning it collects blood pressure, temperature and mood in two to three minutes and takes sleep, pulse and cabin CO₂ from the bracelet and ship sensors by itself. Instead of textbook limits it compares every number with the person's own in-flight baseline, so a reading that looks normal on Earth but is high for this astronaut gets noticed. Sputnik, the on-board assistant, explains each number in plain words and voice, suggests one action, and never makes a diagnosis. The ship decides on board; a short report reaches the flight surgeon on Earth whenever the 44-minute round trip allows, and emergencies follow the doctor's pre-approved checklist without waiting for Earth. The same approach helps anyone whose doctor is far away: polar stations, ships, remote villages.

**RU.** Sputnik 2.0 это приложение на планшете для экипажа из четырёх человек на пути к Марсу, построенное на требованиях NASA-STD-3001 к здоровью экипажа и пяти угрозах программы NASA по исследованию человека (HRP). Каждое утро за две-три минуты оно собирает давление, температуру и настроение, а сон, пульс и CO₂ в кабине берёт с браслета и датчиков корабля само. Вместо учебных порогов оно сравнивает каждую цифру с личной нормой человека в полёте, поэтому значение, нормальное на Земле, но высокое для этого астронавта, будет замечено. Спутник, бортовой помощник, объясняет каждую цифру словами и голосом, предлагает одно действие и никогда не ставит диагноз. Борт решает сам; короткий отчёт доходит до врача на Земле, когда позволяют 44 минуты туда-обратно, а при беде экипаж идёт по заранее утверждённому чек-листу врача, не дожидаясь Земли. Тот же подход помогает всем, у кого врач далеко: полярным станциям, кораблям, дальним посёлкам.

### 1.2 Project Demonstration

**EN.** 30-second video: [ссылка на YouTube, вставить]. Slides (7): [ссылка, вставить]. Both in English, no NASA logos.

**RU.** Ролик 30 секунд и 7 слайдов, по-английски, без логотипов NASA. Ссылки вставить в день подачи (ролик собирает Сценарист, слайды БА и GPT).

### 1.3 Project

**EN.** Public site: https://claude.ai/artifact/5e6ZLjhifv1xMnJDFdeVhm (8 sections: intro, problem, solution, morning check, Sputnik, alarm, bracelet, team). Working prototype «On board»: [ссылка после «выкладывай», сейчас закрытый предпросмотр]. The prototype runs in a browser on a tablet; demo data for crew member Alex, mission day 47 of 210.

**RU.** Сайт для публики и прототип «Борт». Ссылку на прототип вставить после того, как Анна скажет «выкладывай» и код ляжет на Cloudflare Pages. Данные демо смоделированы: космонавт Alex, 47-й день из 210.

### 1.4 Project Details

**EN.**

*How it works.* Morning check in three steps (blood pressure with a repeat after 5 minutes when needed, ear temperature, mood 1–5 with a list of complaints), a reaction test on Mondays, oxygen saturation when the night CO₂ was above usual. The bracelet gives sleep, night pulse, HRV and SpO₂; the ship gives cabin CO₂ and radiation dose. Rules compute one of four zones for each number: within your range, needs attention, needs attention soon, action required. The personal baseline is the median of the last 14–28 valid mornings, frozen during illness and after exercise; absolute safety limits work from day one. Sputnik, the assistant, turns the number into a sentence («Your pressure is 16 above your usual. Cabin CO₂ was high last night. Let's repeat in five minutes»), can be asked questions, and gives three levels of advice: short for the crew member, extended for the crew medic, a summary for the Earth doctor. It never diagnoses, never names medicines, never predicts; orange and red always say «call the crew medic».

*Doctor on Earth.* One screen for the conversation with Earth: messages with the delay shown, the doctor's assignments in one list by date, results of assigned checkups, medicines prescribed with counts left. The astronaut always sees what Earth will see; scores and complaints go to the doctor, a personal note goes only when the person chooses.

*Alarm.* Six steps for «crew member unconscious» from the doctor's checklist (ERC 2021, Hinkelbein 2020), read by voice; the bracelet asks «Are you OK?» for 30 seconds before raising the alarm; the crew medic is called within 40 seconds; Earth catches up later with a recorded message.

*Solar storm.* When NASA DONKI reports a solar flare, the morning screen shows a card: «NASA reports a flare. Go to the shelter. Your bracelet dosimeter is counting the dose.» (live NASA data; in the demo a real flare from the DONKI archive).

*Benefits.* Changes are seen on the day they start, not at the next exam. Fewer false alarms from Earth limits (in flight blood pressure runs about 10 lower, core temperature about 1 °C higher, sleep about 6 hours). Fewer hidden complaints: the astronaut sees exactly what Earth sees. Emergencies handled on board. For women: cycle tracked as an ordinary indicator, one app, no «female mode».

*What is real and what is ours.* Every device and function carries one of five statuses: on the ISS today, tested in space, proposed for Mars, works in the prototype, simulated. Zone thresholds are project rules checked by the project doctor, not NASA norms. Demo data are simulated.

*Creative elements.* «It compares you with you, not with a textbook.» Sputnik speaks in a calm voice, never jokes about health, never says «fit» or «unfit». The on-board case below shows the difference a personal baseline makes.

**RU.** То же по-русски короче: утро в три шага, браслет и датчики корабля, четыре зоны, личная норма по медиане 14–28 утр с заморозкой при болезни, абсолютные пороги с первого дня, Спутник объясняет и советует на трёх уровнях без диагнозов и лекарств, экран «Врач» как одно место разговора с Землёй, тревога по чек-листу врача, карточка «Солнечная буря» по данным NASA DONKI, пять статусов честности, пороги проектные. Полный текст по-английски выше; русские источники: docs/01, 03, 04, 05.

### 1.5 Use of AI

**EN.** AI tools we used: Claude (project texts, decision logic, documentation, prototype code, and the Sputnik assistant inside the product), ChatGPT (reviews of screens and slide text), Google Veo 3.1 and ElevenLabs Image (video and key frames for the 30-second clip), ElevenLabs (voice of Sputnik and the video narration). All product decisions, medical rules and fact checks were made by the team with a physician reviewing the thresholds and alarm steps. Inside the product the AI explains numbers and suggests one action; zones are set by rules, and the AI never diagnoses, prescribes or predicts. No NASA logos or branding were produced with AI.

**RU.** Честный список: Claude (тексты, логика, документы, код прототипа, Спутник в продукте), ChatGPT (разборы экранов и текст слайдов), Veo 3.1 и ElevenLabs Image (ролик и кадры), ElevenLabs (голос). Решения, медицинские правила и проверка фактов за командой, пороги и шаги тревоги смотрел врач. ИИ в продукте объясняет и советует, зону ставят правила. Логотипов NASA ИИ не рисовал.

### 1.6 NASA Data

**EN.**

Used in the product:
- NASA DONKI (Space Weather Database of Notifications, Knowledge, Information): solar flare notifications drive the «Solar storm» card. Live API in the prototype after 13 November 2026; demo uses an archived flare.
- NASA-STD-3001, Vol. 1 (Crew Health) and Vol. 2 (Human Factors, Habitability): crew health requirements and the habitat limits (CO₂, radiation) behind our zone rules and the «what the body does in flight» section.
- NASA Human Research Program, five hazards and Evidence Reports: the list of risks our indicators map to (radiation, isolation, distance from Earth, gravity fields, hostile environment).
- NASA NTRS 20230012629 (Mars mission design 2023): crew of four, about 850 days, communication delay up to 22 minutes one way, about two weeks without a link at solar conjunction. These numbers set the mission mode of the app.

Used as background:
- NASA OCHMO-TB-004 Rev. D (Carbon Dioxide): CO₂ limits and the «ten times Earth» figure.
- NASA Sleep-Long study, NTRS 20090014820: about six hours of sleep in flight.
- NASA ISS Medical Emergency Manual 2016, NTRS 20100042371: medical equipment and procedures on the ISS today.
- NASA HRP bone loss figures: 1–1.5 % a month without exercise.

**RU.** В продукте: DONKI (солнечные вспышки), NASA-STD-3001 т. 1 и 2 (здоровье экипажа, пределы обитаемости), HRP (пять угроз), NTRS 20230012629 (экипаж 4, 850 дней, 22 минуты, две недели без связи). Как фон: OCHMO-TB-004 (CO₂), Sleep-Long (сон 6 ч), ISS Medical Emergency Manual (что есть на МКС), HRP (кости).

### 1.7 Space Agency Partner & Other Data

**EN.** No partner-agency data. Other sources: Stahn et al., Scientific Reports 2017 (core temperature in flight); Norsk et al., J Physiol 2015 (blood pressure in flight); Barger et al., Lancet Neurology 2014 (sleep on the ISS); ACC/AHA 2017 and ESH 2023 guidelines (how to measure blood pressure, thresholds); AHA 2019 Scientific Statement (cuff size, talking during measurement); ERC Guidelines 2021 and Hinkelbein et al. 2020 (resuscitation in microgravity). Validated device lists: validatebp.org, stridebp.org.

**RU.** Данных партнёрских агентств нет. Прочие источники: Stahn 2017, Norsk 2015, Barger 2014, ACC/AHA 2017, ESH 2023, AHA 2019, ERC 2021, Hinkelbein 2020, списки проверенных приборов.

### 1.8 References (отдельное поле или в конце Project Details)

**EN.** Demo video: scenes generated with Google Veo 3.1 (image-to-video) inside ElevenLabs Image & Video; voices created with ElevenLabs Voice Design (synthetic, no real people's voices) and Eleven v3 text-to-speech; sound effects generated with ElevenLabs Sound Effects; assembled in ElevenLabs Studio. All generated assets are used under the ElevenLabs paid-plan commercial licence. No music or third-party tracks. Tablet screens and logo by the team. Photos of Mars: [источник с правом использования, указать]. Code: HTML, CSS, JavaScript, no external libraries; NASA DONKI API (api.nasa.gov).

**RU.** Текст References для видео дал Сценарист 11.11: музыки в ролике нет, только сгенерированные голоса и шумы, лицензия платного плана ElevenLabs. Фото Марса на сайте и слайдах: нужен источник с правом использования (NASA image library разрешает, но без логотипа NASA).

## 2. Кейс «до и после» с цифрами (БА, проверить Доктору)

Правка к пункту 5 анализа победителей: там написано «по земной норме дало бы тревогу, по личной это жёлтая». По протоколу Доктора всё наоборот: в полёте давление ниже примерно на 8–10, и земная норма даёт ложное «всё хорошо» при настоящем росте. Кейс ниже строится на этом.

**Утро Alex, 47-й день полёта.** Его норма в полёте 118/76 (медиана 14–28 последних утр). Утренний замер 134/86. Демо-цифра 134/86 или 138/88 у Анны ещё не выбрана; кейс одинаково работает с обеими.

| | По земному учебнику («до») | По личной норме Alex («после», Sputnik 2.0) |
|---|---|---|
| Что видит система | 134/86 ниже общего порога тревоги 140/90, обычный трекер молчит, ничего не происходит | 134 выше нормы Alex на 16 при пороге +15: зона «Needs attention», причина рядом с цифрой |
| Что видит Alex | Зелёную галочку | «Давление на 16 выше твоего обычного. Ночью CO₂ в кабине был выше обычного, сон 5 ч 40 мин. Повторим через 5 минут» |
| Что происходит дальше | Рост замечают через недели, на плановом осмотре или когда станет плохо | Повтор через 5 минут. Если жёлтый держится, перемерь вечером. Три жёлтых утра подряд дают оранжевую зону, и Спутник предлагает сказать бортмедику сегодня |
| Что делает врач на Земле | Не знает: цифра «в норме» в отчёт как событие не попала | Видит в отчёте «134/86, +16 к норме, CO₂ ночью выше обычного» и отвечает, когда может; ждать до 44 минут, чтобы понять, что происходит, не нужно, борт уже объяснил |
| Чем кончается | Пропущенное изменение | Изменение замечено в первое же утро |

Цифры: норма 118/76 и день 47 из app/data/profile-aleksey.json; порог +15 к норме и 140/90 из app/data/thresholds.json (таблица Доктора); «в полёте ниже примерно на 8–10» Norsk 2015; CO₂ и сон из листа фактов. Проверено Доктором 11.11 (ветка «Памятка Доктора для ИИ-помощника»), правки внесены.

**EN для слайда и страницы.** Day 47. Alex's in-flight baseline is 118/76; this morning reads 134/86. It is below the common 140/90 alarm line, so a standard tracker stays silent and the rise is found weeks later. Sputnik 2.0 compares it with Alex: 16 above his usual, «needs attention», with the reason next to the number: cabin CO₂ was above usual last night, sleep 5 h 40 min. A repeat in five minutes, an evening check if it stays yellow, and the Earth doctor sees the same line in the morning report. The change is caught on the first morning, and nobody waits up to 44 minutes to find out what is going on.

## 3. Строка про пользу на Земле (Galactic Impact, Most Inspirational)

**EN.** A doctor who is far away is not only a Mars problem. Polar stations, ships at sea, oil platforms, mountain huts and remote villages all have the same gap between a person and a physician. Sputnik 2.0 needs a tablet, a cuff, a thermometer and a bracelet; the rules and the assistant are the same. «Compare me with me, explain the number, call a person when it matters» works wherever Earth answers late.

**RU.** Врач далеко не только у Марса: полярные станции, корабли, платформы, горные приюты, дальние посёлки. Нужны планшет, манжета, термометр и браслет; правила и Спутник те же. «Сравни меня со мной, объясни цифру, зови человека, когда надо» работает везде, где Земля отвечает поздно.

## 4. Семь слайдов по схеме Gaia+LEO (для БА и GPT)

Из 12 слайдов ba/prezentatsiya-struktura-i-fakty.md для страницы проекта собираем 7; 12 остаются для живого питча.

| № | Слайд | Берём из 12-слайдовой структуры |
|---|---|---|
| 1 | Sputnik 2.0. Your companion on the journey to Mars | Слайд 1 (логотип, три принципа) |
| 2 | Team and process: Anna + Claude, ChatGPT, ElevenLabs, Veo | Слайд 12, без плана «что дальше» |
| 3 | The problem, with numbers and footnotes | Слайды 2 и 3 вместе: 44 минуты, около двух недель без связи за миссию, нормы учебника, скрытые жалобы; сноски на NTRS 20230012629, Norsk 2015, Stahn 2017 |
| 4 | The solution: compares you with you | Слайды 5 и 7: личная норма, четыре зоны, Спутник объясняет, не решает |
| 5 | How the zone is computed | Слайд 5: медиана 14–28 утр, заморозка, абсолютные пороги, «проектные, проверены врачом»; кейс «до и после» из раздела 2 |
| 6 | Demo: screens of «On board» | Слайд 6 + экран «Врач» + карточка «Солнечная буря» |
| 7 | Result and motto | Слайд 11 (пять статусов честности, одной строкой) + польза для Земли (раздел 3) + «Compares you with you, not with a textbook» |

Девиз на титуле «Your companion on the journey to Mars» взят из финального кадра ролика (10.11).

## 5. Что нужно от других

- Анна: выбрать демо-цифру 134/86 или 138/88; проверить Summary и Use of AI; сказать, какие ссылки будут в день подачи.
- Сценарист: ссылка на ролик (YouTube, английские субтитры).
- Питч: взять раздел 3 в текст питча.
- Разработчик: после «выкладывай» адрес прототипа для поля Project.
