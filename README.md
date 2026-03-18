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
