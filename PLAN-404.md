# План верстки страницы 404

Reference: /public/img/ref-error-desktop.png, ref-error-mobile.png

## Этапы

| # | Секция | Статус | Данные из Figma |
|---|--------|--------|-----------------|
| 1 | Header | ✅ | logo + nav + lang + btn |
| 2 | Breadcrumb | 🔄 | home icon / Список статей / 404 |
| 3 | Hero background | 🔄 | gradient #0041be→#010437, h=723px |
| 4 | Hero текст | 🔄 | ghost 65px op=0.08, title 60px, desc 20px #829AD9, btn 168x48 orange |
| 5 | Hero иллюстрация | 🔄 | bg 790x527 (ноутбуки+схема) + fg 308x361 (заграждение) |
| 6 | Promo banner | ✅ | orange gradient, ghost "Хочу скидку!", text 19px bold, btn white |
| 7 | Action buttons | ✅ | 2 кнопки с иконками, dark bg, border separator |
| 8 | Footer колонки | ✅ | 4 col: серверы/впс/остальное/контакты |
| 9 | Footer bottom | ✅ | logo + платёжки + nav links |
| 10 | Mobile адаптив | ✅ | 360px — column layout, Figma fonts: ghost 40px, title 35px |

## Точные значения из Figma API (извлечены ранее)

### Hero
- Frame: 1440×1609px
- Background rect: 1440×723px fill=#010437
- Ghost "404": font=Jost 65px w=700 color=#fff opacity~0.08, size=134×94
- Title: font=Jost 60px w=500 color=#fff, size=535×87
- Desc: font=Jost 20px w=400 color=#829AD9, size=513×54
- Button "Вернуться": rect 168×48 fill=#ff8311, text 16px w=600

### Illustration (right side)
- Group 69 (bg): 790×527px, x=640 from frame left
- 1Asset (barrier): 308×361px

### Promo banner
- Ghost "Хочу скидку!": 40px w=500, opacity=0.15
- Text: 19px w=600 color=#fff
- Button: white bg, text color=#0041be 16px w=600

### Action buttons
- Height: ~68px
- bg=#010437, border-bottom rgba(131,154,218,0.15)
- Divider: 1px rgba(131,154,218,0.15)
- Text: 16px w=600

### Footer
- bg=#010437 padding-top=94px
- Col titles: uppercase 12px w=500 color=#839ada
- Links: 14px w=400 color=#839ada
- Contacts: icons + text 14px
- Social icons: 24×24px
