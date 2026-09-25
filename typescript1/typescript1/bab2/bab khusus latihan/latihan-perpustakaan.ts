// File: src/bab2/latihan-perpustakaan.ts

function cekAksesPerpustakaan(isSiswaAktif: boolean, membawaKartu: boolean): void {
    console.log(`Status Siswa Aktif : ${isSiswaAktif}`);
    console.log(`Membawa Kartu      : ${membawaKartu}`);

    if (isSiswaAktif) {
        // Cek syarat kedua hanya jika siswa aktif
        if (membawaKartu) {
            console.log("-> Silakan masuk, selamat belajar!");
        } else {
            console.log("-> Anda siswa aktif, tetapi harap tunjukkan kartu digital terlebih dahulu.");
        }
    } else {
        console.log("-> Akses ditolak: Hanya siswa aktif yang diperbolehkan masuk perpustakaan.");
    }
    console.log("--------------------------------------------------");
}

console.log("=== SISTEM AKSES PERPUSTAKAAN ===\n");

// Percobaan 1: Siswa aktif & membawa kartu
cekAksesPerpustakaan(true, true);

// Percobaan 2: Siswa aktif tetapi tidak membawa kartu
cekAksesPerpustakaan(true, false);

// Percobaan 3: Bukan siswa aktif (meskipun membawa kartu)
cekAksesPerpustakaan(false, true);

// Percobaan 4: Bukan siswa aktif & tidak membawa kartu
cekAksesPerpustakaan(false, false);