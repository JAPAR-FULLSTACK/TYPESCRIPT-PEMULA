const nilaiSiswa: number[] = [80, 55, 90, 45, 75, 30, 88]

console.log("=== Siswa yang Lulus (nilai >= 75) ===")
for (const nilai of nilaiSiswa) {
  if (nilai < 75) {
    continue // lewati siswa yang belum lulus
  }
  console.log(`Lulus dengan nilai: ${nilai}`)
}

console.log("\n=== Angka Kecuali Kelipatan 3 ===")
for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0) {
    continue
  }
  console.log(i)
}
export {};