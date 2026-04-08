# GitHub'a Yükleme Rehberi

## # Adim 1: GitHub Repository Olustr

### # 1. GitHub Giri Yap
- https://github.com adresine git
- Giri yap veya yeni hesap olustr

### # 2. New Repository
- Sa üst kösedeki "+" butonu
- "New repository" seç

### # 3. Repository Ayarlari
```
Repository name: movie-database-app
Description: Fullstack Movie Database App with React & Node.js
Visibility: Public (veya Private)
Add README: NO (zaten var)
Add .gitignore: NO (zaten var)
Add license: MIT (veya None)
```

### # 4. Create Repository
- "Create repository" butonuna bas

## # Adim 2: Git Kurulumu

### # 1. Git Init (Projede)
```bash
cd /Users/yusufaltunay/Downloads/8-backend-main/1-fullstack-movie
git init
```

### # 2. Remote Ekle
```bash
git remote add origin https://github.com/kullanicin/movie-database-app.git
```
**Not:** `kullanicin` kendi GitHub kullanici adinizla degistirin

## # Adim 3: Dosyalari Hazirla

### # 1. .gitignore Olustur
```bash
# .gitignore dosyasi olustur
cat > .gitignore << EOF
# Dependencies
node_modules/
npm-debug.log*

# Build
dist/
build/

# Environment
.env
.env.local

# Logs
*.log

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
EOF
```

### # 2. README Hazirla
- Ana README.md dosyasi zaten hazir
- Frontend README_EN.md hazir
- Demo GIF eklendi

## # Adim 4: Ilk Commit

### # 1. Tüm Dosyalari Ekle
```bash
git add .
```

### # 2. Commit Yap
```bash
git commit -m "Initial commit: Fullstack Movie Database App

- React frontend with Tailwind CSS
- Node.js backend with Express
- 15+ movies with working images
- RESTful API endpoints
- Responsive design with glass morphism UI
- Demo GIF included"
```

## # Adim 5: GitHub'a Yükle

### # 1. Main Branch Olustur
```bash
git branch -M main
```

### # 2. GitHub'a Push Et
```bash
git push -u origin main
```

## # Adim 6: GitHub'da Kontrol

### # 1. Repository Kontrol Et
- GitHub repository sayfasini aç
- Tüm dosyalarin yüklendigini kontrol et
- README.md'nin göründügünü dogrula

### # 2. Demo GIF Kontrolü
- README'de demo.gif'in görünüp görünmediðini kontrol et
- Eger görünmüyorsa, GitHub'a manuel yükle

## # Adim 7: Demo GIF'i Manuel Yükle

### # 1. GitHub Upload
- GitHub repository sayfasinda
- "Add file" > "Upload files"
- `frontend/public/demo.gif` seç
- Upload et

### # 2. README Güncelle
```bash
# README'deki GIF linkini güncelle
git add README.md
git commit -m "Update demo GIF link for GitHub"
git push
```

## # Adim 8: GitHub Pages (Opsiyonel)

### # 1. Frontend Deploy
```bash
cd frontend
npm run build
```

### # 2. GitHub Pages Aktif Et
- Repository settings > Pages
- Source: Deploy from a branch
- Branch: main / folder: docs
- Save

## # Hizli Komutlar

### # Tek Komutla Yükle
```bash
cd /Users/yusufaltunay/Downloads/8-backend-main/1-fullstack-movie

# Git init ve remote ekle
git init
git remote add origin https://github.com/kullanicin/movie-database-app.git

# Tüm dosyalari ekle ve commit
git add .
git commit -m "Initial commit: Fullstack Movie Database App"

# GitHub'a yükle
git branch -M main
git push -u origin main
```

## # GitHub Linkleri

### # Repository Link
```
https://github.com/kullanicin/movie-database-app
```

### # Demo GIF Link
```
https://github.com/kullanicin/movie-database-app/blob/main/frontend/public/demo.gif
```

### # README'de Kullanilacak Link
```
https://github.com/kullanicin/movie-database-app/blob/main/frontend/public/demo.gif?raw=true
```

## # Basarili Kontrolü

### # Checklist
- [ ] Repository olustruldu
- [ ] Dosyalar yüklendi
- [ ] README.md görünüyor
- [ ] Demo GIF görünüyor
- [ ] Linkler çalisiyor
- [ ] GitHub Pages aktif (opsiyonel)

## # Sorunlar ve Çözümler

### # Authentication Error
```bash
# GitHub token ile authentication
git remote set-url origin https://kullanicin:token@github.com/kullanicin/movie-database-app.git
```

### # Push Reddedildi
```bash
# Force push (dikkatli kullan)
git push -f origin main
```

### # GIF Görünmüyor
- GitHub'a manuel yükle
- Link kontrol et
- Dosya adini kontrol et

---

**Sonuç:** Bu rehberle projenizi GitHub'a profesyonel bir sekilde yükleyebilirsiniz!
