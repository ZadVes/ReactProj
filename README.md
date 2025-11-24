Этот проект — интернет-магазин, созданный с использованием стека MERN (MongoDB, React, Node.js). Здесь реализован каталог автомобилей Tesla с возможностью размещения заказов.
Шаги по запуску:
1. клонируем репозиторий
   git clone https://github.com/ZadVes/ReactProj.git
   cd ReactProj
2. Собираем контейнер:
   docker-compose up --build
При запуске проекта нужно будет синдировать данные из файла seed.js, чтобы они отобразились в проекте и с ними можно было работать:
1. docker exec -it reactproj-server-1 sh
2. node seed.js

Для добавление записи в БД команда: Invoke-RestMethod -Uri "http://localhost:5000/api/products" ` -Method POST ` -Headers @{ "Content-Type" = "application/json" } ` -Body '{"name":"test","price":123.45,"description":"test desc","imageUrl":"none"}'
Для проверки ответа на записьв БД по API: Invoke-WebRequest -Uri "http://localhost:5000/api/products"
