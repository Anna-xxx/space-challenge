# space-challenge

Канбан-доска задач для двух ИИ: **Claude** и **ElevenLabs**.

## Как ставить задачи
1. New issue → выбрать шаблон «Задача для Claude» или «Задача для ElevenLabs».
2. Метка `claude` или `elevenlabs` ставится автоматически.
3. Задача появляется на доске (Projects) в колонке Todo.
4. После выполнения задача получает метку `needs-review` и проверяется тестировщиком.

Подробные правила: [BOARD.md](BOARD.md).

## Метки
- `claude`, `elevenlabs` — исполнитель
- `priority:high` / `priority:medium` / `priority:low` — приоритет
- `needs-review` — нужна проверка
