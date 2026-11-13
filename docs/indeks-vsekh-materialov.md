# Sputnik 2.0: все документы и экраны (индекс на 07.11.2026, 21:40)

Пометки: **актуально** = обновлено после правок 07.11; **черновик** = ждёт решения Анны; **старое** = до 07.11, может расходиться с решениями; **архив** = не править, новое идёт в docs/.

## 1. Экраны для прототипа «Борта»

Прототип: https://claude.ai/artifact/2fB5BiFAeWQYmFGRKoGCmM (актуально, 07.11 21:15). Код: app/. Разработчик повторяет принятые макеты точно; сверка лежит в app/screenshots/ (original-* = макет, app-* = как в приложении).

### Приняты 07.11 (design/prinyato/)

| № | Экран | Файл |
| --- | --- | --- |
| 1·0 | Вход | design/prinyato/1-0-vhod-prinyato-07-11.png |
| 1·1 | Доброе утро, шаг 1 «Давление» | design/prinyato/1-1-dobroe-utro-prinyato-07-11.png |
| 1·2 | Шаг 2 «Температура» | design/prinyato/1-2-shag2-temperatura-prinyato-07-11.png |
| 1·3 | Шаг 3 «Кислород в крови» | design/prinyato/1-3-shag3-kislorod-prinyato-07-11.png |
| 1·4 | Шаг 4 «Настроение» | design/prinyato/1-4-shag4-nastroenie-prinyato-07-11.png |
| 1·5 | Шаг 5 «Тест реакции» | design/prinyato/1-5-shag5-test-reaktsii-prinyato-07-11.png |
| 1·6 | Что дальше | design/prinyato/1-6-chto-dalshe-prinyato-07-11.png |
| 2·0 | Графики | design/prinyato/2-0-grafiki-prinyato-07-11.png |
| 3·0 | Тревога: отсчёт | design/prinyato/3-0-trevoga-otschet-prinyato-07-11.png |
| 3·1 | Тревога: что случилось | design/prinyato/3-1-chto-sluchilos-prinyato-07-11.png |
| 3·2 | Тревога: делай по порядку | design/prinyato/3-2-delay-po-poryadku-prinyato-07-11.png |
| 4·0 | Быстрый замер | design/prinyato/4-0-zamer-prinyato-07-11.png |

Там же: design/prinyato/html/ (dalshe, itog-oranzh, profil, radiaciya) и вырезки картинок design/prinyato/vyrezki/.

### Черновики 07.11, ждут «да» Анны

| Экран | Где |
| --- | --- |
| 5·0 Профиль | https://claude.ai/artifact/JUXVK1XU24mWZFbDR9LoZp («Экраны на проверку»), design/sputnik-ekrany/5-0-profil-chernovik.png |
| 1·7 Итог утра, оранжевая зона | design/sputnik-ekrany/1-7-itog-oranzh-chernovik.png |
| 3·2 SOS с источником | design/sputnik-ekrany/3-2-sos-s-istochnikom.png |
| Карточка радиации | design/sputnik-ekrany/radiaciya-kartochka-chernovik.png |

### Макета ещё нет

- «Ты в порядке?» (автотревога браслета, 30 секунд).
- «Земля»: панель очереди сообщений (в очереди / отправлено / доставлено).
- Тревога «Мне плохо» / «Боль в груди»: свой шаг, ждёт решения Анны.
- Врач (переписка с Землёй), экран «гость» для замера на жюри.
- Анализы, «УЗИ почки: шаг 2 из 6», Аптечка.

### Старые макеты (до 07.11)

- Холст всех экранов: https://claude.ai/artifact/7mm8824jkhtCTkTtahfNFQ (старое, 07.11 12:12).
- Исходники экранов: design/sputnik-ekrany/*.dc.html и снимки *.png (старое, 01–02.11); пакет для холста design/publish-paket/project/.

## 2. Слайды и презентация

Отдельной презентации (слайдов для выступления) пока нет. Есть только слайд «Передача данных» design/sputnik-ekrany/peredacha-slide.png (старое, 01.11) и схема программы ba/skhema-programmy/ (+ https://claude.ai/artifact/DeS4Z2v65SvwFSMtSotduR, старое).

## 3. Шесть документов проекта (docs/, актуально 07.11)

| Документ | О чём | Файл |
| --- | --- | --- |
| 00 Документы проекта | Оглавление, статусы оборудования, уровни источников | docs/00-dokumenty-proekta.md |
| 01 Обзор продукта | Проблема, решение, сценарии, чего не делаем | docs/01-obzor-produkta.md |
| 02 Научное и медицинское обоснование | Организм в полёте, что меряем, пороги, источники | docs/02-nauchnoe-i-medicinskoe-obosnovanie.md |
| 03 Архитектура | Приборы, бортовой узел, связь Борт–Земля, ИИ | docs/03-arkhitektura-sistemy.md |
| 04 Интерфейс | Вход, меню, утро, тексты, голос, демо | docs/04-interfeys-i-vzaimodeystvie.md |
| 05 Безопасность и приватность | Зоны, тревога, доступ, границы ИИ | docs/05-bezopasnost-i-privatnost.md |
| 06 Журнал решений | Дата, кто, что, почему | docs/06-zhurnal-resheniy.md |

## 4. Для публики и жюри

| Что | О чём | Где | Статус |
| --- | --- | --- | --- |
| Сайт | 8 страниц для публики | https://claude.ai/artifact/5e6ZLjhifv1xMnJDFdeVhm; тексты ba/sayt-dlya-publiki.md | актуально |
| Сайт на английском | Перевод текстов | ba/site-for-public-en.md | отложен |
| Питч 2 мин | RU, 60 сек, EN, ES | creative/pitch-2-min.md | актуально (черновик 4) |
| Сценарий видео 30 сек | Кадры и текст «Не пропускай чек-ап» | https://claude.ai/artifact/S7tdpG4HutxEGLKJGwMn8j | старое (29.10) |
| Вводная | Миссия, экипаж 4 человека | ba/vvodnaya.md | актуально |
| Проблема и решение | Коротко | https://claude.ai/artifact/JgnUQ6seP4XhSbipvyEaEG | актуально |
| Сценарии использования | | https://claude.ai/artifact/WgZDSrieLbwzsSQEZJiFvX | актуально |
| Почему устроено так | 12 разделов | https://claude.ai/artifact/X4vnFEDJVu9wU5aHvKaCSt | старое (02.11) |
| Проблемы и решения | | https://claude.ai/artifact/7D9JsHWYeeRmzp9jzu88HP | старое |
| Организм в космосе | | https://claude.ai/artifact/QCBbwFsrBFjhSwwAKTdRws | старое |
| Гаджеты | Что носим и чем меряем | https://claude.ai/artifact/BdzQ36dfKHHVFWmhJutH3q | черновик 07.11 |
| Как космонавт общается с системой | 6 способов | https://claude.ai/artifact/LNndKrqfHmvEbSxSVJekpA | черновик 07.11 |
| Сейчас и Sputnik 2.0 | 10 пар с фото | https://claude.ai/artifact/Ema33HMR6EnmjSfcuaU7g4; ba/stranitsa-seychas-i-predlagaem.md | старое |

## 5. Рабочие файлы команды

**БА (ba/):** analizy-i-zamery-ux (UX, актуально), peredacha-dannykh (актуально), rol-ii (актуально), rezhim-marsa, adaptatsiya-dlya-zhenshchin, ekran-profil, stsenariy-trevoga, zadanie-razrabotchiku-karkas, zadaniya-po-vneshnemu-razboru-07-11, prototip-teksty-proshche, instrukciya-glm, kosmonavty-issledovanie (большое исследование) — все 07.11. Старые: analizy-i-issledovaniya, grafiki-ekran, stsenarii-zamer-i-privatnost, proverka-ekrana-utro-1-1, zamery-volontyor, resheniya-i-kadry-dlya-video, stil-rekomendatsiya. **Архив:** ba/obosnovanie-resheniy.md и https://claude.ai/artifact/DjAu9jbZC2YFHbnJXemB1J.

**Доктор (doctor/):** aptechka, protokol-davleniya-i-normy, otvet-po-vneshnemu-razboru-07-11 (актуально 07.11); medicinskiy-razbor (+ https://claude.ai/artifact/LYAAp3PXbqe3UokH9iqCju), obosnovanie-shagov-bez-soznaniya, scenariy-bez-soznaniya, instruktsii-trevogi, cheklist-medika-bez-soznaniya, ekg-podskazki-ii, rubashka-noch (старое, 01–02.11).

**Дизайн (design/):** frazy-sputnika, slovar-i-pravki-tekstov (словарь терминов), tekst-utro-na-chitku, glossary-en, shutki-en, logo/ (10 вариантов, выбран №8), foto/ (фото NASA и ссылки на приборы), sayt/index.html (вёрстка сайта, 07.11).

**Инженер:** engineer/skhema-i-datchiki.md (+ https://claude.ai/artifact/QnaHU5L6jMcM5Fqy4GPZ9e), старое 02.11.
**Космонавт:** kosmonavt/opyt-i-kharakter-kosmonavtov.md (+ https://claude.ai/artifact/BYfu7rLqaUsfvzhuqPFXxB), vychitka-utro-2-1, ocenka-rubashka.
**Озвучка:** ozvuchka/plan-ozvuchki-sputnika.md. **Сценарист:** scenarist/chitka-utro*.md.
**Креатив:** creative/zadanie-original-en.md и zadanie-perevod.md (задание NASA), research-health-on-station.md.

- ba/braslet-sputnik-koncept.md: концепт браслета «Спутник» для Марса (08.11.2026, статус «предлагаем для Марса»; в демо имитация).

## Добавлено 10.11.2026

- ba/ekran-vrach.md: экран «Врач» (три части про врача, лекарства, запасы, обследования по своему желанию в «+ Замер»); макет Дизайнера design/vrach/doctor.png (английский).
- ozvuchka/frazy-dlya-prototipa.md: 25 фраз Спутника для озвучки прототипа (имена mp3 для app/audio/).
- ba/sayt-dlya-publiki.md, раздел 1 «Проблема»: восемь карточек «Сейчас на МКС / У Марса / Мы предлагаем» по ТЗ Анны.
- ba/analizy-i-zamery-ux.md, дополнения 10.11: карточки «Пока ты спал» и «Сон», шаг «Настроение» (вариант A).
- ba/grafiki-ekran.md, дополнение 10.11: голос и разговор на «Графиках», фраза у каждой карточки.
- ba/rol-ii.md, правило 10.11: система помогает понять цифры и даёт советы; три уровня советов (космонавт, бортмедик, врач).
- Прототип: английский по умолчанию, EN | ES | RU; аудит design/audit/Sputnik_2_0_UX_Audit_EN_2026-11-10.docx.

## Добавлено 11.11.2026

- ba/ii-pomoshchnik-po-zdorovyu.md: ИИ-помощник по здоровью, девять функций (решение Анны 11.11).
- ba/stranitsa-proekta-space-apps.md: семь полей страницы проекта Space Apps (EN+RU), кейс «до и после», польза для Земли, 7 слайдов.
- ba/sputnik-smotrit-kamera.md: шаг «Спутник смотрит», проверка внешнего вида по камере (решение Анны 12.11).
- ba/sputnik-blok-dlya-prezentatsii.md: блок про Спутника для презентации (EN, 5 предложений + тезисы).
- ba/zemlya-chto-vidit-vrach.md: что сегодня видит врач полёта на Земле, как реагирует, проблемы и наше решение (12.11, источники NASA/CSA/NTRS).
- ba/ekran-bortmedika-otsenka-sostoyaniya.md: экран бортмедика «Оценка состояния», помощь Спутника в диагнозе для Марии и врача (12.11).
- ba/server-trebovaniya.md: требования БА к серверу (13.11).
