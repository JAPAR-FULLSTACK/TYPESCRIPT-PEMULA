// tanpa fuction  -- tidak efisien 
console.log("--- tanpa function ---")
const luasPersegi1 = 5 * 5
const luasPersegi2 = 9 * 9
const luasPersegi3 = 18 * 18
console.log (` Luas sisi persegi sisi 5: ${luasPersegi1}`)
console.log (` Luas sisi persegi sisi 9: ${luasPersegi2}`)
console.log (` Luas sisi persegi sisi 18: ${luasPersegi3}`)
// dengan  function -- efisien  dan mudah  dipakai ulang 
console.log ("\n -- Dengan function --")
function hitungLuaspersegi(sisi : number) : number {
    return sisi * sisi
}
console.log(`luas persegi sisi 5: ${hitungLuaspersegi(5)}`)
console.log(`luas persegi sisi 9: ${hitungLuaspersegi(9)}`)
console.log(`luas persegi sisi 18: ${hitungLuaspersegi(18)}`)


console.log(" Latihan")
const luaspersegi1 = 980 * 100
const luaspersegi2 = 15 * 98
const luaspersegi3 = 10 * 22
const luaspersegi4 = 80 * 34
const luaspersegi5 = 98* 98

console.log(`luas sisi persegi 980: ${luaspersegi1}`)
console.log(`luas sisi persegi 15: ${luaspersegi2}`)
console.log(`luas sisi persegi 10: ${luaspersegi3}`)
console.log(`luas sisi persegi 80: ${luaspersegi4}`)
console.log(`luas sisi persegi 98: ${luaspersegi5}`)
