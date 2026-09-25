const daftarTugas: string[] = ["Belajar HTML", "Belajar CSS"]
console.log("Awal   :", daftarTugas)

// Menambah tugas baru di ujung
daftarTugas.push("Belajar JavaScript")
console.log("push(1):", daftarTugas)

daftarTugas.push("Belajar TypeScript", "Mengerjakan Latihan")
console.log("push(2):", daftarTugas)

// Menghapus tugas terakhir
const tugasSelesai = daftarTugas.pop()
console.log("\ntugasSelesai:", tugasSelesai)
console.log("Setelah pop :", daftarTugas)