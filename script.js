const donasi = [
  { nama: 'Amri', jumlah: 500000, status: 'Tersalurkan' },
  { nama: 'Budi', jumlah: 1000000, status: 'Dalam Perjalanan' }
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("donasi-list");
  if (list) {
    donasi.forEach(d => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${d.nama}</td><td>${d.jumlah.toLocaleString()}</td><td>${d.status}</td>`;
      list.appendChild(row);
    });
  }

  const mapElement = document.getElementById("map");
  if (mapElement) {
    const map = L.map("map").setView([-7.565, 110.817], 8);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);
    L.marker([-7.565, 110.817]).addTo(map).bindPopup("Banjir Sukoharjo");
    L.marker([-7.801, 110.364]).addTo(map).bindPopup("Gempa Yogyakarta");
  }

  const form = document.getElementById("donasiForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const nama = document.getElementById("nama").value;
      const jumlah = document.getElementById("jumlah").value;
      const tujuan = document.getElementById("tujuan").value;
      document.getElementById("notif").textContent =
        `Terima kasih ${nama}, donasi Rp${jumlah} untuk ${tujuan} telah tercatat.`;
      form.reset();
    });
  }
});
