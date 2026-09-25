function jumlahkan(...angka: number[]): number {
  let total = 0
  for (const n of angka) {
    total += n
  }
  return total
}

function cetakSemua(...pesan: string[]): void {
  for (const p of pesan) {
    console.log(`• ${p}`)
  }
}

function nilaiMaksimum(...nilai: number[]): number {
  let max = nilai[0]
  for (const n of nilai) {
    if (n > max) max = n
  }
  return max
}

// Jumlah dengan berbagai jumlah argumen
console.log(jumlahkan(1, 2, 3))               // 6
console.log(jumlahkan(10, 20, 30, 40, 50))    // 150
console.log(jumlahkan(5))                     // 5

// Cetak banyak pesan
console.log("\nDaftar kegiatan:")
cetakSemua("Belajar TypeScript", "Mengerjakan latihan", "Istirahat", "Review materi")

// Nilai maksimum dari banyak angka
console.log(`\nNilai tertinggi: ${nilaiMaksimum(88, 92, 75, 67, 95, 80)}`)