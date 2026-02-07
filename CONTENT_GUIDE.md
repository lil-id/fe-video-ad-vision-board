# Content Customization Guide

Panduan lengkap untuk customisasi content website CV Aneka Aluminium Cemerlang.

## 📝 Update Informasi Perusahaan

### 1. Nama Perusahaan & Logo

**Lokasi**: Semua file HTML (navbar)

```html
<!-- Di setiap halaman, bagian navbar -->
<a href="index.html" class="navbar-logo">
    <div class="navbar-logo-icon">AAC</div> <!-- Ganti dengan logo/inisial -->
    <span>Aneka Aluminium</span> <!-- Ganti dengan nama perusahaan -->
</a>
```

**Cara update**:
- Ganti "AAC" dengan inisial/logo perusahaan
- Ganti "Aneka Aluminium" dengan nama lengkap perusahaan
- Update di: `index.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html`

### 2. Informasi Kontak

**Lokasi**: Footer di setiap halaman & halaman `contact.html`

```html
<!-- Footer -->
<li>📍 Jl. Industri No. 123, Kawasan Industri, Jakarta</li>
<li>📞 <a href="tel:+6281234567890">+62 812-3456-7890</a></li>
<li>✉️ <a href="mailto:info@anekaaluminium.com">info@anekaaluminium.com</a></li>
<li>🕐 Senin - Sabtu: 08:00 - 17:00</li>
```

**Update**:
- Alamat kantor/workshop lengkap
- Nomor telepon (format: `tel:+628xxx` untuk href)
- Email perusahaan
- Jam operasional

**PENTING**: Update juga di `contact.html` bagian contact-info!

### 3. Social Media Links

**Lokasi**: Footer setiap halaman

```html
<div class="footer-social">
    <a href="#" aria-label="Facebook">📘</a>           <!-- Update href -->
    <a href="#" aria-label="Instagram">📷</a>          <!-- Update href -->
    <a href="#" aria-label="LinkedIn">💼</a>           <!-- Update href -->
    <a href="#" aria-label="WhatsApp">💬</a>           <!-- Update href -->
</div>
```

**Format**:
- Facebook: `https://facebook.com/yourpage`
- Instagram: `https://instagram.com/yourusername`
- LinkedIn: `https://linkedin.com/company/yourcompany`
- WhatsApp: `https://wa.me/6281234567890`

## 📄 Update Content Halaman

### Home Page (`index.html`)

#### Hero Section
```html
<p class="hero-subtitle">Solusi Fabrikasi Metal Terpercaya</p>
<h1 class="hero-title">Partner Industri Anda...</h1>
<p class="hero-description">Kami menyediakan...</p>
```

#### Statistik
```html
<span class="stat-number">15+</span>
<span class="stat-label">Tahun Pengalaman</span>
```
Update angka sesuai data perusahaan real.

### About Page (`about.html`)

#### Profil Perusahaan
```html
<p>
    <strong>CV Aneka Aluminium Cemerlang</strong> adalah perusahaan...
</p>
```
Edit paragraf profil dengan sejarah dan deskripsi perusahaan yang akurat.

#### Visi & Misi
Update text di card "Visi" dan "Misi" sesuai dengan visi/misi perusahaan.

#### Core Values
Edit atau tambah/kurangi value items sesuai nilai perusahaan.

### Services Page (`services.html`)

#### Menambah Layanan Baru
1. Copy salah satu block `<div class="service-detail">...</div>`
2. Ganti ID: `id="nama-layanan"`
3. Update:
   - Title
   - Image path: `images/service-namalayanan.jpg`
   - Description
   - Applications list
   - Features list

#### Mengubah Layanan Existing
Cari section dengan ID layanan (contoh: `id="aluminium"`), lalu edit:
- Judul layanan
- Deskripsi
- List fitur/aplikasi
- Link CTA

### Portfolio Page (`portfolio.html`)

#### Menambah Proyek
```html
<div class="portfolio-item" data-category="manufaktur">
    <img src="images/portfolio-X.jpg" alt="Nama Proyek">
    <div class="portfolio-overlay">
        <h3 class="portfolio-item-title">Nama Proyek</h3>
        <p class="portfolio-item-category">Kategori</p>
        <p>Deskripsi proyek...</p>
    </div>
</div>
```

**Kategori yang tersedia**:
- `manufaktur`
- `konstruksi`
- `farmasi`
- `food`

Bisa tambah kategori baru di filter buttons dan update `js/portfolio.js`.

### Contact Page (`contact.html`)

#### Update Contact Info
Bagian `contact-info`, update semua detail:
- Alamat lengkap
- Telepon/WhatsApp (2 nomor)
- Email (sales & general)
- Jam operasional
- Social media links

#### Form Fields
Jika perlu tambah/kurangi field, edit form dan pastikan update juga `js/form.js` untuk validasi.

## 🎨 Visual Customization

### Update Warna

Edit `css/main.css`, bagian `:root`:

```css
:root {
  /* Warna Utama */
  --color-primary: #1e3a8a;        /* Biru gelap - ubah sesuai brand */
  --color-primary-dark: #1e293b;   /* Hampir hitam */
  --color-primary-light: #3b82f6;  /* Biru terang */
  --color-accent: #0ea5e9;         /* Sky blue - ubah sesuai aksen brand */
  
  /* ... */
}
```

**Tips**:
- `--color-primary`: Warna utama brand (digunakan di buttons, headings)
- `--color-accent`: Warna aksen (digunakan di highlights, CTAs)
- Gunakan color picker online untuk konsistensi

### Update Font

Di setiap file HTML, section `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
```

Ganti `Inter` dan `Outfit` dengan font pilihan dari [Google Fonts](https://fonts.google.com/).

Update di `css/main.css`:
```css
:root {
  --font-primary: 'NamaFont', sans-serif;
  --font-heading: 'NamaFont', sans-serif;
}
```

### Update Images

**Portfolio Images** (`images/portfolio-1.jpg` sampai `portfolio-9.jpg`):
- Ukuran recommended: 1200x900px (4:3 ratio)
- Format: JPG (untuk foto), PNG (untuk graphics)
- Compress untuk web (<500KB per file)
- Alt text descriptive untuk SEO

**Service Images** (`images/service-*.jpg`):
- `service-aluminium.jpg`
- `service-stainless.jpg`
- `service-welding.jpg`
- `service-cutting.jpg`
- `service-machining.jpg`
- `service-custom.jpg`

Ukuran: 800x600px, compressed.

**About Image** (`images/about-factory.jpg`):
- Foto workshop/fasilitas
- Ukuran: 1000x800px

## 🔍 SEO Optimization

### Meta Tags

Di setiap halaman, update `<head>`:

```html
<meta name="description" content="Deskripsi halaman max 160 karakter">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<title>Page Title - CV Aneka Aluminium Cemerlang</title>

<!-- Open Graph for Social Sharing -->
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://yourdomain.com/images/og-image.jpg">
```

### Alt Text pada Gambar

Pastikan setiap `<img>` punya `alt` attribute:
```html
<img src="images/portfolio-1.jpg" alt="Fabrikasi Struktur Aluminium untuk Pabrik Elektronik">
```

## 🗺️ Google Maps Integration

Di `contact.html`, ganti placeholder dengan embed Google Maps real:

1. Buka [Google Maps](https://maps.google.com)
2. Cari alamat perusahaan
3. Klik "Share" > "Embed a map"
4. Copy iframe code
5. Replace bagian placeholder dengan iframe:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=..." 
    width="100%" 
    height="450" 
    style="border:0; border-radius: 1rem;" 
    allowfullscreen="" 
    loading="lazy">
</iframe>
```

## ✉️ Email Links

Format email links:
```html
<a href="mailto:info@anekaaluminium.com?subject=Inquiry from Website&body=Hello,">Email Us</a>
```

Optional parameters:
- `subject=`: Pre-filled subject
- `body=`: Pre-filled message body
- `cc=`: CC email address

## 📞 WhatsApp Links

Format WhatsApp links:
```html
<a href="https://wa.me/6281234567890?text=Halo, saya tertarik dengan layanan fabrikasi">
    Chat via WhatsApp
</a>
```

**Format**:
- `6281234567890` = country code (62) + nomor tanpa leading 0
- `text=` = pre-filled message (URL encoded)

## 🎯 Call-to-Action (CTA) Optimization

Update CTA text agar compelling:
- ❌ "Klik disini"
- ✅ "Minta Penawaran Gratis"
- ✅ "Konsultasi dengan Expert"
- ✅ "Lihat Portfolio Kami"

CTA harus jelas dan action-oriented.

## 📋 Checklist Update Content

- [ ] Nama perusahaan di navbar semua halaman
- [ ] Contact info lengkap di footer & contact page
- [ ] Social media links aktif
- [ ] Email addresses valid
- [ ] Nomor telepon/WhatsApp benar
- [ ] Alamat lengkap dan akurat
- [ ] Jam operasional up-to-date
- [ ] Statistik (tahun pengalaman, jumlah proyek) real
- [ ] Visi & Misi perusahaan
- [ ] Profil perusahaan (about page)
- [ ] Deskripsi layanan detail
- [ ] Portfolio projects dengan gambar dan deskripsi
- [ ] SEO meta tags semua halaman
- [ ] Google Maps embed
- [ ] All images replaced (no placeholders)
- [ ] Color scheme sesuai brand
- [ ] Font sesuai brand guideline (jika ada)

---

**Jika butuh bantuan customisasi lebih lanjut, hubungi developer.**
