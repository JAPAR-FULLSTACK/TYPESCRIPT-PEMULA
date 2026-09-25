// File: src/bab1/latihan-error-handling.ts

// ==========================================
// 1. ERROR: Reassignment pada `const`
// ==========================================
const kota: string = "surabaya";
// kota = "Surabaya"; // ❌ ERROR: Cannot assign to 'kota' because it is a constant.

// ✅ PERBAIKAN: Ubah `const` menjadi `let` jika nilainya perlu diubah
let kotaDapatDiubah: string = "surabaya";
kotaDapatDiubah = "Sidoarjo";


// ==========================================
// 2. ERROR: Tipe String ke Number
// ==========================================
let umur: number = 16;
// umur = "21"; // ❌ ERROR: Type 'string' is not assignable to type 'number'.

// ✅ PERBAIKAN: Konversi string ke number terlebih dahulu (misal dengan Number() atau parseInt())
umur = Number("16");


// ==========================================
// 3. ERROR: Typo Nama Variabel
// ==========================================
const namaLengkap: string = "Muhammad raffadian pratama";
// console.log(namaLengakp); // ❌ ERROR: Cannot find name 'namaLengakp'. Did you mean 'namaLengkap'?

// ✅ PERBAIKAN: Gunakan ejaan nama variabel yang sesuai saat deklarasi
console.log(namaLengkap);