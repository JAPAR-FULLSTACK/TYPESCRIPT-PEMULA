// File: src/bab1/latihan-template-literal.ts

// Buat variabel nama, kelas, jurusan, dan nilai
const nama: string = "Muhammad raffa dian pratama";
const kelas: string = "X RPL";
const jurusan: string = "Rekayasa Perangkat Lunak";
const nilai: number = 80;

// Buat satu template literal berisi biodata singkat
const biodata: string = `BIODATA SISWA
Nama    : ${nama}
Kelas   : ${kelas}
Jurusan : ${jurusan}`;

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

