// File: src/bab2/latihan-nested-loop.ts

console.log("=== 1. TABEL PERKALIAN 1 SAMPAI 10 (10x10) ===");
for (let baris: number = 1; baris <= 10; baris++) {
    let barisTeks: string = "";
    for (let kolom: number = 1; kolom <= 10; kolom++) {
        // PadStart digunakan agar jarak antar angka rapi
        const hasil: string = (baris * kolom).toString().padStart(4, " ");
        barisTeks += hasil;
    }
    console.log(barisTeks);
}

console.log("\n==========================================");

console.log("=== 2. POLA SEGITIGA TERBALIK ===");
const jumlahBaris: number = 5;

for (let i: number = jumlahBaris; i >= 1; i--) {
    let bintang: string = "";
    for (let j: number = 1; j <= i; j++) {
        bintang += "* ";
    }
    console.log(bintang);
}