// File: src/bab2/latihan-object-for-in.ts

// Definisi interface untuk struktur data siswa
interface DataSiswa {
    nama: string;
    kelas: string;
    jurusan: string;
}

// Inisialisasi objek data siswa
const siswa: DataSiswa = {
    nama: "Ahmad Rizky",
    kelas: "XI RPL 1",
    jurusan: "Rekayasa Perangkat Lunak"
};

console.log("=== INFORMASI DATA SISWA ===");

// Perulangan for...in untuk mengakses properti (key) dan nilainya (value)
for (const kunci in siswa) {
    const key = kunci as keyof DataSiswa;
    
    // Format label agar huruf pertamanya kapital
    const labelFormatted = key.charAt(0).toUpperCase() + key.slice(1);
    
    console.log(`${labelFormatted.padEnd(10)}: ${siswa[key]}`);
}