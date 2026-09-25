// File: src/bab2/latihan-pemilihan.ts

// Variabel data seseorang
let umur: number = 16;
let isSiswaAktif: boolean = true;

// Syarat: umur minimal 15 AND (&&) status siswa aktif
let bolehMemilih: boolean = umur >= 15 && isSiswaAktif;

console.log("=== UJI COBA 1 ===");
console.log(`Umur            : ${umur}`);
console.log(`Siswa Aktif     : ${isSiswaAktif}`);
console.log(`Boleh Memilih   : ${bolehMemilih}`);

console.log("\n--- Mengubah Data ---");

// Uji coba 2: Umur mencukupi, tapi bukan siswa aktif
isSiswaAktif = false;
bolehMemilih = umur >= 15 && isSiswaAktif;
console.log("\n=== UJI COBA 2 ===");
console.log(`Umur            : ${umur}`);
console.log(`Siswa Aktif     : ${isSiswaAktif}`);
console.log(`Boleh Memilih   : ${bolehMemilih}`);

// Uji coba 3: Umur di bawah 15, siswa aktif
umur = 14;
isSiswaAktif = true;
bolehMemilih = umur >= 15 && isSiswaAktif;
console.log("\n=== UJI COBA 3 ===");
console.log(`Umur            : ${umur}`);
console.log(`Siswa Aktif     : ${isSiswaAktif}`);
console.log(`Boleh Memilih   : ${bolehMemilih}`);