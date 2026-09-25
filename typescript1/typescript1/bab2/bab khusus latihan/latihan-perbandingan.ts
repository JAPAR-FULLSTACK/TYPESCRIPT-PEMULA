// File: src/bab2/latihan-perbandingan.ts

// Dua angka yang akan dibandingkan
const nilaiPertama: number = 15;
const nilaiKedua: number = 20;

console.log(`Nilai Pertama : ${nilaiPertama}`);
console.log(`Nilai Kedua   : ${nilaiKedua}`);
console.log("----------------------------------------");

// Operator Perbandingan Utama
console.log(`nilaiPertama ==  nilaiKedua  : ${nilaiPertama == nilaiKedua}`);   // Sama dengan (loose)
console.log(`nilaiPertama === nilaiKedua  : ${nilaiPertama === nilaiKedua}`);  // Sama dengan & tipe identik (strict)
console.log(`nilaiPertama !=  nilaiKedua  : ${nilaiPertama != nilaiKedua}`);   // Tidak sama dengan (loose)
console.log(`nilaiPertama !== nilaiKedua  : ${nilaiPertama !== nilaiKedua}`);  // Tidak sama dengan atau beda tipe (strict)
console.log(`nilaiPertama >   nilaiKedua  : ${nilaiPertama > nilaiKedua}`);    // Lebih besar dari
console.log(`nilaiPertama <   nilaiKedua  : ${nilaiPertama < nilaiKedua}`);    // Lebih kecil dari
console.log(`nilaiPertama >=  nilaiKedua  : ${nilaiPertama >= nilaiKedua}`);   // Lebih besar atau sama dengan
console.log(`nilaiPertama <=  nilaiKedua  : ${nilaiPertama <= nilaiKedua}`);   // Lebih kecil atau sama dengan