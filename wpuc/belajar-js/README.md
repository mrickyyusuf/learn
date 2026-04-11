# JS ADVANCE LEARN WITH WPU
\
Jujur, w males ngerapihin dan mindahin dari notes.txt kemari, huft... ya maybe sometimes, sekarang w mau sharing, mendokumentasikan proses belajar w, dan ngejelasin ulang materi dari Pak Dhika yaitu JS ADVANCE, enjoy! \

Metode/flow belajar:  \
> 1. Do whatever it takes to understand: nonton materi sambil praktik, ga ngerti ulang nonton sambil lihat code yang ditulis, dipahami baik-baik, masih ga ngerti tanya & suruh ai ngajarin sampai ngerti
> 2. Hands on: hapus code, tulis ulang sampai bisa tanpa nonton, kalau lupa tonton ulang dibagian yang lupa/tanya ai
> 3. Output/product: 
> > 3.1. Materi: latihan ala codewars sama ai, bisa serupa/inovasi, metode bebas, bisa 1 jam, atau 10 soal (menyesuaikan)
> > 3.2. Project: pertama nonton sambil praktik, kedua praktik tanpa melihat kalau lupa tonton dibagian yang lupa dan ulangi hingga bisa tanpa nonton, ketiga inovasi

Sumber: https://youtube.com/playlist?list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&si=C39G4F5Vm_IRN-p9 \

Materi: \
> 1. Object (review) \
> >  Jadi di video ini Pak Dhika menjelaskan bahwa kita akan belajar prototype. Sebelum belajar, kita review/revisited materi object dulu, Pak Dhika ngajarin cara membuat object, adad 3 cara: Object Literal, Function Declaration, Constructor Function (cek code) \
> > Object literal: jangan lupa this yang mengacu pada field/property dari objectnya saat bikin method. Kekurangannya harus membuat object lagi & variable objectnya tidak boleh sama (tidak efektif) \
> > Function declaration membuat property & method dengan deklarasi object dengan variabel, jangan lupa retrurn untuk method
> > Constructor function dan function declaration perbedaannya terletak di: 1. object declaration in variable, 2. return, -> 3. tidak perlu deklarasi object di variable, 4. tidak perlu return, 5. gunakan this, 6. gunakan new, 7. instance tinggal inisiasi seperti let ucup, let joseph dll, tidak perlu seperti object literal yang membuat variable object lagi & tidak boleh sama namanya \

> 2. Object.create() \
> >  perhatikan code function declaration, sebelumnya dibahas kekurangan object literal yaitu harus membuat manual kalau objectnya banyak, lalu function declaration hadir sebagai solusi -> tidak perlu membuat manual, hanya panggil/instanciation saja, tapi muncul masalah baru yaitu kalau maemanggil/instanciation method, itu dia dibikin/dicopy/diduplicate methodnya walau tidak dipakai di memory, akhirnya solusinya yaitu -> membuat object baru yang berisi method, tapi masalah baru muncul, yaitu harus ingat kalau menambahkan method dan harus ditambahkan manual/static ke function declaration yang dibuat, maka hadirlah solusi terakhir yaitu -> Object.create, gunanya agar membuat object {}, sekaligus mewarisi/inheritance method pada object parentnya (object yang dibuat terpisah yang berisi method-method) menjadi dinamis, tapi masalahnya adalah kita hanya memerlukan function/object mahasiswa, membuat function/object baru itu hanya mengakali saja, bukan best practice/solusi terbaik, solusi terbaiknya mungkin ada di next materi yang membahas prototype. Eval: selalu lupa dibagian menulis parameter caranya. Lupa konsep this, bukannya this.energi malah this.propertyMain, karena seingatnya harus mengacu ke property, harusnya mengetahui konteks terlebih dahulu, agar logikanya jalan (menambah dan mengurangi energi mahasiswa ketika menggunakan method berupa beberapa kegiatan dan memasukkan angka sesuai konteks parameter) \

> 3. Prototype \
> >  Dalam ja ada konsep yang namanya prototypal inheritance (mirip konsep class di bahasa php/java). 
> > Untuk orang yang berangkat dari bahasa oop seperti php/java pasti bingung dan merasa aneh, untuk itu ada cara menulis/membungkus prototype tersebut dengan class (tapi pada dasarnya yang dijalankan adalah konsep prototype dibelakang layar). 
> > Awalnya js tidak ada konsep class karena js awalnya bahasa yang dibuat hanya dalam sekitar seminggu (10 hari) yang seiring berjalannya waktu terus dikembangkan. 
> > Tipe data apapun pada js isinya merupakan object, yang secara default memiliki/mewarisi prototype \

> 4. Execution Context, Hoisting, Scope \
> >  execution context itu terbagi 2, ada global dan local scope, kalau variable dia akan di hoisting, misal kita menampilkan variabel sebelum di deklarasikan, itu akan menampilkan undefined, beda dengan function, kalau kita console.log(function) tanpa di eksekusi dia hanya akan menampilkan isi functionnya/function dalam bentuk string yang ditampilkan, kalau function dia tidak peduli mau variabelnya diatas atau dibawah akan tetap bisa terbaca beda dengan variabel yang undefined. Pak Dhika mengenalkan website namanya javascript visualizer untuk mempermudah memahami materi ini, function akan masuk ke execution context/local scope, jadi menjalankan scope sendiri secara terpisah, seperti masuk ke inner, cara hoisting function itu pertama dia cek, adakah variabel, lalu adakah function, lalu ke parameter, kalau ngga ada maka disimpan ke argument, lalu ke atasnya hingga ke global \
> > 

> 5. Closure
> >  kalau sebuah function menggunakan function di atasnya maka disebut closure (function yang me-return function, inner function yang membutuhkan variabel/function dari parent scopenya dinamakan closure, lexical scope itu inner function yang mengakses ke parent scope hingga ke window/global scope), gunanya untuk membuat function factories dan private method. Pak Dhika mencontohkan 2 metode membuat function factories dan private method beserta metode immediately invoke function. Immediately invoke function itu mengurung/mewakili function yang setengah jalan, dimasukkan ke dalam variabel, lalu inner functionnya dijalankan (function setengahnya lagi) di variabel yang baru dibuat itu dalam bentuk menjalankan function (var()) yang diisi parameter
> > question: pertanyaan private method, kenapa pakai anonymus function tanpa parameter? \

> 6. Var, Let, Const \
> >  ada yang dikenal sebagai function scope dan block scope, js menganut function scope karena js awalnya dibuat hanya dalam 10 hari yang seiring berjalannya waktu terus didevelop, makanya di rekomendasikan menggunakan let atau const bukan var karena var menganut function scope, agar perilakunya block scope digunakanlah let atau const

> 7. Arrow Function \
> >  \

> 8. Higher Order Function \
> >  \

> 9. Filter, Map & Reduce \
> >  \

> 10. Latihan Filter, Map, Reduce \
> >  \

> 11.  \
> >  \

> 12.  \
> >  \

> 13.  \
> >  \

> 14.  \
> >  \

> 15.  \
> >  \

> 16.  \
> >  \

> 17.  \
> >  \

> 18.  \
> >  \

> 19.  \
> >  \

> 20.  \
> >  \

> 21.  \
> >  \

> 22.  \
> >  \

> 23.  \ 
> >  \

> 24.  \ 
> >  \

> 25.  \
> >  \

> 26.  \
> >  \

> 27.  \ 
> >  \

> 28.  \ 
> >  \

> 29.  \
> >  \