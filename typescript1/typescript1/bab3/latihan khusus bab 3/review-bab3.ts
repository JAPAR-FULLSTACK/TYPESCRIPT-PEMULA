// File: src/bab3/review-bab3.ts

interface Siswa {
    nama: string;
    nilaiRataRata: number;
}

// 1. Array 6 siswa dengan nama dan nilai rata-rata
const daftarSiswa: Siswa[] = [
    { nama: "Budi Santoso", nilaiRataRata: 85.5 },
    { nama: "Siti Rahma", nilaiRataRata: 72.0 },
    { nama: "Andi Wijaya", nilaiRataRata: 91.0 },
    { nama: "Dewi Lestari", nilaiRataRata: 68.5 },
    { nama: "Eko Prasetyo", nilaiRataRata: 78.0 },
    { nama: "Fajar Nugraha", nilaiRataRata: 64.0 }
];

console.log("=".repeat(40));
console.log("      DAFTAR NILAI RATA-RATA SISWA      ");
console.log("=".repeat(40));

// 2. Tampilkan semua siswa dengan nomor urut
let nomor = 1;
for (const siswa of daftarSiswa) {
    console.log(`${nomor}. ${siswa.nama.padEnd(15)} : ${siswa.nilaiRataRata}`);
    nomor++;
}

// 3. Hitung rata-rata kelas menggunakan loop
let totalNilaiKelas = 0;
for (const siswa of daftarSiswa) {
    totalNilaiKelas += siswa.nilaiRataRata;
}
const rataRataKelas = totalNilaiKelas / daftarSiswa.length;

console.log("=".repeat(40));
console.log(`RATA-RATA KELAS: ${rataRataKelas.toFixed(2)}`);
console.log("=".repeat(40));

// 4. Cari nama siswa dengan nilai tertinggi (tambahkan tanda ! agar aman dari strict null checks)
let siswaTertinggi: Siswa = daftarSiswa[0]!;
for (const siswa of daftarSiswa) {
    if (siswa.nilaiRataRata > siswaTertinggi.nilaiRataRata) {
        siswaTertinggi = siswa;
    }
}
console.log(`Siswa Nilai Tertinggi : ${siswaTertinggi.nama} (${siswaTertinggi.nilaiRataRata})`);

console.log("=".repeat(40));

// 5. Filter dan tampilkan siswa yang nilainya di bawah rata-rata kelas
console.log("SISWA DI BAWAH RATA-RATA KELAS:");
let jumlahDibawahRata = 0;

for (const siswa of daftarSiswa) {
    if (siswa.nilaiRataRata < rataRataKelas) {
        console.log(`• ${siswa.nama.padEnd(15)} : ${siswa.nilaiRataRata}`);
        jumlahDibawahRata++;
    }
}

if (jumlahDibawahRata === 0) {
    console.log("Tidak ada siswa di bawah rata-rata kelas.");
}

console.log("=".repeat(40));