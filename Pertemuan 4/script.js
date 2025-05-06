// Variabel & tipe data
var nama = "Yanti";
let umur = 19;
const asal = ["Parepare", "Sidrap", "Enrekang"];
console.log(
  `Halo nama saya ${nama} saya berumur ${umur} saya berasal dari ${asal[0]}`
);
// alert(`Halo Selamat datang ${nama}`);

// Operator
var barang = "Buku";
let harga = 5000;
var jumlah = 3;
console.log(
  `saya ${nama} membeli ${barang} dengan harga ${harga} berjumlah ${jumlah} biji, total belanja saya adalah ${
    harga * jumlah
  }`
);

// Kondisional if/else
if (umur >= 18) {
  console.log("Kategori dewasa");
} else {
  console.log("Anak anak");
}

// Menampilkan pada halaman web menggunakan DOM
const header = document.getElementById('header');

header.innerHTML = `
<h2 class="header">Menampilkan JavaScript</h2>
<p>Nama : ${nama} </p>
<p>Umur : ${umur} </p>
<p>Asal : ${asal[0]} </p>
`;
