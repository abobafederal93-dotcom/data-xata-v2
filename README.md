# Data-Xata — Next.js сайт

Pixel-perfect перенос дизайна data-xata.com на Next.js App Router.

**Требование заказчика:** 1 в 1 совпадение с Figma — каждый пиксель, каждый текст, каждый цвет.

---

## Стек

- **Next.js 16** (App Router)
- **TypeScript**
- **BEM CSS** (без Tailwind, чистый globals.css)
- **Иконочный шрифт** `/public/fonts/icons.*`

---

## Быстрый старт

```bash
npm install
npm run dev
# открыть http://localhost:3000
```

---

## Figma-файлы (спецификации)

Все Figma-данные выгружены в корне проекта:

| Файл | Страница |
|------|----------|
| `figma-main-desktop.txt` | Главная — desktop |
| `figma-main-mobile.txt` | Главная — mobile |
| `figma-search-desktop.txt` | Поиск — desktop |
| `figma-search-mobile.txt` | Поиск — mobile |
| `figma-order-desktop.txt` | Заказ — desktop |
| `figma-order-mobile.txt` | Заказ — mobile |
| `figma-details-desktop.txt` | Детали сервера — desktop |
| `figma-details-mobile.txt` | Детали сервера — mobile |
| `figma-404-specs.txt` | 404 страница |

**Формула конвертации:** `px / 10 = rem` (html font-size: 62.5%)

---

## Структура проекта

```
app/
├── globals.css          ← ВСЕ стили (BEM)
├── layout.tsx           ← корневой layout
├── page.tsx             ← главная /
└── not-found.tsx        ← 404

components/
├── home/                ← компоненты главной
├── layout/              ← Header, Footer
└── ui/                  ← ActionBar, Breadcrumb, PromoBanner

data/
├── servers.ts
└── filters.ts

types/index.ts
public/
├── fonts/               ← иконочный шрифт
└── img/                 ← изображения и иконки
```

---

## Иконки

Класс: `icons i-НАЗВАНИЕ`

**Доступные:** `i-admin, i-backup, i-caret, i-caret-right, i-check, i-cloud, i-compare, i-email, i-fb, i-game, i-hdd, i-home, i-info, i-linux, i-login, i-map, i-memory, i-office, i-phone, i-present, i-repository, i-search, i-server, i-skype, i-speed, i-star, i-tg, i-tool, i-traffic, i-vk, i-windows`

**НЕТ в шрифте:** `i-arrow, i-code, i-tw, i-ram, i-disk, i-eye, i-inst`

Флаги стран — отдельные SVG: `/img/icons/i-{код}.svg` (de, nl, fr, ru, ua, en...)

---

## Цвета

```
#010437  — фон страницы
#215aee  — синий (primary)
#0041be  — тёмно-синий
#ff8311  — оранжевый (accent)
#ff5c00  — тёмно-оранжевый
#839ada  — серо-голубой текст
#27e35c  — зелёный
#f50e38  — красный
```

---

## TODO — Что нужно сделать

> **Правила совместной работы:**
> - Каждая задача = отдельная ветка (`feature/название`)
> - После выполнения → Pull Request → другой проверяет → merge в `main`
> - Требование: **pixel-perfect 1в1 с Figma**

---

### СДЕЛАНО

- [x] Главная — Hero секция
- [x] Главная — Filter секция
- [x] Главная — Server Table
- [x] Главная — About Us
- [x] Главная — About Clients
- [x] Главная — Order Process
- [x] Главная — Our Features
- [x] Главная — Rating
- [x] Главная — Lets Start
- [x] Header (навигация, лого, языки, кнопка входа)
- [x] Footer (колонки, контакты, соцсети, платёжные иконки)
- [x] ActionBar (оранжевая полоска)
- [x] Все тексты сверены с Figma построчно
- [x] Все цвета сверены с Figma
- [x] Все font-size/weight/line-height сверены с Figma
- [x] Иконки проверены и исправлены
- [x] 404 страница — базовая структура

---

### НУЖНО СДЕЛАТЬ

#### Приоритет 1 — Мобильная версия главной
> Ветка: `feature/mobile-main`
> Файл: `figma-main-mobile.txt` → `app/globals.css` (media queries)

- [ ] **[MOBILE] Hero** — заголовок, кнопки, картинка сверху (390px)
- [ ] **[MOBILE] Filter** — поля фильтра в колонку
- [ ] **[MOBILE] Server Table** — карточки вместо таблицы
- [ ] **[MOBILE] About Us** — блоки в колонку, без смещения правого
- [ ] **[MOBILE] Order Process** — горизонтальный скролл карточек
- [ ] **[MOBILE] Features** — 2 колонки вместо 3
- [ ] **[MOBILE] Rating** — картинка скрыта, текст центрирован
- [ ] **[MOBILE] Footer** — колонки в стопку
- [ ] **[MOBILE] Header** — бургер-меню

---

#### Приоритет 2 — Страница поиска `/search`
> Ветка: `feature/search-page`
> Читать: `figma-search-desktop.txt` + `figma-search-mobile.txt`
> Создать: `app/search/page.tsx`

- [ ] **[SEARCH] Breadcrumb** (хлебные крошки)
- [ ] **[SEARCH] Расширенный фильтр** — все поля по Figma (`components/search/SearchFilter.tsx`)
- [ ] **[SEARCH] Таблица серверов** с пагинацией
- [ ] **[SEARCH] Пагинация** (`components/search/Pagination.tsx`)
- [ ] **[SEARCH] Mobile адаптив** по `figma-search-mobile.txt`

---

#### Приоритет 3 — Страница деталей сервера `/server/[id]`
> Ветка: `feature/server-details`
> Читать: `figma-details-desktop.txt` + `figma-details-mobile.txt`
> Создать: `app/server/[id]/page.tsx`

- [ ] **[DETAILS] Breadcrumb**
- [ ] **[DETAILS] Заголовок** (название, цена, кнопка заказать)
- [ ] **[DETAILS] Характеристики** (CPU, RAM, диски, сеть)
- [ ] **[DETAILS] Вкладки** (Конфигурация / ОС / Дополнительно)
- [ ] **[DETAILS] Mobile адаптив** по `figma-details-mobile.txt`

---

#### Приоритет 4 — Страница заказа `/order`
> Ветка: `feature/order-page`
> Читать: `figma-order-desktop.txt` + `figma-order-mobile.txt`
> Создать: `app/order/page.tsx`

- [ ] **[ORDER] Breadcrumb**
- [ ] **[ORDER] Форма заказа** (имя, email, телефон, комментарий)
- [ ] **[ORDER] Сводка заказа** (сервер, цена)
- [ ] **[ORDER] Способы оплаты**
- [ ] **[ORDER] Mobile адаптив** по `figma-order-mobile.txt`

---

#### Приоритет 5 — 404 страница
> Ветка: `feature/404-page`
> Читать: `figma-404-specs.txt`
> Файл: `app/not-found.tsx`

- [ ] **[404] Сверить с Figma построчно** — тексты, размеры, кнопки
- [ ] **[404] PromoBanner** — проверить соответствие
- [ ] **[404] ActionButtons** — проверить соответствие
- [ ] **[404] Mobile адаптив**

---

#### Приоритет 6 — Финальная проверка
> Ветка: `feature/final-check`

- [ ] `npm run build` — 0 ошибок, 0 warnings
- [ ] Все страницы на desktop 1440px
- [ ] Все страницы на mobile 390px
- [ ] Сравнить каждую секцию с Figma построчно

---

## Workflow совместной работы

```bash
# 1. Взять задачу — создать ветку
git checkout -b feature/mobile-hero

# 2. Сделать задачу, проверить в браузере

# 3. Закоммитить
git add .
git commit -m "feat: mobile hero section"

# 4. Запушить
git push origin feature/mobile-hero

# 5. Открыть Pull Request на GitHub
# 6. Другой проверяет → merge в main
```

## Как читать Figma-файлы

```
[TEXT] "Аренда сервера" xy=(165,216) 457x87 font=60px/w500/lh=87
```

- `xy=(165,216)` — позиция на странице (x от левого края, y от верха)
- `font=60px` → CSS: `font-size: 6rem`
- `w500` → CSS: `font-weight: 500`
- `lh=87` → CSS: `line-height: 8.7rem`
- `#ffffff` → CSS: `color: #fff`
