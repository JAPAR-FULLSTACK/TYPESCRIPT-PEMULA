// File: src/bab2/latihan-kursi.ts

// Jumlah awal kursi kosong
let kursiKosong: number = 36;
console.log(`Kapasitas Awal Kursi Kosong : ${kursiKosong}`);
console.log("----------------------------------------");

// 1. Siswa pertama datang (kurangi 1)
kursiKosong--;
console.log(`[+] 1 Siswa datang   -> Kursi kosong tersisa: ${kursiKosong}`);

// 2. Siswa kedua datang (kurangi 1)
kursiKosong--;
console.log(`[+] 1 Siswa datang   -> Kursi kosong tersisa: ${kursiKosong}`);

// 3. Satu siswa keluar ruangan (tambah 1)
kursiKosong++;
console.log(`[-] 1 Siswa keluar   -> Kursi kosong tersisa: ${kursiKosong}`);

// 4. Dua siswa datang sekaligus
kursiKosong -= 2;
console.log(`[+] 2 Siswa datang   -> Kursi kosong tersisa: ${kursiKosong}`);

console.log("----------------------------------------");
console.log(`Jumlah Kursi Kosong Akhir   : ${kursiKosong}`);