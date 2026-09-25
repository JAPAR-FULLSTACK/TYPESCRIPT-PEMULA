const nilaiSiswa = {
  matematika: 90,
  indonesia: 92,
  inggris: 90,
  pemrograman: 95,
}

console.log("=== Nilai Per Mata Pelajaran ===")
for (const mapel in nilaiSiswa) {
  const nilai = nilaiSiswa[mapel as keyof typeof nilaiSiswa]
  console.log(`${mapel}: ${nilai}`)
}