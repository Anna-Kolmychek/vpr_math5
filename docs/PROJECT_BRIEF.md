# PROJECT BRIEF — ВПР Математика 5 класс

Этот файл содержит все принятые архитектурные и дизайнерские решения.
Передавай его в начале каждой новой сессии разработки.

---

## Стек

- **Фреймворк:** React + Vite
- **Стили:** Tailwind CSS v4 + CSS-переменные (темы)
- **Роутинг:** React Router v7
- **Хранилище:** localStorage (бэкенд не нужен)
- **Граф знаний:** react-flow (устанавливается в Части 4)

---

## Навигация

- **Нет нижней панели навигации** — только Home как хаб
- Внутри каждого раздела — кнопка «←» в шапке, возвращает на `/`
- Шапка (Header): кнопка назад + название раздела + переключатель темы

### Маршруты

| Путь | Страница |
|------|----------|
| `/` | `Home.jsx` — главный экран |
| `/vpr/:part` | `VPR.jsx` — прохождение ВПР (part = 1 или 2) |
| `/vpr/results` | `VPRResults.jsx` — результаты ВПР |
| `/topics` | `TopicsList.jsx` — список тем |
| `/topics/:id` | `TopicDetail.jsx` — прохождение темы |
| `/graph` | `TopicsGraph.jsx` — граф знаний |

---

## Темы оформления

Две темы: `light` (по умолчанию) и `dark`.
Переключение через `data-theme` на `<html>`, сохранение в `localStorage['theme']`.

Шрифт: **Nunito** (Google Fonts), подключён в `index.html`.

### CSS-переменные (определены в `src/index.css`)

| Переменная | Светлая | Тёмная |
|------------|---------|--------|
| `--color-bg` | #f8fafc | #0f172a |
| `--color-surface` | #ffffff | #1e293b |
| `--color-text` | #1e293b | #f1f5f9 |
| `--color-text-muted` | #64748b | #94a3b8 |
| `--color-accent` | #6366f1 | #818cf8 |
| `--color-accent-light` | #818cf8 | #a5b4fc |
| `--color-accent-hover` | #4f46e5 | #6366f1 |
| `--color-success-a` | #22c55e | #4ade80 |
| `--color-success-b` | #16a34a | #22c55e |
| `--color-success-c` | #15803d | #16a34a |
| `--color-error` | #ef4444 | #f87171 |
| `--color-warning` | #f59e0b | #fbbf24 |
| `--color-blocked` | #cbd5e1 | #475569 |
| `--color-border` | #e2e8f0 | #334155 |
| `--gradient-accent` | linear-gradient(135deg, #6366f1, #818cf8) | (то же) |

---

## Структура папок

```
src/
├── pages/
│   ├── Home.jsx
│   ├── VPR.jsx
│   ├── VPRResults.jsx
│   ├── TopicsList.jsx
│   ├── TopicsGraph.jsx
│   └── TopicDetail.jsx
├── components/
│   ├── layout/   Layout.jsx, Header.jsx
│   ├── ui/       Button.jsx, Card.jsx, Modal.jsx, ThemeToggle.jsx
│   ├── assignment/  AssignmentCard, InputAnswer, ChoiceAnswer, SolutionBlock
│   ├── progress/    TopicProgress.jsx, ProgressBar.jsx
│   └── vpr/         Timer.jsx, TaskNav.jsx
├── context/
│   ├── ThemeContext.jsx
│   └── ProgressContext.jsx     (Часть 2)
├── hooks/
│   ├── useLocalStorage.js      (Часть 2)
│   ├── useProgress.js          (Часть 2)
│   └── useAssignments.js       (Часть 2)
├── utils/
│   ├── answerUtils.js          (Часть 2)
│   ├── topicUtils.js           (Часть 2)
│   ├── vprUtils.js             (Часть 5)
│   └── assignmentUtils.js      (Часть 2)
├── data/
│   ├── topics.json             (Часть 2)
│   └── assignments/            (Часть 2, 16 файлов)
└── index.css
```

---

## Структура данных

### Файл темы: `/src/data/assignments/{topic_id}.json`

Массив заданий (без обёртки). Поля:

| Поле | Обязательное | A/B | C | Описание |
|------|-------------|-----|---|----------|
| `id` | да | ✓ | ✓ | Уникальный ID, напр. `nat_a_001` |
| `text` | да | ✓ | ✓ | Текст условия |
| `answer` | да | ✓ | ✓ | Правильный ответ (строка) |
| `solution` | да | ✓ | ✓ | Эталонное решение |
| `level` | да | ✓ | ✓ | `"A"`, `"B"` или `"C"` |
| `type` | да | ✓ | ✓ | `"input"` или `"choice"` (C — только `"input"`) |
| `topics` | да | ✓ | ✓ | Массив ID тем |
| `options` | нет | только choice | — | Массив вариантов ответа |
| `image` | нет | ✓ | ✓ | Объект `{filename, description, alt}` |
| `vprNumber` | нет | — | ✓ | Число 1–17 (одно, не массив) |

**Поля `vprNumber` и `score` у заданий A/B отсутствуют** (не `null`, просто нет).
**`score` нигде не хранится в JSON** — только в `vprConfig.js`.

### `vprConfig.js` — константы ВПР

```javascript
export const VPR_CONFIG = {
  1:  { score: 1 },  // задания 1–11: 1 балл
  ...
  12: { score: 2 },  // задания 12–17: 2 балла
  ...
}
export const VPR_MAX_SCORE = 24      // 11×1 + 6×2
export const VPR_TIMER_MINUTES = 45
export const VPR_WARNING_MINUTES = 5
```

### `topics.json` — 16 тем с зависимостями

```json
{ "topics": [ { "id": "...", "name": "...", "prerequisites": [...] } ] }
```

Темы и зависимости (полная версия будет в Части 2):

| ID | Название | Зависит от |
|----|----------|------------|
| `natural_numbers` | Натуральные числа | — |
| `numeral_systems` | Системы счисления | — |
| `plane_figures` | Геометрические фигуры | — |
| `operations_natural` | Действия с натуральными числами | natural_numbers |
| `divisibility` | Делимость чисел | natural_numbers |
| `word_problems_arithmetic` | Текстовые задачи | natural_numbers |
| `charts_and_data` | Диаграммы и таблицы | natural_numbers |
| `measure_and_build` | Измерение и построение | natural_numbers, plane_figures |
| `fractions_basic` | Обыкновенные дроби | operations_natural |
| `decimals` | Десятичные дроби | operations_natural |
| `area` | Площадь | measure_and_build |
| `fractions_operations` | Действия с дробями | fractions_basic |
| `fraction_problems` | Задачи на дроби | fractions_basic |
| `logic_and_tables` | Логика и работа с данными | fractions_operations, fraction_problems |
| `spatial_figures` | Объёмные фигуры | measure_and_build, area |
| `volume` | Объём | spatial_figures |

### localStorage — структура

```json
{
  "theme": "dark",
  "topics_progress": {
    "{topic_id}": {
      "levelA": { "completedCount": 3, "completed": true,  "usedAssignments": ["id1"] },
      "levelB": { "completedCount": 1, "completed": false, "usedAssignments": ["id2"] },
      "levelC": { "completedCount": 0, "completed": false, "usedAssignments": [] }
    }
  },
  "topics_completed": ["natural_numbers"],
  "used_assignments_global": { "nat_a_001": true },
  "vpr_history": [
    {
      "id": "vpr_20260402_1_1",
      "date": "2026-04-02T10:30:00Z",
      "part": 1,
      "score": 9,
      "maxScore": 11,
      "timeSpent": 2340,
      "details": {
        "1": { "status": "correct",   "userAnswer": "500" },
        "2": { "status": "incorrect", "userAnswer": "1/3" },
        "3": { "status": "skipped" }
      }
    }
  ]
}
```

---

## Режим ВПР — две части

- **Часть 1:** задания 1–11, таймер 45 мин, максимальный балл 11
- **Часть 2:** задания 12–17, таймер 45 мин, максимальный балл 13 (6×2+1)
- Каждая часть — отдельный сеанс и отдельная запись в `vpr_history`
- На Home показывается последний результат по каждой части + суммарный балл
- Сброс уровня C тем срабатывает после завершения каждой части

## Алгоритм выбора задания для ВПР

1. Для номера ВПР N собираем все задания уровня C, у которых `vprNumber === N`
2. Из них исключаем те, что есть в `used_assignments_global`
3. Выбираем случайное из оставшихся
4. Если все использованы — **сбрасываем** записи в `used_assignments_global` только для заданий с `vprNumber === N` и начинаем заново

## Сброс уровня C при ошибках в ВПР

```javascript
// При завершении каждой части ВПР:
for (const [num, detail] of Object.entries(details)) {
  if (detail.status !== 'correct') {
    const assignment = /* задание по номеру */
    for (const topicId of assignment.topics) {
      progress[topicId].levelC.completed = false
      progress[topicId].levelC.completedCount = 0
      // usedAssignments НЕ сбрасываем
    }
  }
}
```

---

## Текущий статус разработки

| Часть | Статус |
|-------|--------|
| 1. Каркас | ✅ Готово |
| 2. Данные и инфраструктура | ⏳ Следующая |
| 3. Список тем + прохождение | ⏳ |
| 4. Граф знаний | ⏳ |
| 5. Режим ВПР | ⏳ |
| 6. Изображения | ⏳ |
| 7. Home + полировка | ⏳ |
| 8. Контент | ⏳ |
