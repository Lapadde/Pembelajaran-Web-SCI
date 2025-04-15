```markdown
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

```markdown
# Study Club Informatika (SCI) Landing Page - Penjelasan CSS

## Deskripsi
File CSS ini digunakan untuk memberikan styling pada halaman landing page Study Club Informatika (SCI). Berikut adalah penjelasan lengkap untuk setiap class dan selector yang digunakan dalam file CSS.

## Kode CSS dan Penjelasan

### 1. Selector `body`

```css
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background-color: rgb(167, 160, 153);
}
```

- `margin: 0;`\
  Menghilangkan margin default yang biasanya ditambahkan oleh browser pada elemen body. Ini memastikan bahwa konten halaman menempel pada tepi jendela browser tanpa ruang kosong.

- `font-family: Arial, Helvetica, sans-serif;`\
  Mengatur font default untuk seluruh halaman menjadi Arial, dengan fallback ke Helvetica dan sans-serif jika Arial tidak tersedia. Ini memberikan tampilan yang bersih dan modern.

- `background-color: rgb(167, 160, 153);`\
  Mengatur warna latar belakang halaman menjadi warna abu-abu keemasan, memberikan nuansa yang hangat dan ramah.

### 2. Class `.header`

```css
.header {
  background: greenyellow; /* Warna Latar */
  color: black; /* Warna Tulisan */
  padding: 20px 0; /* Ukuran Padding */
  text-align: center; /* Rata Tengah */
  font-family: monospace; /* Ubah Font */
}
```

- `background: greenyellow;`\
  Mengatur warna latar belakang header menjadi hijau kuning, memberikan kontras yang baik dengan teks di dalamnya.

- `color: black;`\
  Mengatur warna teks dalam header menjadi hitam, memastikan keterbacaan yang baik.

- `padding: 20px 0;`\
  Menambahkan padding vertikal (atas dan bawah) sebesar 20px, memberikan ruang di dalam header agar konten tidak menempel pada tepi.

- `text-align: center;`\
  Mengatur teks dalam header agar rata tengah, memberikan tampilan yang lebih terorganisir.

- `font-family: monospace;`\
  Mengubah font dalam header menjadi monospace, memberikan kesan yang lebih teknis dan formal.

### 3. Selector `.header h1`

```css
.header h1 {
    margin: 0;
    font-size: 30px; /* Ukuran Font */
}
```

- `margin: 0;`\
  Menghilangkan margin default pada elemen h1 di dalam header, memastikan bahwa teks h1 tidak memiliki ruang kosong di sekitarnya.

- `font-size: 30px;`\
  Mengatur ukuran font untuk h1 menjadi 30px, menjadikannya cukup besar untuk menarik perhatian pengunjung.

### 4. Class `.main-content`

```css
.main-content {
    padding: 40px 20px;
    text-align: center;
    align-items: center;
    content: center;
}
```

- `padding: 40px 20px;`\
  Menambahkan padding vertikal sebesar 40px dan horizontal sebesar 20px, memberikan ruang di sekitar konten utama.

- `text-align: center;`\
  Mengatur teks dalam konten utama agar rata tengah, memberikan tampilan yang lebih teratur.

- `align-items: center;`\
  Properti ini tidak valid dalam konteks block-level element seperti div. Ini lebih relevan untuk flexbox. Anda mungkin ingin menggunakan `display: flex;` untuk mengaktifkan properti ini.

- `content: center;`\
  Properti ini tidak valid dalam CSS dan sebaiknya dihapus atau diganti dengan properti yang sesuai.

### 5. Selector `.main-content h1`

```css
.main-content h1 {
    margin: 0;
    font-size: 20px;
}
```

- `margin: 0;`\
  Menghilangkan margin default pada elemen h1 di dalam main-content, memastikan bahwa teks h1 tidak memiliki ruang kosong di sekitarnya.

- `font-size: 20px;`\
  Mengatur ukuran font untuk h1 di dalam konten utama menjadi 20px, memberikan ukuran yang lebih kecil dibandingkan dengan h1 di header.

### 6. Selector `.main-content p`

```css
.main-content p {
    font-size: 20px;
    color: white;
}
```

- `font-size: 20px;`\
  Mengatur ukuran font untuk paragraf menjadi 20px, memastikan keterbacaan yang baik.

- `color: white;`\
  Mengatur warna teks paragraf menjadi putih, memberikan kontras yang baik dengan latar belakang yang lebih gelap.

### 7. Class `.cta-button`

```css
.cta-button {
    background-color: #27a01c;
    color: white;
    padding: 15px 30px;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
}
```

- `background-color: #27a01c;`\
  Mengatur latar belakang tombol dengan warna hijau, memberikan tampilan yang menarik dan mengundang.

- `color: white;`\
  Mengatur warna teks tombol menjadi putih, memastikan keterbacaan yang baik.

- `padding: 15px 30px;`\
  Menambahkan padding vertikal sebesar 15px dan horizontal sebesar 30px, memberikan ruang di dalam tombol agar lebih mudah diklik.

- `font-size: 1.2em;`\
  Mengatur ukuran font tombol menjadi 1.2 kali ukuran font default, membuat teks tombol lebih menonjol.

- `border: none;`\
  Menghilangkan border default pada tombol, memberikan tampilan yang lebih bersih.

- `border-radius: 5px;`\
  Mengatur sudut border tombol menjadi bulat dengan radius 5px, memberikan tampilan yang lebih modern.

- `cursor: pointer;`\
  Mengubah kursor menjadi pointer saat mengarahkan mouse ke tombol, memberikan indikasi visual bahwa tombol dapat diklik.

- `text-decoration: none;`\
  Menghilangkan dekorasi teks pada tombol, seperti garis bawah, untuk menjaga tampilan yang bersih.

## Penutup

File CSS ini dirancang untuk memberikan tampilan yang menarik pada halaman landing page Study Club Informatika. Dengan menggunakan kombinasi warna, font, dan padding yang tepat, halaman ini bertujuan untuk memberikan pengalaman pengguna yang baik.
