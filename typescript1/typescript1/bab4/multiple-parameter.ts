function buatBadgeSiswa(
  nama: string,
  kelas: string,
  jurusan: string,
  nilaiRataRata: number
): string {
  const status = nilaiRataRata >= 75 ? "Lulus" : "Remedial"
  return `[${kelas} - ${jurusan}] ${nama} | Rata-rata: ${nilaiRataRata} | ${status}`
}

function hitungBMI(beratKg: number, tinggiM: number): number {
  return parseFloat((beratKg / (tinggiM * tinggiM)).toFixed(2))
}

function kategoriIMT(bmi: number): string {
  if (bmi < 18.5) return "Kurus"
  if (bmi < 25)   return "Normal"
  if (bmi < 30)   return "Kelebihan Berat"
  return "Obesitas"
}

// Contoh pemakaian
const badge1 = buatBadgeSiswa("Rashya", "X RPL ", "RPL", 88)
const badge2 = buatBadgeSiswa("Cinta", "X RPL ", "RPL", 65)
console.log(badge1)
console.log(badge2)

const bmi = hitungBMI(60, 1.70)
console.log(`\nBMI: ${bmi} → ${kategoriIMT(bmi)}`)