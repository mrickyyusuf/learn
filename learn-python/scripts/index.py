""" Py roadmap before stats
1. Variables & Data Types        ← kita mulai di sini
2. Operators & Expressions
3. Strings
4. Lists & Indexing
5. Dictionaries & Tuples
6. Conditionals (if/else)
7. Loops (for, while)
8. Functions
9. Libraries (NumPy, Pandas)     ← pintu masuk statistika
10. Basic Statistics with Python
"""

# 1. variables & data types
nama = "Ricky"
umur = 20
tinggi_badan = 175.5 # konvensi snake case sesuai nama bahasa, "python" *cmiiw
suka_statistika = True

# 2. operators & expressions
adam, budi, siti, nala, tito = 78, 85, 90, 72, 88
nilai = adam, budi, siti, nala, tito # koreksi
total = adam + budi + siti + nala + tito
ratarata = total / 5
# selisih = siti - nala # tidak best practice
selisih = max(nilai) - min(nilai)  # nama built-innya max(args) & min(args)

print(total, ratarata, selisih)
print()

# 3. strings
print(len(nama))
print(nama.upper())
print(f"Halo, nama saya {nama} dan saya berumur {umur} tahun\n")

# 4. lists & indexing
list_nilai = [78, 85, 90, 72, 88]
avg = sum(list_nilai) / len(list_nilai)
list_nilai.append(95)

print(list_nilai[2]) # elemen ke-3 berarti index ke-2 (90)
print(list_nilai[-2:]) # minus start dari belakang, maju kedepan, -2 = 72 (diinclude) : ... (artinya py membaca hingga akhir)
print(list_nilai)
print(avg)
print()

# 5. dictionaries & tuples
mahasiswa = {
    "nama" : "Joseph",
    "umur" : 20,
    "ipk" : [4.00, 3.81, 3.66],
}
mahasiswa["lulus"] = True
ipk_total = sum(mahasiswa["ipk"]) / len(mahasiswa["ipk"])

print(mahasiswa["nama"])
print(mahasiswa["umur"])
print(ipk_total)
print(mahasiswa["lulus"])
print()

# 6. conditionals
if ipk_total >= 3.50:
    print("Cumlaude")
elif ipk_total >= 3.00:
    print("Memuaskan")
else:
    print("Cukup")
print()

# 7. loops
# a. print ipk dg while loop
i = 0
while i < len(mahasiswa["ipk"]):
    print(f"Semester {i + 1}: {mahasiswa['ipk'][i]}")
    i += 1
# b. hitung rata-rata dg for loop
sumipk = 0
for ipk in mahasiswa["ipk"]:
    sumipk += ipk
avgipk = sumipk / len(mahasiswa["ipk"])
print(f"Rata-rata IPK: {avgipk}")
print()

# 8. functions
def hitung_rerata(data):
    hasil = 0
    for total in data:
        hasil += total
    hitungrerata = hasil / len(data)
    return hitungrerata
hasil_rerata = hitung_rerata(mahasiswa["ipk"])
print(hasil_rerata)

def cek_predikat(rerata):
    cekpredikat = "Cumlaude" if rerata >= 3.50 else "Memuaskan" if rerata >= 3.00 else "Cukup"
    return cekpredikat
# cek_predikat = cek_predikat(2.99)
# cek_predikat = cek_predikat(3.00)
hasil_predikat = cek_predikat(hasil_rerata)
print(hasil_predikat)
print()

# 9. libraries
import pandas as pd
import numpy as np

df = pd.DataFrame({
    "nama" : ["Ricky", "Yusuf", "Sarah", "Andhika", "Joseph"],
    "nilai" : [100, 99, 95, 85, 90],
})

def def_avg(param):
    result = 0
    for total in param:
        result += total
    avg_nilai = result / len(param)
    return avg_nilai
    
var_def_avg = def_avg(df["nilai"])

print(df.describe())
# hasilnya sama dengan function/default yang dibuat
print(df["nilai"].mean())
print(var_def_avg)
print()

# 10. basic stats w/ py
data = [72, 78, 85, 85, 88, 90, 92, 95, 95, 100]
# a. buat mean median std range tanpa df.describe()
mean = np.mean(data)
median = np.median(data)
std = np.std(data)
range_ = np.max(data)-np.min(data)
print(mean)
print(median)
# b.
print("output lebih besar median karena dia tidak peduli berapapun banyaknya data, tetap mengambil nilai tengahnya setelah diurut, dia hanya peduli seberapa besar nilai datanya, mean lebih kecil karena harus menjumlahkan semuanya lalu dibagi dengan jumlah datanya *cmiiw")
# c. tambah outlier 20 ke data dan ulangi soal b
data.append(20)
mean = np.mean(data)
median = np.median(data)
print(mean)
print(median)
print("setelah di append tetap besar median, jawabannya sama karena median tidak peduli seberapa banyak datanya, dia hanya peduli seberapa besar datanya, diurut, ambil nilai tengah, karena 20 paling kecil jadi nilai tengah 88 sedangkan mean harus menjumlahkan semua lalu dibagi jumlah datanya yang membuat hasilnya lebih kecil daripada sebelumnya")
""" roadmap eksplorasi python & statistika lanjutan, 
semua glosarium & cheatsheet (cheatsheet dibuat dalam 1 script code) pada chat/pembelajaran kita, 
buatkan latihan soal/code/studi kasus seperti di codewars untuk mereview materi yang telah dipelajari dan memperkuat muscle memory, 
next materi? """
