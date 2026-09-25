interface LaporanNilai {
    nilaiTeori: number;
    nilaiPraktik: number;
    rataRata: number;
}

// Fungsi untuk menghitung rata-rata
function hitungRataRata(nilaiTeori: number, nilaiPraktik: number): number {
    return (nilaiTeori + nilaiPraktik) / 2;
}

// Fungsi untuk membuat laporan nilai
function buatLaporan(nilaiTeori: number, nilaiPraktik: number): LaporanNilai {
    const rataRata = hitungRataRata(nilaiTeori, nilaiPraktik);
    return {
        nilaiTeori: nilaiTeori,
        nilaiPraktik: nilaiPraktik,
        rataRata: rataRata
    };
}

// Contoh penggunaan
const nilaiTeori = 80; // nilai teori
const nilaiPraktik = 90; // nilai praktik

const laporan = buatLaporan(nilaiTeori, nilaiPraktik);

console.log("Laporan Nilai:");
console.log(`Nilai Teori: ${laporan.nilaiTeori}`);
console.log(`Nilai Praktik: ${laporan.nilaiPraktik}`);
console.log(`Rata-Rata: ${laporan.rataRata}`);
