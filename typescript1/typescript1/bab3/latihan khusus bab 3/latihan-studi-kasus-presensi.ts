// File: src/bab2/latihan-studi-kasus-presensi.ts

interface RecordPresensi {
    nama: string;
    hadir: boolean;
}

// Data absensi siswa
const daftarPresensi: RecordPresensi[] = [
    { nama: "Budi Santoso", hadir: true },
    { nama: "Siti Rahma", hadir: false },
    { nama: "Andi Wijaya", hadir: true },
    { nama: "Dewi Lestari", hadir: false },
    { nama: "Eko Prasetyo", hadir: true },
    { nama: "Fajar Nugraha", hadir: false },
    { nama: "Gita Gutawa", hadir: true }
];

let jumlahHadir: number = 0;
let jumlahTidakHadir: number = 0;
const namaTidakHadir: string[] = [];

// Proses pemanggilan presensi
console.log("=== PROSES PEMANGGILAN PRESENSI ===");
for (const siswa of daftarPresensi) {
    if (siswa.hadir) {
        jumlahHadir++;
        console.log(`[✓] ${siswa.nama}: Hadir`);
    } else {
        jumlahTidakHadir++;
        namaTidakHadir.push(siswa.nama);
        console.log(`[X] ${siswa.nama}: Tidak Hadir`);
    }
}

// Hitung statistik presensi
const totalDipanggil: number = jumlahHadir + jumlahTidakHadir;
const persentaseKehadiran: number = totalDipanggil > 0 ? (jumlahHadir / totalDipanggil) * 100 : 0;

// Laporan Rekapitulasi
console.log("\n==========================================");
console.log("      REKAPITULASI PRESENSI SISWA         ");
console.log("==========================================");
console.log(`• Total Siswa Dipanggil  : ${totalDipanggil} siswa`);
console.log(`• Jumlah Siswa Hadir     : ${jumlahHadir} siswa`);
console.log(`• Jumlah Tidak Hadir     : ${jumlahTidakHadir} siswa`);
console.log(`• Persentase Kehadiran   : ${persentaseKehadiran.toFixed(1)}%`);
console.log("------------------------------------------");
console.log("Daftar Siswa Tidak Hadir:");

if (namaTidakHadir.length > 0) {
    for (let i = 0; i < namaTidakHadir.length; i++) {
        console.log(` ${i + 1}. ${namaTidakHadir[i]}`);
    }
} else {
    console.log(" Semuanya hadir (Nihil)");
}
console.log("==========================================");