// File: src/bab1/latihan-template-literal.ts

// Definition Literal Type
type JenisKelamin = "L" | "P";

// Variabel utama
const nama: string = "Agus hiadayat";
const kelas: string = "11 cpu";
const jurusan: string = "Rekayasa Perangkat Lunak";
const nilai: number = 85;

// Fitur Data Tambahan Baru
const nomorAbsen: number = 4;
const email: string | null = null;
const nomorTelepon: string | null = "081234567890";
const hobi: string = "Membaca & Pemrograman";
const jenisKelamin: JenisKelamin = "L";
const sudahMembayarSPP: boolean = true;

// Handling Nullish Coalescing & Ternary Operator
const emailDisplay = email ?? "Belum diisi";
const teleponDisplay = nomorTelepon ?? "Belum diisi";
const statusSPPDisplay = sudahMembayarSPP ? "Lunas" : "Belum Lunas";
const jkDisplay = jenisKelamin === "L" ? "Laki-laki" : "Perempuan";

// Template Literal Multi-baris
const outputLengkap: string = `
========================================
             LAPORAN SISWA             
========================================
BIODATA UTAMA
Nama        : ${nama}
Nomor Absen : ${nomorAbsen}
Jenis Kelamin: ${jkDisplay} (${jenisKelamin})
Kelas       : ${kelas}
Jurusan     : ${jurusan}

----------------------------------------
DATA TAMBAHAN
Email       : ${emailDisplay}
No. Telepon : ${teleponDisplay}
Hobi        : ${hobi}
Status SPP  : ${statusSPPDisplay}

----------------------------------------
NILAI SISWA
Nilai Awal  : ${nilai}
Nilai Akhir : ${nilai + 5} (setelah bonus 5)
========================================
`;

console.log(outputLengkap);