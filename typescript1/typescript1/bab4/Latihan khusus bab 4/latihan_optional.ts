function buatLaporan(nama: string, nilai: number, catatan?: string): string {
  const catatanFinal = catatan ?? "Tidak ada catatan"
  return `Nama: ${nama} | Nilai: ${nilai} | Catatan: ${catatanFinal}`
}

console.log(buatLaporan("Andi", 90))
console.log(buatLaporan("Agus", 30, "perlu perbaikan di buku tugas nya"))
console.log(buatLaporan("Citra", 95, "Sangat baik, pertahankan!"))