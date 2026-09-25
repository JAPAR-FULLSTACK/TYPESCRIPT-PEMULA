const nilaiAkhir: number = 80
const kehadiran: number = 85
const batasNilai: number = 75
const batasKehadiran: number = 75

const nilaiCukup: boolean = nilaiAkhir >= batasNilai
const hadirCukup: boolean = kehadiran >= batasKehadiran
const lulus: boolean = nilaiCukup && hadirCukup
const dapatRemedial: boolean = !lulus && nilaiAkhir >= 60

console.log(`Nilai cukup: ${nilaiCukup}`)
console.log(`Kehadiran cukup: ${hadirCukup}`)
console.log(`Lulus: ${lulus}`)
console.log(`Dapat remedial: ${dapatRemedial}`)
export {};