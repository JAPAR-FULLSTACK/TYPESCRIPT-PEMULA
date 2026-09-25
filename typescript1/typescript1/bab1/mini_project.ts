type Jurusan = "RPL" | "TKR" | "TITL"
type StatusBelajar = "aktif" | "cuti" | "lulus"
type JenisKelamin = "L" | "P"

const NAMA_APLIKASI: string = "Aplikasi Biodata Siswa"
const TAHUN_SEKARANG: number = 2026

// ===== DATA UTAMA =====
const namaLengkap: string = "Muhammad Raffadian Pratama"
const tanggalLahir: string = "14 Juli 2009"
const tahunLahir: number = 2009
let kelasSaatIni: string = "X RPL 1"
const jurusan: Jurusan = "RPL"
const nomorAbsen: number = 18

const namaSekolah: string = "SMKS Antartika 1 Sidoarjo"
const alamat: string = "Sidoarjo, Jawa Timur"

// ===== DATA TAMBAHAN =====
const nomorTelepon: string | null = "0812-3456-7890"
const hobi: string = "Coding dan Bermain Game"
const jenisKelamin: JenisKelamin = "L"
const sudahMembayarSPP: boolean = true

// ===== HITUNG USIA =====
const usia: number = TAHUN_SEKARANG - tahunLahir

// ===== STATUS PEMBAYARAN =====
const statusPembayaran: string = sudahMembayarSPP ? "Lunas" : "Belum Lunas"

// ===== TAMPILKAN LAPORAN =====
console.log("========================================")
console.log(`        ${NAMA_APLIKASI}`)
console.log("========================================")

console.log("\n--- DATA SISWA ---")
console.log(`Nama Lengkap    : ${namaLengkap}`)
console.log(`Jenis Kelamin   : ${jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}`)
console.log(`Tanggal Lahir   : ${tanggalLahir}`)
console.log(`Usia            : ${usia} tahun`)
console.log(`Kelas           : ${kelasSaatIni}`)
console.log(`Jurusan         : ${jurusan}`)
console.log(`Nomor Absen     : ${nomorAbsen}`)

console.log("\n--- DATA SEKOLAH ---")
console.log(`Nama Sekolah    : ${namaSekolah}`)
console.log(`Alamat          : ${alamat}`)

console.log("\n--- DATA TAMBAHAN ---")
console.log(`Nomor Telepon   : ${nomorTelepon ?? "Tidak tersedia"}`)
console.log(`Hobi            : ${hobi}`)
console.log(`Status SPP      : ${statusPembayaran}`)

console.log("\n========================================")