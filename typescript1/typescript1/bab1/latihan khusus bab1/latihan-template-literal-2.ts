// File: src/bab1/latihan-template-literal.ts

// Buat variabel nama, kelas, jurusan, nilai, nomorAbsen, email, dan hobi
const nama: string = "Muhammad raffa dian pratama";
const kelas: string = "X RPL";
const jurusan: string = "Rekayasa Perangkat Lunak";
const nilai: number = 76;
const nomorAbsen: number = 18;
const email: string | null = null; // Email bertipe string | null
const hobi: string = "game & Pemrograman & berbisnis";

// Gunakan operator ?? (Nullish Coalescing) untuk mengecek email
const emailDisplay = email ?? "japar3371@gmail.com";

// Buat satu template literal berisi biodata singkat
const biodata: string = `BIODATA SISWA
Nama        : ${nama}
Nomor Absen : ${nomorAbsen}
Kelas       : ${kelas}
Jurusan     : ${jurusan}
Email       : ${emailDisplay}
Hobi        : ${hobi}`;

// Buat satu template literal yang menampilkan nilai setelah ditambah bonus 5
const infoNilai: string = `Nilai Awal  : ${nilai}
Nilai Akhir : ${nilai + 5} (setelah ditambah bonus 5)`;

// Buat output multi-baris dengan garis pembatas
const outputLengkap: string = `
========================================
             LAPORAN SISWA             
========================================
${biodata}
----------------------------------------
${infoNilai}
========================================
`;

console.log(outputLengkap);