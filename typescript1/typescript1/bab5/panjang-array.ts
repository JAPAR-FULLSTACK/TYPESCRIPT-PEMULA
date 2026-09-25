const namaSiswa: string[] = ["Andi", "Rashya", "Raffa", "Arya"]
console.log(`Jumlah siswa: ${namaSiswa.length}`)

// Mengakses elemen terakhir secara dinamis
const indeksTerakhir = namaSiswa.length - 1
console.log(`Siswa terakhir: ${namaSiswa[indeksTerakhir]}`)

// Memeriksa apakah array kosong
const keranjangBelanja: string[] = []
if (keranjangBelanja.length === 0) {
  console.log("Keranjang belanja kosong.")
}

export {}