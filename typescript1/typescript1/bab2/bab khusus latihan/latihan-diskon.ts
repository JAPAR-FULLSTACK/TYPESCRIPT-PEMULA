// File: src/bab2/latihan-diskon.ts

const hargaAwal: number = 150000;
const persentaseDiskon: number = 10; // 10%

// Versi 1: Tanpa tanda kurung
const hargaDiskonVersi1: number = hargaAwal - hargaAwal * persentaseDiskon / 100;

// Versi 2: Dengan tanda kurung
const hargaDiskonVersi2: number = hargaAwal - (hargaAwal * (persentaseDiskon / 100));

console.log("=== HITUNG HARGA SETELAH DISKON ===");
console.log(`Harga Awal               : Rp ${hargaAwal}`);
console.log(`Persentase Diskon        : ${persentaseDiskon}%\n`);

console.log(`Hasil Versi 1 (Tanpa Kurung) : Rp ${hargaDiskonVersi1}`);
console.log(`Hasil Versi 2 (Dengan Kurung): Rp ${hargaDiskonVersi2}`);