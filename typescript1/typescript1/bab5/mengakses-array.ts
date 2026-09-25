const mataPelajaran: string[] = ["Matematika", "Bahasa Indonesia", "Pemrograman"]
const nilaiSiswa: number[] = [90, 85, 95]

// Mengakses elemen secara langsung
console.log("=== Mengakses Elemen ===")
console.log(`Pelajaran 1: ${mataPelajaran[0]}`)
console.log(`Pelajaran 2: ${mataPelajaran[1]}`)
console.log(`Pelajaran 3: ${mataPelajaran[2]}`)

// Menggunakan nilai array dalam ekspresi
console.log("\n=== Menghitung Nilai ===")
const totalNilai = nilaiSiswa[0] + nilaiSiswa[1] + nilaiSiswa[2]
const rataRata = totalNilai / 3
console.log(`Rata-rata nilai: ${rataRata}`)

// Mengakses indeks di luar jangkauan
console.log("\n=== Indeks Tidak Ada ===")
console.log(`Pelajaran 4: ${mataPelajaran[3]}`)