const namaSiswa: string = "Muhammad raffadian pratama"
const nilaiAkhir: number = 83
const persentaseKehadiran: number = 88
const batasKehadiran: number = 75

const nilaiValid: boolean = nilaiAkhir >= 0 && nilaiAkhir <= 100

let kategori: string
let status: string
let catatan: string

if (!nilaiValid) {
  kategori = "Tidak Valid"
  status = "Tidak Dapat Diproses"
  catatan = "Harap periksa kembali nilai yang dimasukkan."
} else if (persentaseKehadiran < batasKehadiran) {
  kategori = "Kehadiran Kurang"
  status = "Tidak Lulus"
  catatan = `Kehadiran ${persentaseKehadiran}% di bawah batas minimal ${batasKehadiran}%.`
} else if (nilaiAkhir >= 90) {
  kategori = "Sangat Baik"
  status = "Lulus"
  catatan = "Pertahankan prestasi yang luar biasa!"
} else if (nilaiAkhir >= 75) {
  kategori = "Baik"
  status = "Lulus"
  catatan = "Kamu lulus. Tingkatkan lagi di semester berikutnya."
} else if (nilaiAkhir >= 60) {
  kategori = "Cukup"
  status = "Remedial"
  catatan = "Kamu perlu mengikuti remedial. Jangan menyerah!"
} else {
  kategori = "Perlu Bimbingan"
  status = "Remedial"
  catatan = "Silakan temui wali kelas untuk bimbingan lebih lanjut."
}

const laporan: string = `
=========================================
       HASIL PENILAIAN AKHIR
=========================================
Nama         : ${namaSiswa}
Nilai Akhir  : ${nilaiAkhir}
Kehadiran    : ${persentaseKehadiran}%
---

--------------------------------------
Status       : ${status}
Kategori     : ${kategori}
---

--------------------------------------
Catatan      : ${catatan}
=========================================
`

console.log(laporan)