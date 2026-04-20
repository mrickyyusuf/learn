// alert(1 + 1);
//console.log("Hello dunia!");

// console.log('sebelum')
// if(1+1===2) {
//     console.log('ditampilkan jika benar')
// }
// console.log('sesudah')

// let angkaRandom = Math.random()
// console.log(angkaRandom) 
// if(angkaRandom >= 0.5) {
//     console.log("Angka sesuai yang diinginkan")
// }
// if(angkaRandom <= 0.5) {
//     console.log("Angka tidak sesuai yang diinginkan")
// }

// const Nilai = prompt("Masukan nilaimu!");

// if (Nilai > "90") {
//     console.log("A");
// } else if (Nilai >= "75") {
//     console.log("B");
// } else if (Nilai >= "65") {
//     console.log("C");
// } else {
//     console.log("Waduhhh di sekolah ngapain aja")
// }

// const password = prompt("Masukan password");

// if (password.length >= 6) {
//     if (password.indexOf(" ") === -1) {
//         console.log ("password valid");
//     } else {
//         console.log ("password tidak boleh menggunakan spasi");
//     }
// } else {
//     console.log ("password harus 6 karakter")
// }

//operator logic and&& or|| not! !true -> false
// if (password.length >=6 && password.indexOf(" ") === -1) {
//     console.log ("Pasword valid");
// } else {
//     console.log ("Password tidak valid");
// }

// const role = prompt ("Masukan role akun")
// if (role === "admin" || role === "spv") {
//     console.log ("Akses diterima")
// } else {
//     console.log ("Akses ditolak")
// }

// const role = prompt ("Masukan role akun")
// if (role !== "admin") {
//     console.log ("Akses ditolak")
// } else {
//     console.log ("Akses diterima")
// }

//switch, sebagai alternatif if statement jika memiliki kondisi yang banyak
// const balonku = prompt('Input warna balon');
// switch(balonku) {
//     case 'merah' :
//         console.log ('FAVORITKU!');
//         break;
//     case 'hijau' :   
//         console.log ('DUARRR!');
//         break;
//     default:
//         console.log ('Bukan balon saya')    
// }

//Array []
// let playlist = ['in the end', 'intro', 'avangard']
// playlist [0]
// playlist [9] = 'bloody mary' //<5 slots empty>
// playlist [0] = 'bring me to life' //change data in array

// //Method array: push (Nambah ke belakang), pop (hapus dari belakang), unshift (tambah dari depan), shift (hapus dari depan)
// let barbel = [20, 15, 10, 5]
// barbel.push(2.5)
// barbel.pop()
// barbel.unshift('ucup')
// barbel.shift()

//struktur data object

//looping menggunakan for
// for (let i = 1; i <= 10; i++) {
//     console.log('looping 10x');
//     console.log(i);
// }

// const pilihan = 'abcd'
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal nomor ${i}:`);
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`   ${pilihan[j]}. Pilihan jawaban`)
//     }
// }

// const studentRow = [
//     ['Ucup', 'Abhi', 'Danang'],
//     ['Reido', 'Vito', 'Micky'],
//     ['Zaky', 'Hasbi', 'Putra'],
// ];

// for (let i = 0; i < studentRow.length; i++) {
//     console.log (`Seat row #${i + 1}`);
//     const row = studentRow[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log (`   ${row[j]}`);
//     }
// }

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// let input = prompt ('Ketikan sesuatu');
//     while (true) {
//         input = prompt(input);
//         if (input.toLowerCase() === 'stop') break;
//     }
// alert('ok');

// for (let i = 0; i < 1000; i++) {
//     console.log (i);
//     if (i === 100) break;
// }

// const fruits = ['banana','apple','mango','cherry'];
// for (let fruit of fruits) {
//     console.log(`Buah ${fruit}`)
// }

// const studentScore = {
//     Abhinaya: 80,
//     Danang: 90,
//     Ricky: 75,
//     Fahmi: 75
// }

// for (let student in studentScore) {
//     console.log(`${student} memiliki score ${studentScore[student]}`);
// }

// let total = 0;
// let scores = Object.values(studentScore);
// for (let score of scores) {
//     total += score;
// }
// console.log(total / scores.length);

// function namaFungsi () {
//     console.log("Cek sound");
//     console.log("Aku sayang roblox, roblox sayang aku")
// }

// namaFungsi();
// namaFungsi();
// namaFungsi();
// namaFungsi();
// namaFungsi();

// function selamatPagi(nama) {
//     console.log(`Halo, ${nama}. Selamat pagi`)
// }

// selamatPagi('Ryu');

// function jumlahkan(a, b) {
//     const total = a + b
//     console.log(total)
// }

// jumlahkan(1, 2);

// function jumlahkan(a = 0, b = 0) { //jika ingin mengisi di browser tanpa argument, harus isi default valuenya yaitu 0
//     const total = a + b
//     console.log(total)
// }

// function jumlahkan(a = 0, b = 0) { 
//     const total = a + b
//     return total //simplenya, return ini utk memberi nilai parameter ke total agar pada saat manggil total, muncul nilai dari parameter
//     misal a + b nya (1, 2), jika ada return dan enter di browser maka akan udefined. Dan pada saat panggil total, akan muncul jumlah parameter nya 1 + 2 = 3 
// } setelah return tidak boleh ada proses apa apa lagi karena tidak akan ditaampilkan

//Jika ada 2 return, maka hanya 1 return yang dijalankan
// function jumlahkan(a, b) {
//      if (typeof a !== 'number' || typeof b !== 'number') {
//          return false;
//      }
//      return a + b;
//} jika masukan string, maka return 1 jalan, jika angka return 2 jalan


// let programming = 'javaScript'; 

// function typeSafe() {
//     let programming = 'typeScript';
//     console.log(programming); --> scope
// }

// typeSafe();
// console.log(programming);

// let tinggi = 8 { 
// if (tinggi > 5)
//      let lebar = 10
//      console.log(lebar)
//}
// console.log(tinggi);

//anggap kurung kurawal ini scope, mau console.log didalam scope di comment dan console.log lebar dibawah, tetap saja tidak terdefinisi. kecuali pakai var yang berarti const dan let mempunyai blocked scope. Pakai var bisa manipulasi function 1 dengan yang lain misal var lebar di dalam function 1 = 10, dan function 2 = index (manipulasi nilai lebar function 1), jika di console log itu bisa kepanggil 2 2 nya
//let tinggi = 8;
//if (tinggi > 5) {
//      var lebar = 10;
//      console.log(lebar);
//}
//console.log('lebar: ', lebar);

//for (let index = 0; index > 10; index++) {
//      const indexNumber = index; 
//      var indexNumber = index; 
//      var lebar = index;
//      console.log(indexNumber);
//}
//console.log('index: ', indexNumber);
//console.log('lebar: ', lebar);


//lexical scope: function di dalam function
//function lamarKerja() {
//  const jabatan = 'programmer';

//  function lebihDalam() {
//      function orangDalam() {
//          let kenalan = 'Orang dalam bisa memasukkan ${jabatan}';
//          console.log(kenalan);
//          }

//          orangDalam();
//      }

//  lebihDalam();  
//}
//lamarKerja();

//function expression
// function perpangkatan(hasil) {
//      return hasil * hasil;
//}
// let hasil = perpangkatan(5); maka jika panggil hasil di browser akan muncul 25

// const hasilPerpangkatan = function (nilai, pembanding) {
//     return nilai * pembanding;
// }

//function sebagai argument function lain
// function duaKali(func) {
//     func();
//     func();
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

//function bernilai balik function
// function hasilnyaAdalahFunction() {
//     const rand = Math.random()
//     if (rand > 0.10) {
//         return function() {
//             console.log('Selamat, angka lebih besar');
//         }
//     } else {
//         return function() {
//             console.log('Maaf, coba lagi lain waktu');
//         }
//     }
// }

//Method: menambahkan function pada suatu object property
// function myFun() { //Function biasa
//     console.log('Hi');
//     return 'Hello';
// }

// const myMath = { //Object
//     perkalian: function (x, y) { //Method
//         return x * y;
//     }
// }

//This = keyword untuk memanggil suatu property pada object yang sama. Tujuannya untuk mendapatkan nilainya
// const saya = {
//     nama: 'ucup',
//     kelas: '1KA21',
//     hobi: 'belajar',
//     kenalan: function() {
//         return `Saya ${this.nama}, saya kelas ${this.kelas}. Hobi saya ${this.hobi}`
//     }
// }

//Try and catch = pengondisian untuk melakukan suatu proses pada pemanggilan suatu function bertujuan untuk menghandle error.
//pada saat error maka tidak melakukan blocking. Jika setelah proses itu gagal maka akan mengecek apakah ada code lain yang bisa di eksekusi
//kalau tidak ada maka akan berhenti

//try { //proses melakukan suatu program logic

//} catch {} //menangkap error jika ada kesalahan pada try. Akan mengeksekusi error dan tidak melakukan blocking atau break code yang menyebabkan program berhenti

// function teriak(msg) {
//     try {
//         console.log(msg.toUpperCase());
//     } catch (error) {
//         console.log(error);
//         console.log('silahkan masukan tipe data string pada argument teriak()');
//     }
// }

//foreach method = dapat menggunakan callback function yang berarti dapat memanggil sebuah fungsi sebanyak jumlah elemen yang dimiliki array
// const animes = [
//     {
//     tittle: 'One piece',
//     rating: '90',
//     },
//     {
//     tittle: 'Naruto',
//     rating: '80',
//     },
//     {
//     tittle: 'Bleach',
//     rating: '85',
//     },
//     {
//     tittle: 'Dragon ball',
//     rating: '80',
//     },
// ]
// animes.forEach(function(anime){
    //     console.log(`${anime.tittle} - ${anime.rating}/100`);
// });
// const animeList = animes.map(function(anime){
//     return anime.tittle.toUpperCase();
// });

//Map method = nilai baliknya adalah array baru yang sudah di modifikasi melalui callback function dari suatu array
//generate array baru dari suatu array
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function (num) {
//     return num * 2;
// });

//arrow function =
// function perpangkatan(x) {
//     return x * x;
// }
// const hasil = perpangkatan(5);

// const hasil = function(x) {
//     return x * x;
// };

// const perpangkatan = (x) => {
//     return x * x;
// };

// const random = () => {
//     return Math.floor(Math.random() * 1000)
// };

// return secara implisit dari arrow function, berlaku hanya untuk fungsi 1 baris
// const random = () => (
//     Math.floor(Math.random() * 1000)
// );

//const add = (a, b) => a + b

//settimeout & settimeinterval = callback function yang bukan berasal dari array
//fungsinya untuk memberi waktu jeda dan melakukan perulangan setiap waktu yang ditentukan
//settimeout jeda program selama 3 detik sebelum eksekusi, settimeinterval setiap 2 detik jalankan proses sekali (berulang)

// console.log('halo')
// setTimeout(() => {
    //     console.log('masih disana gak?')
// }, 5000);
// console.log('saya pergi dulu ya');

// setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// const interval = setInterval(() => { (untuk memberhentikan)
//     console.log(Math.random())
// }, 2000);

//filter = function yang akan mngembalikan nilai array lagi yang sudah dimanipulasi sesuai dengan kriteria yang ditetapkan
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const angkaGanjil = angka.filter(n => {
    //     return n % 2 === 1
// });
// const angkaBaru = angka.filter((n) => {
//     return n < 5;
// });

// const animes = [
//         {
//         title: 'Dragonball',
//         rating: '80',
//         year: '2000',
//         },
//         {
//         title: 'One piece',
//         rating: '90',
//         year: '1999',
//         },
//         {
//         title: 'Bleach',
//         rating: '85',
//         year: '1995',
//         },
//         {
//         title: 'Naruto',
//         rating: '80',
//         year: '1998',
//     }
// ];

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animes
//     .filter((anime) => anime.rating >= 85)
//     .map((anime) => anime.tittle);
// const animeBagusAja = animes.filter((anime) => anime.rating < 85);
// const animeLama = animes.filter((anime) => anime.year < 2000);

// //Meenntukan benar atau salah pada arrya dengan every dan some method
// //Every = Mengembalikan nilai boolean. True pada saat seluruh nilai yang ada pada suatu array memiliki kriteria yang sama. False jika sebaliknya
// //Some = Lebih flexibel, mirip dengan Every, hasilnya akan true jika salah isi dari array memiliki nilai kriteria yang sama. Akan false jika sama selali tidak ada yang sesuai kriteria
// const examScore = [80, 85, 75, 90, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// const isAnimeListNew = animes.some((anime) => anime.year > 1995);

//Reduce = melakukan proses sebanyaknya element milik suatu array. Nilai baliknya adalah single value
//pakai for loop
// let total = 0;
// for (let score of examScore) {
//     total += score;
// }
//reduce
// const total = examScore.reduce((total, score) => {
//     return total + score;
// });

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//     //console.log(bestAnime, currAnime);
//     if (currAnime.rating > bestAnime.rating) {
//         return currAnime;
//     }
//     return bestAnime;    
// });

// const lowAnime = animes.reduce((lowAnime, currAnime) => {
//     console.log(lowAnime, currAnime);
//     if (currAnime.rating < lowAnime.rating) {
//         return currAnime;
//     }
//     return lowAnime;    
//;
//Object This di dalam arrow function mengarah pada Object Global Window
// const person = { //lebih baik pakai regular function dari pada arrow function
//     firstName: 'Deez',
//     lastName: 'Nute',
//     fullName: function () {
//         console.log(this);    
//         return `${this.firstName} ${this.lastName}`;
//     },
    // firstName: 'Deez',
    // lastName: 'Nute',
    // fullName: () => {
    //     console.log(this);    
    //     return `${this.firstName} ${this.lastName}`;
    // },
//};

//Mengatur default value pada function
//Default value parameter = nilai yang digunakan saat fungsi dipanggil tapi tidak diberi nilai argument yang diperlukan
// function lemparDadu(sisi) {
//     return Math.floor(Math.random * sisi) + 1;
// } //misal di browser programmer lupa memberi parameter, maka kita berikan default value sisi
//function masukan nilai sendiri di browser
// function lemparDadu(sisi = 6) {
//     return Math.floor(Math.random * sisi) + 1;
// }

// function sapa(name, msg) {
//     console.log(`${name} ${msg}`);
// };

// function sapa(name = 'Ricky', msg = 'Good Afternoon^^') {
//     console.log(`${name} ${msg}`);
// };

// function sapa(name, msg = 'Good Afternoon^^') { //Output: undefined Good afternoon
//     console.log(`${name} ${msg}`);
// };

// function sapa(msg = 'Good Afternoon^^', name) {
//     console.log(`${name} ${msg}`); //Output: msg akan di over write karena peletakan pertama di console log nya adalah name jika hanya mengisi parameter name di browser
// };

//Spread operator = mengubah suatu array atau object atau bahkan string menjadi deret parameter untuk function
// const angka = [1,2,3,4,5]
// Math.max(...angka); //tampilkan di browser

//angka
//console.log(...angka) //membongkar nilai array menjadi satu per satu dan diurutkan. Sangat berguna untuk memberikan parameter pada suatu function menjadi satu per satu

//Menggabungkan nilai array dengan array lagi dengan spread operator seperti ini:
//const angka = [1, 2, 3, 4]
//const nama = ['Ujang', 'Ucup', 'Bimo', 'Otong']
//const campuran = [...angka, ...nama]; atau tambahkan apapun di dalamnya

//Menggabungkan property object dengan object lainnya dengan spread operator seperti ini:
// const user = {
//  name: 'User',
//  email: 'User@mail.com',    
// };

// const userDb = {...user, role: 'Admin'};

//Rest Param = Mengetik parameter panjang dengan spread operator
// function sumAll(...nums) {
//     let total = 0
//     for(let n of nums) total += n
//     return total
// }
// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// };
//const nama = ['Ujang', 'Ucup', 'Bimo', 'Otong', 'Bujang', 'Satya'];
// const pemenang = (gold, silver, bronze, ...nt) => {
//     console.log(`Medali emas diraih oleh: ${gold}`);
//     console.log(`Medali perak diraih oleh: ${silver}`);
//     console.log(`Medali perunggu diraih oleh: ${bronze}`);
//     console.log(`runner up: ${nt}`);
// }; //tulis di browser pemenang(...nama) penggunaan spread operator didalam parameternya

//Destructing = unboxing array dan object
//const [gold, silver, bronze, ...peserta] = nama; //menguraikan array, untuk peserta diurai tapi masih ditumpuk di wadah yang sama

//unboxing property object ke masing-masing variabel
// const user = {
//  name: 'User',
//  email: 'User@mail.com', 
//  role: 'Admin',   
// };
// const {nama: name, email, phone = '081234567890'} = user; //panggil sesuai nama property objectnya kecuali yang diatas (nama juara) cuma kosongan yang bisa dikasih inisial apapun, default value object baru
//nama pengaliasan variabel name, jika ketik user.nama akan undefined karena tidak ada

//Destructing parameter pada function
// const userAndRole = ({name, role}) => {
//     return `${name} ${role}`;
// };
//object dalam array
// const anime = animes.map((anime) => {
//     return `${anime.title} (${anime.year}) rating ${anime.rating}`;
// });
// const anime = animes.map(({title, year, rating}) => {
//     return `${title} (${year}) rating ${rating}`;
// });
//destructing bisa didalam parameter baik function biasa atau arrow function asal posisinya didalam function itu sendiri dan bisa dimanfaatkan didalam callback function juga di dalam parameternya


//OOP JAVACRIIPT
//OBJECT PROTOTYPES: MEKANISME SUATU JAVASCRIPT YANG MANA BISA MENURUNKAN SUATU FITUR/PROPERTI/METHOD YANG DIMILIKI SUATU OBJECT KE OBJECT LAINNYA ATAU KEDALAM TURUNANNYA
// const myObject = {
//     city: "Madrid",
//     greet() {
//       console.log(`Greetings from ${this.city}`);
//     },
//   };
  
//   myObject.greet(); // Greetings from Madrid
//Misal Method yang dimiliki suatu array yang biasa di panggil seperti misal Array.prototype.indexOf() ini merupakan object yang dimiliki struktur data array
// CONTOH: (tampilkan di browser)
//Array.prototype.hello = () => {
    //console.log('hello world')
    //}
    //const kelas1 = [1, 2, 3]    
    //const kelas2 = [1, 2, 3]

    
//MEMBUAT OBJEC6T DENGAN FACTORY FUNCTION
//CONVERTER RGB - HEX ATAU SEBALIKNYA DI BROWSER (RETURN STRING DENGAN METODE RGB YANG BISA DIGUNAKAN DALAM CSS PROPERTY/DI DALAM STYLE SUATU ELEMEN HTML), MEMBUAT OBJECT SEKALI, KEMUDIAN MENGOLAH DATA BAHAN DARI PARAMETER DENGAN OUTPUT SESUAI KEINGINAN KITA (SESUAI FUNGSI/OBJECT CONVERT COLOR DIBAWAH)
// function convertColor(r, g, b) {
//     const color = {};

//     color.r = r;
//     color.g = g;
//     color.b = b;

//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     color.hex = function() {
//         const { r, g, b } = this;
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     };
//  return color;
// }; 

//MEMBUAT OBJECT DENGAN CONSTRUCTOR FUNCTION
//new operator: yang memperbolehkan developer untuk membuat suatu instance yang didefinisikan oleh user object (object yang dibuat oleh kita sendiri) dan dianggap sbg building object/object yang masuk (berada di dalam javascriptnya sendiri) (seluruh data/tipe data di javascript merupakan object)
//membuat object kosong (new instance) yang akan berada di dalam prototype (di regis ke dalam javascript sbg build in prototype/object)
//akses pakai this
//method prototype function diawali uppercase/pascalcase
//new bisa ditambahin di suatu variabel juga
//prototype global, bisa dipanggil dimana aja, lebih efisien dari convertColor diatas
//*tampilin di browser
//Color()
//Color(11,199,4)
//new Color(11,199,4)
// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }
// Color.prototype.rgb = function () {
// 	const { r, g, b } = this;
// 	return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function () {
// 	const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// Color.prototype.rgba = function (a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r}, ${g}, ${b}, ${a})`;
// };
//*tampilin di browser new Color(11,199,4).rgb()
//const objColor = new Color(12,200,89)
//objColor.rgb()
//document.body.style.backgroundColor = new Color(19,200,30).rgba();
//rgba(0.5); *makin tipis

//OOP: Membuat Object dengan Class
//Method: Sebuah fungsi yang ada disebuah object 
//class bikin lebih efisien/efektif untuk memasukan  properti sebuah variabel ke prototypenya (makin ke bawah materinya makin efisien) 
// function Color(r, g, b) {
// 	this.r = r;
// 	this.g = g;
// 	this.b = b;
// }
// Color.prototype.rgb = function () {
// 	const { r, g, b } = this;
// 	return `rgb(${r}, ${g}, ${b})`;
// };
// Color.prototype.hex = function () {
// 	const { r, g, b } = this;
// 	return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// Color.prototype.rgba = function (a = 1.0) {
// 	const { r, g, b } = this;
// 	return `rgba(${r}, ${g}, ${b}, ${a})`;
// };
// class Color {
// 	constructor(r, g, b, name) {
// 		this.r = r;
// 		this.g = g;
// 		this.b = b;
// 		this.name = name;
// 		this.calcHSL();
// 	}
// 	innerRGB() {
// 		const { r, g, b } = this;
// 		return `${r}, ${g}, ${b}`;
// 	}
// 	colorName() {
// 		console.log('The color name is ' + this.name);
// 	}
// 	rgb() {
// 		return `rgb(${this.innerRGB()})`;
// 	}
// 	rgba(a = 1.0) {
// 		return `rgba(${this.innerRGB()}, ${a})`;
// 	}
// 	hex() {
// 		const { r, g, b } = this;
// 		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// 	}
// 	hsl() {
// 		const { h, s, l } = this;
// 		return `hsl(${h}, ${s}%, ${l}%)`;
// 	}
// 	fulllySaturated() {
// 		const { h, l } = this;
// 		return `hsl(${h},100%, ${l}%)`;
// 	}
// 	opposite() {
// 		const { h, s, l } = this;
// 		const newHue = (h + 180) % 360;
// 		return `hsl(${newHue},${s}%, ${l}%)`;
// 	}
// 	calcHSL() {
// 		let { r, g, b } = this;
// 		// Make r, g, and b fractions of 1
// 		r /= 255;
// 		g /= 255;
// 		b /= 255;
// 		// Find greatest and smallest channel values
// 		let cmin = Math.min(r, g, b),
// 			cmax = Math.max(r, g, b),
// 			delta = cmax - cmin,
// 			h = 0,
// 			s = 0,
// 			l = 0;
// 		if (delta == 0) h = 0;
// 		else if (cmax == r)
// 			// Red is max
// 			h = ((g - b) / delta) % 6;
// 		else if (cmax == g)
// 			// Green is max
// 			h = (b - r) / delta + 2;
// 		// Blue is max
// 		else h = (r - g) / delta + 4;
// 		h = Math.round(h * 60);
// 		// Make negative hues positive behind 360°
// 		if (h < 0) h += 360;
// 		// Calculate lightness
// 		l = (cmax + cmin) / 2;
// 		// Calculate saturation
// 		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
// 		// Multiply l and s by 100
// 		s = +(s * 100).toFixed(1);
// 		l = +(l * 100).toFixed(1);
// 		this.h = h;
// 		this.s = s;
// 		this.l = l;
// 	}
// }
// const skyColor = new Color(185, 243, 252, 'Sky');

//OOP: Extend, Super Function
//OOP DIPAKAI AGAR TIDAK TERJADI PENGULANGAN PROGRAM YANG TIDAK EFEKTIF DAN UNTUK DASAR PENGGUNAAN FRAMEWORK
// class Peliharaan {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     makan() {
//         return `${this.name} lagi makan`;
//     }
// }

// class Kucing extends Peliharaan {
//     ngeong() {
//         return 'Meong!';
//     }
//     construction(name, age, lives) {
//         super(name, age);
//         this.lives = lives;
//     }
// }

// class Anjing extends Peliharaan {
//     gonggong() {
//         return 'Guk!';
//     };
// };


//JAVASCRIPT ASYNCHRONOUS
//NON BLOCKING MEMBACA KODE SEKALIGUS 1 WAKTU
//CALL STACK: MEKANISME MEMORY JAVASCRIPT
//CALL STACK: MEKANISME UNTUK INTERPRETER (SEPERTI INTERPRETER JAVASCRIPT DI BROWSER WEB) UNTUK MELACAK LOKASI SKRIP YANG MEMANGGIL BANYAK FUNHGSI - FUNGSI YANG SEDANG DIJALANKAN DAN FUNGSI APA YANG DIPANGGIL DARI DALAM FUNGSI ITU DLL
//PADA SEBUAH KODE PROGRAM PYTHAGORAS, KITA HARUS MEMBUAT SEBUAH PROGRAM MENJALANKAN STEP SEMAKIN SEDIKIT KARENA MEMORI YANG DI PAKAI SEDIKIT, AGAR SUATU APLIKASI YANG KITA BUAT OPTIMAL
//SINGLE THREAD: JS BISA DIBACA SECARA SINKRONUS
//SINGLE THREAD: SEBUAH PROGRAM YANG HANYA DAPAT MENJALANKAN 1 PROSES DALAM SATU WAKTU
//CARA KERJA: BROWSER DIBUAT DENGAN API YANG BISA MENJALANAKAN TUGAS DIBALIK LAYAR (BIKIN setTimeout)
//JAVASCRIOT CALL STACK MEMAHAMI FUNGSI FUNGSI API SEHINGGA BISA MEMANFAATKAN KERJAAN BROWSER SEHINGGA BISA MEMANFAATKAN PROPERTI/METHOD
//PADA SAAT BROWSER SELESAI MENJALANKAN TUGAS, HASILNYA AKAN DIMASUKKAN KE DALAM STACK SBG CALL BACK (DIKEMBALIKAN KE DALAM INTERPRETER JAVASCRIPT)
//JAVASCRIPT MEMANFAATKAN BROWSER ENGINE YANG YANG DIBENTUK PAKAI C++ SEOLAH-OLAH BISA MULTI THREAD/NON-BLOCKING

setTimeout(function () {
    document.body.style.backgroundColor = 'red';
    setTimeout(function () {
        document.body.style.backgroundColor = 'yellow';
        setTimeout(function () {
            document.body.style.backgroundColor = 'green';
            setTimeout(function () {
                document.body.style.backgroundColor = 'blue';
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
//HAL YANG DITAKUTKAN PROGRAMMER JAVASCRIPT YAITU CALLBACK HELL, SEPERTI PYRAMID

searchMoviesApi(
    'naruto',
    function (movies) {
        saveToMyDb(
            movies,
            function () {
                // kalau berhasil kita simpan
                filteringMovie(
                    movies,
                    () => {},
                    () => {}
                );
            },
            () => {
                // kalau gagal kita coba lagi
            }
        );
    },
    () => {
        // server error
    });
//PROMISE: OBJECT YANG DIJANJIKAN ASYNCHRONOUS (RESPON OBJECT APAKAH PROSES FUNCTION SEBELUMNYA BERHASIL/TIDAK KALAU YA, BISA MELAKUKAN FUNCTION LAINNYA, KALAU GAGAL BISA MELAKUKAN PROSES LAINNYA DENGAN CARA YANG ELEGAN)
//// callback version
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

// Promise version
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		const delay = Math.floor(Math.random() * 4500) + 500;
		setTimeout(() => {
			if (delay > 2000) {
				reject('Error: Connection Timeout');
			} else {
				resolve(`Success: ${url} (${delay}ms)`);
			}
		}, delay);
	});
};

async function requestHandler() {
	try {
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Pesan Error', error);
	}
}

// requestPromise('movie.com')
// 	.then((result) => {
// 		console.log('page 1');
// 		console.log(result);
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 2');
// 		return requestPromise('movie.com');
// 	})
// 	.then(() => {
// 		console.log('page 3');
// 		return requestPromise('movie.com');
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

// requestPromise('movie.com')
// 	.then((response) => {
// 		console.log('success', response);
// 		requestPromise('movie.com')
// 			.then((response) => {
// 				console.log('success', response);
// 				requestPromise('movie.com')
// 					.then((response) => {
// 						console.log('success', response);
// 						requestPromise('movie.com')
// 							.then((response) => {
// 								console.log('success', response);
// 								requestPromise('movie.com')
// 									.then((response) => {
// 										console.log('success', response);
// 									})
// 									.catch((error) => {
// 										console.log('error', error);
// 									});
// 							})
// 							.catch((error) => {
// 								console.log('error', error);
// 							});
// 					})
// 					.catch((error) => {
// 						console.log('error', error);
// 					});
// 			})
// 			.catch((error) => {
// 				console.log('error', error);
// 			});
// 	})
// 	.catch((error) => {
// 		console.log('error', error);
// 	});

// requestCallback(
// 	'movie.com',
// 	function (response) {
// 		console.log('success', response);
// 		requestCallback(
// 			'movie.com',
// 			function (response) {
// 				console.log('success', response);
// 				requestCallback(
// 					'movie.com',
// 					function (response) {
// 						console.log('success', response);
// 						requestCallback(
// 							'movie.com',
// 							function (response) {
// 								console.log('success', response);
// 								requestCallback(
// 									'movie.com',
// 									function (response) {
// 										console.log('success', response);
// 									},
// 									function (error) {
// 										console.log('error', error);
// 									}
// 								);
// 							},
// 							function (error) {
// 								console.log('error', error);
// 							}
// 						);
// 					},
// 					function (error) {
// 						console.log('error', error);
// 					}
// 				);
// 			},
// 			function (error) {
// 				console.log('error', error);
// 			}
// 		);
// 	},
// 	function (error) {
// 		console.log('error', error);
// 	}
// );