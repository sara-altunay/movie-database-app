# 📮 Postman GET /movies Endpoint Kullanım Rehberi

## 🚀 Adım Adım Kurulum

### 1️⃣ Postman'i Açın
- Postman uygulamasını başlatın
- Yeni collection oluşturun (isteğe bağlı)

### 2️⃣ Yeni Request Oluşturun
- **+** butonuna tıklayın
- **HTTP Request** seçin
- Request adı: "Get All Movies"

## 🎯 Request Ayarları

### 📝 HTTP Method ve URL
```
Method: GET
URL: http://localhost:4000/movies
```

### 🔧 Parametreler (İsteğe bağlı)
- **Params** sekmesine tıklayın
- Eğer filtreleme isterseniz:
  - `genre=Action`
  - `year=2010`
  - `rating=8.5`

### 📋 Headers
- **Headers** sekmesi
- Aşağıdaki header'ları ekleyin:
```
Content-Type: application/json
Accept: application/json
```

### 🏪 Body
- GET request'inde body gerekmez
- **Body** sekmesi → **none** konumunda

## 🎮 Test Etme

### 1️⃣ Backend'i Başlatın
```bash
cd backend
npm start
```
- Sunucunun çalıştığından emin olun
- Terminal'de "Server started listening on port 4000" mesajı

### 2️⃣ Request'i Gönderin
- **Send** butonuna tıklayın
- **Response** süresini izleyin

## 📊 Beklenen Response

### ✅ Başarılı Response (Status: 200 OK)
```json
[
  {
    "title": "Inception",
    "year": "2010",
    "genre": ["Action", "Sci-Fi", "Thriller"],
    "rating": "8.8",
    "description": "A thief uses dream-sharing technology...",
    "director": "Christopher Nolan",
    "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    "duration": "2h 28min",
    "language": "English",
    "image": "https://m.media-amazon.com/images/M/...",
    "id": "1bc38e79-4e59-4b28-a1f6-d9692920c551"
  },
  // ... diğer filmler
]
```

### ❌ Hata Response'leri
- **404 Not Found**: URL yanlış
- **500 Internal Server**: Backend çalışmıyor
- **Connection Refused**: Sunucu kapalı

## 🎨 Postman Ayarları

### 🎯 Görünüm
- **Pretty**: JSON formatında göster
- **Raw**: Ham veriyi göster
- **Preview**: Formatlanmış görünüm

### 📊 Response Süresi
- **Status**: 200 OK (başarılı)
- **Time**: < 100ms (hızlı)
- **Size**: ~15KB (tüm filmler)

## 🔧 Gelişmiş Testler

### 📋 Collection Oluşturma
1. **New Collection** → "Movie API"
2. Request'i collection'a ekle
3. **Save** ile kaydet

### 🎪 Environment Variables
- **Environment** → **Add**
- Değişkenler:
  ```
  base_url: http://localhost:4000
  movies_endpoint: {{base_url}}/movies
  ```
- URL'de kullan: `{{movies_endpoint}}`

### 🧪 Test Scripts
- **Tests** sekmesi
- Response doğrulama:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has movies array", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an('array');
    pm.expect(jsonData.length).to.be.above(0);
});
```

## 🎥 Diğer Endpoint'ler

### 📄 GET /movies/:id
```
Method: GET
URL: http://localhost:4000/movies/1bc38e79-4e59-4b28-a1f6-d9692920c551
```

### ➕ POST /movies
```
Method: POST
URL: http://localhost:4000/movies
Body: raw JSON
Headers: Content-Type: application/json
```

### ✏️ PUT /movies/:id
```
Method: PUT
URL: http://localhost:4000/movies/:id
Body: raw JSON
Headers: Content-Type: application/json
```

### 🗑️ DELETE /movies/:id
```
Method: DELETE
URL: http://localhost:4000/movies/:id
```

## 🎸 Hata Ayıklama

### 🔍 Common Issues
- **CORS Error**: Backend CORS ayarları kontrol et
- **Connection Refused**: Sunucu çalışmıyor
- **404 Error**: URL yanlış veya endpoint mevcut değil
- **Empty Response**: JSON dosyası boş veya format hatası

### 🛠 Çözümler
1. **Backend'i kontrol et**: `npm start` ile başlat
2. **Port kontrolü**: 4000 port'u kullanılıyor mu?
3. **URL doğrula**: `http://localhost:4000/movies`
4. **JSON formatı**: movies.json dosyasını kontrol et

## 📸 Ekran Görüntüsü İçin

### 🎥 Postman Ekranı
- Request paneli (sol)
- Response paneli (sağ)  
- Status ve zaman bilgileri (alt)
- URL ve method (üst)

### 📋 Gösterilecek Bilgiler
- Method: GET
- URL: http://localhost:4000/movies
- Status: 200 OK
- Response Time: 45ms
- Response Body: JSON array

---

**İpucu**: Bu ayarlarla Postman'de profesyonel API testi yapabilirsiniz! 📮
