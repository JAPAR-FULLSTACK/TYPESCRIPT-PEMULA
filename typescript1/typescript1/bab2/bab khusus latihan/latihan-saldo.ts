// File: src/bab2/latihan-saldo.ts

// Buat variabel saldo bernilai 50000
let saldo: number = 50000;
console.log("Saldo Awal      : Rp", saldo);

// Tambah uang saku 20000
const uangSaku: number = 20000;
saldo += uangSaku;
console.log("Tambah Uang Saku: Rp", uangSaku);

// Kurangi belanja 15000
const belanja: number = 15000;
saldo -= belanja;
console.log("Kurangi Belanja : Rp", belanja);

// Tampilkan saldo akhir
console.log("----------------------------");
console.log("Saldo Akhir     : Rp", saldo);