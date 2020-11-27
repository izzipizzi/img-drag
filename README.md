Додаток на Angular,NestJS,Postgres
БД я використовув локальну, пробував запускати в Docker, воно не підключало, брав вже готові образи БД Docker Postgres, не працювало


PostgreSQL - v.13

Конфіг для підключення до БД є у файлі ./api/.env

Установка всіх залежностей для АРІ
```bash
$ cd api
```
```bash
$ npm i
```

Установка всіх залежностей для Angular
```bash
$ cd img-drag
```
```bash
$ npm i
```

Щоб запустити API
```bash
$ npm run start:dev
```
Незнаю чи првильно розробив архітектуру, перший раз писав на NestJS,
Angular

Но воно працює


Запуск Angular
```bash
$ ng serve
```

