# CV Aneka Aluminium Cemerlang - Company Profile Website

Professional B2B company profile website untuk perusahaan fabrikasi metal dengan sistem lead generation terintegrasi.

## 📋 Overview

Website ini dirancang khusus untuk **CV Aneka Aluminium Cemerlang**, perusahaan yang bergerak di bidang fabrikasi metal dan aluminium untuk kebutuhan industri B2B. Website ini berfungsi sebagai:

- **Company Profile** profesional
- **Lead Generation System** untuk mengumpulkan data calon klien
- **Portfolio Showcase** hasil proyek
- **Service Catalog** dengan detail lengkap

## ✨ Features

### 1. **Professional Design**
- Modern industrial/professional aesthetic
- Responsive untuk semua ukuran layar (mobile, tablet, desktop)
- Smooth animations dan transitions
- SEO-optimized structure

### 2. **Complete Content Pages**
- **Home**: Hero section, features, services highlight, stats, portfolio preview
- **Tentang Kami**: Profil perusahaan, visi/misi, core values, keunggulan
- **Layanan**: 6 layanan utama dengan detail spesifikasi dan proses
- **Portfolio**: Gallery proyek dengan filter kategori
- **Kontak**: Form leads generation dengan contact information lengkap

### 3. **Lead Management System** ⭐
- Form kontak dengan validasi client-side
- Spam protection (honeypot + rate limiting)
- **LocalStorage** untuk menyimpan data leads
- **Export to CSV** functionality
- **Google Sheets Integration** ready (perlu konfigurasi)
- Admin console functions untuk manage leads

### 4. **Interactive Features**
- Mobile-responsive navigation dengan hamburger menu
- Portfolio filtering berdasarkan kategori
- Smooth scroll animations
- Back to top button
- Form validation real-time
- Active link highlighting

## 🚀 Quick Start

### 1. **Live Preview**

Langsung buka `index.html` di browser atau jalankan local server:

```bash
# Menggunakan Python
cd "/home/renjerpink/Documents/Pemrograman/JS/company-profile-CV Aneka Aluminium Cemerlang"
python3 -m http.server 8000

# Atau menggunakan PHP
php -S localhost:8000

# Atau menggunakan Node.js (install http-server terlebih dahulu)
npx http-server -p 8000
```

Kemudian buka `http://localhost:8000` di browser.

### 2. **Deploy ke Hosting**

Website ini adalah static HTML/CSS/JavaScript, bisa di-deploy ke platform apapun:

**Gratis:**
- [Netlify](https://www.netlify.com/) - Drag & drop folder, langsung online
- [Vercel](https://vercel.com/) - Link dengan GitHub atau deploy manual
- [GitHub Pages](https://pages.github.com/) - Gratis untuk public repository
- [Cloudflare Pages](https://pages.cloudflare.com/)

**Traditional Hosting:**
- Upload semua file via FTP ke shared hosting
- Pastikan `index.html` ada di root directory
- File permissions: folders 755, files 644

## 📁 File Structure

```
company-profile-CV Aneka Aluminium Cemerlang/
├── index.html              # Home page
├── about.html              # Tentang Kami page
├── services.html           # Layanan page
├── portfolio.html          # Portfolio page
├── contact.html            # Kontak page dengan lead form
│
├── css/
│   ├── main.css           # Design system & base styles
│   ├── components.css     # Navigation, buttons, cards, forms, footer
│   └── pages.css          # Page-specific styles
│
├── js/
│   ├── main.js            # Core functionality (nav, scroll, animations)
│   ├── form.js            # Lead form management & validation
│   └── portfolio.js       # Portfolio filtering
│
├── images/                # Folder untuk gambar (placeholder saat ini)
│   ├── portfolio-*.jpg    # Gambar portfolio proyek
│   ├── service-*.jpg      # Gambar layanan
│   └── about-factory.jpg  # Gambar tentang kami
│
├── README.md              # File ini
└── CONTENT_GUIDE.md       # Panduan customisasi content
```

## 🎨 Customization

### Update Company Information

Edit file HTML yang relevan. Berikut lokasi informasi penting:

**1. Company Name & Logo** - Semua file HTML, cari `navbar-logo`:
```html
<div class="navbar-logo-icon">AAC</div>
<span>Aneka Aluminium</span>
```

**2. Contact Info** - Di footer setiap halaman:
```html
<li>📍 Jl. Industri No. 123, Kawasan Industri, Jakarta</li>
<li>📞 <a href="tel:+6281234567890">+62 812-3456-7890</a></li>
<li>✉️ <a href="mailto:info@anekaaluminium.com">info@anekaaluminium.com</a></li>
```

**3. SEO Meta Tags** - Di `<head>` setiap file HTML:
```html
<meta name="description" content="...">
<meta name="keywords" content="...">
<title>...</title>
```

Lihat file `CONTENT_GUIDE.md` untuk panduan lengkap customisasi content.

### Update Images

1. Siapkan gambar dengan kualitas bagus (min 1200px width)
2. Simpan di folder `images/` dengan nama sesuai:
   - `portfolio-1.jpg` sampai `portfolio-9.jpg` - untuk portfolio
   - `service-aluminium.jpg`, `service-stainless.jpg`, etc - untuk layanan
   - `about-factory.jpg` - untuk about page
3. Format: JPG atau PNG, ukuran di-compress untuk web (<500KB per gambar)

### Change Colors

Edit `css/main.css`, bagian `:root`:
```css
:root {
  --color-primary: #1e3a8a;     /* Warna utama */
  --color-accent: #0ea5e9;      /* Warna aksen */
  /* ... */
}
```

## 📊 Lead Management

### Cara Mengakses Data Leads

Website ini menyimpan data leads di **browser localStorage**. Ada 2 cara mengakses:

#### **Option 1: Via Browser Console**

1. Buka website di browser
2. Tekan `F12` atau klik kanan > Inspect > Console tab
3. Jalankan perintah berikut:

```javascript
// Lihat jumlah leads
AAC_Admin.getLeadCount()

// Lihat semua leads
AAC_Admin.getAllLeads()

// Lihat lead terbaru
AAC_Admin.viewLatestLead()

// Export ke CSV
AAC_Admin.exportToCSV()

// Hapus semua leads (hati-hati!)
AAC_Admin.clearAllLeads()
```

#### **Option 2: Google Sheets Integration**

Untuk menyimpan leads langsung ke Google Sheets (recommended):

1. **Buat Google Sheet** baru
2. Buat kolom: Timestamp, Nama Perusahaan, Nama Kontak, Email, Telepon, Layanan, Pesan
3. **Buat Google Apps Script**:
   - Di Google Sheet, klik Extensions > Apps Script
   - Paste script (lihat `GOOGLE_SHEETS_SETUP.md`)
   - Deploy sebagai Web App
   - Copy URL Web App
4. **Update website config**:
   - Edit `js/form.js`
   - Line 8: Paste URL Web App ke `GOOGLE_SCRIPT_URL`
   - Line 9: Set `USE_GOOGLE_SHEETS: true`

Setelah setup, setiap form submission akan otomatis tersimpan ke Google Sheets!

### CSV Export

Leads yang tersimpan di localStorage bisa di-export ke CSV:
- Via console: `AAC_Admin.exportToCSV()`
- File akan otomatis ter-download dengan format: `leads_YYYY-MM-DD.csv`
- Bisa dibuka di Excel, Google Sheets, atau aplikasi spreadsheet lain

## 🔧 Technical Details

### Technologies Used

- **HTML5** - Semantic markup untuk SEO
- **CSS3** - Modern styling dengan CSS variables
- **Vanilla JavaScript** - Zero dependencies, lightweight
- **Google Fonts** - Inter & Outfit fonts
- **LocalStorage API** - untuk menyimpan leads
- **Intersection Observer** - untuk scroll animations

### Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance

- Lightweight: < 100KB total CSS + JS
- Fast loading: < 2 seconds on 3G
- Mobile-optimized
- SEO-friendly structure

## 📝 Content Management

### Menambah/Edit Layanan

Edit `services.html`:
1. Copy salah satu `<div class="service-detail">...</div>` block
2. Paste dan edit content-nya
3. Tambahkan gambar di `images/service-namalayanan.jpg`
4. Update link di `index.html` dan footer

### Menambah Portfolio

Edit `portfolio.html`:
1. Copy `<div class="portfolio-item">...</div>` block
2. Ganti `data-category` sesuai kategori
3. Update image path dan description
4. Tambahkan gambar di `images/portfolio-X.jpg`

### Mengubah Statistik

Edit `index.html` atau halaman lain, cari section `.stats`:
```html
<span class="stat-number">15+</span>
<span class="stat-label">Tahun Pengalaman</span>
```

## 🚀 Deployment Checklist

Before going live:

- [ ] Update semua placeholder text dengan info perusahaan real
- [ ] Ganti semua gambar placeholder dengan foto asli
- [ ] Update contact info (phone, email, address) di semua halaman
- [ ] Test form submission dan pastikan data tersimpan
- [ ] Setup Google Sheets integration (recommended)
- [ ] Test di mobile devices
- [ ] Update SEO meta tags
- [ ] Tambahkan Google Maps embed di contact page
- [ ] Update social media links
- [ ] Test semua links internal & eksternal
- [ ] Compress images untuk web
- [ ] Setup Google Analytics (optional)

## 📞 Support & Customization

Jika butuh bantuan customisasi atau ada pertanyaan:

- Developer: [Your name/contact]
- Documentation: Lihat `CONTENT_GUIDE.md`
-Email: [your email]

## 📄 License

© 2026 CV Aneka Aluminium Cemerlang. All rights reserved.

---

**Built with ❤️ for CV Aneka Aluminium Cemerlang**
