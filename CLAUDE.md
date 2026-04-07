# Data-Xata v2 — Правила для агентов

## Стек (ОБЯЗАТЕЛЬНО)
- **Next.js 15** (App Router)
- **TypeScript** — везде, никакого `.js`
- **Tailwind CSS v4** — все стили только через Tailwind
- **Без UI-библиотек** — никакого shadcn, radix, headlessui и т.п.

## Жёсткие запреты
- **НЕ использовать `position: absolute/fixed`** для верстки — только flex/grid
- **НЕ использовать `useState`, `useEffect`, API-вызовы** — только статичная верстка
- **НЕ менять дизайн** — никаких "улучшений", только 1в1 с оригиналом
- **НЕ придумывать** новые секции, цвета, шрифты, иконки
- **НЕ использовать UI-библиотеки**

## Компоненты
- Каждый компонент принимает **props с TypeScript-типами**
- Типы описывать в `types/index.ts`
- Server Components по умолчанию (`"use client"` только если реально нужно)

## Верстка
- Layout: **flex / grid**
- Адаптив: **mobile-first** (sm: md: lg: xl:)
- Брейкпоинты: 320px / 768px / 1024px / 1440px

## Структура проекта
```
app/
  layout.tsx          — корневой layout (Header + Footer)
  page.tsx            — главная
  search/page.tsx     — поиск
  server/[slug]/page.tsx — описание услуги
  order/page.tsx      — заказ
  blog/[slug]/page.tsx — статья
  not-found.tsx       — 404
components/
  layout/
    Header.tsx
    Footer.tsx
  home/               — секции главной страницы
  search/             — компоненты страницы поиска
  server/             — компоненты страницы сервера
  order/              — компоненты страницы заказа
  blog/               — компоненты страницы статьи
  ui/                 — переиспользуемые UI-компоненты (Button, Badge и т.п.)
data/
  servers.ts          — моковые данные серверов
  filters.ts          — данные фильтров
  blog.ts             — данные статей
types/
  index.ts            — все TypeScript типы
public/
  icons/              — все иконки (svg, png)
  fonts/              — шрифты если нужно
```

## Источник дизайна
Оригинал: `D:\Новая винда папка для работы 1\data-xata\`
- HTML-шаблоны: `markup/html/`
- CSS: `markup/css/style.css`
- Vue-компоненты: `components/`

## Цвета (из оригинала)
- Фон: `#010437` (тёмно-синий)
- Primary: `#205aee` (синий)
- Accent: `#ff8310` (оранжевый)
- Secondary: `#829ad9` (голубой)
- Cyan: `#2acaf7`
- Green: `#26e35b`
- Red: `#f50e37`
- White: `#ffffff`

## Шрифт
- `Jost` (Google Fonts) — 400, 500, 600, 700

## Агент-ревьюер (после каждой страницы)
После завершения верстки страницы — запускать проверку:
1. Сравнить с оригинальным HTML из `markup/html/`
2. Проверить что нет `position: absolute`
3. Проверить что все компоненты принимают props
4. Проверить адаптив (320/768/1024/1440)
5. Проверить что нет UI-библиотек в импортах
