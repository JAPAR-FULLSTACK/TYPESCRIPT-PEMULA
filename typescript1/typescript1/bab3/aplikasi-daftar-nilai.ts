// =====================================================
// MINI PROJECT: APLIKASI DAFTAR NILAI SISWA
// Menggabungkan BAB 1, BAB 2, dan BAB 3
// =====================================================

// Tipe data untuk satu siswa
type DataSiswa = {
  nama: string
  matematika: number
  indonesia: number
  pemrograman: number
}

type HasilSiswa = {
  nama: string
  rataRata: number
  grade: string
  status: string
}

// Konstanta
const BATAS_LULUS: number = 75
const TAHUN_PELAJARAN: string = "2026 /2027"

// Data seluruh siswa
const daftarSiswa: DataSiswa[] = [
  { nama: "Rashya",  matematika: 88, indonesia: 90, pemrograman: 92 },
  { nama: "Susan",  matematika: 60, indonesia: 70, pemrograman: 65 },
  { nama: "Raffa", matematika: 95, indonesia: 88, pemrograman: 97 },
  { nama: "Arya",  matematika: 72, indonesia: 68, pemrograman: 74 },
  { nama: "Jessika",   matematika: 50, indonesia: 55, pemrograman: 48 },
  { nama: "Vino",  matematika: 80, indonesia: 85, pemrograman: 82 },
]

// ── Proses setiap siswa ──────────────────────────────
const hasilSemua: HasilSiswa[] = []

for (const siswa of daftarSiswa) {
  const rataRata = (siswa.matematika + siswa.indonesia + siswa.pemrograman) / 3
  const rataRataBulat = Math.round(rataRata)

  let grade: string
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

  const status: string = rataRataBulat >= BATAS_LULUS ? "Lulus" : "Perlu Bimbingan"

  hasilSemua.push({
    nama: siswa.nama,
    rataRata: parseFloat(rataRata.toFixed(2)),
    grade,
    status,
  })
}

// ── Hitung statistik kelas ───────────────────────────
let totalRataRataKelas: number = 0
let nilaiTertinggi: number = hasilSemua[0].rataRata
let nilaiTerendah: number = hasilSemua[0].rataRata
let namaTertinggi: string = hasilSemua[0].nama
let namaTerendah: string = hasilSemua[0].nama
let jumlahLulus: number = 0

for (const hasil of hasilSemua) {
  totalRataRataKelas += hasil.rataRata

  if (hasil.rataRata > nilaiTertinggi) {
    nilaiTertinggi = hasil.rataRata
    namaTertinggi = hasil.nama
  }
  if (hasil.rataRata < nilaiTerendah) {
    nilaiTerendah = hasil.rataRata
    namaTerendah = hasil.nama
  }
  if (hasil.status === "Lulus") {
    jumlahLulus++
  }
}

const rataRataKelas = (totalRataRataKelas / hasilSemua.length).toFixed(2)

// ── Tampilkan laporan ────────────────────────────────
console.log("=".repeat(55))
console.log(`  LAPORAN NILAI KELAS — Tahun Pelajaran ${TAHUN_PELAJARAN}`)
console.log("=".repeat(55))
console.log(
  "No".padEnd(4) +
  "Nama".padEnd(10) +
  "Rata-rata".padEnd(12) +
  "Grade".padEnd(8) +
  "Status"
)
console.log("-".repeat(55))

for (let i = 0; i < hasilSemua.length; i++) {
  const h = hasilSemua[i]
  console.log(
    `${(i + 1).toString().padEnd(4)}` +
    `${h.nama.padEnd(10)}` +
    `${h.rataRata.toString().padEnd(12)}` +
    `${h.grade.padEnd(8)}` +
    `${h.status}`
  )
}

console.log("=".repeat(55))
console.log(`Rata-rata kelas   : ${rataRataKelas}`)
console.log(`Nilai tertinggi   : ${nilaiTertinggi} (${namaTertinggi})`)
console.log(`Nilai terendah    : ${nilaiTerendah} (${namaTerendah})`)
console.log(`Jumlah lulus      : ${jumlahLulus} dari ${hasilSemua.length} siswa`)
console.log(`Persentase lulus  : ${(jumlahLulus / hasilSemua.length * 100).toFixed(1)}%`)
console.log("=".repeat(55))
export {};