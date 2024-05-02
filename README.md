## HackerNews VK-mini-apps
Ссылка на приложение - [HackerNews mini app](https://prod-app51915419-14359084ff5f.pages-ac.vk-apps.com/index.html)
Ссылка на приложение на платформе - [vk-mini-apps](https://vk.com/app51915419?ref=catalog_recent)

## Запуск приложения

В консоли для запуска режима разработки пропишите:

```sh
 yarn start
```

Перейдите по - [localhost:3000](http://localhost:3000/)
По умолчанию установлен Порт: 3000

Для запуска на платформе VK нужно перейти на [devportal](https://dev.vk.com/ru) или в [управление](https://vk.com/apps?act=manage) и создать новый мини апп.  
Необходимо вставить URL на котором работает приложение в настройки, предварительно включив режим разработки.
Теперь можно открыть мини апп, нажав на его иконку.
Список созданных мини приложений [тут](https://vk.com/apps?act=manage) или [тут](https://dev.vk.com/ru/admin/apps-list).

## Деплой приложения

Для того чтобы поделиться приложением запущенным на localhost со своими друзьями,нужно установить vk-tunnel и запустить уже подготовленный скрипт из package.json

```sh
yarn global add @vkontakte/vk-tunnel
yarn run tunnel
```

После чего в консоли появится ссылка, по которой будет доступно приложение.

Для того чтобы захостить приложение на сервера ВКонтакте нужно зайти в vk-hosting-config.json и указать id приложения. Далее можно запустить уже подготовленный скрипт:

```sh
yarn run deploy
```

### Стэк

- React + TypeScript
- Vite
- VK UI
- FSD (архитектурный подход)
- экосистема VK-mini-apps