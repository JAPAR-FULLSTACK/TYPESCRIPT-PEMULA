function cetakProfil(
  nama: string,
  kelas: string,
  email?: string
): void {
  console.log(`Nama : ${nama}`)
  console.log(`Kelas: ${kelas}`)

  if (email !== undefined) {
    console.log(`Email: ${email}`)
  } else {
    console.log(`Email: (pratamarashya6@gmail.com)`)
  }
  console.log("---")
}

cetakProfil("Rashya", "X RPL")
cetakProfil("Raffa", "X RPL", "Raffa@smk.sch.id")
cetakProfil("Arya", "X RPL")