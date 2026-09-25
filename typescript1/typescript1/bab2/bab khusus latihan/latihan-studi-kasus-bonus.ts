// File: src/bab2/latihan-studi-kasus-bonus.ts

type StatusLulus = "LULUS" | "TIDAK LULUS";

interface DataSiswa {
    nama: string;
    nilaiTeori: number;
    nilaiPraktik: number;
    nilaiBahasaInggris: number;
    persentaseKehadiran: number;
}

function buatLaporanKelulusan(siswa: DataSiswa): void {
    // 1. Hitung rata-rata awal dari 3 mata pelajaran
    const totalNilai: number = siswa.nilaiTeori + siswa.nilaiPraktik + siswa.nilaiBahasaInggris;
    const rataRataAwal: number = totalNilai / 3;

    // 2. Cek bonus kehadiran (kehadiran > 95%)
    const berhakBonusKehadiran: boolean = siswa.persentaseKehadiran > 95;
    const poinBonus: number = berhakBonusKehadiran ? 2 : 0;

    // 3. Hitung rata-rata akhir setelah ditambah bonus
    const rataRataAkhir: number = rataRataAwal + poinBonus;

    // 4. Evaluasi kondisi menggunakan boolean bermakna
    const nilaiTeoriCukup: boolean = siswa.nilaiTeori >= 70;
    const nilaiPraktikCukup: boolean = siswa.nilaiPraktik >= 70;
    const nilaiBahasaInggrisCukup: boolean = siswa.nilaiBahasaInggris >= 70;
    const rataRataCukup: boolean = rataRataAkhir >= 75;
    const kehadiranCukup: boolean = siswa.persentaseKehadiran >= 80;

    // Kriteria Lulus: Semua komponen >= 70, rata-rata akhir >= 75, dan kehadiran >= 80%
    const isLulus: boolean = 
        nilaiTeoriCukup && 
        nilaiPraktikCukup && 
        nilaiBahasaInggrisCukup && 
        rataRataCukup && 
        kehadiranCukup;

    // 5. Tentukan status menggunakan ternary operator
    const status: StatusLulus = isLulus ? "LULUS" : "TIDAK LULUS";

    // 6. Cetak Laporan
    console.log("==========================================");
    console.log(`      LAPORAN EVALUASI SISWA              `);
    console.log("==========================================");
    console.log(`Nama Siswa         : ${siswa.nama}`);
    console.log(`Nilai Teori        : ${siswa.nilaiTeori}`);
    console.log(`Nilai Praktik      : ${siswa.nilaiPraktik}`);
    console.log(`Nilai B. Inggris   : ${siswa.nilaiBahasaInggris}`);
    console.log(`Kehadiran          : ${siswa.persentaseKehadiran}%`);
    console.log(`Bonus Kehadiran    : +${poinBonus} poin`);
    console.log(`Nilai Rata-rata    : ${rataRataAkhir.toFixed(1)} ${poinBonus > 0 ? `(Awal: ${rataRataAwal.toFixed(1)})` : ""}`);
    console.log("------------------------------------------");
    console.log(`STATUS KELULUSAN   : ${status}`);
    
    if (!isLulus) {
        console.log("Catatan Evaluasi   :");
        if (!nilaiTeoriCukup) console.log(" - Nilai teori di bawah standar minimal (70)");
        if (!nilaiPraktikCukup) console.log(" - Nilai praktik di bawah standar minimal (70)");
        if (!nilaiBahasaInggrisCukup) console.log(" - Nilai Bahasa Inggris di bawah standar minimal (70)");
        if (!rataRataCukup) console.log(" - Nilai rata-rata akhir di bawah standar minimal (75)");
        if (!kehadiranCukup) console.log(" - Presensi kehadiran kurang dari 80%");
    }
    console.log("==========================================\n");
}

console.log("=== PENGUJIAN EVALUASI KELULUSAN + BONUS KEHADIRAN ===\n");

// Siswa 1: Kehadiran > 95% (98%) -> Dapat bonus 2 poin (Rata-rata awal 73.7 + 2 = 75.7 -> LULUS)
buatLaporanKelulusan({
    nama: "Budi Santoso",
    nilaiTeori: 72,
    nilaiPraktik: 74,
    nilaiBahasaInggris: 75,
    persentaseKehadiran: 98
});

// Siswa 2: Kehadiran pas 95% -> Tidak dapat bonus (Rata-rata 73.7 -> TIDAK LULUS)
buatLaporanKelulusan({
    nama: "Siti Rahma",
    nilaiTeori: 72,
    nilaiPraktik: 74,
    nilaiBahasaInggris: 75,
    persentaseKehadiran: 95
});

// Siswa 3: Kehadiran > 95% -> Rata-rata memenuhi, tapi ada nilai mata pelajaran < 70
buatLaporanKelulusan({
    nama: "Andi Wijaya",
    nilaiTeori: 65,
    nilaiPraktik: 85,
    nilaiBahasaInggris: 90,
    persentaseKehadiran: 97
});