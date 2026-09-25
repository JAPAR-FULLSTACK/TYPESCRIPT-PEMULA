// File: src/bab2/latihan-nullish.ts

// Buat variabel alamat bertipe string | null dan hobi bertipe string | undefined
const alamat: string | null = null;
const hobi: string | undefined = undefined;

// Gunakan operator Nullish Coalescing (??) untuk menangani nilai null / undefined
const alamatDisplay: string = alamat ?? "Alamat belum diisi";
const hobiDisplay: string = hobi ?? "Hobi belum ditentukan";

// Tampilkan informasi dengan output yang ramah dibaca
console.log("========================================");
console.log("           INFORMASI PROFIL             ");
console.log("========================================");
console.log(`• Alamat : ${alamatDisplay}`);
console.log(`• Hobi   : ${hobiDisplay}`);
console.log("========================================");