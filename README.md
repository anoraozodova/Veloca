# 🚀 Veloce Backend

Backend API для веб-приложения **Veloce** — бренда безалкогольных аперитивов.

Сервис предоставляет данные для frontend (продукты, информация о компании, основатель, точки продаж).

---

# 🧠 Что делает этот backend

Этот backend:

* 📦 хранит данные в PostgreSQL
* 🔄 преобразует данные через DTO и Mapper
* 🌐 отдаёт данные через REST API
* 📊 агрегирует данные для страниц (Home, About)
* 🖼 отдаёт изображения продуктов и основателя
* ⚡ автоматически заполняет базу (DataLoader)

---

# 🧱 Архитектура

Проект построен по классической layered architecture:

```
controller → service → repository → database
                ↓
              mapper
                ↓
               dto
```

---

## 📂 Структура проекта

```
backend/
 ├── controller   # REST endpoints
 ├── service      # бизнес-логика
 ├── repository   # работа с БД (JPA)
 ├── entity       # сущности (таблицы)
 ├── dto          # модели ответа
 ├── mapper       # преобразование Entity → DTO
 ├── config       # конфиги (CORS, Swagger, DataLoader)
```

---

# 🗄️ Основные сущности

## Product

* name
* description
* category (floral / citrus / spiced)
* imageUrl

---

## Founder

* name
* imageUrl

---

## Award

* year
* title

---

## CompanyInfo

* description
* phone
* email

---

## Stockist

* region
* companyName
* email
* phone

---

# 🌐 API

## Base URL

```
http://localhost:8080/api
```

---

## 🏠 Home

```
GET /api/home
```

### Что делает:

Возвращает ВСЕ данные для главной страницы.

### Response:

```json
{
  "heroText": "...",
  "featuredProduct": {...},
  "products": [...]
}
```

---

## 📖 About

```
GET /api/about
```

### Что делает:

Агрегирует:

* описание компании
* founder
* awards
* контакты

### Response:

```json
{
  "description": "...",
  "founder": {
    "name": "Mike Vera",
    "imageUrl": "/founder.jpg"
  },
  "awards": [...],
  "contact": {
    "phone": "...",
    "email": "..."
  }
}
```

---

## 🍸 Products

### Получить все:

```
GET /api/products
```

### Фильтр:

```
GET /api/products?category=citrus
```

### По ID:

```
GET /api/products/{id}
```

---

## 📍 Stockists

```
GET /api/stockists
```

---

# 🖼 Работа с изображениями

Изображения хранятся в:

```
src/main/resources/static/
```

Доступ:

```
http://localhost:8080/{image}.jpg
```

Пример:

```
http://localhost:8080/lavanda.jpg
```

---

# ⚙️ Как запустить

## 1. Клонировать

```
git clone https://github.com/Ziyo380/Veloce.git
cd Veloce/backend
```

---

## 2. Создать БД

```
veloce_db
```

---

## 3. Настроить `application.yml`

```
spring:
  datasource:
    url: jdbc:postgresql://localhost:5432/veloce_db
    username: postgres
    password: postgres
```

---

## 4. Запустить

```
VeloceBackendApplication
```

---

# 🌱 DataLoader

При запуске backend автоматически создаёт тестовые данные:

* продукты (Lavande, Primavera, Spezia)
* founder (Mike Vera)
* awards
* company info
* stockists

---

# 📚 Swagger

```
http://localhost:8080/swagger-ui/index.html
```

Позволяет:

* смотреть API
* тестировать endpoints
* видеть структуру ответов

---

# ⚠️ Важно для Frontend

* API уже содержит все нужные данные
* данные возвращаются через DTO (чистые, без лишнего)
* CORS включён
* авторизация не требуется
* изображения доступны по URL

---

# 💡 Особенности

* ✔ DTO + Mapper архитектура
* ✔ агрегированные endpoints (home, about)
* ✔ разделение логики
* ✔ Swagger документация
* ✔ автоматическая инициализация данных

---

# 👨‍💻 Автор

Ziyovuddin (Ziyo)
