// File: src/bab1/latihan-literal-type.ts

// Buat tipe HariSekolah dengan pilihan "Senin" sampai "Jumat"
type HariSekolah = "Senin" | "Selasa" | "Rabu" | "Kamis" | "Jumat";

// Buat tipe StatusTugas dengan pilihan "belum", "dikerjakan", "dikumpulkan"
type StatusTugas = "belum" | "dikerjakan" | "dikumpulkan";

// Buat variabel untuk hari ini dan status tugasmu
const hariIni: HariSekolah = "Kamis";
let statusTugasSaya: StatusTugas = "dikerjakan";

// Tampilkan hasilnya
console.log("Hari Ini     :", hariIni);
console.log("Status Tugas :", statusTugasSaya);

// Coba isi status dengan nilai tidak valid, lalu amati error VS Code:
// Contoh nilai tidak valid:
// statusTugasSaya = "selesai"; 
//
// Pesan Error dari VS Code / TypeScript:
// Type '"selesai"' is not assignable to type 'StatusTugas'.
// Did you mean '"dikerjakan"'?
//
// Hal ini terjadi karena "selesai" bukan salah satu dari literal string yang didefinisikan pada type StatusTugas.

// Kembalikan ke nilai valid:
statusTugasSaya = "dikumpulkan";
console.log("Status Tugas Terbaru :", statusTugasSaya);