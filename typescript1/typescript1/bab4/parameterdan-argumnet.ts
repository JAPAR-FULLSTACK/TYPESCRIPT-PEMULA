export function hitung(angka1: number, angka2: number, operasi: string): number {
  if (operasi === "tambah") return angka1 + angka2
  if (operasi === "kurang") return angka1 - angka2
  if (operasi === "kali")   return angka1 * angka2
  return 0
}

// Argumen berbeda, function yang sama
console.log(hitung(10, 5, "tambah"))  // 15
console.log(hitung(10, 5, "kurang"))  // 5
console.log(hitung(10, 5, "kali"))    // 50