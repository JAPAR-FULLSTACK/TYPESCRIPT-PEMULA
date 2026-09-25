// File: src/bab2/latihan-rekap-nilai-lanjutan.ts

interface DataSiswa {
    nama: string;
    nilaiMatematika: number;
    nilaiInformatika: number;
    nilaiBahasaInggris: number;
}

// Data sampel beberapa siswa
const daftarSiswa: DataSiswa[] = [
    { nama: "Budi Santoso", nilaiMatematika: 88, nilaiInformatika: 92, nilaiBahasaInggris: 85 },
    { nama: "Siti Rahma", nilaiMatematika: 60, nilaiInformatika: 65, nilaiBahasaInggris: 55 },
    { nama: "Andi Wijaya", nilaiMatematika: 78, nilaiInformatika: 82, nilaiBahasaInggris: 80 },
    { nama: "Dewi Lestari", nilaiMatematika: 50, nilaiInformatika: 58, nilaiBahasaInggris: 60 },
    { nama: "Eko Prasetyo", nilaiMatematika: 95, nilaiInformatika: 90, nilaiBahasaInggris: 92 }
];

interface RekapSiswa {
    nama: string;
    rataRata: number;
    grade: string;
}

const siswaBimbinganKhusus: RekapSiswa[] = [];
let jumlahGradeAB: number = 0;

console.log("=== REKAPITULASI EVALUASI INDIVIDUAL ===");

for (const siswa of daftarSiswa) {
    const rataRata = (siswa.nilaiMatematika + siswa.nilaiInformatika + siswa.nilaiBahasaInggris) / 3;
    
    let grade: string;
    if (rataRata >= 90) {
        grade = "A";
    } else if (rataRata >= 80) {
        grade = "B";
    } else if (rataRata >= 70) {
        grade = "C";
    } else {
        grade = "D";
    }

    // Hitung berapa siswa yang mendapat grade A atau B
    if (grade === "A" || grade === "B") {
        jumlahGradeAB++;
    }

    // Catat siswa yang rata-ratanya di bawah 70
    if (rataRata < 70) {
        siswaBimbinganKhusus.push({
            nama: siswa.nama,
            rataRata: rataRata,
            grade: grade
        });
    }

    console.log(`• ${siswa.nama.padEnd(15)} | Rata-rata: ${rataRata.toFixed(2)} | Grade: ${grade}`);
}

// Hitung persentase siswa dengan grade A atau B
const totalSiswa = daftarSiswa.length;
const persentaseAB = (jumlahGradeAB / totalSiswa) * 100;

console.log("\n==========================================");
console.log("             LAPORAN ANALISIS             ");
console.log("==========================================");
console.log(`• Total Siswa Analyzed      : ${totalSiswa} siswa`);
console.log(`• Siswa Grade A / B         : ${jumlahGradeAB} siswa (${persentaseAB.toFixed(1)}%)`);
console.log("------------------------------------------");
console.log("DAFTAR SISWA PERLU BIMBINGAN KHUSUS (Rata-rata < 70):");

if (siswaBimbinganKhusus.length > 0) {
    let index = 1;
    for (const s of siswaBimbinganKhusus) {
        console.log(` ${index}. ${s.nama.padEnd(15)} - Rata-rata: ${s.rataRata.toFixed(2)} (Grade: ${s.grade})`);
        index++;
    }
} else {
    console.log(" Tidak ada siswa yang memerlukan bimbingan khusus.");
}
console.log("==========================================");