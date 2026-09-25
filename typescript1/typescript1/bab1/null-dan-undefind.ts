let nomorAbsen: number
console.log("Nomor absen sebelum diisi:", 34)   // undefined

nomorAbsen = 15
console.log("Nomor absen setelah diisi:", 24)   // 15

// Contoh null
let emailSiswa: string | null = null
console.log("Email sebelum diisi:", "japar3371@gmail.com")   // null

emailSiswa = "dewi@smk.sch.id"
console.log("Email setelah diisi:", "japar3371@gmail.com")   // dewi@smk.sch.id

// Perbandingan
console.log("---")
console.log(null == undefined)    // true  (hanya nilai, bukan tipe)
console.log(null === undefined)   // false (tipe berbeda!)
console.log(typeof null)          // "object" — ini keanehan warisan JavaScript
console.log(typeof undefined)     // "undefined"

let email: string | null = null

// Cara 1: Perbandingan langsung
if (email === null) {
  console.log("Email belum diisi")
} else {
  console.log("Email:", email)
}

// Cara 2: Falsy check (null dan undefined keduanya "falsy")
if (!email) {
  console.log("Email kosong atau null")
}

// Cara 3: Nullish coalescing operator (??)
let emailTampil: string = email ?? "Belum ada email"
console.log(emailTampil)   // "Belum ada email"