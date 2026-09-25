const nilaiAkhir: number = 82
let kategori: string

if (nilaiAkhir >= 90) {
  kategori = "Sangat Baik"
} else if (nilaiAkhir >= 75) {
  kategori = "Baik"
} else if (nilaiAkhir >= 60) {
  kategori = "Cukup"
} else {
  kategori = "Perlu Bimbingan"
}

console.log(`Nilai: ${nilaiAkhir}`)
console.log(`Kategori: ${kategori}`)
export {};