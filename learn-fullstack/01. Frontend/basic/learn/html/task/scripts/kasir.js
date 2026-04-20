document.querySelector("form").addEventListener("submit", function (e) {
  // Mencegah halaman reload ketika form dikirim
  e.preventDefault();

  const nama = document.getElementById("nama-pembeli").value.trim();
  const produk = document.getElementById("produk-dibeli").value;
  // Memastikan jumlah bernilai angka, dan memberi nilai default 0 jika error
  const jumlah = parseInt(document.getElementById("jumlah").value) || 0;
  const pesanValidasi = document.getElementById("pesan-validasi");

  // Validasi form jika ada yang kosong atau tidak valid
  if (!nama || !produk || jumlah <= 0) {
    pesanValidasi.textContent =
      "⚠️ Mohon isi nama pembeli, pilih produk, dan masukkan jumlah yang valid!";
    pesanValidasi.style.color = "red";
    return; // Hentikan fungsi sampai di sini
  }

  // Jika semua validasi lolos, tampilkan pesan sukses
  pesanValidasi.textContent = `✅ Transaksi untuk ${nama} (${jumlah} unit ${produk}) berhasil diproses!`;
  pesanValidasi.style.color = "green";

  // Fitur opsional: Reset seluruh isian form setelah transaksi sukses
  // e.target.reset();
});
