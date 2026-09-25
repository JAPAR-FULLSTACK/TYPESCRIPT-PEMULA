// File: src/bab2/latihan-ternary-spp.ts

// Variabel boolean sudahBayarSPP
const sudahBayarSPP: boolean = true;

// Penggunaan Ternary Operator
const pesanSPP: string = sudahBayarSPP 
    ? "Pembayaran tercatat" 
    : "Silakan hubungi tata usaha";

console.log("=== CEK STATUS PEMBAYARAN SPP ===");
console.log(`Status Pembayaran: ${sudahBayarSPP}`);
console.log(`Pesan            : ${pesanSPP}`);

console.log("\n--- Skenario Lain ---");

const sudahBayarSPP2: boolean = false;
const pesanSPP2: string = sudahBayarSPP2 
    ? "Pembayaran tercatat" 
    : "Silakan hubungi tata usaha";

console.log(`Status Pembayaran: ${sudahBayarSPP2}`);
console.log(`Pesan            : ${pesanSPP2}`);