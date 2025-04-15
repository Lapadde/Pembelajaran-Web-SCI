```markdown
# README.md

## Deskripsi Proyek

Proyek ini adalah sebuah landing page sederhana untuk **Study Club Informatika (SCI)**. Halaman ini dirancang untuk memberikan informasi dasar tentang organisasi mahasiswa ini, termasuk tujuan dan layanan yang ditawarkan.  Landing page ini menggunakan CSS untuk mengatur tampilan dan gaya visualnya.

## Struktur File

- `index.html`: File utama yang berisi struktur HTML dari landing page.
- `assets/css/style.css`: File CSS yang digunakan untuk styling halaman.

## Penjelasan Kode HTML

Berikut adalah penjelasan detail dari setiap bagian dalam file `index.html`:

### 1. Deklarasi HTML

```html
<!DOCTYPE html>
<html lang="id">
```

- `<!DOCTYPE html>`: Menyatakan bahwa dokumen ini adalah dokumen HTML5.
- `<html lang="id">`: Menandakan bahwa bahasa yang digunakan dalam dokumen ini adalah Bahasa Indonesia.

### 2. Bagian `<head>`

```html
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SCI</title>
    <link rel="stylesheet" href="assets/css/style.css" />
</head>
```

- `<meta charset="UTF-8" />`: Menentukan karakter encoding yang digunakan, yaitu UTF-8.
- `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: Mengatur viewport untuk responsivitas pada perangkat mobile.
- `<title>SCI</title>`: Menentukan judul halaman yang akan ditampilkan di tab browser.
- `<link rel="stylesheet" href="assets/css/style.css" />`: Menghubungkan file CSS eksternal untuk styling.

### 3. Bagian `<body>`

```html
<body>
    <div class="header">
      <h1>Selamat Datang di Landing Page SCI</h1>
    </div>
    <div class="main-content">
      <img
        src="https://studyclubinformatika.org/storage/image/sci-maskot-lg.png"
        style="width: 250px"
        alt=""
      />
      <h2>Menawarkan Layanan Terbaik untuk Anda</h2>
      <p>
        Study Club Informatika Adalah Organisasi Mahasiswa Independen yang
        bergerak, mengkaji, dan mengembangkan keilmuan khususnya di bidang
        Informatika. Berdiri sejak tanggal 31 Mei 2009.
      </p>
      <a href="#" class="cta-button">
        Pelajari Lebih lanjut
      </a>
    </div>
</body>
```

- `<div class="header">`: Membuat div dengan kelas `header` untuk menampung elemen header.
- `<h1>Selamat Datang di Landing Page SCI</h1>`: Judul utama halaman.
- `<div class="main-content">`: Membuat div dengan kelas `main-content` untuk menampung konten utama.
- `<img src="..." style="width: 250px" alt="" />`: Menampilkan gambar maskot SCI dengan lebar 250px.
- `<h2>Menawarkan Layanan Terbaik untuk Anda</h2>`: Subjudul yang menjelaskan layanan yang ditawarkan.
- `<p>`: Paragraf yang menjelaskan tentang SCI, termasuk informasi tentang pendirian organisasi.
- `<a href="#" class="cta-button">`: Tombol ajakan untuk mengarahkan pengguna ke informasi lebih lanjut (link saat ini masih kosong).

## Penjelasan Kode CSS (`style.css`)

File `style.css` berisi aturan CSS yang mengatur tampilan visual landing page. Berikut penjelasan detailnya:

### `body`

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(167, 160, 153);
}
```

- `margin: 0;`: Menghapus margin default pada elemen `body`, sehingga konten menempel pada tepi browser.
- `font-family: Arial, Helvetica, sans-serif;`: Menentukan font utama halaman menjadi Arial, jika tidak tersedia, maka Helvetica, dan sebagai fallback sans-serif.
- `background-color: rgb(167, 160, 153);`: Mengatur warna latar belakang halaman menjadi abu-abu muda (`rgb(167, 160, 153)`).

### `.header`

```css
.header {
  background: greenyellow; /*Warna Latar*/
  color: black; /*Warna Tulisan*/
  padding: 20px 0; /*Ukuran canvas*/
  text-align: center; /*rata tengah*/
  font-family: monospace; /*Ubah font*/
}
```

- `background: greenyellow;`: Mengatur warna latar belakang header menjadi kuning kehijauan.
- `color: black;`: Mengatur warna teks header menjadi hitam.
- `padding: 20px 0;`: Memberikan padding 20px di atas dan bawah header, menciptakan ruang kosong di sekitar teks.
- `text-align: center;`: Menrata-kan teks di dalam header ke tengah.
