// Function tanpa return (void)
function tampilkanJudul(judul: string): void {
  console.log("=".repeat(40))
  console.log(`  ${judul}`)
  console.log("=".repeat(40))
}

// Function dengan return number
function hitungLuasSegitiga(alas: number, tinggi: number): number {
  return (alas * tinggi) / 2
}

// Function dengan return string
function buatSalam(nama: string, waktu: string): string {
  return `Selamat ${waktu}, ${nama}!`
}

// Function dengan return boolean
function apakahLulus(nilai: number): boolean {
  return nilai >= 75
}

// Jalankan semua function
tampilkanJudul("Sistem Nilai Siswa")
console.log(`Luas segitiga: ${hitungLuasSegitiga(10, 6)}`)
console.log(buatSalam("Rashya", "pagi"))
console.log(`Lulus: ${apakahLulus(80)}`)
console.log(`Lulus: ${apakahLulus(60)}`)