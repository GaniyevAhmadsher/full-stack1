# 🔐 Login System - React + Nest.js

Bu loyiha React frontend va Nest.js backend dan iborat to'liq login tizimidir.

## 📋 Loyiha Tuzilishi

```
.
├── backend/          # Nest.js backend
│   ├── src/
│   │   ├── auth/     # Auth controller va service
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
│
├── frontend/         # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── Login.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## 🚀 O'rnatish va Ishga Tushirish

### Backend (Nest.js)

```bash
# Backend papkasiga o'ting
cd backend

# Dependencies o'rnatish
npm install

# Development rejimida ishga tushirish
npm run start:dev
```

Backend `http://localhost:3001` portda ishlaydi.

### Frontend (React)

```bash
# Frontend papkasiga o'ting
cd frontend

# Dependencies o'rnatish
npm install

# Development server ishga tushirish
npm run dev
```

Frontend `http://localhost:3000` portda ishlaydi.

## 🔑 Demo Hisoblar

Loyihani sinab ko'rish uchun quyidagi demo hisoblardan foydalaning:

1. **Admin:**

   - Email: `admin@example.com`
   - Parol: `admin123`

2. **User:**
   - Email: `user@example.com`
   - Parol: `user123`

## 📡 API Endpoints

### POST `/auth/login`

Foydalanuvchi kirish uchun.

**Request:**

```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Muvaffaqiyatli kirildi!",
  "user": {
    "id": 1,
    "email": "admin@example.com",
    "name": "Admin User"
  },
  "token": "demo_token_1_..."
}
```

### GET `/auth/check`

Auth endpoint ishlayotganini tekshirish.

## 🛠️ Texnologiyalar

### Backend

- **Nest.js** - Node.js framework
- **TypeScript** - Type safety
- **class-validator** - Validation
- **CORS** - Cross-origin resource sharing

### Frontend

- **React 18** - UI library
- **Vite** - Build tool
- **Axios** - HTTP client
- **CSS3** - Styling

## 📦 Build

### Backend

```bash
cd backend
npm run build
npm run start:prod
```

### Frontend

```bash
cd frontend
npm run build
npm run preview
```

## 🔒 Xavfsizlik

⚠️ **Eslatma:** Bu demo loyiha. Production uchun quyidagilarni qo'shing:

- JWT token authentication
- Password hashing (bcrypt)
- Database integration
- Rate limiting
- Input sanitization
- HTTPS

## 📝 GitHub-ga Yuklash

```bash
# Git repository yaratish
git init

# Barcha fayllarni qo'shish
git add .

# Commit qilish
git commit -m "Initial commit: React + Nest.js login system"

# GitHub repository yaratib, remote qo'shing
git remote add origin https://github.com/username/login-system.git

# Yuklash
git push -u origin main
```

## 🤝 Yordam

Agar muammo bo'lsa:

1. `node_modules` va `dist` papkalarini o'chirib, qayta `npm install` qiling
2. Portlar band bo'lmasligini tekshiring (3000, 3001)
3. CORS sozlamalarini tekshiring

## 📄 License

MIT

---

**Yaratilgan:** 2024  
**Texnologiyalar:** React, Nest.js, TypeScript, Vite
