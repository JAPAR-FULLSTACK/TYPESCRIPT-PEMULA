// File: src/bab2/latihan-pembuka.ts

// Simpan nilai tugas dan nilai ujian
const nilaiTugas: number = 80;
const nilaiUjian: number = 70;

// Hitung rata-rata
const nilaiRataRata: number = (nilaiTugas + nilaiUjian) / 2;

// Bandingkan rata-rata dengan batas 75
const batasLulus: number = 75;
const isLulus: boolean = nilaiRataRata >= batasLulus;

// Tampilkan nilai rata-rata dan status boolean hasil perbandingan
console.log("Nilai Tugas     :", nilaiTugas);
console.log("Nilai Ujian     :", nilaiUjian);
console.log("Nilai Rata-rata :", nilaiRataRata);
console.log("Status Lulus (>= 75) :", isLulus);