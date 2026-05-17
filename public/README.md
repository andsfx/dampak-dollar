# Dampak Dolar ke Rupiah bagi Rakyat Desa

Landing page edukasi interaktif yang menjelaskan bagaimana fluktuasi nilai tukar USD/IDR mempengaruhi kehidupan ekonomi masyarakat pedesaan Indonesia.

## 🌐 Live Demo

**Production:** https://dampak-dollar.vercel.app

## 📋 Fitur

### 1. Kurs USD/IDR Real-time
- Mengambil data kurs live dari API publik (`open.er-api.com`)
- Fallback otomatis ke nilai asumsi jika API gagal
- Timestamp update terakhir
- Status indikator (LIVE/FALLBACK)

### 2. Kalkulator Dampak Mandiri
- Input pengeluaran bulanan:
  - Pupuk & obat tani
  - BBM/solar & transport
  - Sembako impor/olahan
  - Suku cadang/elektronik
- Slider skenario pelemahan Rupiah (1-20%)
- Perhitungan sensitivitas berbasis koefisien realistis:
  - Pupuk: 0.7x shock kurs
  - BBM/transport: 0.5x
  - Sembako: 0.35x
  - Alat/elektronik: 0.8x
- Output: tambahan beban, total awal, total baru, kurs skenario

### 3. Katalog Substitusi Impor
- Filter kategori: Pertanian, Pangan, Energi/Alat
- 6 item substitusi faktual dengan tingkat risiko
- Narasi mitigasi ketergantungan kurs

### 4. Peta Kerentanan Wilayah
- SVG interaktif Indonesia
- 5 wilayah: Sumatra, Jawa, Sulawesi, Pesisir Timur, Indonesia Timur
- Detail per wilayah:
  - Tingkat risiko
  - Alasan ekonomi
  - Saran fokus lokal

### 5. Konten Edukasi Lengkap
- Mengapa Dolar berpengaruh (Rupiah melemah vs menguat)
- 4 jalur dampak ke desa (BBM, pupuk, sembako, alat)
- Dampak per sektor (petani, nelayan, buruh)
- Matriks komparasi kerentanan
- Profiler persona interaktif (4 profil)

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS (CDN), Vanilla JavaScript
- **API:** ExchangeRate-API (open.er-api.com)
- **Deployment:** Vercel
- **Version Control:** Git, GitHub

## 📦 Struktur File

```
dampak-dollar/
├── index.html          # Landing page utama
├── vercel.json         # Konfigurasi Vercel
├── package.json        # Metadata project
└── README.md           # Dokumentasi
```

## 🚀 Deploy

### Vercel (Production)
```bash
vercel --prod
```

### Local Development
```bash
python3 -m http.server 8000
# Buka http://localhost:8000
```

## 📊 Data & Metodologi

### Kurs Real-time
- Sumber: [ExchangeRate-API](https://www.exchangerate-api.com/)
- Update: Setiap page load
- Fallback: Rp16.000/USD (asumsi edukasi)

### Sensitivitas Kalkulator
Model sensitivitas berbasis proxy edukasi, **bukan prediksi harga resmi**. Faktor lain yang mempengaruhi harga riil:
- Subsidi pemerintah (pupuk, BBM)
- Stok nasional & impor
- Pajak & bea masuk
- Rantai pasok lokal
- Musim & cuaca

### Peta Kerentanan
Pengelompokan ekonomi regional berbasis:
- Komoditas ekspor dominan
- Ketergantungan BBM/solar
- Logistik kepulauan
- Konsumsi impor

**Bukan data GIS resmi**, melainkan narasi edukasi untuk memahami pola risiko.

## 🎯 Tujuan Project

1. **Edukasi:** Menjelaskan transmisi nilai tukar ke ekonomi desa
2. **Faktual:** Memakai data kurs riil + metodologi transparan
3. **Aksi:** Memberikan katalog substitusi & strategi mitigasi
4. **Interaktif:** Kalkulator & peta untuk eksplorasi mandiri

## 📝 Catatan Penting

- Angka kalkulator adalah **skenario sensitivitas edukasi**, bukan harga pasar resmi
- Harga pupuk, BBM, sembako dipengaruhi banyak faktor selain kurs
- Substitusi impor bukan pengganti total, melainkan mitigasi ketergantungan
- Peta kerentanan bersifat skematik, bukan pemetaan GIS detail

## 👤 Author

**Andy Safii**
- GitHub: [@andsfx](https://github.com/andsfx)
- Email: andotherstori@gmail.com

## 📄 License

MIT License - bebas digunakan untuk edukasi & non-komersial.

## 🙏 Acknowledgments

- Data kurs: [ExchangeRate-API](https://www.exchangerate-api.com/)
- Design system: Tailwind CSS
- Hosting: Vercel
- Font: DM Sans (Google Fonts)
