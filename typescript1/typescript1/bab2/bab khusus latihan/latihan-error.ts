// File: src/bab2/latihan-error.ts

const nilai: number = 82;

// PERBAIKAN 1: Gunakan perbandingan (>= atau ===), bukan penetapan/assignment (=)
if (nilai >= 75) {
  console.log("Lulus");
}

// PERBAIKAN 2: Operator ternary harus lengkap (kondisi ? ekspresiTrue : ekspresiFalse)
const kategori: string = nilai >= 60 ? "Cukup" : "Kurang";
console.log(`Kategori: ${kategori}`);

const hariIni: string = "Senin";
let jadwal: string;

switch (hariIni) {
  case "Senin":
    jadwal = "Upacara";
    break; // PERBAIKAN 3: Tambahkan break agar tidak terjadi fallthrough ke case berikutnya
  case "Rabu":
    jadwal = "Praktik";
    break;
  default:
    jadwal = "Umum";
    break;
}

console.log(`Jadwal hari ${hariIni}: ${jadwal}`);