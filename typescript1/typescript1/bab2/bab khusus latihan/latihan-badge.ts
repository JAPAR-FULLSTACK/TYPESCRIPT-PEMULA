// File: src/bab2/latihan-badge.ts

function cekBadgeSiswa(jumlahPoin: number): void {
    console.log(`Jumlah Poin: ${jumlahPoin}`);
    
    // Variabel boolean bermakna
    const badgeTerbuka: boolean = jumlahPoin >= 100;
    
    if (badgeTerbuka) {
        console.log("-> Badge siswa aktif terbuka!");
    } else {
        console.log("-> Poin belum mencukupi untuk membuka badge.");
    }
    console.log("----------------------------------------");
}

console.log("=== UJI COBA LATIHAN BADGE POIN ===\n");

// Percobaan 1: Poin melebihi 100
cekBadgeSiswa(120);

// Percobaan 2: Poin kurang dari 100
cekBadgeSiswa(75);

// Percobaan 3: Poin persis 100
cekBadgeSiswa(100);