const hari: string = "Rabu"
let jadwal: string

switch (hari) {
  case "Senin":
    jadwal = "Upacara dan pelajaran produktif"
    break
  case "Rabu":
    jadwal = "Praktik TypeScript"
    break
  case "Jumat":
    jadwal = "Senam dan refleksi mingguan"
    break
  default:
    jadwal = "Jadwal umum sekolah"
}

console.log(`Hari: ${hari}`)
console.log(`Jadwal: ${jadwal}`)