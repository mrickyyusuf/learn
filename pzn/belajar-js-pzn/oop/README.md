Sumber belajar: <br>
> https://docs.google.com/presentation/d/1kZJB3w5Zgnr4bUCjHMs9LdBGurnT8PR57f7U9h9vGzg/edit?slide=id.p#slide=id.p <br>
> https://github.com/ProgrammerZamanNow/belajar-javascript-oop <br>
> https://kelas.programmerzamannow.com/courses/1676166/lectures/38115493 <br>

Metode belajar: Input (baca-nonton), output (tulis materi, tulis code) <br>

Siklus github: git add ., git commit -m "...", git push, git log --oneline <br>

Revisi dengan: git checkout --orphan temp_branch, git add -A, git commit -m "...", git branch -D main, git branch -m main, git push origin main --force-with-lease <br>

1. Intro oop js: <br>
> 1.1. Oop -> konsep di programming/bahasa programming, contoh konsep lain: imperative, procedural, etc. <br>
> 1.2. Class -> template untuk membuat object. <br>
> 1.3. Oop di js tidak sedetail bahasa yang memang diciptakan untuk oop, ex: java, cpp. Dia didesain dari awal itu prosedural =/ oop. <br>

2. Membuat constructor function: <br>
> 2.1. Membuat object menjadi ununique (propertynya sama) karena membuat object menggunakan class. <br>
> 2.2. Membuat constructor function versi es lama menggunakan function, diawali HurufBesar(). <br>
> 2.3. Menggunakan new untuk membuatnya (cek code) <br>

3. Property di constructor function: <br>
> 3.1. Membuat property bisa seperti biasa, tapi disarankan didalam constructor function atau cetakan, karena kalau ngga, ya sama aja kaya object biasa <br>
> 3.2. Menggunakan this untuk membuatnya (cek code) <br>

4. Method di constructor function: <br>
> 4.1. Membuat function di constructor function sama dengan menurunkan function tersebut ke object yang dibuat dengan cetakan <br>
> 4.2. Cara membuatnya sama seperti di js dasar, masih menggunakan this diikuti nama property kemudian nama functionnya (cek code) <br>

5. Parameter di constructor function: <br>
> 5.1. Membuat class kan dengan constructor function, constructor function itu sama saja dengan function biasa yang bisa dikirim parameter, enaknya objectnya juga bisa diwariskan isian parameter dari constructor functionnya <br>
> 5.2. (Cek code) <br>

6. Constructor inheritance: <br>
> 6.1. Meng-copy constructor function sebelumnya dan menurunkannya ke constructor function selanjutnya <br>
> 6.2. Membuatnya dengan Before.call(this, totalParam) <br>
> 6.3. (Cek code) <br>

7. Prototype: <br>
> 7.1.  <br>
> 7.2.     