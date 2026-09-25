// Variabel global
const NAMA_SEKOLAH: string = "SMKS Antartika 1 Sidoarjo"
const BATAS_LULUS: number = 75

function cekKelulusan(nama: string, nilai: number): void {
  // Variabel lokal — hanya ada di dalam function ini
  const status = nilai >= BATAS_LULUS ? "Lulus" : "Remedial"
  const pesan = `${nama} dinyatakan ${status}`

  console.log(pesan)
  console.log(`Sekolah: ${NAMA_SEKOLAH}`)
}

function hitungBonusNilai(nilai: number): number {
  // Variabel lokal — terpisah dari function lain
  const bonus = 5
  return nilai + bonus
}

cekKelulusan("Rashya", 82)
cekKelulusan("Cinta", 68)

const nilaiDewi = 78
const nilaiSetelahBonus = hitungBonusNilai(nilaiDewi)
console.log(`\nNilai Rashya setelah bonus: ${nilaiSetelahBonus}`)

// Mencoba akses variabel lokal di luar function:
// console.log(status) // ← ini akan error!
// console.log(bonus)  // ← ini juga error!