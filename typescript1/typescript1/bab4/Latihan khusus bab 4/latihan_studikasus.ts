
// =====================================================
// STUDI KASUS: SISTEM PERHITUNGAN NILAI SISWA
// Setiap tugas dilakukan oleh function terpisah
// =====================================================

// 1. Menghitung total nilai
function hitungTotal(...nilaiMataPelajaran: number[]): number {
  let total = 0
  for (const n of nilaiMataPelajaran) {
    total += n
  }
  return total
}

// 2. Menghitung rata-rata
function hitungRataRata(total: number, jumlahMapel: number): number {
  if (jumlahMapel === 0) return 0
  return parseFloat((total / jumlahMapel).toFixed(2))
}

// 3. Menentukan grade berdasarkan rata-rata
function tentukanGrade(rataRata: number): string {
  if (rataRata >= 90) return "A"
  if (rataRata >= 80) return "B"
  if (rataRata >= 70) return "C"
  if (rataRata >= 60) return "D"
  return "E"
}

// 4. Menentukan status kelulusan
function tentukanStatus(rataRata: number, batasLulus: number = 75): string {
  return rataRata >= batasLulus ? "LULUS" : "REMEDIAL"
}

// 5. Mencetak garis pemisah laporan
function cetakGarisLaporan(): void {
  console.log("─".repeat(39))
}

// 6. Menghitung peringkat siswa berdasarkan rata-rata tertinggi
function hitungPeringkat(semuaRataRata: number[]): number[] {
  // Urutkan rata-rata dari tertinggi ke terendah (tanpa mengubah array asli)
  const urutan = [...semuaRataRata].sort((a, b) => b - a)

  // Cari posisi (peringkat) setiap nilai
  return semuaRataRata.map((nilai) => urutan.indexOf(nilai) + 1)
}

// 7. Menampilkan laporan lengkap
function tampilkanHasil(
  nama: string,
  kelas: string,
  nilai: { matematika: number; indonesia: number; pemrograman: number }
): void {
  const total = hitungTotal(nilai.matematika, nilai.indonesia, nilai.pemrograman)
  const rataRata = hitungRataRata(total, 3)
  const grade = tentukanGrade(rataRata)
  const status = tentukanStatus(rataRata)

  const laporan = `
┌─────────────────────────────────────┐
│      LAPORAN NILAI SISWA            │
├─────────────────────────────────────┤
│ Nama       : ${nama.padEnd(23)}│
│ Kelas      : ${kelas.padEnd(23)}│
├─────────────────────────────────────┤
│ Matematika : ${nilai.matematika.toString().padEnd(23)}│
│ Indonesia  : ${nilai.indonesia.toString().padEnd(23)}│
│ Pemrograman: ${nilai.pemrograman.toString().padEnd(23)}│
├─────────────────────────────────────┤
│ Total      : ${total.toString().padEnd(23)}│
│ Rata-rata  : ${rataRata.toString().padEnd(23)}│
│ Grade      : ${grade.padEnd(23)}│
│ Status     : ${status.padEnd(23)}│
└─────────────────────────────────────┘`

  console.log(laporan)
}

// ── Gunakan semua function ────────────────────────────
tampilkanHasil("Putra Ramadhan", "XI RPL 1", {
  matematika: 88,
  indonesia: 82,
  pemrograman: 95,
})

tampilkanHasil("Dewi Rahayu", "XI RPL 2", {
  matematika: 60,
  indonesia: 70,
  pemrograman: 65,
})

// Tes function secara individual
console.log("\n=== Tes Function Individual ===")
const total5 = hitungTotal(80, 90, 70, 85, 75)
console.log(`Total 5 nilai: ${total5}`)
console.log(`Rata-rata: ${hitungRataRata(total5, 5)}`)
console.log(`Grade 88: ${tentukanGrade(88)}`)
console.log(`Status 70 (batas 65): ${tentukanStatus(70, 65)}`)


console.log("\n=== Tes cetakGarisLaporan ===")
cetakGarisLaporan()
console.log("Garis pemisah di atas punya 39 karakter")
cetakGarisLaporan()

// ── Tes hitungPeringkat ───────────────────────────────
console.log("\n=== Tes hitungPeringkat ===")
const daftarRataRata = [88.33, 65.0, 92.5, 78.0, 70.25]
const peringkat = hitungPeringkat(daftarRataRata)

console.log("Daftar rata-rata:")
daftarRataRata.forEach((nilai, i) => {
  console.log(`  Siswa ${i + 1}: ${nilai} → Peringkat ${peringkat[i]}`)
})