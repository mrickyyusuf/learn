#print("HELLO WORLD!")
"""python adalah bahasa interpreted 
dimana text source code 
langsung dijalankan di terminal.
Namun akan lebih lama, maka solusinya menggunakan byte code
kode dijalankan dari atas ke bawah
shortcut memindahkan baris = alt + atas/bawah"""

#ini comment 1 line
#a = 1

"""byte code = meng compile python seperti c++, sehingga lebih efisien
caranya = python -m py_compile namafile.py
cara menjalankan compile an = cd __pycache__ atau
python *di tab-tab, pycache + nama filenya"""

"""
CH 1: DATA: VARIABEL
 membuka python shell untuk interaktif coding = python + enter
 assignment/memasukan variabel/nilai, 
 ex: a = 10
 a: variabel, =: assignment operator, 10: value
 penamaan variabel harus seperti ini,
 ex : nilai_y = 11,
juta10 = 10.000.000,
nilaiZ = 12,
di dalam string "", spasi diperbolehkan
 """


"""
alt + shift + atas/bawah untuk copas
misal a1 = 10
a2 = 11,
yang dijalakan python adalah a2
assignment indirect, ex: b = a,
ctrl + d untuk mengubah misal
a dibawah dengan a sebelahnya menjadi b
hanya bisa 1 line

a = 20
b = a
print("Nilai b = ", b)
print("nilai a = ", a)"""

"""
CH 2: TIPE DATA: DATA YANG BISA DIPAKAI DI PYTHON
*penggunaan , pada python sangat berguna untuk menumpuk data
agar bisa dijalankan bersama
1. angka satuan bilangan bulat (integer: int)
2. angka desimal (float)
3. kumpulan karakter (string: str)
4. biner, 0 & 1, true/false (boolean: bool)
5. data complex, angka real + angka imajiner (complex)
6. tipe data dari C


data_integer = 2
print("Data: ", data_integer, "| Bertipe: ", type(data_integer))

data_float = 2.2
print("Data: ", data_float, "| Bertipe: ", type(data_float))

data_string = "ucup 02"
print("Data: ", data_string, "| Bertipe: ", type(data_string))

data_bool = True
print("Data: ", data_bool, "| Bertipe: ", type(data_bool))

data_complex = complex(9,7)
print("Data: ", data_complex, "| Bertipe: ", type(data_complex))

from ctypes import c_double
data_c_double = c_double(1.2)
print("Data: ", data_c_double, "| Bertipe: ", type(data_c_double))



CH 3: CASTING TIPE DATA (KONVERSI): float -> int
float akan membulatkan ke bawah, 9.9 -> 9
string tidak bisa huruf harus angka jika ingin merubah ke int, float
bool akan menjadi true jika string > 0 dan huruf, mau string "false", bool tetap true
jika string kosong "", maka bool akan false dan int serta float error


data_integer1 = 22
print("Data: ", data_integer, "| Bertipe: ", type(data_integer))

data_float1 = float(data_integer1)
print("Data: ", data_float1, "| Bertipe: ", type(data_float1))
"""

"""
CH 4: INPUT USER
apapun data yang dimasukan pasti bertipe string


data = input("masukan data: ")
print("data =",data)

#jika ingin mengambil data int atau float, gunakan casting
data_float = float(input("masukan angka: "))
print("angka =",data_float, "bertipe = ",type(data_float))

#jika ingin boolean, casting terlebih dahulu ke int
biner = bool(int(input("masukan boolean: ")))
print("data bool =", biner, "| bertipe = ", type(biner))


CH 5: OEPRASI ARITMATIKA: + - * ** / // %
+:tambah, -:kurang, *:kali, **:pangkat, /:bagi, %:modulus (sisa bagi), //:floor division (pembagian dengan pembulatan ke bawah)
prioritas operasi: (), **, *, /, %, //, +, -
"""

"""
CH 6: LATIHAN PROGRAM KONVERSI TEMPERATUR
"""

'''
print("\nSELAMAT DATANG DI PROGRAM KONVERSI TEMPERATUR MASUCUP\n")

Celcius = float(input("masukan suhu: "))
print('Suhu adalah',Celcius,'celcius')
Reamur = (4/5) * Celcius
print('Suhu adalah',Reamur,'reamur')
Fahrenheit = ((9/5)*Celcius)+32
print('Suhu adalah',Fahrenheit,'fahrenheit')
Kelvin = Celcius+273
print('Suhu adalah',Kelvin,'kelvin')

print('\nFAHRENHEIT TO KELVIN\n')
FAHRENHEIT = float(input('MASUKAN NILAI FAHRENHEIT: '))
CELCIUS = 5/9*(FAHRENHEIT-32)
KELVIN = CELCIUS+273
print('SUHU KELVIN KE FAHRENHEIT ADALAH:',KELVIN)

print('\nKELVIN TO FAHRENHEIT\n')
KELVIN = float(input('MASUKAN NILAI KELVIN: '))
CELCIUS = KELVIN-273
FAHRENHEIT = ((9/5)*CELCIUS)+32
print('SUHU KELVIN KE FAHRENHEIT ADALAH:',FAHRENHEIT)
'''

#CH 7: OPERASI KOMPARASI
#Setiap hasil dari komparasi adalah boolean
#>,<,>=,<=,==,!=,is,is not

#">"
# a = 4
# b = 2
# hasil = a > 3
# print(a,'>',3,'=',hasil)

# Fungsi untuk mengurutkan daftar angka secara descending, termasuk angka duplikat
def sort_descending_with_duplicates(numbers):
    return sorted(numbers, reverse=True)

# Contoh penggunaan
numbers = [34, 12, 45, 12, 67, 23, 89, 45, 67, 89]
sorted_numbers = sort_descending_with_duplicates(numbers)
print("Daftar angka yang diurutkan secara descending:", sorted_numbers)


