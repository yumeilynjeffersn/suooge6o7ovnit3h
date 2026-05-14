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
<button class="theme-toggle" class:dark="{theme.isDark}">
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

## localStorage Logic

### Сценарии работы

**1. Первый запуск (localStorage пуст):**

```
localStorage: null
→ theme.mode = 'system' (default)
→ appliedTheme = system preference (dark/light)
→ Не сохраняется до первого переключения
```

**2. Пользователь переключил тему:**

```
Клик на toggle
→ theme.setMode('dark' или 'light')
→ localStorage.setItem('app-theme', 'dark'/'light')
→ appliedTheme = выбранная тема
```

**3. Повторный запуск (есть сохранённое значение):**

```
localStorage: 'dark'
→ theme.init() загружает 'dark'
→ appliedTheme = 'dark'
→ Игнорирует системные настройки
```

**4. Режим 'system' (если сохранён):**

```
localStorage: 'system'
→ theme.init() загружает 'system'
→ appliedTheme = system preference
→ Автоматически следует за изменениями ОС
```

### Ключ в localStorage

```typescript
const STORAGE_KEY = 'app-theme';
```

**Возможные значения:**

- `'system'` - следовать за ОС
- `'light'` - принудительно светлая
- `'dark'` - принудительно тёмная
- `null` - первый запуск

### Логика в theme.svelte.ts

```typescript
function init(): (() => void) | undefined {
	if (typeof window === 'undefined') return;

	// Загрузка из localStorage
	const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
	if (saved === 'light' || saved === 'dark' || saved === 'system') {
		mode = saved;
	}
	// Если null - остаётся 'system' по умолчанию

	isDark = resolve(mode);
	applyToDOM(isDark);

	// Слушатель изменений системной темы
	const mq = window.matchMedia('(prefers-color-scheme: dark)');
	const onSystemChange = () => {
		if (mode === 'system') {
			isDark = mq.matches;
			applyToDOM(isDark);
		}
	};
	mq.addEventListener('change', onSystemChange);
	return () => mq.removeEventListener('change', onSystemChange);
}
```

### Логика в Controls.svelte

```typescript
function toggleTheme() {
	// Переключение между light и dark
	const nextTheme = theme.isDark ? 'light' : 'dark';
	theme.setMode(nextTheme);
	// setMode автоматически сохраняет в localStorage
}
```

**Важно:** При первом запуске тема остаётся `'system'` до первого клика. После клика сохраняется конкретное значение `'light'` или `'dark'`.

### Тестирование

✅ **Первый запуск**: Тема соответствует системной, localStorage пуст
✅ **После переключения**: Сохраняется выбор, localStorage содержит 'light'/'dark'
✅ **Перезагрузка**: Загружается сохранённое значение
✅ **Режим 'system'**: Следует за изменениями ОС
✅ **SSR-safe**: Все browser API проверяются на существование

---

_Commits:_

- `7872e11` - improve theme toggle with animated switch design
- `14eb6f3` - fix theme persistence: respect system theme on first launch
