function hitungLuasPersegiPanjang(panjang: number, lebar: number): number {
  return panjang * lebar
}

function konversiSuhu(celsius: number): number {
  return (celsius * 9) / 5 + 32
}

function formatRupiah(nominal: number): string {
  return `Rp${nominal.toLocaleString("id-ID")}`
}

function tentukannStatus(nilai: number): string {
  if (nilai >= 90) return "Sangat Baik"
  if (nilai >= 75) return "Baik"
  if (nilai >= 60) return "Cukup"
  return "Perlu Bimbingan"
}

// Gunakan return value
const luas = hitungLuasPersegiPanjang(8, 5)
console.log(`Luas: ${luas} m²`)

const fahrenheit = konversiSuhu(36.5)
console.log(`36.5°C = ${fahrenheit}°F`)

const harga = formatRupiah(125000)
console.log(`Harga: ${harga}`)

const nilai = 83
console.log(`Nilai ${nilai}: ${tentukannStatus(nilai)}`)

// Gunakan return value langsung dalam ekspresi
const luasGanda = hitungLuasPersegiPanjang(4, 3) * 2
console.log(`Luas ganda: ${luasGanda} m²`)