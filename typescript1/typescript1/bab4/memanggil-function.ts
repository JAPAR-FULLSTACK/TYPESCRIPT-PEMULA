function tambah(a: number, b: number): number {
    return a + b
}

function sapa(nama: string): string {
    return `Halo, ${nama}!`
}

function apakahPositif(angka: number): boolean {
    return angka > 0
}

// Cara 1: langsung cetak
console.log(tambah(10, 5 ))

// Cara 2: simpan ke variabel
const hasilTambah = tambah(20, 30)
console.log(`Hasil: ${hasilTambah}`)

// Cara 3: gunakan dalam ekspresi
const duaKaliLipat = tambah(4, 6) * 2
console.log(`Dua kali lipat: ${duaKaliLipat}`)

// Cara 4: Kirim ke function lain
const salam = sapa("Rashya")
console.log(salam)

// Memanggil berulang dengan argumen berbeda
for (let i = 1; i <= 5; i++) {
    const status = apakahPositif(i -3)
    console.log(`apakahPositif(${i -3}) = $(status)`)
}