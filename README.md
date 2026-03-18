🚀 Veloce Backend API (Postman Version)
📌 Описание

Backend API для проекта Veloce.

Доступные сущности:

Products

Awards

Founders

Stockists

🌐 Base URL
http://localhost:8080
📦 Postman Collection

👉 Я тестировал API через Postman.
Ниже список всех доступных endpoints.

🛍️ Products
🔹 Получить все продукты
GET /api/products

📥 Response:

[
  {
    "id": 1,
    "name": "Lavanda",
    "description": "Relaxing fragrance",
    "ingredients": "Lavender oil",
    "imageUrl": "/lavanda.jpg"
  }
]
🔹 Получить по ID
GET /api/products/{id}
🔹 Создать продукт
POST /api/products
Content-Type: application/json

📤 Body:

{
  "name": "Lavanda",
  "description": "Relaxing fragrance",
  "ingredients": "Lavender oil",
  "imageUrl": "/lavanda.jpg"
}
🏆 Awards
GET /api/awards
GET /api/awards/{id}
POST /api/awards
👤 Founders
GET /api/founders
GET /api/founders/{id}
POST /api/founders
📍 Stockists
GET /api/stockists
GET /api/stockists/{id}
POST /api/stockists
🖼️ Images
http://localhost:8080/{imageName}

Пример:

http://localhost:8080/lavanda.jpg
❗ Ошибки
{
  "message": "Not found"
}
▶️ Запуск
mvn spring-boot:run
💬 Что отправить фронтендеру

Вот прям скопируй и отправь ей:

Swagger пока нет, но я сделал норм описание API.

Base URL: http://localhost:8080

Основные эндпоинты:
GET /api/products
GET /api/awards
GET /api/founders
GET /api/stockists

Если хочешь, могу скинуть Postman collection.
🔥 БОНУС (очень советую)

Если хочешь выглядеть как реальный backend dev, сделай это за 1 минуту:

👉 В Postman:

Нажми Collections

Export

JSON файл

И отправь ей файл

💣 Это лучше Swagger иногда, потому что:

уже есть готовые запросы

можно сразу нажимать Send

не надо думать

⚡ Честно скажу тебе

Ты сейчас на этапе, где надо сделать один шаг до уровня выше:

👉 Добавить Swagger = +100 к профессиональности
👉 Но Postman уже норм, не критично

Если хочешь, давай следующим шагом:

я сделаю тебе Postman collection файл

или подключим Swagger красиво (прям как в компаниях)

Что делаем дальше? 😎

сделай мне нормальный реадми файл чтобы она конкретно поняла

Окей, давай сделаем тебе чёткий, понятный README, как у нормального backend-разработчика, чтобы фронтендер вообще без вопросов понял, что делать 👇

🚀 Veloce Backend API
📌 Описание

Это backend API для проекта Veloce.
Предоставляет данные для frontend приложения через REST API.

Доступные сущности:

🛍️ Products (продукты)

🏆 Awards (награды)

👤 Founders (основатели)

📍 Stockists (точки продаж)

🌐 Base URL
http://localhost:8080

Все запросы идут через:

/api/{resource}
🧠 Как работать с API (для frontend)

Делаете GET запросы для получения данных

Получаете JSON

Отображаете на UI

Пример:

fetch("http://localhost:8080/api/products")
  .then(res => res.json())
  .then(data => console.log(data));
🛍️ Products
Получить все продукты
GET /api/products

📥 Response:

[
  {
    "id": 1,
    "name": "Lavanda",
    "description": "Relaxing fragrance",
    "ingredients": "Lavender oil",
    "imageUrl": "/lavanda.jpg"
  }
]
Получить продукт по ID
GET /api/products/{id}

Пример:

GET /api/products/1
Создать продукт
POST /api/products
Content-Type: application/json

📤 Body:

{
  "name": "Lavanda",
  "description": "Relaxing fragrance",
  "ingredients": "Lavender oil",
  "imageUrl": "/lavanda.jpg"
}
🏆 Awards
Получить все
GET /api/awards
Получить по ID
GET /api/awards/{id}
Создать
POST /api/awards
👤 Founders
Получить все
GET /api/founders
Получить по ID
GET /api/founders/{id}
Создать
POST /api/founders
📍 Stockists
Получить все
GET /api/stockists
Получить по ID
GET /api/stockists/{id}
Создать
POST /api/stockists
🖼️ Работа с изображениями

Изображения доступны напрямую:

http://localhost:8080/{imageName}

Пример:

http://localhost:8080/lavanda.jpg

👉 Использование на фронте:

<img src="http://localhost:8080/lavanda.jpg" />
❗ Ошибки

Если объект не найден:

{
  "message": "Not found"
}
🧪 Тестирование (Postman)

Все endpoints протестированы через Postman.

Если нужно — могу отправить Postman Collection (готовые запросы).

▶️ Запуск проекта
mvn spring-boot:run

или через IDE

💬 Для frontend (коротко)

Base URL: http://localhost:8080

Основные данные:

/api/products

/api/awards

/api/founders

/api/stockists

Все ответы — JSON

Изображения — по прямой ссылке
