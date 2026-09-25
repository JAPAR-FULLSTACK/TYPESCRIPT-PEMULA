const nama: string = "Muhammad raffadian pratama"
const umur: number = 17
const kelas : string = " X "
const sekolah : string = "RPL"
const alamat : string = " Buduran , sidoarjo , jawa timur"
const statusAktif : boolean = true
const NomorAbsen: number= 18
const Email :string = "japar3371@gmail.com"
const hobi: string = "Suka membuat game di roblox"
const keteranganStatus: string = statusAktif ? "aktif" : "tidak aktif"
const biodata: string =`

===============================
        BIODATA SISWA
===============================
Nama                    :${nama}
Umur                    :${umur} tahun
Kelas                   :${kelas}
jurusan                 :${sekolah}
Alamat                  :${alamat}
Status siswa            :${keteranganStatus}
Hobi                    :${hobi}
No. Absen               :${NomorAbsen}
Email                   :${Email}


===============================
===============================      `
console.log(biodata)