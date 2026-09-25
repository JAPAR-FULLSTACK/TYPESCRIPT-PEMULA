// File: src/bab2/latihan-switch-jurusan.ts

type KodeJurusan = "RPL" | "TKJ" | "DKV" | string;

function cekDeskripsiJurusan(kode: KodeJurusan): void {
    console.log(`Kode Jurusan: ${kode}`);

    switch (kode) {
        case "RPL":
            console.log("-> Rekayasa Perangkat Lunak: Fokus pada pemrograman, pemeliharaan software, dan pengembangan aplikasi.");
            break;
        case "TKJ":
            console.log("-> Teknik Komputer dan Jaringan: Fokus pada perakitan hardware, jaringan komputer, dan administrasi server.");
            break;
        case "DKV":
            console.log("-> Desain Komunikasi Visual: Fokus pada komunikasi visual, desain grafis, ilustrasi, dan multimedia.");
            break;
        default:
            console.log("-> Jurusan belum terdaftar");
            break;
    }
    console.log("--------------------------------------------------");
}

console.log("=== CEK DESKRIPSI JURUSAN ===\n");

// Uji coba setiap kode jurusan
cekDeskripsiJurusan("RPL");
cekDeskripsiJurusan("TKJ");
cekDeskripsiJurusan("DKV");
cekDeskripsiJurusan("TITL   "); // Pilihan di luar daftar