# За основу цієї початкової зборки взято Treble
[Github Treble App](https://github.com/threekit/treble).

## Початок розробки
Стягуємо всі залежності
`npm install`

Добавляємо `assetId`, він знаходиться в корневій папці - `threekit.config.js`

Створюємо файл `.env`
приклад:
```sh
# Threekit Credentials
# Environment - Preview
THREEKIT_PREVIEW_ORG_ID=################
THREEKIT_PREVIEW_PUBLIC_TOKEN=################

# Environment - Admin-FTS
THREEKIT_ADMIN_FTS_ORG_ID=################
THREEKIT_ADMIN_FTS_PUBLIC_TOKEN=################
```

Добавляємо `ORG_ID` та `PUBLIC_TOKEN`

Запускаємо проект 
`npm run start`

Локальний сервер відкриється за цим портом [http://localhost:3000](http://localhost:3000).

