// function tanpa return void

function tampilkanjudul(judul: string): void {
    console.log("=".repeat(40))
    console.log(` ${judul}`)
    console.log("=".repeat(40))

}
//function dengan number 

function hitung_Luas_segitiga( alas: number, tinggi : number) :number {
return (alas * tinggi ) /2
}
// function  dengan return  string
function buatSalam(nama:string , waktu: string): string{
    return `Selamat ${waktu}, ${nama}`
}

//function dengan return boolean
function apakahlulus(nilai:number): boolean{
    return nilai >= 80
}

// jalankan  semua function
tampilkanjudul("Sistem Nilai siswa")
console.log(`Luas segitiga ${hitung_Luas_segitiga}(10, 6)`)
console.log(buatSalam ("Raffa", "Selamat sore"))
console.log(`Lulus :${apakahlulus(90)}`)
console.log(`Lulus :${apakahlulus(50)}`)

// 1. Menghitung keliling persegi
function hitungKeliling(sisi: number): number {
  return 4 * sisi;
}

// 2. Mengubah teks ke huruf besar
function ubahKeHurufBesar(teks: string): string {
  return teks.toUpperCase();
}

// 3. Mengecek apakah angka genap
function apakahGenap(angka: number): boolean {
  return angka % 2 === 0;
}

// 4. Membuat nama badge
function buatNamaBadge(nama: string, kelas: string): string {
  return `${nama} - ${kelas}`;
}

// Contoh penggunaan
console.log(hitungKeliling(5));              // 20
console.log(ubahKeHurufBesar("halo dunia")); // "HALO DUNIA"
console.log(apakahGenap(4));                 // true
console.log(apakahGenap(7));                 // false
console.log(buatNamaBadge("Andi", "XI IPA 1")); // "Andi - XI IPA 1"