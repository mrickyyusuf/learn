"""
============================================================
  PRAKTIK PYTHON: PENDAHULUAN STATISTIKA
  Materi: Populasi, Sampel, Notasi Sigma, Ceiling/Floor
============================================================
"""

import random
import math

# ============================================================
# BAGIAN 1: POPULASI vs SAMPEL
# ============================================================
print("=" * 60)
print("BAGIAN 1: POPULASI vs SAMPEL")
print("=" * 60)

# Kita simulasikan IPK seluruh mahasiswa sebagai "populasi"
# Dalam kenyataannya, kita tidak punya data ini — tapi untuk
# belajar, kita buat dulu agar bisa membandingkan.

random.seed(42)  # supaya hasilnya selalu sama setiap dijalankan

N = 1000  # ukuran populasi
populasi_ipk = [round(random.uniform(2.0, 4.0), 2) for _ in range(N)]

# Parameter populasi (μ) — rata-rata SESUNGGUHNYA
mu = sum(populasi_ipk) / N
print(f"\nUkuran Populasi (N)     : {N} mahasiswa")
print(f"Rata-rata Populasi (μ)  : {mu:.4f}  ← ini yang ingin kita taksir!")

# ============================================================
# BAGIAN 2: PENGAMBILAN SAMPEL ACAK SEDERHANA
# ============================================================
print("\n" + "=" * 60)
print("BAGIAN 2: SAMPEL ACAK SEDERHANA")
print("=" * 60)

n = 50  # ukuran sampel

# Simulasi pengambilan acak seperti RANDBETWEEN di Excel
sampel_acak = random.sample(populasi_ipk, n)

# Statistik sampel (x̄)
x_bar = sum(sampel_acak) / n
bias = abs(x_bar - mu)  # nilai mutlak selisih — seperti di slide!

print(f"\nUkuran Sampel (n)       : {n} mahasiswa")
print(f"Rata-rata Sampel (x̄)   : {x_bar:.4f}")
print(f"Rata-rata Populasi (μ)  : {mu:.4f}")
print(f"Bias |x̄ - μ|           : {bias:.4f}")
print(f"\n→ Sampel {'CUKUP representatif' if bias < 0.1 else 'kurang representatif'}!")

# Coba bandingkan: apa yang terjadi jika sampel lebih kecil?
print("\n--- Pengaruh Ukuran Sampel terhadap Bias ---")
for ukuran in [5, 10, 30, 50, 100, 200]:
    s = random.sample(populasi_ipk, ukuran)
    rata2 = sum(s) / ukuran
    b = abs(rata2 - mu)
    bar = "█" * int(b * 100)
    print(f"  n={ukuran:<4} | x̄={rata2:.4f} | bias={b:.4f} | {bar}")

print("\n→ Perhatikan: semakin besar n, bias cenderung mengecil!")

# ============================================================
# BAGIAN 3: SAMPEL SISTEMATIK
# ============================================================
print("\n" + "=" * 60)
print("BAGIAN 3: SAMPEL SISTEMATIK")
print("=" * 60)

# Rumus interval: i = N/n (dari slide)
n_sistematik = 100
i = math.floor(N / n_sistematik)  # interval, pakai floor seperti di slide

# Anggota pertama dipilih acak dari 1 sampai i
start = random.randint(1, i)

# Ambil anggota berikutnya dengan menambahkan interval
indeks_sistematik = []
pos = start - 1  # konversi ke indeks 0-based
while pos < N and len(indeks_sistematik) < n_sistematik:
    indeks_sistematik.append(pos)
    pos += i

sampel_sistematik = [populasi_ipk[idx] for idx in indeks_sistematik]
x_bar_sistematik = sum(sampel_sistematik) / len(sampel_sistematik)

print(f"\nInterval (i = N/n)      : {N}/{n_sistematik} = {i}")
print(f"Anggota pertama (acak)  : indeks ke-{start}")
print(f"Jumlah sampel terpilih  : {len(sampel_sistematik)}")
print(f"Rata-rata sampel (x̄)   : {x_bar_sistematik:.4f}")
print(f"Bias dari μ             : {abs(x_bar_sistematik - mu):.4f}")

# ============================================================
# BAGIAN 4: SAMPEL BERLAPIS (STRATIFIED)
# ============================================================
print("\n" + "=" * 60)
print("BAGIAN 4: SAMPEL BERLAPIS (STRATIFIED)")
print("=" * 60)

# Contoh: survei kepuasan penumpang kereta (seperti di slide)
# Populasi: 1000 penumpang terdiri dari 3 kelas
populasi_kereta = {
    "Eksekutif": [round(random.uniform(3.5, 5.0), 2) for _ in range(200)],  # N=200
    "Bisnis":    [round(random.uniform(2.5, 4.5), 2) for _ in range(300)],  # N=300
    "Ekonomi":   [round(random.uniform(1.5, 4.0), 2) for _ in range(500)],  # N=500
}
# Catatan: nilai di sini adalah skor kepuasan (1-5), bukan IPK

n_total = 100  # total sampel yang ingin diambil
N_total = sum(len(v) for v in populasi_kereta.values())

print(f"\nPopulasi total (N): {N_total}")
print(f"Target sampel (n) : {n_total}")
print(f"\nPengambilan sampel PROPORSIONAL per strata:")

sampel_berlapis = {}
for strata, data in populasi_kereta.items():
    # Proporsi: n_strata = (N_strata / N_total) * n_total
    n_strata = round((len(data) / N_total) * n_total)
    sampel_berlapis[strata] = random.sample(data, n_strata)
    rata2_strata = sum(sampel_berlapis[strata]) / n_strata
    print(f"  {strata:<12}: N={len(data)}, diambil n={n_strata}, rata2 kepuasan={rata2_strata:.2f}")

# Rata-rata keseluruhan dari sampel berlapis
semua_sampel = [x for s in sampel_berlapis.values() for x in s]
print(f"\n  Rata-rata kepuasan keseluruhan: {sum(semua_sampel)/len(semua_sampel):.2f}")

# ============================================================
# BAGIAN 5: NOTASI SIGMA (Σ) 
# ============================================================
print("\n" + "=" * 60)
print("BAGIAN 5: NOTASI SIGMA (Σ)")
print("=" * 60)

# Data dari latihan di slide
x = [8, 10, 4, 6, 5]
n_latihan = len(x)

print(f"\nData lama belajar mandiri (jam/hari):")
print(f"  x = {x}")
print(f"  n = {n_latihan}")

# Σxi dari i=1 sampai n
sigma_x = sum(x)
print(f"\n  Σxi          = {' + '.join(map(str, x))} = {sigma_x}")

# Σxi² (jumlahkan kuadrat masing-masing)
sigma_x_kuadrat = sum(xi**2 for xi in x)
print(f"  Σxi²         = {' + '.join(f'{xi}²' for xi in x)} = {sigma_x_kuadrat}")

# (Σxi)² — kuadratkan dulu jumlahnya
sigma_x_whole_squared = sigma_x ** 2
print(f"  (Σxi)²       = {sigma_x}² = {sigma_x_whole_squared}")

print(f"\n⚠️  PERHATIKAN PERBEDAAN:")
print(f"   Σxi²  = {sigma_x_kuadrat}   (kuadratkan dulu, baru jumlahkan)")
print(f"   (Σxi)²= {sigma_x_whole_squared}  (jumlahkan dulu, baru kuadratkan)")
print(f"   Keduanya BERBEDA! Ini sering menjadi sumber kesalahan.")

# ============================================================
# BAGIAN 6: FUNGSI CEILING DAN FLOOR
# ============================================================
print("\n" + "=" * 60)
print("BAGIAN 6: FUNGSI CEILING DAN FLOOR")
print("=" * 60)

print("""
  Ceiling ⌈x⌉ = bulatkan ke atas ke bilangan bulat terdekat
  Floor   ⌊x⌋ = bulatkan ke bawah ke bilangan bulat terdekat
""")

# Contoh dari latihan di slide
nilai_uji = [126.90, 126.55, 126.03, 98.06, 98.50, 98.99]

print(f"  {'Nilai':>8} | {'Ceiling ⌈x⌉':>12} | {'Floor ⌊x⌋':>10}")
print(f"  {'-'*8}-+-{'-'*12}-+-{'-'*10}")
for v in nilai_uji:
    print(f"  {v:>8.2f} | {math.ceil(v):>12} | {math.floor(v):>10}")

# Aplikasi nyata: ceiling dipakai saat menghitung jumlah kelas distribusi frekuensi
print(f"\n  Aplikasi nyata dalam statistika:")
print(f"  Rumus jumlah kelas Sturges: k = 1 + 3.322 × log(n)")
n_contoh = 50
k_eksak = 1 + 3.322 * math.log10(n_contoh)
k_bulat = math.ceil(k_eksak)
print(f"  Untuk n={n_contoh}: k = 1 + 3.322 × log({n_contoh}) = {k_eksak:.4f} → dibulatkan ke atas = {k_bulat} kelas")
print(f"  (Menggunakan CEILING karena jumlah kelas harus bilangan bulat dan tidak boleh kurang)")

print("\n" + "=" * 60)
print("  SELESAI! Semua konsep Pendahuluan telah dipraktikkan.")
print("=" * 60)
