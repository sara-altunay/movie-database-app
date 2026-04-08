# GitHub Pages Live Demo Setup

## # Option 1: GitHub Pages (Frontend Only)

### # 1. Frontend Build
```bash
cd frontend
npm run build
```

### # 2. GitHub Pages Aktif Et
- GitHub repository aç
- Settings > Pages
- Source: Deploy from a branch
- Branch: main / folder: frontend/dist
- Save

### # 3. Sonuç Link
```
https://sara-altunay.github.io/movie-database-app/
```

## # Option 2: Netlify (Ücretsiz)

### # 1. Netlify Hesap
- https://netlify.com
- GitHub ile hesap olustur

### # 2. Repository Baðla
- "New site from Git"
- GitHub sec
- movie-database-app sec

### # 3. Build Ayarlari
```
Build command: cd frontend && npm run build
Publish directory: frontend/dist
```

### # 4. Sonuç Link
```
https://movie-database-app.netlify.app
```

## # Option 3: Vercel (Ücretsiz)

### # 1. Vercel Hesap
- https://vercel.com
- GitHub ile baglan

### # 2. Import Project
- GitHub repository sec
- Framework: Vite (otomatik)

### # 3. Sonuç Link
```
https://movie-database-app.vercel.app
```

## # Option 4: README'de Local Demo

### # README'de Ekle
```markdown
## # Live Demo

### # Local Demo
```bash
# Backend
cd backend && npm start

# Frontend  
cd frontend && npm run dev

# Tarayýcýda aç
http://localhost:5173
```

### # API Demo
```bash
# Postman test
GET http://localhost:4000/movies
```
```

## # Option 5: Heroku (Backend + Frontend)

### # 1. Heroku Hesap
- https://heroku.com
- GitHub ile baglan

### # 2. Deploy
- New app
- GitHub sec
- Automatic deploys

### # 3. Sonuç Link
```
https://movie-database-app.herokuapp.com
```

## # Hýzlý Çözüm: Vercel

### # 1. Vercel'e Git
- https://vercel.com
- GitHub ile baglan

### # 2. Import Project
- movie-database-app sec
- Deploy

### # 3. 5 Dakikada Hazýr
- Otomatik build
- HTTPS link
- Custom domain

---

**Öneri:** Vercel en hizli ve kolay çözüm!
