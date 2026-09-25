// Data siswa
const namaSiswa: string[] = [
  "Rashya", "Susan", "Raffa", "Arya", "Jessika",
  "Rayya", "Vino", "Dito", "Excel", "Haqi"
]

// Status kehadiran: true = hadir, false = tidak hadir
const kehadiran: boolean[] = [
  true, true, false, true, true,
  false, true, false, true, true
]

// Siswa setelah siapa absensi dihentikan (contoh: siswa ke-7 = Gita)
const hentikanSetelahSiswa: string = "Arya"

let jumlahHadir: number = 0
let nomorUrut: number = 0

console.log("=".repeat(40))
console.log("      SISTEM ABSENSI SISWA")
console.log("=".repeat(40))

for (let i = 0; i < namaSiswa.length; i++) {
  const nama = namaSiswa[i]
  const hadir = kehadiran[i]

  // Lewati siswa yang tidak hadir
  if (!hadir) {
    console.log(`${i + 1}. ${nama} — TIDAK HADIR (dilewati)`)
    continue
  }

  nomorUrut++
  jumlahHadir++
  console.log(`${i + 1}. ${nama} — Hadir (urutan ke-${nomorUrut})`)

  // Hentikan absensi setelah siswa tertentu
  if (nama === hentikanSetelahSiswa) {
    console.log(`\nAbsensi dihentikan setelah ${nama}.`)
    break
  }
}

console.log("\n" + "=".repeat(40))
console.log(`Hasil Absensi:`)
console.log(`  Total dipanggil (hadir): ${jumlahHadir}`)
console.log(`  Total siswa: ${namaSiswa.length}`)
console.log("=".repeat(40))
export {};