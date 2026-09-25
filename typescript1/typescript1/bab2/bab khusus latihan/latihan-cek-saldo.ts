// File: src/bab2/latihan-cek-saldo.ts

function prosesPembayaran(saldo: number): void {
    console.log(`Saldo Anda: Rp ${saldo}`);
    
    // Variabel boolean bermakna
    const saldoCukup: boolean = saldo >= 10000;

    if (saldoCukup) {
        console.log("-> Pembayaran berhasil");
    } else {
        console.log("-> Saldo tidak cukup");
    }
    console.log("----------------------------------------");
}

console.log("=== PROGRAM CEK SALDO PEMBAYARAN ===\n");

// Percobaan 1: Saldo mencukupi
prosesPembayaran(50000);

// Percobaan 2: Saldo tidak mencukupi
prosesPembayaran(5000);

// Percobaan 3: Saldo pas 10.000
prosesPembayaran(10000);