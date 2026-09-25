const statusAktif: boolean = true
const nilaiAkhir: number = 82
const batasLulus: number = 75

if (statusAktif) {
  console.log("Status siswa aktif.")

  if (nilaiAkhir >= batasLulus) {
    console.log("Siswa dinyatakan lulus.")
  } else {
    console.log("Siswa aktif, tetapi perlu remedial.")
  }
} else {
  console.log("Data tidak diproses karena siswa tidak aktif.")
}
export {};