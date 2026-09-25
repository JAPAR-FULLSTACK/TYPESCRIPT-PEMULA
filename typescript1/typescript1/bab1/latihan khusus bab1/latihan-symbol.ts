// File: src/bab1/latihan-symbol.ts

// Buat dua symbol dengan deskripsi "kode"
const symbol1: symbol = Symbol("kode");
const symbol2: symbol = Symbol("kode");

// Bandingkan keduanya dengan ===
const hasilPerbandingan: boolean = symbol1 === symbol2;

// Tampilkan keduanya menggunakan .toString()
console.log("Symbol 1 :", symbol1.toString());
console.log("Symbol 2 :", symbol2.toString());
console.log("Hasil perbandingan (symbol1 === symbol2):", hasilPerbandingan);

/*
 * KETERANGAN:
 * Hasil perbandingan bernilai `false` karena tipe data Symbol didesain untuk selalu menghasilkan 
 * nilai yang unik dan dipastikan tidak pernah bertabrakan (unique identifier). 
 * Deskripsi "kode" di dalam Symbol("kode") hanyalah label untuk debugging/identifikasi, 
 * bukan nilai pembanding dari Symbol tersebut.
 */