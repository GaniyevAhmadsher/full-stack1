# 🚀 GitHub-ga Yuklash Yo'riqnomasi

## 1. Git Repository Yaratish

```bash
# Git repository yaratish
git init

# Barcha fayllarni qo'shish
git add .

# Birinchi commit
git commit -m "feat: React + Nest.js login system"
```

## 2. GitHub Repository Yaratish

1. GitHub.com ga kiring
2. "New repository" tugmasini bosing
3. Repository nomini kiriting (masalan: `login-system`)
4. "Create repository" tugmasini bosing

## 3. Remote Repository Qo'shish va Yuklash

```bash
# Remote repository qo'shish (username va repo-ni o'zgartiring)
git remote add origin https://github.com/YOUR_USERNAME/login-system.git

# Main branch nomini o'rnatish
git branch -M main

# GitHub-ga yuklash
git push -u origin main
```

## 4. Qo'shimcha Buyruqlar

```bash
# O'zgarishlarni kuzatish
git status

# O'zgarishlarni qo'shish
git add .

# Commit qilish
git commit -m "Your commit message"

# Yuklash
git push
```

## 5. GitHub Pages (Frontend uchun - ixtiyoriy)

Agar frontend-ni GitHub Pages-da host qilmoqchi bo'lsangiz:

1. GitHub repository settings ga kiring
2. "Pages" bo'limini toping
3. Source: `gh-pages` branch ni tanlang
4. Frontend build qiling va `gh-pages` branch ga push qiling

---

**Eslatma:** `.gitignore` fayli `node_modules` va boshqa keraksiz fayllarni GitHub-ga yuklamasligini ta'minlaydi.
