// Definisikan kelas Mobil
class Mobil {
    constructor(merk, tahunProduksi) {
        this.merk = merk;
        this.tahunProduksi = tahunProduksi;
    }

    // Metode untuk mencetak informasi mobil
    infoMobil() {
        return `Mobil ${this.merk} diproduksi pada tahun ${this.tahunProduksi}.`;
    }
}

// Buat objek mobil1 dari kelas Mobil
const mobil1 = new Mobil("Toyota", 2020);

// Buat objek mobil2 dari kelas Mobil
const mobil2 = new Mobil("Honda", 2022);

// Buat objek mobil1 dari kelas Mobil
const mobil3 = new Mobil("Avanza", 2020);

// Buat objek mobil2 dari kelas Mobil
const mobil4 = new Mobil("Alpard", 2022);

// Cetak informasi mobil ke elemen HTML
document.getElementById("mobil1").innerHTML += `<p>${mobil1.infoMobil()}</p>`;
document.getElementById("mobil2").innerHTML += `<p>${mobil2.infoMobil()}</p>`;
document.getElementById("mobil3").innerHTML += `<p>${mobil1.infoMobil()}</p>`;
document.getElementById("mobil4").innerHTML += `<p>${mobil2.infoMobil()}</p>`;
