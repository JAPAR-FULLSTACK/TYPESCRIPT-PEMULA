// File: src/bab2/latihan-perulangan-lengkap.ts

console.log("=== 1. ANGKA 1 SAMPAI 100 ===");
for (let i: number = 1; i <= 100; i++) {
    console.log(`Angka ke-${i}`);
}
console.log("\n==========================================");

console.log("=== 2. ANGKA GANJIL 1 SAMPAI 19 ===");
for (let i: number = 1; i <= 19; i += 2) {
    console.log(`Angka ganjil: ${i}`);
}
console.log("==========================================");

console.log("=== 3. TABEL PERKALIAN 7 (1x7 SAMPAI 10x7) ===");
const pengali: number = 7;
for (let i: number = 1; i <= 10; i++) {
    const hasil: number = i * pengali;
    console.log(`${i} x ${pengali} = ${hasil}`);
}
console.log("==========================================");