// =========================================================
// SOAL 1: Tiga Variabel Dasar
// =========================================================
console.log("=== SOAL 1: Tiga Variabel Dasar ===");

const nama1: string = "Budi";
const umur1: number = 20;
const sudahAktif1: boolean = true;

console.log(nama1);
console.log(umur1);
console.log(sudahAktif1);


// =========================================================
// SOAL 2: Sekolah (let vs const)
// =========================================================
console.log("\n=== SOAL 2: Sekolah (let vs const) ===");

// Tidak berubah → const
const namaSekolah: string = "SMA Negeri 1 Jakarta";
const tahunMasuk: number = 2023;

// Bisa berubah → let
let kelasSaatIni: number = 10;

console.log("--- Sebelum ---");
console.log(`Nama Sekolah : ${namaSekolah}`);
console.log(`Tahun Masuk  : ${tahunMasuk}`);
console.log(`Kelas        : ${kelasSaatIni}`);

// Naik ke kelas berikutnya
kelasSaatIni = kelasSaatIni + 1;

console.log("--- Sesudah ---");
console.log(`Nama Sekolah : ${namaSekolah}`);
console.log(`Tahun Masuk  : ${tahunMasuk}`);
console.log(`Kelas        : ${kelasSaatIni}`);


// =========================================================
// SOAL 3: Nilai & Rata-rata
// =========================================================
console.log("\n=== SOAL 3: Nilai & Rata-rata ===");

const matematika: number = 85;
const bahasaIndonesia: number = 90;
const bahasaInggris: number = 78;

const total: number = matematika + bahasaIndonesia + bahasaInggris;
const rataRata: number = total / 3;

console.log(`Matematika       : ${matematika}`);
console.log(`Bahasa Indonesia : ${bahasaIndonesia}`);
console.log(`Bahasa Inggris   : ${bahasaInggris}`);
console.log(`Total            : ${total}`);
console.log(`Rata-rata        : ${rataRata.toFixed(2)}`);


// =========================================================
// SOAL 4: Ternary Operator Kelulusan
// =========================================================
console.log("\n=== SOAL 4: Kelulusan ===");

const nilaiAkhir: number = 80;
const lulus: boolean = nilaiAkhir >= 75;

console.log(lulus ? "Selamat, kamu LULUS!" : "Maaf, kamu BELUM LULUS.");


// =========================================================
// SOAL 5: Manipulasi String
// =========================================================
console.log("\n=== SOAL 5: Manipulasi String ===");

const namaMentah: string = "   Andi Saputra   ";

const namaBersih: string = namaMentah.trim();
const namaBesar: string = namaBersih.toUpperCase();
const jumlahKarakter: number = namaBersih.length;

console.log(`Nama setelah trim : "${namaBersih}"`);
console.log(`Nama huruf besar  : ${namaBesar}`);
console.log(`Jumlah karakter   : ${jumlahKarakter}`);


// =========================================================
// SOAL 6: Literal Type StatusTugas
// =========================================================
console.log("\n=== SOAL 6: Literal Type StatusTugas ===");

type StatusTugas = "belum" | "dikerjakan" | "dikumpulkan";

let statusTugas: StatusTugas = "dikerjakan";
console.log(`Status tugas: ${statusTugas}`);

// ❌ Ini akan ERROR saat compile — sengaja untuk demonstrasi
// statusTugas = "selesai banget";
// Error: Type '"selesai banget"' is not assignable to type 'StatusTugas'.

// Kembalikan ke nilai valid
statusTugas = "dikumpulkan";
console.log(`Status tugas (setelah update): ${statusTugas}`);


// =========================================================
// SOAL 7: Biodata dengan Nullish Coalescing
// =========================================================
console.log("\n=== SOAL 7: Biodata & Nullish Coalescing ===");

type Biodata = {
  nama: string;
  kelas: string;
  email: string | null;
};

const biodata1: Biodata = {
  nama: "Siti Aminah",
  kelas: "XI IPA 2",
  email: null,
};

const biodata2: Biodata = {
  nama: "Rizky Pratama",
  kelas: "XI IPS 1",
  email: "rizky@example.com",
};

function tampilkanBiodata(b: Biodata): void {
  const emailTampil = b.email ?? "Email belum diisi";
  console.log(`${b.nama} (${b.kelas}) - ${emailTampil}`);
}

tampilkanBiodata(biodata1);
tampilkanBiodata(biodata2);


// =========================================================
// SOAL 8: Fungsi prosesData dengan unknown
// =========================================================
console.log("\n=== SOAL 8: Fungsi prosesData ===");

function prosesData(data: unknown): void {
  if (typeof data === "string") {
    console.log(`String : ${data.toUpperCase()}`);
  } else if (typeof data === "number") {
    console.log(`Number : ${data * 2}`);
  } else if (typeof data === "boolean") {
    console.log(data ? "Status aktif" : "Status nonaktif");
  } else {
    console.log("Data tidak didukung");
  }
}

prosesData("halo dunia");
prosesData(21);
prosesData(true);
prosesData(false);
prosesData({ nama: "objek" }); // tipe lain → tidak didukung


// =========================================================
// SOAL 9: Laporan Belanja
// =========================================================
console.log("\n=== SOAL 9: Laporan Belanja ===");

const namaPembeli: string = "Dewi Lestari";
const hargaMakanan: number = 25000;
const hargaMinuman: number = 10000;
const uangDibawa: number = 50000;

const totalBelanja: number = hargaMakanan + hargaMinuman;
const sisaUang: number = uangDibawa - totalBelanja;
const pembayaranCukup: boolean = uangDibawa >= totalBelanja;

const laporan: string = `
===== LAPORAN BELANJA =====
Nama Pembeli    : ${namaPembeli}
Harga Makanan   : Rp ${hargaMakanan.toLocaleString("id-ID")}
Harga Minuman   : Rp ${hargaMinuman.toLocaleString("id-ID")}
--------------------------------
Total Belanja   : Rp ${totalBelanja.toLocaleString("id-ID")}
Uang Dibawa     : Rp ${uangDibawa.toLocaleString("id-ID")}
Sisa Uang       : Rp ${sisaUang.toLocaleString("id-ID")}
Status Bayar    : ${pembayaranCukup ? "CUKUP ✅" : "TIDAK CUKUP ❌"}
============================
`;

console.log(laporan);


// =========================================================
// SOAL 10: Aplikasi Biodata Siswa (dari nol)
// =========================================================
console.log("=== SOAL 10: Aplikasi Biodata Siswa ===");

// Judul aplikasi (tidak berubah)
const JUDUL_APLIKASI: string = "📘 APLIKASI BIODATA SISWA";

// Literal type untuk jurusan
type Jurusan = "IPA" | "IPS" | "Bahasa" | "TKJ" | "RPL";

// Tipe data siswa
type Siswa = {
  nama: string;
  kelas: string;
  sekolah: string;
  alamat: string;
  umur: number;
  nomorAbsen: number;
  jurusan: Jurusan;
  email: string | null;
  statusAktif: boolean;
};

// Data siswa
const siswa: Siswa = {
  nama: "Ahmad Fauzan",
  kelas: "XI RPL 1",
  sekolah: "SMK Negeri 2 Bandung",
  alamat: "Jl. Merdeka No. 45, Bandung",
  umur: 17,
  nomorAbsen: 3,
  jurusan: "RPL",
  email: null,
  statusAktif: true,
};

// Nilai yang dihitung: umur dalam bulan
const umurDalamBulan: number = siswa.umur * 12;

// Nilai yang dihitung: tahun lahir (asumsi tahun sekarang 2025)
const tahunLahir: number = 2025 - siswa.umur;

const kartuSiswa: string = `
${JUDUL_APLIKASI}
=========================================
Nama          : ${siswa.nama}
Kelas         : ${siswa.kelas}
Sekolah       : ${siswa.sekolah}
Alamat        : ${siswa.alamat}
Umur          : ${siswa.umur} tahun (${umurDalamBulan} bulan)
Tahun Lahir   : ${tahunLahir}
Nomor Absen   : ${siswa.nomorAbsen}
Jurusan       : ${siswa.jurusan}
Email         : ${siswa.email ?? "Email belum diisi"}
Status        : ${siswa.statusAktif ? "Aktif ✅" : "Nonaktif ❌"}
=========================================
`;

console.log(kartuSiswa);