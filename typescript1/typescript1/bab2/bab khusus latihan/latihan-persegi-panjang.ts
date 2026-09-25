// File: src/bab2/latihan-persegi-panjang.ts

// Simpan panjang dan lebar sebagai number
const panjang: number = 12;
const lebar: number = 8;

// Hitung luas dan keliling persegi panjang
const luas: number = panjang * lebar;
const keliling: number = 2 * (panjang + lebar);

// Tampilkan hasilnya dengan template literal
const hasil: string = `
========================================
    PERHITUNGAN PERSEGI PANJANG
========================================
Panjang  : ${panjang} cm
Lebar    : ${lebar} cm
----------------------------------------
Luas     : ${luas} cm²
Keliling : ${keliling} cm
========================================
`;

console.log(hasil);