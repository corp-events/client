# Client

![Next.js 16](https://img.shields.io/badge/next.js-16.2-black)
![React 19](https://img.shields.io/badge/react-19-blue)
![TypeScript](https://img.shields.io/badge/typescript-5-blue)
![Biome](https://img.shields.io/badge/biome-2.2-green)
![License](https://img.shields.io/badge/license-MIT-yellow)

Клиентское приложение для корпоративных мероприятий.

## Требования

- **Node.js** >= 18
- **npm** >= 9

## Быстрый старт

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу `http://localhost:3000`.

## Стек

| Инструмент | Версия |
|---|---|
| **Фреймворк** | Next.js 16 (App Router) |
| **UI-библиотека** | React 19 |
| **Язык** | TypeScript 5 |
| **Стилизация** | CSS Modules + CSS Custom Properties |
| **Линтинг / Форматирование** | Biome 2.2 |
| **Формы** | react-hook-form + Zod + @hookform/resolvers |
| **SVG** | @svgr/webpack (импортируются как React-компоненты) |

## Команды

| Команда | Описание |
|---|---|
| `npm run dev` | Запуск dev-сервера |
| `npm run build` | Сборка для production |
| `npm start` | Запуск production-сервера |
| `npm run lint` | Проверка кода Biome |
| `npm run format` | Форматирование кода Biome |

## Архитектура (FSD)

Проект следует методологии Feature-Sliced Design (FSD):

```
src/
├── app/          # Слой приложения — композиция, провайдеры, глобальные лейауты
├── entities/     # Бизнес-сущности
├── features/     # Пользовательские сценарии и взаимодействия
├── pages/        # Страницы (композиция компонентов)
├── widgets/      # Переиспользуемые UI-блоки
└── shared/       # Переиспользуемая инфраструктура
    ├── routes/   # Типобезопасные маршруты
    ├── styles/   # Глобальные стили и токены
    └── types/    # Глобальные декларации типов
```

## Соглашения по именованию

| Сущность | Стиль | Пример |
|---|---|---|
| Директории | `kebab-case` | `home-page/`, `sign-in/` |
| Файлы компонентов | `PascalCase.tsx` | `HomePage.tsx` |
| Файлы стилей | `PascalCase.module.css` | `HomePage.module.css` |
| Файлы пропсов | `PascalCase.props.ts` | `HomePage.props.ts` |
| Утилиты / конфиги | `kebab-case` | `routes.ts` |
| Индексные файлы | `index.ts` | `index.ts` |

**Экспорты:**
- По умолчанию — **именованные экспорты**: `export { HomePage }`
- **Исключения** (требуют `default export`):
  - `app/layout.tsx` — требование Next.js App Router
  - `app/page.tsx` — требование Next.js App Router
  - SVG-модули — требование @svgr/webpack
