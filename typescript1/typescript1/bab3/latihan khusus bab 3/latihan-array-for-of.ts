// File: src/bab2/latihan-array-for-of.ts

// 1. Array 5 mata pelajaran & perulangan for...of
const mataPelajaran: string[] = [
    "Matematika",
    "Informatika",
    "Bahasa Inggris",
    "Fisika",
    "Kimia"
];

console.log("=== DAFTAR MATA PELAJARAN ===");
for (const mapel of mataPelajaran) {
    console.log(`• ${mapel}`);
}

console.log("\n==========================================");

// 2. Array nilai ujian & filter nilai > 80 dengan for...of
const nilaiUjian: number[] = [75, 88, 62, 95, 80, 84, 90];

console.log("=== NILAI UJIAN DI ATAS 80 ===");
for (const nilai of nilaiUjian) {
    if (nilai > 80) {
        console.log(`- Nilai: ${nilai} (LULUS SANGAT BAIK)`);
    }
}