// File: src/bab1/latihan-unknown.ts

function cekData(data: unknown): void {
  // Jika data adalah string, tampilkan panjang teksnya
  if (typeof data === "string") {
    console.log(`[String] Panjang teks "${data}": ${data.length} karakter`);
  } 
  // Jika data adalah number, tampilkan hasil angka ditambah 10
  else if (typeof data === "number") {
    console.log(`[Number] Hasil ${data} + 10: ${data + 10}`);
  } 
  // Jika data adalah boolean, tampilkan "Status aktif" atau "Status tidak aktif"
  else if (typeof data === "boolean") {
    console.log(`[Boolean] ${data ? "Status aktif" : "Status tidak aktif"}`);
  } 
  // Menangani tipe data lainnya
  else {
    console.log("[Lainnya] Tipe data tidak dikenali/tidak didukung");
  }
}

// Panggil fungsi tersebut dengan minimal tiga tipe data berbeda
cekData("Hello TypeScript"); // String
cekData(25);                 // Number
cekData(true);               // Boolean (aktif)
cekData(false);              // Boolean (tidak aktif)
cekData([1, 2, 3]);          // Tipe data lain (Array)