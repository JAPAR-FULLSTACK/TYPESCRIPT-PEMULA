let jumlahHadir: number = 30
let statusAktif: boolean = true
const teksNilai: string = "85"

jumlahHadir++
console.log(`Setelah satu siswa hadir: ${jumlahHadir}`)

jumlahHadir--
console.log(`Setelah satu siswa pulang: ${jumlahHadir}`)

console.log(`Status dibalik: ${!statusAktif}`)
console.log(`Tipe jumlahHadir: ${typeof jumlahHadir}`)
console.log(`Nilai teks menjadi angka: ${+teksNilai + 5}`)