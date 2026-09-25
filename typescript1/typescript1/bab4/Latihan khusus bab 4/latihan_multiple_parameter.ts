function hitungNilaiAkhir(
  nilaiTugas: number,
  nilaiUjian: number,
  nilaiPraktik: number
): number {
  return parseFloat((nilaiTugas * 0.3 + nilaiUjian * 0.4 + nilaiPraktik * 0.3).toFixed(2))
}

function tentukanGrade(nilaiAkhir: number): string {
  if (nilaiAkhir >= 85) return "A"
  if (nilaiAkhir >= 75) return "B"
  if (nilaiAkhir >= 65) return "C"
  if (nilaiAkhir >= 55) return "D"
  return "E"
}

function buatBadgeNilai(
  nama: string,
  nilaiTugas: number,
  nilaiUjian: number,
  nilaiPraktik: number
): string {
  const nilaiAkhir = hitungNilaiAkhir(nilaiTugas, nilaiUjian, nilaiPraktik)
  const grade = tentukanGrade(nilaiAkhir)
  const status = ["A", "B", "C"].includes(grade) ? "Lulus" : "Remedial"
  return `${nama} | Tugas: ${nilaiTugas} | Ujian: ${nilaiUjian} | Praktik: ${nilaiPraktik} | Nilai Akhir: ${nilaiAkhir} | Grade: ${grade} | ${status}`
}


const nilai1 = hitungNilaiAkhir(80, 90, 85)
const nilai2 = hitungNilaiAkhir(50, 60, 55)
console.log(`Nilai Akhir: ${nilai1} → Grade: ${tentukanGrade(nilai1)}`)
console.log(`Nilai Akhir: ${nilai2} → Grade: ${tentukanGrade(nilai2)}`)

const badge3 = buatBadgeNilai("Andi", 80, 90, 85)
const badge4 = buatBadgeNilai("Budi", 50, 60, 55)
console.log(`\n${badge3}`)
console.log(badge4)