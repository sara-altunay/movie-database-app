# Postman'de Response Bilgilerini Bulma Rehberi

## # Postman Arayüzü

### # Ana Bölümler
```
[1] URL Bar ve Method      [2] Send Butonu
[3] Response Panel         [4] Status Bar
```

## # Response Bilgilerinin Yeri

### # Response Panel (Sa taraf)
```
| Response Status: 200 OK
| Response Time: 45ms
| Response Size: 15.2KB
| 
| [Pretty] [Raw] [Preview] [Visualize]
| 
| [
|   {
|     "title": "Inception",
|     "year": "2010",
|     ...
|   }
| ]
```

## # Detaylu Nerede Bakacaksiniz

### # 1. Status Bar (Response'un üstü)
- **Status Code**: 200 OK (yeil renk)
- **Time**: 45ms (yaninda saat ikonu)
- **Size**: 15.2KB (yaninda disk ikonu)

### # 2. Response Body (Ana panel)
- **JSON array** göreceksiniz
- **15 movie object** içinde
- Her film: title, year, genre, rating...

### # 3. Response Headers (Alt tab)
```
Content-Type: application/json
Content-Length: 15234
Connection: keep-alive
```

## # Ekran Görüntüsü Konumu

### # Postman Tam Ekran
```
+-------------------------------------------------+
| GET | http://localhost:4000/movies           [Send] |
+-------------------------------------------------+
| Headers | Body | Pre-request Script | Tests      |
+-------------------------------------------------+
|                                                 |
| Status: 200 OK    Time: 45ms    Size: 15.2KB  |
|                                                 |
| [Pretty] [Raw] [Preview]                        |
|                                                 |
| [                                              ] |
| {                                              |
|   "title": "Inception",                        |
|   "year": "2010",                              |
|   "genre": ["Action", "Sci-Fi"],              |
|   ...                                           |
| }                                              |
| [                                              ] |
|                                                 |
+-------------------------------------------------+
| Headers | Cookies | Test Results | Console     |
+-------------------------------------------------+
```

## # Adim Adim Bulma

### # 1. Request'i Gönder
- Send butonuna tikla
- Response panelinde bekle

### # 2. Status'i Kontrol Et
- Response panelinin üstünde
- "Status: 200 OK" yazacak
- Yaninda "Time: 45ms" yazacak

### # 3. Response Body'i Gör
- Ana panelde JSON array
- 15 film objesi göreceksin
- Her filmin bilgileri mevcut

### # 4. Response Size'i Kontrol Et
- Status bar'da
- "Size: 15.2KB" gibi bir rakam

## # Gösterilecek Ekran Bölümleri

### # Video Için Önemli Alanlar

#### # 1. URL ve Method
```
GET http://localhost:4000/movies
```

#### # 2. Send Butonu
- Mavi renkli Send butonu
- Tiklandiktan sonra response gelir

#### # 3. Status Bilgileri
```
Status: 200 OK    Time: 45ms    Size: 15.2KB
```

#### # 4. JSON Response
```json
[
  {
    "title": "Inception",
    "year": "2010",
    "genre": ["Action", "Sci-Fi", "Thriller"],
    "rating": "8.8",
    "description": "A thief uses dream-sharing...",
    "director": "Christopher Nolan",
    "cast": ["Leonardo DiCaprio", ...],
    "duration": "2h 28min",
    "language": "English",
    "image": "https://...",
    "id": "1bc38e79-..."
  }
]
```

## # Hata Ayiklama

### # Eger Response Gelmezse
1. **Backend calisiyor mu?**
   - Terminal: `npm start`
   - Port: 4000

2. **URL Dogru mu?**
   - http://localhost:4000/movies
   - HTTPS degil HTTP

3. **CORS Hatasimi?**
   - Console'da CORS hatasi
   - Backend CORS ayarlari

### # Response Hatalari
- **404**: URL yanlis
- **500**: Backend hata
- **Connection Refused**: Sunucu kapali

## # Video Için Ipuclari

### # Ekran Ayarlari
- Postman'i tam ekran yap
- Zoom seviyesi: 100%
- Temiz ve düzenli görünüm

### # Vurgulanacak Alanlar
- Status bar (üst kisma)
- Response body (ana panel)
- JSON formati (Pretty mod)

### # Kayit Sirasi
1. URL'yi göster
2. Send'a tikla
3. Status'i bekle
4. Response'i göster
5. JSON array'i zoom yap

---

**Not:** Postman'de response bilgileri her zaman sag panelde görünür!
