let percobaan: number = 0
const maxPercobaan: number = 3

do {
  percobaan++
  console.log(`Percobaan ke-${percobaan}: Memasukkan password...`)
} while (percobaan < maxPercobaan)

console.log(`Selesai setelah ${percobaan} percobaan.`)