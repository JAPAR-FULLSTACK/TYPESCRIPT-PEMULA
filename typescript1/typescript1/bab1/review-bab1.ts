// File: src/bab1/review-bab1.ts

/* 
 * Latihan Penutup Bab 1: Implementasi Tipe Data, Literal Types, 
 * Handling Nullish/Nullable Values, dan Template Literals.
 */

// 1. Literal Type untuk Jurusan dan Status
type JurusanSiswa = "Rekayasa Perangkat Lunak" | "Teknik Komputer Jaringan" | "Multimedia";
type StatusKehadiran = "Hadir" | "Izin" | "Sakit" | "Alfa";

// 2. Biodata Singkat (Minimal 5 variabel dengan 3+ tipe data berbeda)
const namaLengkap: string = "MUHAMMAD RAFFADIAN PRATAMA";             // Tipe: string
const nomorAbsen: number = 18;                           // Tipe: number
const jurusan: JurusanSiswa = "Rekayasa Perangkat Lunak"; // Tipe: Literal Type (string)
const catatanSiswa: string | null = null;               // Tipe: null
const Status: StatusKehadiran = "Hadir";

// 3. Perhitungan Angka
const nilaiTugas1: number = 80;
const nilaiTugas2: number = 90;
const nilaiRataRata: number = (nilaiTugas1 + nilaiTugas2) / 2; // Perhitungan aritmatika

// 4. Boolean dan Ternary Operator
const lulusUjian: boolean = nilaiRataRata >= 75;
const statusKelulusan: string = lulusUjian ? "LULUS" : "TIDAK LULUS";

// Handling Null Value menggunakan Nullish Coalescing (??)
const catatanDisplay: string = catatanSiswa ?? "Tidak ada catatan khusus.";

// 5. Template Literal Multi-baris
const laporanReview: string = `
==============================================
               LAPORAN REVIEW BAB 1           
==============================================
BIODATA SISWA
• Nama Lengkap    : ${namaLengkap}
• No. Absen       : ${nomorAbsen}
• Jurusan         : ${jurusan}
• Status Kehadiran: ${status}

EVALUASI AKADEMIK
• Nilai Tugas 1   : ${nilaiTugas1}
• Nilai Tugas 2   : ${nilaiTugas2}
• Nilai Rata-rata : ${nilaiRataRata}
• Status Akhir    : ${statusKelulusan}

CATATAN TAMBAHAN
• Catatan         : ${catatanDisplay}
==============================================
`;

// Tampilkan hasil output ke konsol
console.log(laporanReview);