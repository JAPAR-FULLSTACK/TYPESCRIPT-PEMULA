// 1. Contoh splice() (Mengubah array asli)
const siswaSplice: string[] = ["Rashya", "Arya", "Raffa", "Susan"]
console.log("=== SPLICE ===")
console.log("Awal :", siswaSplice)

// Hapus 2 elemen mulai dari indeks 1 ("Budi" & "Citra")
const dihapus = siswaSplice.splice(1, 2)
console.log("Hapus:", siswaSplice, "| dihapus:", dihapus)

// Sisipkan "Eko" dan "Fira" di indeks 1 tanpa menghapus
siswaSplice.splice(1, 0, "Susan", "Arya")
console.log("Sisip:", siswaSplice)


// 2. Contoh slice() (Salinan, array asli tetap)
const siswaSlice: string[] = ["Rashya", "Arya", "Raffa", "Susan"]
console.log("\n=== SLICE ===")
console.log("Awal :", siswaSlice)

// Salin dari indeks 1 sampai sebelum indeks 3 (indeks 1 & 2)
const salinan = siswaSlice.slice(1, 3)
console.log("Hasil:", salinan)
console.log("Akhir:", siswaSlice, " (tetap utuh!)")