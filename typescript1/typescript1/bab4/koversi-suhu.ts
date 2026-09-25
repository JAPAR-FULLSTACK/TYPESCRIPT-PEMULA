
const celsiusKeFahrenheit = (c: number): number =>
  parseFloat(((c * 9) / 5 + 32).toFixed(2))


const celsiusKeKelvin = (c: number): number =>
  parseFloat((c + 273.15).toFixed(2))


const fahrenheitKeCelsius = (f: number): number =>
  parseFloat((((f - 32) * 5) / 9).toFixed(2))


const fahrenheitKeKelvin = (f: number): number =>
  parseFloat((((f - 32) * 5) / 9 + 273.15).toFixed(2))


const kelvinKeCelsius = (k: number): number =>
  parseFloat((k - 273.15).toFixed(2))


const kelvinKeFahrenheit = (k: number): number =>
  parseFloat((((k - 273.15) * 9) / 5 + 32).toFixed(2))

function ringkasanStatistik(label: string, nilai: number[]): void {
  if (nilai.length === 0) {
    console.log(`  ${label.padEnd(30)}: (tidak ada data)`)
    return
  }

  let total = 0
  let min = nilai[0]
  let max = nilai[0]

  for (const n of nilai) {
    total += n
    if (n < min) min = n
    if (n > max) max = n
  }

  const rata = parseFloat((total / nilai.length).toFixed(2))

  console.log(`  ${label.padEnd(30)}:`)
  console.log(`    Rata-rata : ${rata}`)
  console.log(`    Min       : ${min}`)
  console.log(`    Max       : ${max}`)
}



function tampilkanHeader(judul: string): void {
  console.log("\n" + "=".repeat(45))
  console.log(`  ${judul}`)
  console.log("=".repeat(45))
}

function tampilkanOperasi(label: string, hasil: number | string): void {
  console.log(`  ${label.padEnd(30)}: ${hasil}`)
}

tampilkanHeader("KALKULATOR KONVERSI SUHU - TypeScript")


const dataCelsius = [0, 25, 30, 37, 100]



tampilkanHeader("Konversi Celsius → Fahrenheit → Kelvin")

dataCelsius.forEach((c) => {
  const f = celsiusKeFahrenheit(c)
  const k = celsiusKeKelvin(c)
  tampilkanOperasi(`${c}°C`, `${f}°F  |  ${k}K`)
})



tampilkanHeader("Konversi Fahrenheit → Celsius → Kelvin")

const dataFahrenheit = [32, 77, 98.6, 212]

dataFahrenheit.forEach((f) => {
  const c = fahrenheitKeCelsius(f)
  const k = fahrenheitKeKelvin(f)
  tampilkanOperasi(`${f}°F`, `${c}°C  |  ${k}K`)
})



tampilkanHeader("Konversi Kelvin → Celsius → Fahrenheit")

const dataKelvin = [273.15, 298.15, 310.15, 373.15]

dataKelvin.forEach((k) => {
  const c = kelvinKeCelsius(k)
  const f = kelvinKeFahrenheit(k)
  tampilkanOperasi(`${k}K`, `${c}°C  |  ${f}°F`)
})



tampilkanHeader("Ringkasan Statistik Suhu")

const semuaFahrenheit = dataCelsius.map(celsiusKeFahrenheit)
const semuaKelvin = dataCelsius.map(celsiusKeKelvin)

ringkasanStatistik("Celsius (°C)", dataCelsius)
ringkasanStatistik("Fahrenheit (°F)", semuaFahrenheit)
ringkasanStatistik("Kelvin (K)", semuaKelvin)



tampilkanHeader("Tabel Konversi Suhu Lengkap")

console.log(
  "  " +
    "Celsius".padEnd(10) +
    "Fahrenheit".padEnd(12) +
    "Kelvin".padEnd(10)
)
console.log("  " + "-".repeat(32))

for (let c = -10; c <= 100; c += 10) {
  const f = celsiusKeFahrenheit(c)
  const k = celsiusKeKelvin(c)
  console.log(
    "  " +
      `${c}°C`.padEnd(10) +
      `${f}°F`.padEnd(12) +
      `${k}K`.padEnd(10)
  )
}

console.log("\n" + "=".repeat(45))