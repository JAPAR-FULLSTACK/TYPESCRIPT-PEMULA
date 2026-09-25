
function hitungKeliling(sisi: number): number {
  return 4 * sisi;
}


function HurufBesar(teks: string): string {
  return teks.toUpperCase();
}


function Genap(angka: number): boolean {
  return angka % 2 === 0;
}


function NamaBadge(nama: string, kelas: string): string {
  return `${nama} - ${kelas}`;
}

console.log(hitungKeliling(5));              
console.log(HurufBesar("Raffa"));      
console.log(Genap(4));                 
console.log(Genap(7));                
console.log(NamaBadge("Raffa", "XI RPL")); 