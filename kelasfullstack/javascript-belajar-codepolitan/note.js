// //Data primitive: Number, Null, Boolean, Undifined, String 
// typeof 123 //'number'
// typeof 0/0 //'NaN
// typeof NaN //'number'
// let kemerdekaanRI = 1945
// let hutRI = 2024 - kemerdekaanRI //variabel yang bisa diubah
// const tahunMerdeka = 17081945 //variabel yang tidak bisa diubah
// score += 10
// score++ //ditambah 1
// let isActive = true
// isActive = false
// let namaSaya = "Camel case"
// let NamaSaya = "Pascal case"
// let nama_saya = "Snake case"
// let $variabel = 'simbol'
// // let 123variabel = gabisa
// let variabel123 = "bisa"
// "ucup"
// 'ucup'
// 'saya mengucapkan "selamat"'
// "i can't sleep"
// //index dimulai dari 0, code 0123
// let nama = 'ucup'
// nama[0]
// 'u'
// let namaDepan = "Ricky"
// let namaBelakang = "Yusuf"
// //let namaLengkap = namaDepan + namaBelakang
// namaLengkap.length //14
// //method untuk mencari huruf/kata, mengganti karakter, mengubah huruf besar/kecil
// " Hai cantik".trim().toUpperCase() //"HAI CANTIK"
// //string method with argument seperti inputan untuk mengubah nilai
// "Hello world".indexOf("world") //6
// "Hai kalian!".slice(0,3) //'Hai'
// greeting.replace("world", "there") //'hello there'
// //Template literals ``
// let namaLengkap = namaDepan + " " + namaBelakang
// let usia = "20"
// let status = "single"
// `${greeting.replace("world", "there")}! Nama saya ${namaLengkap}, saya berusia ${usia}. Saya berstatus ${status}.`
// //null: nilai "kosong" yang sengaja ada, perlu dibuat
// //undefined:  variabel yang dibuat tetapi belum ada isinya/tidak ada sama sekali
// let wadah //undefined
// typeof wadah //undefined
// wadah = null //null
// typeof wadah //object
// //Math object (Math.PI) & Math.random()
// Math.PI//3.14.... nilai pi
// Math.abs(-123)//123 nilai absolut
// Math.floor(1.9)//1 penghilangan desimal
// Math.round(1.9)//2 pembulatan ke atas/kebawah
// Math.pow(2,5)//32 pangkat, dll...
// Math.random()//angka desimal random
// //Logika boolean, membuat keputusan dengan javascript
// //operator pembanding >,<,>=,<=,==,!=,===,!==
// //C0 control & basic latin
// //double equals == sama ketika nilai sama walau tipe data beda
// //triple equals === harus sama nilai dan tipe data nya
// //!= dikatakan true, jika kedua nilai berbeda. ex: 2 != '1' (true), 1 != '1' (false)
// //!== dikatakan true, jika tipe data berbeda. ex: 1 !== '1' (true)
// console.log("Hello world")
// console.warn("Be careful!")
// console.error("This is error")
// alert("This is alert!")
// prompt("Input something")
//Parameter & argument: serupa tapi tak sama keduanya ada didalam function 
// contoh: function greet(name) //--> Parameter karena pendefinisian (name) dalam function {  
//              console.log(`Hi, ${name}`)
// }
// greet('Ucup') --> Argument karena memanggil function greet dan melakukan pengisian 'Ucup'
// argument/parameter merupakan input yang dimiliki function
// bisa juga input/namenya di definisikan langsung di browser
//return = statement untuk mengakhiri suatu fungsi dan memberikan nilai yang didefinisikan pada saat fungsi dipanggil
//berlaku nested rules

// scope = visibilitas variabel, variabel yang dapat diakses sesuai lokasi yang dimiliki, diluar atau dalam function