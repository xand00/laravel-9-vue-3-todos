## Установка
```bash
make install
```
Билдит образы, копирует .env.example в .env в корне и в подпапках frontend и backend, устанавливает зависимости и выполняет миграции
## Запуск
Для запуска необходимы порты 80(для фронта), 81(для бэка), 3306(для бд), порты можно сменить в корне в .env, после смены надо будет изменить соответствующие порты в подпапках frontend и backend в .env
```bash
make up
```

По умолчанию приложение будет доступно по адресу localhost:80