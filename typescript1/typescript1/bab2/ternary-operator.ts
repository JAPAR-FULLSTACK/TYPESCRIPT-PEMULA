const nilaiAkhir: number = 76
const batasLulus: number = 75
const status: string = nilaiAkhir >= batasLulus ? "LULUS" : "REMEDIAL"
const pesan: string = status === "LULUS" ? "Selamat, pertahankan!" : "Tetap semangat dan ikuti remedial."

console.log(`Nilai akhir: ${nilaiAkhir}`)
console.log(`Status: ${status}`)
console.log(`Pesan: ${pesan}`)
export {};