# Theme Toggle Improvements

## Что было сделано

Переключатель темы переработан из трёх отдельных кнопок (system/light/dark) в одну кнопку-переключатель (toggle switch) с анимацией.

## Изменения

### До
- Три отдельные кнопки: ⬡ (System), ☀ (Light), ☾ (Dark)
- Статичные иконки
- Выбор из трёх режимов

### После
- Одна кнопка-переключатель (toggle switch)
- Плавная анимация слайдера
- Переключение между Light ↔ Dark
- Автоматическое определение системной темы при загрузке

## Дизайн

### Структура компонента
```html
<button class="theme-toggle" class:dark={theme.isDark}>
  <span class="toggle-track">
    <span class="toggle-thumb">
      <span class="toggle-icon">☀/☾</span>
    </span>
  </span>
</button>
```

### Состояния

**Light режим (по умолчанию):**
- Track: серый фон (`var(--clr-border)`)
- Thumb: слева, белый фон
- Иконка: ☀ (солнце)

**Dark режим (активный):**
- Track: зелёный фон (`var(--clr-accent)`)
- Thumb: справа, темный фон
- Иконка: ☾ (луна)

**Hover эффекты:**
- Light: track становится более темным
- Dark: track становится ярче (hover цвет акцента)

## Анимация

Все переходы используют `var(--transition)` (0.35s cubic-bezier):
- `transform` для перемещения thumb
- `background` для изменения цветов track и thumb
- `color` для изменения цвета иконки

## Accessibility

- `role="switch"` - правильная роль для переключателя
- `aria-pressed={theme.isDark}` - состояние переключателя
- `aria-label` - динамическое описание действия
- `title` - всплывающая подсказка

## Техническая реализация

### CSS структура
- `.theme-toggle` - контейнер кнопки (52x26px)
- `.toggle-track` - фон трека (48x24px, border-radius: 12px)
- `.toggle-thumb` - круглый слайдер (20x20px, с box-shadow)
- `.toggle-icon` - иконка внутри слайдера (0.75rem)

### Логика переключения
```typescript
function toggleTheme() {
  const nextTheme = theme.isDark ? 'light' : 'dark';
  theme.setMode(nextTheme);
}
```

### onMount хук
При загрузке страницы, если тема была 'system', автоматически конвертируется в 'light' или 'dark' в зависимости от системных настроек:

```typescript
onMount(() => {
  if (theme.mode === 'system') {
    theme.setMode(theme.isDark ? 'dark' : 'light');
  }
});
```

## Преимущества нового дизайна

1. **Более интуитивный** - toggle switch привычен пользователям
2. **Компактнее** - занимает меньше места
3. **Плавные анимации** - приятные визуальные переходы
4. **Лучшая доступность** - правильная ARIA роль `switch`
5. **Проще использовать** - один клик вместо выбора из трёх вариантов

## Тестирование

✅ Анимация переключения работает плавно
✅ Hover эффекты корректны
✅ Иконки меняются при переключении
✅ Состояние сохраняется в localStorage
✅ Тема применяется к странице

---

*Commit: `improve theme toggle with animated switch design` (7872e11)*
