// File: src/bab2/review-bab2.ts

// 1. Simpan tiga nilai mata pelajaran & data kehadiran
const nilaiMatematika: number = 88;
const nilaiInformatika: number = 92;
const nilaiBahasaInggris: number = 85;
const persentaseKehadiran: number = 90;

// 2. Hitung rata-rata
const rataRata: number = (nilaiMatematika + nilaiInformatika + nilaiBahasaInggris) / 3;

// 3. Tentukan grade dengan else if
let grade: string;
if (rataRata >= 90) {
    grade = "A (Sangat Baik)";
} else if (rataRata >= 80) {
    grade = "B (Baik)";
} else if (rataRata >= 70) {
    grade = "C (Cukup)";
} else {
    grade = "D (Perlu Perbaikan)";
}

// 4. Periksa syarat tambahan dengan && (Rata-rata >= 80 DAN kehadiran >= 85%)
const berhakSertifikatPrestasi: boolean = rataRata >= 80 && persentaseKehadiran >= 85;

// 5. Laporan terminal minimal 8 baris
console.log("==========================================");
console.log("      LAPORAN EVALUASI AKHIR BAB 2        ");
console.log("==========================================");
console.log(`• Nilai Matematika   : ${nilaiMatematika}`);
console.log(`• Nilai Informatika   : ${nilaiInformatika}`);
console.log(`• Nilai B. Inggris   : ${nilaiBahasaInggris}`);
console.log(`• Rata-rata Nilai    : ${rataRata.toFixed(2)}`);
console.log(`• Predikat Grade     : ${grade}`);
console.log(`• Kehadiran Siswa    : ${persentaseKehadiran}%`);
console.log(`• Sertifikat Prestasi: ${berhakSertifikatPrestasi ? "DAPAT" : "TIDAK DAPAT"}`);
console.log("==========================================");