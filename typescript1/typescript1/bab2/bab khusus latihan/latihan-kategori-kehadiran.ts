// File: src/bab2/latihan-kategori-kehadiran.ts

function cekKategoriKehadiran(persentaseKehadiran: number): void {
    console.log(`Persentase Kehadiran: ${persentaseKehadiran}%`);
    
    let kategori: string;

    if (persentaseKehadiran >= 95) {
        kategori = "Sangat Rajin";
    } else if (persentaseKehadiran >= 80) {
        kategori = "Rajin";
    } else if (persentaseKehadiran >= 75) {
        kategori = "Cukup";
    } else {
        kategori = "Perlu Ditingkatkan";
    }

    console.log(`-> Kategori Kehadiran: ${kategori}`);
    console.log("----------------------------------------");
}

console.log("=== PROGRAM CEK KATEGORI KEHADIRAN ===\n");

// Uji coba dengan berbagai nilai persentase
cekKategoriKehadiran(98); // >= 95 -> Sangat Rajin
cekKategoriKehadiran(85); // >= 80 -> Rajin
cekKategoriKehadiran(77); // >= 75 -> Cukup
cekKategoriKehadiran(60); // < 75  -> Perlu Ditingkatkan
