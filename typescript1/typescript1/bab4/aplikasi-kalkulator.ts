// =======================================
// MINI PROJECT: APLIKSI KALKULATOR SEDERHANA
// Menggabungkan BAB 1, BAB 2, BAB 3, BAB 4
// =======================================

// -- Operasi Dasar ----------------------

const tambah = (a: number, b: number): number => a + b
const kurang = (a: number, b: number): number => a - b
const kali = (a: number, b: number): number => a * b
const bagi = (a: number, b: number): number | string => {
    if (b === 0) return "Error: Tidak bisa dibagi nol"
    return a / b
}

// -- Operasi Lanjutan --------------------

const rataRata = (...angka: number[]): number => {
  if (angka.length === 0) return 0
  let total = 0
  for (const n of angka) total += n
  return parseFloat((total / angka.length).toFixed(2))
}

const nilaiMaks = (...angka: number[]): number => {
    let max = angka[0]
    for (const n of angka) if (n > max) max = n
    return max
}

const nilaiMin = (...angka: number[]): number => {
    let min = angka[0]
    for (const n of angka) if (n < min) min = n
    return min
}

const pangkat = (basis: number, eksponen: number): number => basis ** eksponen

const akarKuadrat = (angka: number): number | string => {
    if (angka < 0) return "Error: Tidak bisa hitung akar negatif"
    return parseFloat(Math.sqrt(angka).toFixed(4))
}

// -- Fungsi Tampilan ----------------------

function tampilkanHeader(judul: string): void {
    console.log("\n" + "=".repeat(45))
    console.log(`   ${judul}`)
    console.log("=".repeat(45))
}

function tampilkanOperasi(label: string, hasil: number | string): void {
    console.log(`    ${label.padEnd(30)}: ${hasil}`)
}

// -- Program Utama ---------------------------

tampilkanHeader("KALKULATOR SEDERHANA - TypeScript")

// Operasi dasar
tampilkanHeader("Operasi Dasar (a=15, b=4)")
tampilkanOperasi("15 + 4", tambah(15, 4))
tampilkanOperasi("15 - 4", kurang(15, 4))
tampilkanOperasi("15 × 4", kali(15, 4))
tampilkanOperasi("15 ÷ 4", bagi(15, 4))
tampilkanOperasi("15 ÷ 0", bagi(15, 0))

// Operasi lanjutan
tampilkanHeader("Statistik Nilai Siswa")
const nilaiKelas = [88, 75, 92, 60, 85, 70, 95, 55, 78]
tampilkanOperasi("Nilai siswa", nilaiKelas.join(", "))
tampilkanOperasi("Rata-rata", rataRata(...nilaiKelas))
tampilkanOperasi("Nilai tertinggi", nilaiMaks(...nilaiKelas))
tampilkanOperasi("Nilai terendah", nilaiMin(...nilaiKelas))

// Pangkat dan akar
tampilkanHeader("Operasi Pangkat & Akar")
tampilkanOperasi("2 pangkat 10", pangkat(2, 10))
tampilkanOperasi("3 pangkat 4", pangkat(3, 4))
tampilkanOperasi("Akar(144)", akarKuadrat(144))
tampilkanOperasi("Akar(2)", akarKuadrat(2))
tampilkanOperasi("Akar(-9)", akarKuadrat(-9))

// Gunakan callback
tampilkanHeader("Daftar Kuadrat 1–10")
const angka1sampai10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
angka1sampai10.forEach((n) => {
  tampilkanOperasi(`${n} kuadrat`, pangkat(n, 2))
})

// Cek nilai lulus menggunakan filter + callback
tampilkanHeader("Siswa Lulus (nilai >= 75)")
const siswaSaatIni = ["Andi", "Budi", "Citra", "Dian", "Eko", "Fira"]
const nilaiMereka = [88, 65, 92, 70, 85, 50]

siswaSaatIni.forEach((nama, index) => {
  const nilai = nilaiMereka[index]
  const status = nilai >= 75 ? "✓ Lulus" : "✗ Remedial"
  tampilkanOperasi(nama, `${nilai} → ${status}`)
})

const totalLulus = nilaiMereka.filter((n) => n >= 75).length
console.log(`\n  Total lulus: ${totalLulus} dari ${siswaSaatIni.length} siswa`)
console.log("=".repeat(45))

