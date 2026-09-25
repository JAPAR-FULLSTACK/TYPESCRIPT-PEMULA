const namaSiswa: string[] = ["Rashya", "Susan", "Raffa", "Arya", "Jessika", "Fira"]
const targetCari: string = "Dian"

console.log(`Mencari siswa: ${targetCari}`)

for (const nama of namaSiswa) {
  if (nama === targetCari) {
    console.log(`Ditemukan: ${nama}`)
    break
  }
  console.log(`Bukan ${nama}, lanjut...`)
}

console.log("Pencarian selesai.")
export {};