# Тестовое задание для компании Smart-Design 

## Задача:

Управление контентом электронного магазина
Нужно собрать приложение которое бы демонстрировало работу с товарами в электронном магазине.

Frontend
Должно быть как минимум 2 страницы:
Форма создания товара (для простоты пока считаем что набор ключей в параметрах товара фиксирован)
Страница поиска: вводится название и/или параметры, выводится список/табличка товаров соответствующих поиску. (если ничего не указано - выводится все что есть).

Backend
Микросервис предоставляющий REST вызовы:
Создать новый товар
Получить список товаров, с возможностью фильтрации по:
a) названию
b) выбранному параметру и его значению
Товары складываются в MongoDB

У пользователя реализована возможность создавать товары и потом находить их в поиске.

### Стек технологий
* Node.js/Express
* MongoDB
* React
* Docker

* В ближайщее время проект дополнится Next.js c целью перехода приложения c SPA на SSR.

### Запуск проекта
1. Клонировать локально  репозиторий
2. Если у вас имеется установленный Docker, то переходим в главную директорию проекта:
  * `make build` - сборка образа
  * `make run` - запуск образа.
   <br /><br /> Если у вас нет Docker, то переходим к п.3 и п.4.
3. Перейти в папку backend и отредактировать в файле config.js: DB_ADDRESS = 'mongodb://localhost:27017/mobile-shop', затем выполняем команды:
    * `npm i` - установить необходиммые зависимости проекта
    * `mongod` - запуск сервера MongoDB
    * `npm run start` — запуск сервера приложения 
4. Перейти в папку frontend
    * `npm i` - установить необходиммые зависимости проекта
    * `npm start` - запустить проект