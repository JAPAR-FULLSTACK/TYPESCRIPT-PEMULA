function cetakSalam(nama: string, waktu: string = "hari"): string {
  return `Selamat ${waktu}, ${nama}!`
}


console.log(cetakSalam("Andi"))              
console.log(cetakSalam("Budi", "pagi"))
console.log(cetakSalam("Citra", "siang"))
console.log(cetakSalam("Dewi", "malam"))