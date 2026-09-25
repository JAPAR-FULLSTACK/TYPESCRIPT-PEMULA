// File: src/bab2/latihan-studi-kasus.ts

type statusLulus = "LULUS" | "TIDAK LULUS";

interface DataSiswa {
    nama: string;
    nilaiTeori: number;
    nilaiPraktik: number;
    persentaseKehadiran: number;
}

function buatLaporanKelulusan(siswa: DataSiswa): void {
    // 1. Hitung nilai rata-rata dari Teori & Praktik
    const nilaiRataRata: number = (siswa.nilaiTeori + siswa.nilaiPraktik) / 2;

    // 2. Evaluasi kondisi menggunakan boolean bermakna
    const nilaiTeoriCukup: boolean = siswa.nilaiTeori >= 70;
    const nilaiPraktikCukup: boolean = siswa.nilaiPraktik >= 70;
    const rataRataCukup: boolean = nilaiRataRata >= 75;
    const kehadiranCukup: boolean = siswa.persentaseKehadiran >= 80;

    // Kriteria Lulus: Teori >= 70, Praktik >= 70, Rata-rata >= 75, Kehadiran >= 80%
    const isLulus: boolean = nilaiTeoriCukup && nilaiPraktikCukup && rataRataCukup && kehadiranCukup;

    // 3. Tentukan status menggunakan ternary operator
    const status: statusLulus = isLulus ? "LULUS" : "TIDAK LULUS";

    // 4. Cetak Laporan
    console.log("==========================================");
    console.log(`      LAPORAN EVALUASI SISWA              `);
    console.log("==========================================");
    console.log(`Nama Siswa         : ${siswa.nama}`);
    console.log(`Nilai Teori        : ${siswa.nilaiTeori}`);
    console.log(`Nilai Praktik      : ${siswa.nilaiPraktik}`);
    console.log(`Nilai Rata-rata    : ${nilaiRataRata.toFixed(1)}`);
    console.log(`Kehadiran          : ${siswa.persentaseKehadiran}%`);
    console.log("------------------------------------------");
    console.log(`STATUS KELULUSAN   : ${status}`);
    
    if (!isLulus) {
        console.log("Catatan Evaluasi   :");
        if (!nilaiTeoriCukup) console.log(" - Nilai teori di bawah standar minimal (70)");
        if (!nilaiPraktikCukup) console.log(" - Nilai praktik di bawah standar minimal (70)");
        if (!rataRataCukup) console.log(" - Nilai rata-rata di bawah standar minimal (75)");
        if (!kehadiranCukup) console.log(" - Presensi kehadiran kurang dari 80%");
    }
    console.log("==========================================\n");
}

console.log("=== PENGUJIAN EVALUASI KELULUSAN SISWA ===\n");

// Siswa 1: Memenuhi semua kriteria
buatLaporanKelulusan({
    Nama: "Budi Santoso",
    NilaiTeori: 85,
    NilaiPraktik: 90,
    PersentaseKehadiran: 92
});

// Siswa 2: Nilai teori & praktik cukup (>=70), tapi rata-rata kurang (<75)
buatLaporanKelulusan({
    Nama: "Siti Rahma",
    nilaiTeori: 72,
    nilaiPraktik: 74,
    PersentaseKehadiran: 88
});

// Siswa 3: Rata-rata tinggi (80), tapi nilai teori di bawah standar minimal (<70)
buatLaporanKelulusan({
    Nama: "Andi Wijaya",
    NilaiTeori: 65,
    NilaiPraktik: 95,
    PersentaseKehadiran: 85
});