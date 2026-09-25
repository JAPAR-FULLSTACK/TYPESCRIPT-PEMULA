// File: src/bab2/latihan-break-continue.ts

// 1. Hentikan loop ketika menemukan angka > 50
const angkaAcak: number[] = [12, 35, 24, 48, 55, 19, 82, 9, 60, 3];

console.log("=== 1. CARI ANGKA > 50 (BREAK) ===");
for (const angka of angkaAcak) {
    if (angka > 50) {
        console.log(`-> Angka ${angka} ditemukan (> 50)! Perulangan dihentikan.`);
        break;
    }
    console.log(`Memeriksa angka: ${angka}`);
}

console.log("\n==========================================");

// 2. Angka 1-20 yang bukan kelipatan 2 atau 5
console.log("=== 2. ANGKA 1-20 (BUKAN KELIPATAN 2 ATAU 5) ===");
for (let i: number = 1; i <= 20; i++) {
    // Lewati jika kelipatan 2 ATAU kelipatan 5
    if (i % 2 === 0 || i % 5 === 0) {
        continue;
    }
    console.log(`Angka valid: ${i}`);
}

console.log("\n==========================================");

// 3. Tampilkan nama dengan panjang minimal 4 karakter
const daftarSiswa: string[] = ["Budi", "Ali", "Siti", "Eko", "Ahmad", "Ira", "Rian"];

console.log("=== 3. FILTER NAMA SANGAT PENDEK (< 4 KARAKTER) ===");
for (const nama of daftarSiswa) {
    if (nama.length < 4) {
        continue; // Lewati nama yang panjangnya kurang dari 4 karakter
    }
    console.log(`• Nama Siswa: ${nama} (${nama.length} huruf)`);
}