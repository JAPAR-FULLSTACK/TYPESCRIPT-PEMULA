const namaSiswa: string = "Muhammad raffadian pratama"
const namaSekolah: string = "SMKS Antartika 1 Sidoarjo"
const jurusan: string = "Rekayasa Perangkat Lunak"
const kelas: string = "X RPL"
const motto: string = "Belajar keras, kerja cerdas!"

// Panjang string
console.log("Panjang nama:", namaSiswa.length, "karakter")

// Mengubah kapitalisasi
console.log("Huruf besar:", namaSiswa.toUpperCase())
console.log("Huruf kecil:", namaSiswa.toLowerCase())

// Memotong whitespace di kiri dan kanan
let namaKotor: string = "   Budi   "
console.log("Sebelum trim:", namaKotor)
console.log("Setelah trim:", namaKotor.trim())

// Mencari teks di dalam string
console.log("Mengandung 'RPL':", jurusan.includes("RPL"))
console.log("Dimulai dengan 'Rekayasa':", jurusan.startsWith("Rekayasa"))

// Mengambil sebagian teks
console.log("3 karakter pertama nama:", namaSiswa.slice(0, 3))

// Template literal
console.log(`
=== PROFIL SISWA ===
Nama    : ${namaSiswa}
Sekolah : ${namaSekolah}
Jurusan : ${jurusan}
Kelas   : ${kelas}
Motto   : ${motto}
`)

let teks: string = "Halo, Selamat Datang di smks antartika 1 sda!"

teks.length             // 35 — panjang string
teks.toUpperCase()      // "HALO, SELAMAT DATANG DI TYPESCRIPT!"
teks.toLowerCase()      // "halo, selamat datang di typescript!"
teks.trim()             // hapus spasi di kiri dan kanan
teks.includes("TypeScript")   // true — cek apakah mengandung teks
teks.startsWith("Halo")       // true — dimulai dengan "Halo"?
teks.endsWith("!")            // true — diakhiri dengan "!"?
teks.replace("Halo", "Hai")  // "Hai, Selamat Datang di TypeScript!"
teks.split(", ")        // ["Halo", "Selamat Datang di TypeScript!"]
teks.slice(6, 13)       // "Selamat" — ambil karakter dari indeks 6 ke 13
teks.indexOf("TypeScript")   // 22 — posisi pertama ditemukan