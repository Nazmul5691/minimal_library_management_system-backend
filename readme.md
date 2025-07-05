# 📚 Library Management API

A RESTful API for a Library Management System built with **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

---

## 🚀 Live Demo

> Deployed on **Vercel**: [https://minimal-library-management-system-b.vercel.app](https://minimal-library-management-system-b.vercel.app)

---

## 📁 Project Structure

```
📦 src
├── app
│   ├── controllers
│   │   ├── book.controller.ts
│   │   └── borrow.controller.ts
│   ├── models
│   │   ├── book.model.ts
│   │   └── borrow.model.ts
│   ├── interfaces
│   │   ├── book.interface.ts
│   │   └── borrow.interface.ts
│   ├── routes
│   │   ├── book.route.ts
│   │   └── borrow.route.ts
│   ├── middlewares
│   │   └── errorHandler.ts
├── app.ts
└── server.ts
```

---

## 📦 Installation & Setup

### 1. Clone the repository:

```bash
git clone https://github.com/Nazmul5691/minimal_library_management_system-backend
cd minimal_library_management_system-backend
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Create `.env` file:

```env
DATABASE_URL=mongodb+srv://<your-db-url>
PORT=5000
```

### 4. Start development server:

```bash
npm run dev
```



## Scripts

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "build": "tsc"
}
```

---

## 📌 API Endpoints

### ✅ Create Book

`POST /books`

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
```

### ✅ Get All Books

`GET /books?filter=SCIENCE&sortBy=createdAt&sort=desc&limit=5`

### ✅ Get Book by ID

`GET /books/:bookId`

### ✅ Update Book

`PUT /books/:bookId`

### ✅ Delete Book

`DELETE /books/:bookId`

### ✅ Borrow a Book

`POST /borrow`

```json
{
  "book": "<book-id>",
  "quantity": 2,
  "dueDate": "2025-07-18T00:00:00.000Z"
}
```

### ✅ Borrowed Books Summary

`GET /borrow`

---

## ⚙️ Features Implemented

- ✅ Mongoose schema validation
- ✅ Business logic (borrow copies + availability)
- ✅ Aggregation pipeline
- ✅ Mongoose static methods
- ✅ Central error handler middleware

---

## 🧪 Test Data Example

```json
{
  "title": "1984",
  "author": "George Orwell",
  "genre": "FICTION",
  "isbn": "9780451524935",
  "description": "A dystopian social science fiction novel.",
  "copies": 3,
  "available": true
}

```

---

## 🌐 Deployment (Vercel)

This project is deployed on **Vercel**, which supports serverless deployment of Node.js/Express apps using an `api` directory structure.

### ✅ How Vercel Deployment Works:

- You must configure a `vercel.json` file (if needed).
- Vercel auto-detects your `tsconfig.json` and compiles TypeScript.
- Your Express server (`app.ts`) is wrapped and served as a serverless function.
- Environment variables must be added in Vercel Dashboard.

### ✅ Set Environment Variables in Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → **Settings** → **Environment Variables**
3. Add:

```
DATABASE_URL = your-mongodb-url
PORT = 5000
```




