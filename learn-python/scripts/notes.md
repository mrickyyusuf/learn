# Pendahuluan

---

## 1. Populasi vs Sampel — Lebih Dalam

Bayangkan kamu ingin tahu rata-rata IPK seluruh mahasiswa Universitas Gunadarma. Seluruh mahasiswa itu adalah **populasi** (N). Karena tidak mungkin kamu mendata semua orang, kamu ambil misalnya 100 mahasiswa — itulah **sampel** (n).

Yang krusial untuk dipahami: ketika kamu menghitung rata-rata dari sampel itu, hasilnya **belum tentu sama persis** dengan rata-rata populasi sesungguhnya. Perbedaan inilah yang disebut **bias**. Tugas statistika adalah membuat bias ini sekecil mungkin, dan cara terbaik adalah dengan **pengambilan acak** — karena kalau kamu hanya ambil mahasiswa yang kebetulan lewat di depan kamu, bisa jadi hasilnya tidak representatif.

---

## 2. Notasi yang Harus Kamu Hafal

Slide dosenmu menunjukkan tabel notasi yang sangat penting. Ini bukan sekadar simbol — perbedaan notasi ini menunjukkan *dari mana* angka itu berasal:

Rata-rata sampel ditulis **x̄** (x bar), sedangkan rata-rata populasi ditulis **μ** (mu). Standar deviasi sampel ditulis **s**, populasi ditulis **σ** (sigma). Proporsi sampel ditulis **p̂** (p topi), populasi ditulis **π** (phi).

Kenapa ini penting? Karena nanti di uji hipotesis, kamu akan sering membandingkan x̄ dengan μ untuk memutuskan apakah sampelmu mendukung suatu klaim tentang populasi.

---

## 3. Teknik Sampling — Kapan Pakai yang Mana?

Ini yang sering membingungkan, jadi mari kita jernihkan dengan logika sederhana.

**Sampel Berlapis (Stratified)** dipakai ketika populasimu terdiri dari kelompok-kelompok yang *berbeda satu sama lain* tapi *mirip di dalam kelompoknya*. Contoh dari slide: penumpang kereta terdiri dari Eksekutif, Bisnis, dan Ekonomi — karakteristik kepuasan mereka jelas berbeda, jadi kamu harus ambil sampel dari masing-masing kelas agar semua terwakili.

**Sampel Gerombol (Cluster)** adalah kebalikannya. Kamu pakai ini ketika kelompok-kelompoknya *mirip satu sama lain* tapi *beragam di dalamnya*. Contoh dari slide: kelas-kelas mahasiswa di Gunadarma. Daripada mendata mahasiswa satu per satu, kamu acak saja 10 kelas — dan seluruh isi kelas itu menjadi sampelmu.

**Perbedaan kunci:** di stratified, yang diacak adalah *individunya* dari setiap kelompok. Di cluster, yang diacak adalah *kelompoknya* secara keseluruhan.

---

## Sekarang Praktik Python

Kita akan bangun dari nol: simulasi populasi → ambil berbagai jenis sampel → hitung Σ → praktikkan ceiling/floor.

Semua berhasil dijalankan dengan sempurna! Mari kita bedah hasil outputnya agar kamu benar-benar paham maknanya, bukan sekadar melihat angka.

---

## Memahami Hasil Output

**Bagian 1–2: Populasi vs Sampel dan Bias**

Lihat tabel bias-nya. Dengan n=10, biasnya mencapai 0.2892 — cukup besar. Tapi dengan n=200, biasnya turun ke 0.0196. Ini membuktikan secara langsung konsep dari slide dosenmu: *sampel yang baik adalah yang representatif, dan semakin besar sampel, semakin kecil biasnya*. Visualisasi balok `█` membuat ini langsung terasa intuitif.

**Bagian 4: Stratified Sampling**

Perhatikan hasilnya — Eksekutif punya rata-rata kepuasan 4.23, Bisnis 3.43, Ekonomi 2.73. Ini menunjukkan *mengapa* stratified sampling penting: kalau kamu hanya ambil sampel acak biasa dan kebetulan terlalu banyak dari kelas Eksekutif, hasil surveymu akan terlihat lebih positif dari kenyataan. Dengan stratified, setiap kelompok terwakili secara proporsional.

**Bagian 5: Notasi Sigma — Poin Paling Kritis**

Hasil menunjukkan **Σxi² = 241** sedangkan **(Σxi)² = 1089**. Keduanya berbeda jauh! Ini adalah jebakan yang sering muncul di soal ujian. Cara membedakannya: baca dari *dalam ke luar*. Σxi² artinya "kuadratkan dulu setiap xi, baru jumlahkan". Sedangkan (Σxi)² artinya "jumlahkan dulu semua xi, baru kuadratkan hasilnya". Urutannya terbalik, hasilnya pun berbeda.

**Bagian 6: Ceiling dan Bonus Rumus Sturges**

Ini bonus yang sangat berguna! Ketika kamu nanti membuat tabel distribusi frekuensi (materi minggu 1-2 di RPS), kamu perlu menentukan *berapa jumlah kelas*. Rumus Sturges memberikan angka desimal (6.6440 untuk n=50), dan kamu harus membulatkannya ke **atas** (ceiling) menjadi 7 — karena kalau kamu bulatkan ke bawah jadi 6, ada data yang tidak tertampung.

---

## Apa yang Perlu Kamu Coba Sendiri

Coba modifikasi file Python-nya dengan pertanyaan ini sebagai tantangan:

Pertama, di Bagian 2, ganti `n = 50` menjadi `n = 5` — apa yang terjadi pada bias? Apakah sampel masih representatif?

Kedua, di Bagian 5, tambahkan perhitungan `Σ(xi - x̄)` dimana x̄ adalah rata-rata. Berapa hasilnya? (Petunjuk: hasilnya selalu 0 — ini adalah sifat matematika rata-rata yang akan sangat berguna nanti saat belajar varians).

Ketiga, coba tambahkan jenis sampel baru — misalnya **Cluster Sampling** — dimana kamu bagi populasi 1000 mahasiswa ke dalam 50 "kelas" berisi 20 orang, lalu acak 5 kelas saja.

Mau lanjut ke materi minggu 1-2 berikutnya, yaitu **distribusi frekuensi dan grafik**? Itu adalah aplikasi langsung dari semua fondasi yang baru kamu pelajari ini.

---

# Distribusi Frekuensi

---

## Pendahuluan: Distribusi frekuensi & frekuensi

# Bentuk umum tabel distribusi frekuensi, (kolom: kelas (kategori) & frekuensi (fi)), contoh gugus data, tabel distribusi frekuensi 1 (kolom: kelas, taily, frekuensi), tbf 2, tbf 3, tepi batas kelas = limit kelas, tbb kelas ke (i), tba kelas ke (i), latihan

# titik tengah kelas, persamaan & perbedaan ketiga tdf, pembentukan tdf: prinsip pembentukan tdf, penentuan banyak kelas & interval kelas, aturan sturges, jenis distribusi frekuensi, tabel distribusi frekuensi relatif, tabel dsitribusi frekuensi kumulatif, variasi tdfk, penyajian tdf dalam grafik/diagram, diagram balok & histogram tdf 2

# aside: limit, peluang
