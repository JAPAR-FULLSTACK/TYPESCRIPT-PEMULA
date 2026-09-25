// Tanpa function - tidak efesien
console.log("-- Tanpa Function --")
const luasPersegi1 = 5 * 5
const luasPersegi2 = 8 * 8
const luasPersegi3 = 12 * 12
console.log(`Luas Persegi 5: ${luasPersegi1}`)
console.log(`Luas Persegi 8: ${luasPersegi2}`)  
console.log(`Luas Persegi 12: ${luasPersegi3}`)

// Dengan function - efesien dan mudah dipakai ualang 
console.log("\n-- Dengan Function --")
function hitungLuasPersegi(sisi: number) {
    return sisi * sisi
}

console.log(`Luas Persegi 5: ${hitungLuasPersegi(5)}`)
console.log(`Luas Persegi 8: ${hitungLuasPersegi(8)}`)
console.log(`Luas Persegi 12: ${hitungLuasPersegi(12)}`)

