# Интеграция темной/светлой темы и интернационализации

## Что было сделано

Успешно интегрированы наработки из `src/+` в основной проект с использованием Paraglide:

### 1. Управление темами

- ✅ Создан `src/lib/stores/theme.svelte.ts` на TypeScript
- ✅ Поддержка 3 режимов: **Системная**, **Светлая**, **Тёмная**
- ✅ Сохранение выбора в localStorage
- ✅ Синхронизация с OS в режиме "System"
- ✅ SSR-safe реализация

### 2. Интернационализация (Paraglide)

- ✅ Перенесены 120+ переводов в `messages/en.json` и `messages/ru.json`
- ✅ Поддержка английского и русского языков
- ✅ Реактивное переключение языка без перезагрузки страницы

### 3. Компонент Controls

- ✅ Создан `src/lib/components/Controls.svelte`
- ✅ Комбинированный переключатель темы и языка
- ✅ Интегрирован в Header
- ✅ Accessible с ARIA-метками

### 4. CSS система тем

- ✅ Интегрированы CSS переменные из `src/+/app.css` в `src/routes/layout.css`
- ✅ Поддержка светлой и тёмной тем через `data-theme="light|dark"`
- ✅ Темонезависимые токены (шрифты, радиусы, переходы)

### 5. Обновлённые компоненты

- ✅ `src/routes/+layout.svelte` - инициализация theme store
- ✅ `src/routes/+page.svelte` - использование Paraglide для meta-тегов
- ✅ `src/lib/components/Header.svelte` - интеграция Controls и Paraglide

## Как использовать

### Переключение темы

```typescript
import { theme } from '$lib/stores/theme.svelte';

// Установить тему
theme.setMode('light');  // 'system' | 'light' | 'dark'

// Проверить текущую тему
theme.mode      // 'system' | 'light' | 'dark'
theme.isDark    // boolean - разрешённое значение
```

### Переключение языка

```typescript
import * as m from '$lib/paraglide/messages';
import { setLocale, getLocale } from '$lib/paraglide/runtime';

// Установить язык
setLocale('ru');  // 'en' | 'ru'

// Получить текущий язык
getLocale();  // 'en' | 'ru'

// Использовать переводы
{m.nav_services()}  // "Услуги" или "Services"
```

## Что осталось сделать

Компоненты из `src/lib/components/`, которые ещё нужно обновить для использования Paraglide:

- [ ] Hero.svelte
- [ ] Services.svelte
- [ ] News.svelte
- [ ] Gallery.svelte
- [ ] Team.svelte
- [ ] Contacts.svelte
- [ ] Footer.svelte
- [ ] FeatureBlocks.svelte (if needed)

Эти компоненты сейчас используют жёстко закодированный русский текст и нуждаются в обновлении для поддержки двух языков.

## Тестирование

Запустите dev-сервер:

```bash
pnpm run dev
```

Откройте http://localhost:5173 и проверьте:

1. **Переключение тем**: кнопки ⬡ (System), ☀ (Light), ☾ (Dark) в правом верхнем углу
2. **Переключение языка**: кнопки RU / EN в правом верхнем углу
3. **Навигация**: меняет язык при переключении
4. **Сохранение**: перезагрузите страницу - выбор сохраняется

## Документация

Подробная документация на английском: [`doc/integration-summary.md`](doc/integration-summary.md)
