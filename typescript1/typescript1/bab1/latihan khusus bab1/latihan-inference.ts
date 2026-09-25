// File: src/bab1/latihan-inference.ts

// Buat empat variabel tanpa anotasi tipe (Type Inference)
let nama = "muhammad raffadian pratama";      // Inferred sebagai string
let umur = 16;                  // Inferred sebagai number
let nilai = 80;               // Inferred sebagai number
let statusAktif = true;         // Inferred sebagai boolean

// Tampilkan semua variabel
console.log("Nama         :", nama);
console.log("Umur         :", umur);
console.log("Nilai        :", nilai);
console.log("Status Aktif :", statusAktif);

// Percobaan mengubah variabel menjadi tipe yang salah:
// Contoh: nama = 123;
// Pesan error dari VS Code / TypeScript Compiler:
// "Type 'number' is not assignable to type 'string'."
// TypeScript secara otomatis mengetahui bahwa `nama` ber-tipe string berdasarkan nilai awal (Type Inference).

// Kembalikan kode ke tipe yang benar
nama = "Siti Rahma";
console.log("Nama Baru    :", nama);