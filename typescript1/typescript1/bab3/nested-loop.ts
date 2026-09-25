console.log("=== Tabel Perkalian ===")
for (let baris = 1; baris <= 5; baris++) {
  let barisTeks = ""
  for (let kolom = 1; kolom <= 5; kolom++) {
    const hasil = baris * kolom
    barisTeks += `${hasil.toString().padStart(4, " ")}`
  }
  console.log(barisTeks)
}

console.log("\n=== Pola Bintang ===")
for (let i = 1; i <= 5; i++) {
  let bintang = ""
  for (let j = 1; j <= i; j++) {
    bintang += "* "
  }
  console.log(bintang)
}