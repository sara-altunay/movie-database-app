# 🎬 Fullstack Movie Database App

Modern, responsive film veritabanü uygulamasý ile en popüler filmleri keþfedin.

## ✨ Demo

<p align="center">
  <img src="https://raw.githubusercontent.com/sara-altunay/movie-database-app/main/frontend/public/demo.gif" 
       alt="Movie Database Demo" 
       width="800">
</p>

## ✨ Özellikler

## Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **React Router** - Navigation

## Features

- Responsive design
- Glass morphism UI
- Smooth animations
- Movie cards with hover effects

## Setup

```bash
npm install
npm run dev
```

## Live Demo

### Local Setup
```bash
# Backend Server
cd backend
npm start

# Frontend Development  
cd frontend
npm run dev

# Open in Browser
http://localhost:5173
```

### API Demo
```bash
# Test with Postman or curl
GET http://localhost:4000/movies

# Example Response
[
  {
    "title": "Inception",
    "year": "2010",
    "genre": ["Action", "Sci-Fi", "Thriller"],
    "rating": "8.8",
    "image": "https://...",
    "id": "..."
  }
]
```

### Live Links
- **Frontend**: http://localhost:5173  
- **Backend API**: http://localhost:4000/movies
- **GitHub Repository**: https://github.com/sara-altunay/movie-database-app

## 🛠 Used Technologies

### Frontend
- **React 18**: Modern, component-based UI library
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern ikon kütüphanesi
- **Axios**: HTTP istekleri için

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web framework for Node.js
- **CORS**: Cross-origin resource sharing
- **JSON Server**: Basit ve hızlı API

## 🎨 UI/UX Özellikleri

- **Glass Morphism**: Modern ve şık tasarım trendi
- **Hover Efektleri**: Film kartlarında interaktif animasyonlar
- **Smooth Transitions**: Kullanıcı deneyimini iyileştiren geçişler
- **Responsive Grid**: Farklı ekran boyutlarına uyumlu ızgara
- **Loading States**: Kullanıcı dostu yükleme animasyonları

## 📊 Proje Yapısı

```
1-fullstack-movie/
├── backend/
│   ├── data/
│   │   └── movies.json          # Film veritabanı
│   ├── methods/
│   │   ├── handle-get.js       # GET işlemleri
│   │   ├── handle-post.js      # POST işlemleri
│   │   ├── handle-put.js       # PUT işlemleri
│   │   └── handle-delete.js    # DELETE işlemleri
│   ├── utils/
│   │   ├── body-parser.js       # Request body parser
│   │   └── validate-data.js   # Veri validasyonu
│   └── server.js              # Ana sunucu dosyası
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   │   └── home/
    │   │       └── card.jsx     # Film kartı component'i
    │   ├── App.jsx              # Ana uygulama component'i
    │   ├── main.jsx             # React entry point
    │   └── index.css            # Global stiller
    └── public/                 # Statik dosyalar
```

## 🎯 API Endpoint'ler

- `GET /movies` - Tüm filmleri listele
- `GET /movies/:id` - Belirli bir filmi getir
- `POST /movies` - Yeni film ekle
- `PUT /movies/:id` - Film güncelle
- `DELETE /movies/:id` - Film sil

## 📈 Performans

- **Hızlı Yükleme**: Optimized JSON veritabanı
- **Efficient Rendering**: React virtualization
- **Smooth Animations**: CSS transitions
- **Mobile Optimized**: Touch-friendly interface

## 🔮 Gelecek Planlar

- [ ] Film arama özelliği
- [ ] Sıralama seçenekleri
- [ ] Film favori sistemi
- [ ] Kullanıcı profilleri
- [ ] Film yorumları
- [ ] MongoDB entegrasyonu

---

**Developed with ❤️ using React, Node.js and modern web technologies**
# movie-database-app
