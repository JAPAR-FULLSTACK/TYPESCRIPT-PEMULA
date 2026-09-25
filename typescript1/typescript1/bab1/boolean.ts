// Deklarasi variabel boolean
const sudahLulus: boolean = true
const sedangSakit: boolean = false
let sudahMengumpulkanTugas: boolean = false
let statusAktif: boolean = true

console.log("Sudah lulus?", sudahLulus)
console.log("Sedang sakit?", sedangSakit)
console.log("Sudah kumpul tugas?", sudahMengumpulkanTugas)
console.log("Status aktif?", statusAktif)

// Mengubah status
sudahMengumpulkanTugas = true
console.log("Setelah kumpul tugas:", sudahMengumpulkanTugas)

let nilai: number = 80

// Operator perbandingan
console.log(nilai > 75)    // true — nilai lebih besar dari 75?
console.log(nilai < 60)    // false — nilai lebih kecil dari 60?
console.log(nilai >= 80)   // true — nilai lebih besar atau sama dengan 80?
console.log(nilai <= 100)  // true — nilai lebih kecil atau sama dengan 100?
console.log(nilai === 80)  // true — nilai sama persis dengan 80?
console.log(nilai !== 90)  // true — nilai tidak sama dengan 90?

const namaSiswa: string = "Muhammad raffadian pratama"
const nilaiAkhir: number = 82
const persentaseKehadiran: number = 85

// Syarat lulus
const nilaiMinimum: number = 75
const kehadiranMinimum: number = 75

// Cek kondisi
const nilaiLulus: boolean = nilaiAkhir >= nilaiMinimum
const kehadiranCukup: boolean = persentaseKehadiran >= kehadiranMinimum
const dinyatakanLulus: boolean = nilaiLulus && kehadiranCukup

console.log(`=== CEK KELULUSAN: ${namaSiswa} ===`)
console.log(`Nilai akhir   : ${nilaiAkhir}`)
console.log(`Kehadiran     : ${persentaseKehadiran}%`)
console.log(`Nilai lulus?  : ${nilaiLulus}`)
console.log(`Hadir cukup?  : ${kehadiranCukup}`)
console.log(`DINYATAKAN    : ${dinyatakanLulus ? "LULUS" : "TIDAK LULUS"}`)