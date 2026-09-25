// File: src/bab2/latihan-do-while.ts

console.log("=== 1. PERULANGAN 3 KALI ===");
let penghitung: number = 1;

do {
    console.log(`[${penghitung}] Selamat datang!`);
    penghitung++;
} while (penghitung <= 3);

console.log("\n==========================================");

console.log("=== 2. KONDISI FALSE DARI AWAL ===");
let angka: number = 10;

do {
    console.log(`Pesan ini tetap muncul sekali walau angka (${angka}) > 5!`);
} while (angka < 5);