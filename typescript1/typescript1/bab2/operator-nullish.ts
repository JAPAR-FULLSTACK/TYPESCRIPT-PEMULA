const namaSiswa: string = "Rashya adhitya"
const email: string | null = null
const nomorTelepon: string | undefined = undefined
const jumlahPesan: number = 0

const emailTampil: string = email ?? "Email belum diisi"
const teleponTampil: string = nomorTelepon ?? "Nomor belum diisi"
const pesanTampil: number = jumlahPesan ?? 10

console.log(`Nama: ${namaSiswa}`)
console.log(`Email: ${emailTampil}`)
console.log(`Telepon: ${teleponTampil}`)
console.log(`Jumlah pesan: ${pesanTampil}`)
export {};