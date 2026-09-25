const antreanSiswa: string[] = ["Rashya", "Cinta"]
console.log("Awal      :", antreanSiswa)

// Menambah ke depan antrean
antreanSiswa.unshift("Rashya")
console.log("unshift(1):", antreanSiswa)

// Menghapus dari depan antrean
const dilayani = antreanSiswa.shift()
console.log("\ndilayani   :", dilayani)
console.log("Setelah shift:", antreanSiswa)