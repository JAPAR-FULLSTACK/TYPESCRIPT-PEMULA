// Bilangan bulat (integer)
let jumlahSiswa: number = 36
let peringkat: number = 1
let tahun: number = 2024
let suhu: number = -5        // bisa negatif

// Bilangan desimal (float)
let nilaiRataRata: number = 87.5
let beratBadan: number = 52.3
let pi: number = 3.14159

// Notasi ilmiah
let jarakBumi: number = 1.496e11     // 149.600.000.000 meter

// Hexadecimal (basis 16)
let warnaHex: number = 0xFF          // 255 dalam basis 10

// Nilai khusus
let tidakValid: number = NaN         // Not a Number
let takTerhingga: number = Infinity
let negatifTakTerhingga: number = -Infinity

// Deklarasi variabel number
const nilaiMatematika: number = 85
const nilaiIndonesia: number = 90
const nilaiInggris: number = 78
const jumlahMapel: number = 3

// Operasi aritmatika
const totalNilai: number = nilaiMatematika + nilaiIndonesia + nilaiInggris
const rataRata: number = totalNilai / jumlahMapel

console.log("=== LAPORAN NILAI ===")
console.log("Matematika  :", nilaiMatematika)
console.log("Indonesia   :", nilaiIndonesia)
console.log("Inggris     :", nilaiInggris)
console.log("Total Nilai :", totalNilai)
console.log("Rata-rata   :", rataRata)

// Operasi tambahan
const nilaiDibulatkan: number = Math.round(rataRata)
const nilaiMaksimum: number = Math.max(nilaiMatematika, nilaiIndonesia, nilaiInggris)
const nilaiMinimum: number = Math.min(nilaiMatematika, nilaiIndonesia, nilaiInggris)

console.log("---")
console.log("Dibulatkan  :", nilaiDibulatkan)
console.log("Nilai max   :", nilaiMaksimum)
console.log("Nilai min   :", nilaiMinimum)

// Number ke String
let nilai: number = 90
let nilaiStr: string = nilai.toString()
let nilaiStr2: string = String(nilai)
console.log(typeof nilaiStr)   // "string"

// String ke Number
let inputUser: string = "85"
let nilaiNum: number = Number(inputUser)
let nilaiNum2: number = parseInt(inputUser)
console.log(typeof nilaiNum)   // "number"