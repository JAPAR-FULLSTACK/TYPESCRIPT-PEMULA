// File: src/bab1/latihan-never.ts

// Buat fungsi laporkanError yang menerima pesan string
// Beri tipe return never
// Gunakan throw new Error(pesan) di dalamnya
function laporkanError(pesan: string): never {
  throw new Error(pesan);
}

// Panggil fungsi di dalam try...catch
try {
  console.log("Mencoba menjalankan fungsi laporkanError...");
  laporkanError("Terjadi kesalahan sistem yang tidak diharapkan!");
} catch (error) {
  // Tampilkan pesan setelah catch untuk membuktikan error tertangani
  if (error instanceof Error) {
    console.log("Error berhasil ditangani di blok catch:");
    console.log("Pesan Error:", error.message);
  } else {
    console.log("Terjadi error yang tidak diketahui:", error);
  }
}

console.log("Program tetap berjalan normal setelah penanganan error.");