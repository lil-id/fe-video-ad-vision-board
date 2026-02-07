# Google Sheets Integration Setup Guide

Panduan setup integrasi Google Sheets untuk otomatis menyimpan lead data dari website.

## 📊 Keuntungan Google Sheets Integration

- ✅ **Real-time data**: Leads langsung tersimpan saat form submitted
- ✅ **Cloud-based**: Akses dari mana saja
- ✅ **Collaborative**: Tim bisa akses dan kelola data bareng
- ✅ **Easy export**: Export ke Excel, PDF, atau format lain
- ✅ **Auto-backup**: Google otomatis backup data
- ✅ **Free**: Gratis tanpa biaya tambahan

## 🚀 Setup Instructions

### Step 1: Buat Google Sheet

1. Buka [Google Sheets](https://sheets.google.com)
2. Klik "+ Blank" untuk buat sheet baru
3. Rename sheet: "CV AAC - Website Leads"
4. Buat header di Row 1:
   - A1: `Timestamp`
   - B1: `Nama Perusahaan`
   - C1: `Nama Kontak`
   - D1: `Email`
   - E1: `Telepon`
   - F1: `Layanan Diminati`
   - G1: `Pesan`

### Step 2: Buat Google Apps Script

1. Di Google Sheet, klik menu **Extensions** > **Apps Script**
2. Delete code yang sudah ada
3. Paste code berikut:

```javascript
/**
 * Google Apps Script untuk menerima lead data dari website
 * CV Aneka Aluminium Cemerlang
 */

function doPost(e) {
  try {
    // Get active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse JSON data from request
    const data = JSON.parse(e.postData.contents);
    
    // Create row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.companyName || '',
      data.contactName || '',
      data.email || '',
      data.phone || '',
      data.serviceInterest || '',
      data.message || ''
    ];
    
    // Append to sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional)
function testDoPost() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        companyName: 'PT Test Company',
        contactName: 'John Doe',
        email: 'test@example.com',
        phone: '+62812345678',
        serviceInterest: 'Fabrikasi Aluminium',
        message: 'Ini adalah test message'
      })
    }
  };
  
  const result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. **Save project**: Klik icon 💾 atau File > Save
   - Project name: "Website Lead Handler"

### Step 3: Deploy Web App

1. Klik tombol **Deploy** > **New deployment**
2. Klik gear icon ⚙️ next to "Select type"
3. Pilih **Web app**
4. Konfigurasi:
   - **Description**: "Lead form handler v1"
   - **Execute as**: Me (email Anda)
   - **Who has access**: Anyone
5. Klik **Deploy**
6. **Authorize access**:
   - Klik "Authorize access"
   - Pilih Google account Anda
   - Klik "Advanced" jika ada warning
   - Klik "Go to [Project Name] (unsafe)" 
   - Klik "Allow"
7. **Copy Web App URL**: 
   - Akan muncul URL seperti: `https://script.google.com/macros/s/AKfycby.../exec`
   - COPY URL ini! Nanti diperlukan

### Step 4: Update Website Config

1. Buka file `js/form.js` di website
2. Cari bagian CONFIG (line 6-11):

```javascript
const CONFIG = {
    GOOGLE_SCRIPT_URL: '', // PASTE URL DI SINI!
    USE_GOOGLE_SHEETS: false, // UBAH JADI true
    // ...
};
```

3. Update jadi:

```javascript
const CONFIG = {
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycby.../exec', // URL dari step 3
    USE_GOOGLE_SHEETS: true, // Set ke true
    RATE_LIMIT_MS: 60000,
    LOCAL_STORAGE_KEY: 'aac_leads'
};
```

4. **Save file** dan **upload ke hosting** (jika sudah online)

### Step 5: Testing

1. Buka website di browser
2. Isi form kontak di halaman Contact
3. Submit form
4. Cek Google Sheet → harus ada data baru di row terakhir!

Jika berhasil, setiap form submission akan otomatis masuk ke Google Sheet ✅

## 🔧 Troubleshooting

### Issue: "Authorization required"

**Solusi**:
- Buka Apps Script editor
- Run function `testDoPost` (icon ▶️)
- Authorize akses lagi
- Redeploy web app

### Issue: Data tidak masuk ke sheet

**Solusi**:
1. Buka browser console (F12) saat submit form
2. Cek ada error?
3. Pastikan URL Google Script benar (tidak ada typo)
4. Pastikan `USE_GOOGLE_SHEETS: true`
5. Test dengan run `testDoPost()` di Apps Script

### Issue: CORS Error

**Jangan khawatir!** Web App Google menggunakan `no-cors` mode, jadi response tidak bisa dibaca tapi data tetap terkirim. Check Google Sheet untuk memastikan.

## 📧 Email Notifications (Bonus)

Mau dapat email notification setiap ada lead baru? Tambahkan di Apps Script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.companyName || '',
      data.contactName || '',
      data.email || '',
      data.phone || '',
      data.serviceInterest || '',
      data.message || ''
    ];
    
    sheet.appendRow(rowData);
    
    // === EMAIL NOTIFICATION ===
    const emailBody = `
      Lead Baru dari Website!
      
      Perusahaan: ${data.companyName}
      Kontak: ${data.contactName}
      Email: ${data.email}
      Telepon: ${data.phone}
      Layanan: ${data.serviceInterest}
      
      Pesan:
      ${data.message}
      
      ---
      Submitted: ${data.timestamp}
    `;
    
    MailApp.sendEmail({
      to: 'sales@anekaaluminium.com', // GANTI dengan email Anda!
      subject: '🔔 Lead Baru - ' + data.companyName,
      body: emailBody
    });
    // === END EMAIL ===
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error' }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

**Cara enable**:
1. Paste code di atas (replace existing `doPost`)
2. Ganti email di `to: 'sales@anekaaluminium.com'`
3. Save dan redeploy
4. Test → Anda akan dapat email!

## 📊 Sheet Tips

### Format otomatis timestamp

1. Klik kolom A (Timestamp)
2. Format > Number > Date time
3. Sekarang timestamp akan tampil lebih readable

### Conditional Formatting

Highlight lead baru (hari ini):
1. Select range A2:G (semua data)
2. Format > Conditional formatting
3. Format cells if: Custom formula
4. Formula: `=A2>=TODAY()`
5. Pilih warna background (hijau muda)
6. Done

### Create Dashboard

Buat sheet baru "Dashboard" dengan:
- Total leads: `=COUNTA(Sheet1!A:A)-1`
- Leads hari ini: `=COUNTIF(Sheet1!A:A, ">" & TODAY())`
- Leads bulan ini: `=COUNTIF(Sheet1!A:A, ">" & EOMONTH(TODAY(),-1))`
- Most interested service: Pivot table dari kolom F

## 🔐 Security

- **Script URL bersifat public** tapi hanya accept POST request
- Data hanya tersimpan di Google Sheet Anda
- Tidak ada yang bisa akses sheet tanpa permission Anda
- Bisa set sheet ke "View only" untuk tim, "Edit" untuk admin

## 📝 Maintenance

### Update Script (jika ada perubahan)

1. Edit script di Apps Script editor
2. Save
3. Deploy > **Manage deployments**
4. Klik ✏️ edit
5. Under "Version", pilih **New version**
6. Update

**PENTING**: URL tetap sama, tidak perlu update `js/form.js`!

---

**Need help? Contact developer untuk support.**
