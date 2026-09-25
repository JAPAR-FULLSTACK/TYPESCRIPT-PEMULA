const daftarSiswa: string[] = ["Rashya", "Raffa", "Arya"]
console.log("Awal   :", daftarSiswa)

// Mengubah elemen indeks 1
daftarSiswa[1] = "Rashya"
console.log("Ubah i=1:", daftarSiswa)

// Mengubah elemen indeks 2
daftarSiswa[2] = "Raffa"
console.log("Ubah i=2:", daftarSiswa)

// Properti const array bisa dimodifikasi
const nilaiSiswa: number[] = [80, 85, 90]
nilaiSiswa[0] = 85 // ini valid!
console.log("Nilai  :", nilaiSiswa)
export {}