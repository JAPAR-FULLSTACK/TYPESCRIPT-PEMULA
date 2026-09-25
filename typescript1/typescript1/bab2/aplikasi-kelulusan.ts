// =====================================================
// MINI PROJECT: APLIKASI PENENTUAN KELULUSAN SISWA
// BAB 2 — Operator & Percabangan
// =====================================================

// Tipe khusus untuk membatasi pilihan data.
type Jurusan = "RPL" | "TKJ" | "DKV"
type StatusKelulusan = "LULUS" | "REMEDIAL" | "TIDAK VALID"
type Grade = "A" | "B" | "C" | "D" | "E"

// Konstanta aturan kelulusan.
const BATAS_NILAI_LULUS: number = 75
const BATAS_KEHADIRAN: number = 75
const TAHUN_PELAJARAN: string = "2026/2027"

// Biodata siswa.
const namaLengkap: string = "Rashya adhitya"
const kelas: string = "X RPL"
const jurusan: Jurusan = "RPL"
const nomorAbsen: number = 24
const persentaseKehadiran: number = 90

// Nilai tiga mata pelajaran.
const nilaiMatematika: number = 88
const nilaiIndonesia: number = 82
const nilaiProgramming: number = 92

// Perhitungan otomatis.
const totalNilai: number = nilaiMatematika + nilaiIndonesia + nilaiProgramming
const rataRata: number = totalNilai / 3
const rataRataBulat: number = Math.round(rataRata)

// Validasi nilai.
const nilaiValid: boolean =
  nilaiMatematika >= 0 && nilaiMatematika <= 100 &&
  nilaiIndonesia >= 0 && nilaiIndonesia <= 100 &&
  nilaiProgramming >= 0 && nilaiProgramming <= 100

// Menentukan grade.
let grade: Grade

if (rataRataBulat >= 90) {
  grade = "A"
} else if (rataRataBulat >= 80) {
  grade = "B"
} else if (rataRataBulat >= 70) {
  grade = "C"
} else if (rataRataBulat >= 60) {
  grade = "D"
} else {
  grade = "E"
}

// Menentukan status kelulusan.
let statusKelulusan: StatusKelulusan

if (!nilaiValid) {
  statusKelulusan = "TIDAK VALID"
} else if (rataRataBulat >= BATAS_NILAI_LULUS && persentaseKehadiran >= BATAS_KEHADIRAN) {
  statusKelulusan = "LULUS"
} else {
  statusKelulusan = "REMEDIAL"
}

// Pesan berdasarkan status.
const pesanStatus: string =
  statusKelulusan === "LULUS"
    ? "Selamat! Kamu dinyatakan lulus. Terus pertahankan prestasimu."
    : statusKelulusan === "REMEDIAL"
      ? "Kamu perlu mengikuti remedial. Jangan menyerah, terus belajar!"
      : "Data nilai tidak valid. Harap periksa kembali."

// Keterangan kehadiran.
const keteranganHadir: string = persentaseKehadiran >= BATAS_KEHADIRAN
  ? "Memenuhi syarat"
  : "Di bawah batas minimal"

// Cetak laporan lengkap.
const laporan: string = `
=======================================================
           LAPORAN HASIL PENILAIAN SEMESTER
            Tahun Pelajaran: ${TAHUN_PELAJARAN}
=======================================================
IDENTITAS SISWA
  Nama          : ${namaLengkap}
  Kelas         : ${kelas}
  Jurusan       : ${jurusan}
  Nomor Absen   : ${nomorAbsen}

REKAP NILAI
  Matematika    : ${nilaiMatematika}
  Bhs Indonesia : ${nilaiIndonesia}
  Pemrograman   : ${nilaiProgramming}
  Total Nilai   : ${totalNilai}
  Rata-rata     : ${rataRata.toFixed(2)}
  Dibulatkan    : ${rataRataBulat}
  Grade         : ${grade}

KEHADIRAN
  Persentase    : ${persentaseKehadiran}%
  Keterangan    : ${keteranganHadir}

HASIL AKHIR
  Status        : ${statusKelulusan}
  Pesan         : ${pesanStatus}
=======================================================
`

console.log(laporan)