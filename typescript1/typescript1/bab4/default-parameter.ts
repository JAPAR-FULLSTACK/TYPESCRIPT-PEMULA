function hitung(
  angka1: number,
  angka2: number,
  operasi: string = "tambah"
): number {
  if (operasi === "tambah")  return angka1 + angka2
  if (operasi === "kurang")  return angka1 - angka2
  if (operasi === "kali")    return angka1 * angka2
  if (operasi === "bagi" && angka2 !== 0) return angka1 / angka2
  return 0
}

function cetakNilai(
  nama: string,
  nilai: number,
  batas: number = 75
): void {
  const status = nilai >= batas ? "Lulus" : "Remedial"
  console.log(`${nama}: ${nilai} → ${status} (batas ${batas})`)
}

console.log(hitung(10, 5))           // tambah (default)
console.log(hitung(10, 5, "kali"))   // kali (eksplisit)
console.log(hitung(10, 5, "bagi"))   // bagi (eksplisit)

cetakNilai("Rashya", 80)               // batas 75 (default)
cetakNilai("Raffa", 70, 65)           // batas 65 (eksplisit)
cetakNilai("Arya", 88)              // batas 75 (default)