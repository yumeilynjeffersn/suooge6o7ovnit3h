# Build & Deployment Guide

## Пререквизиты

### Node.js и пnpm

Проект требует:
- **Node.js**: >= 22.13 (рекомендуется 22.22.2)
- **pnpm**: 10.32.1

### Установка Node.js 22 на Ubuntu

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
sudo apt install -y nodejs
```

### Установка pnpm

```bash
npm install -g pnpm@10.32.1
```

## Установка зависимостей

```bash
pnpm install
```

## Команды разработки

### Dev-сервер (с hot reload)

```bash
pnpm run dev
```

Откроется на `http://localhost:5173/`

### Production build

```bash
pnpm run build
```

Результат: статические файлы в папке `build/`

### Preview production build

```bash
pnpm run preview
```

Откроется на `http://localhost:4173/`

## Структура build-процесса

1. **Paraglide**: компилирует переводы из `messages/*.json`
2. **Vite**: собирает SSR и client bundles
3. **SvelteKit**: генерирует статические HTML страницы
4. **adapter-static**: создает финальный статический сайт

## Особенности статического билда

### Favicon и robots.txt

В `.gitignore` папка `/static/` игнорируется, но для `favicon.svg` и `robots.txt` сделаны исключения:

```gitignore
/static/
!static/favicon.svg
!static/robots.txt
```

### Prerender конфигурация

В `svelte.config.js` настроен обработчик 404 ошибок:

```js
prerender: {
  handleHttpError: ({ path, referrer, message }) => {
    // Игнорируем 404 для несуществующих страниц
    if (path.startsWith('/blog') || path === '/privacy') {
      return;
    }
    throw new Error(message);
  }
}
```

## Интернационализация в production

В статическом билде **переключение языка требует перезагрузки страницы**.

Это нормальное поведение Paraglide в режиме `adapter-static`, так как:
- Каждая локаль генерируется как отдельная HTML-страница
- Смена языка меняет localStorage и триггерит перезагрузку
- Header обновляется реактивно благодаря `$derived`

## Оптимизация

### Bundle size

- Client bundle: ~170 kB (gzipped: ~45 kB)
- Используется code splitting
- Lazy loading для компонентов

### CSS

- Tailwind CSS v4 с purge
- CSS переменные для тем
- Минимизация custom CSS (~500 строк удалено)

## Деплой

### Vercel / Netlify

Автоматическая настройка через `adapter-static`:

```bash
pnpm run build
```

Папка для деплоя: `build/`

### Nginx

```nginx
server {
  listen 80;
  server_name example.com;
  root /var/www/app/build;
  
  location / {
    try_files $uri $uri.html $uri/ =404;
  }
  
  # Кэширование статики
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

## Troubleshooting

### Ошибка: "Cannot find module '/app/.svelte-kit/output/server/manifest.js'"

**Решение**: Запустите `pnpm run build` перед `pnpm run preview`

### Ошибка: "404 /favicon.svg"

**Решение**: Убедитесь, что `static/favicon.svg` существует и добавлен в git с флагом `-f`

### Предупреждение: "svelte-flickity@1.1.3 has no exports condition"

**Статус**: Не критично, библиотека работает корректно

### Node.js версия несовместима

**Решение**: Обновите Node.js до версии 22+

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo bash -
sudo apt install -y nodejs
```

## Performance checklist

- ✅ Lighthouse Score: 95+ (Performance)
- ✅ Gzip compression для всех assets
- ✅ Preload критических ресурсов
- ✅ Lazy loading изображений
- ✅ CSS минификация
- ✅ JS tree-shaking

## См. также

- [INTEGRATION.md](../INTEGRATION.md) - интеграция тем и i18n
- [tailwind-v4-refactoring.md](./tailwind-v4-refactoring.md) - рефакторинг на Tailwind v4
- [README.md](../README.md) - общая информация о проекте
