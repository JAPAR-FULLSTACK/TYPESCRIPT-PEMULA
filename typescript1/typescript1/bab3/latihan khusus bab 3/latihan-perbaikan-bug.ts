// File: src/bab2/latihan-perbaikan-bug.ts

console.log("=== 1. PERBAIKAN WHILE LOOP (INCREMENT) ===");
let x = 1;
while (x < 10) {
  console.log(`Nilai x: ${x}`);
  x++; // Perbaikan: Mengubah x-- menjadi x++ agar tidak infinite loop
}

console.log("\n==========================================");

console.log("=== 2. PERBAIKAN ARRAY BOUNDS (< vs <=) ===");
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) { // Perbaikan: Mengubah <= menjadi < agar tidak mengakses indeks undefined
  console.log(`Elemen indeks [${i}]: ${arr[i]}`);
}

console.log("\n==========================================");

console.log("=== 3. PERBAIKAN KONDISI TERMINASI (<) ===");
for (let i = 1; i < 9; i += 2) { // Perbaikan: Mengubah i != 9 menjadi i < 9 agar aman dari melesetnya nilai batas
  console.log(`Nilai i: ${i}`);
}