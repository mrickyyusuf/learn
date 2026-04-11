/* 
// 1. Object Literal
let objectOrang = {
  nama: "Ucup",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(
      `Halo ${this.nama}, selamat makan`
    );
  },
};
console.log(objectOrang);
objectOrang.makan(3);
console.log(objectOrang);
*/

/*
// 2. Function Declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama = nama; // membuat property sesuai yang di input di parameter
    mahasiswa.energi = energi;
    mahasiswa.makan = function(porsi) {
      this.energi += porsi;
      console.log(`Halo ${this.nama}, selamat makan!`);
    }
    mahasiswa.main = function(jam) {
      this.energi -= jam;
      console.log(`HEY ${this.nama}, jangan main terus!`)
    }
    return mahasiswa;
}
let ucup = Mahasiswa('Ucup', 10);
console.log(ucup);
ucup.makan(3)
console.log(ucup);
ucup.main(2);
console.log(ucup);
*/

/*
// 3. Constructor Function
function Mahasiswa(nama, nilai) {
  this.nama = nama;
  this.nilai = nilai;
  this.belajar = function(jam) {
    this.nilai += jam;
    return `Selamat, ${this.nama}! Karena belajar, nilai Anda bertambah!`;
  }
  this.main = function(jam) {
    this.nilai -= jam;
    return `Kurangi jam main Anda, ${this.nama}! Nilai Anda memburuk!`;
  }
}
let joseph = new Mahasiswa('Joseph', 25);
joseph.belajar(5);
console.log(joseph);
joseph.main(15);
console.log(joseph);
*/

/*
// 4. Object.create()
// buat object parent sebagai solusi sementara
const MethodMhs = {
  main: function(jam) {
    this.energi -= jam;
    console.log(`HEY, ${this.nama}. Jangan kebanyakan main!>:(`);
  },

  makan: function(kalori) {
    this.energi += kalori;
    console.log(`Selamat makan, ${this.nama}. Jangan lupa berdoa^^`);
  },

  tidur: function(jam) {
    this.energi += jam * 2;
    console.log(`Selamat tidur, ${this.nama}. Semoga mimpi indah:D`);
  },
}

function Mhs(nama, energi) {
  // let mahasiswa = {};
  let mahasiswa = Object.create(MethodMhs);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  return mahasiswa;
}

let joseph = Mhs('Joseph', 30);
let yusuf = Mhs('Yusuf', 20);
let ucup = Mhs('Ucup', 25);

console.log(joseph);
console.log(yusuf);
console.log(ucup);
yusuf.makan(10);
joseph.tidur(5);
ucup.main(15);
console.log(joseph);
console.log(yusuf);
console.log(ucup);
*/

// 5. Prototype
/* 
// tanpa class
function Mhs(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}  

Mhs.prototype.makan = function(porsi) {
  this.energi += porsi;
  return `Selamat makan ${this.nama}`;
}

Mhs.prototype.main = function(jam) {
  this.energi -= jam;
  return `Jangan main terus ${this.nama}`;
}

Mhs.prototype.tidur = function(jam) {
  this.energi += jam * 2;
  return `Selamat tidur ${this.nama}`;
}

let ucup = new Mhs('Ucup', 200);

console.log(ucup);
ucup.tidur(10);
console.log(ucup);

// dengan class
class Mhs {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Hai, ${this.nama}. Selamat makan`;
  }
  
  main(jam) {
    this.energi -= jam;
    return `HEY! ${this.nama}. KURANGI MAIN ANDA!`;
  }
  
  tidur(jam) {
    this.energi += jam * 2;
    return `Selamat tidur, ${this.nama}. Semoga mimpi indah`;
  }
}

let dika = new Mhs('Dika', 100);

console.log(dika);
dika.makan(20);
console.log(dika);

// tipe data pada js isinya merupakan object, jadi secara default sudah membawa/mewarisi prototype, yang mana di dalamnya ada method bawaan (contohnya pada array)
let array = [];
let array = new Array();
function Array() {
  let this = Object.create(Array.prototype);
}
let angka = [3,2,1];
let acak = [5,7,3,2,9];
console.log(angka.reverse());
console.log(acak.sort());
console.log(Array.prototype);
*/

// 6. execution context, hoisiting, scope
/*
console.log(test);
var test = 'belajar hoisting, ini undefined';
var nama = 'Ricky Yusuf';
var username = '@mrickyyusuf';

function cetakURL() {
  var instagramURL = 'https://instagram.com/';
  console.log(arguments[0]);
  return instagramURL + username;
}

console.log(cetakURL('@yousofreaky', '@josephhhx'));
function a() {
  console.log('ini a');

  function b() {
    console.log('ini b');

    function c() {
      console.log('ini c');
    }
    c();
  }
  b();
}
a();

function satu() {
  var nama = 'namaku siapa?';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'siapa namaku?';
satu();
dua('namaku cecep');
console.log(nama);
*/

// 7. closure
/*
function init() {
  let nama = 'ucup';
  function tampilNama() {
    console.log(nama);
  }
  tampilNama();
}
init();

function init() {
  // let nama = 'ucup';
  return function(nama) {
    console.log(nama);
  }
}
let panggil = init();
panggil('ucup');
*/

// contoh function factories
/*
function salam(waktu) {
  return function(nama) {
    return `Halo, ${nama}. Selamat ${waktu}.`;
  }
}

let greetings = salam('pagi');
console.log(greetings('ucup'));

// contoh private method
let berhitung = (function() {
  let hitung = 0; // seolah-olah private method, ini tak terpengaruh
  return function() {
    return ++hitung; // ini lumayan kompleks, harus di review lagi (kurang paham kausalitasnya, kenapa ditulis seperti ini)
  }
})();
hitung = 10; // tak diperpengaruhi oleh ini
console.log(berhitung());
console.log(berhitung());
console.log(berhitung());
console.log(berhitung());
console.log(berhitung());
*/

// 8. var, let, const. Kenapa var tak lagi direkomendasikan?
/*
var a; // konsep hoisting
console.log(a);
a = 10;
// perhatikan looping code berikut, var memungkinkan kita mengakses variabel di dalam scope function karena var menganut function scope bukan block scope
for (var b = 0; b <= 10; b++) {
  console.log(b);
}
// teknik function scope, IIFE, SIAF
function testFs() { // function scope
  for (var fs = 0; fs <= 10; fs++) {
    console.log(fs);
  }
}
console.log(fs); // error (sudah benar V)
testFs();
// atau
(function() { // IIFE
  for (var iife = 0; iife < 10; iife++) {
    console.log(iife);
  }
}());
console.log(iife); // error (sudah benar V)
// atau
var testSiaf = function() { // SIAF
  for (var siaf = 0; siaf < 10; siaf++) {
    console.log(siaf);
  }
}
console.log(siaf); // error (sudah benar V)
testSiaf();
// programmer js biasasnya mengakalinya dengan IIFE/SIAF. Dari pada repot-repot, ubah var menjadi let/const, perilakunya sama. Alasan js menganut function scope, karena js dibuat hanya dalam 10 hari, sehingga tidak sempat. Solusinya agar mengandung block scope (sama dengan bahasa pemrograman lain) adalah ubah var menjadi let/const
for (let testLet = 0; testLet <= 5; testLet++) {
  console.log(testLet);
}
console.log(testLet); // error (sudah benar V)
// let vs const, whats the different? Let bisa diubah sedangkan const tidak, sekiranya suatu variabel constant nilainya maka gunakan const, ada yang merekomendasikan untuk menggunakan let ketika membuat for saja, hal ini dilakukan agar varibel tidak bertumpuk-tumpuk yang dapat menyebabkan perubahan state. Meski begitu, const bersifat mutable/non immutable
const cnst = 10;
cnst = 11; // error
const arr = [1,2,3];
arr = [1,2,3,4]; // error
arr.push(4); // sukses
console.log(arr);
const obj = {
  nama: 'ucup',
  usia: 100,
}
obj = { // error
  error: 'tidak bisa mengubah isi object, error';
}
// sukses
obj.nama = 'cecep';
obj.usia = 200;
console.log(obj);
*/

// Belajar arrow function & this pada arrow function //
// constructor function tidak bisa diubah ke arrow function, tetapi method constructor function bisa
// tidak ada konsep this pada arrow function, dia akan cari keluar (lexical scope)
// arrow function tidak bisa digunakan di object literal karena thisnya mengacu ke window
// undefined, karena thisnya menganut lexical scope, saat naik ke atas tidak ada maka thisnya mengacu ke window
// another case
// constructor function
// this mengacu ke local karena constructor function adalah expression function jadi tidak kena hoisting
// declaration function
// this mengacu ke global karena declaration function kena hoisting, solusinya ganti anonymus function menjadi arrow function
// function declaration
/* const myFunc = function (param) {
  return `Hello ${param}`;
};
console.log(myFunc("Ricky"));

// arrow function = concise function expression -mdn
const showName = (name) => `Hello ${name}`;
console.log(showName("Joseph")); // 1

const greetings = (nameUser, time) => `Hello ${nameUser}, good ${time}`;
console.log(greetings("Yusuf", "morning")); //2

const anonFunc = () => `Call anonymus function with no paramter`;
console.log(anonFunc()); //3

const complexVersion = (buyer, bill) => {
  if (bill > 50) {
    return `Warning! your bill is higher than ${bill}, ${buyer}! PLease pay attention to your bill`;
  } else {
    return `Your bill is ${bill}, ${buyer}`;
  }
};
console.log(complexVersion("Rika", 48)); // 4

// Task 1: refactor this function to arrow function
const student = ["Ricky", "Joseph", "Ryu", "Rika", "Ahmed"]; */
/* instead this
const letterCounter = student.map(function(studentName) {
  return studentName.length
})
do this */
/* const letterCounter = student.map((studentName) => studentName.length);
console.log(letterCounter);

// Task 2: return it to object
const letterCounterToObject = student.map((studentName) => ({
  studentName,
  totalLetter: studentName.length,
}));
console.table(letterCounterToObject);

// this context in arrow function
// const Mahasiswa = () => { // can't
const Mahasiswa = function () {
  this.namaMhs = "Ucup";
  this.usia = 20; */
/* this.sayHello = function() {
      console.log(`Halo, nama saya ${this.namaMhs}, saya berusia ${this.usia}`)
  } */
/* this.sayHello = () => {
    // can
    console.log(`Halo, nama saya ${this.namaMhs}, saya berusia ${this.usia}`);
  };
};
const ucup = new Mahasiswa();
console.log(ucup.sayHello());

// constractor function =/ refactor/change it to arrow function
// method = can
// tidak ada konsep/konteks this pada arrow function dia akan cari keluar/ke atas
// let's look at object literal bellow for example
const mhs = {
  nama: "Ujang",
  usia: 22,
  salam: function () {
    // can
    console.log(`Assalamualaikum, saya ${this.nama}, berusia ${this.usia}`);
  }, */
/* salam: () => { // can't, this = window, not properties
    console.log(`Assalamualaikum, saya ${this.nama}, berusia ${this.usia}`)
    console.log(this)
  } */
/* };
console.log(mhs.salam());

// function declaration got hoisting, function expression not
const Mhswa = function () {
  this.namaMhswa = "Yucup";
  this.usiaMhswa = 21;
  this.greets = function() { // not hoisted, method and function expression, can
    console.log(`Halo, nama saya ${this.namaMhswa}, saya berusia ${this.usiaMhswa}`);
  }; */
/* setInterval(function() { // hoisted, function declaration, can't, solve this with arrow
    console.log(this.usiaMhswa++)
  }, 1000) */
/* setInterval(() => { // like this
    console.log(this.usiaMhswa++)
  }, 1000)
};
const yucup = new Mhswa();
console.log(yucup.greets()); */

// Belajar higher order function //
// function yang memanggil function lain, baik sebagai argument maupun return value -eloquentjavascript
// first class function
// js memperlakukan function sebagai object yang notabennya value selayaknya integer, string, dll, makanya bisa disimpan sebagai argument dan return value function lainnya -sitepoint
// contoh:
/* function kerjakanTugas(matakuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
  selesai();
};

function selesai() {
  alert('Selesai mengerjakan tugas!');
};

kerjakanTugas('Pemrograman web', selesai)

// function kerjakanTugas disebut higher order function, function selesai sebagai argument function kerjakanTugas disebut callback
// contoh lain:
function ucapSalam(waktu) {
  return function(nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
  };
};

const selamatMalam = ucapSalam('malam')
console.info(selamatMalam('Chubz'))

// tujuan membuat higher order function: abstraksi, agar code menjadi sederhana
// misalnya: 
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

repeat(10, console.log)
repeat(3, alert)

// mendekatkan kita ke paradigma functional programing
// contoh higher order function yang sering digunakan pada array method: 
Array.prototype.map()
Array.prototype.filter()
Array.prototype.reduce() */

// Praktik arrow function ada di file praktik.js //

// Filter, map, reduce //
// ilustrasi penggunaan function dengan contoh: pembuatan hotdog
// filter: bahan-bahan dimasukkan ke array, arraynya di filter untuk mencari sayur, lalu menghasilkan array baru berisi sayuran -datasciencecentral -Anjana Vakil
// map: array dipetakan ke function, analogi pakai bahan makanan yang ada di filter: element bahan makanan akan dilakukan potong pada hof map dan menghasilkan array baru (ini sebenarnya lebih mirip forEach) dan tidak mengubah array lama,
// array baru hasil dari function map dapat diberikan kepada hof reduce (hof berikutnya), reduce: analoginya yaitu menggabungkan semua bahan makanan untuk menjadi satu hotdog utuh (array baru), (melakukan sesuatu pada seluruh array)
// ketiga hof bisa digabungkan dengan method chaining (.)
// praktik:
/* const angka = [7, -7, 9, 3, 3, 4, 6, -9, 1, -4];
// cari angka >= 3, pakai filter, sebelum itu coba pakai for loop
const angkaBaru = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) { angkaBaru.push(angka[i]) };
};
console.log(angkaBaru);

// dengan filter (tanpa wpu)
const angkaBaruFilter = angka.filter(paramAngka => paramAngka >= 3);
console.log(angkaBaruFilter);

// map
const angkaBaruMap = angka.map(mapAngka => mapAngka * 2);
console.log(angkaBaruMap)

// reduce
const angkaBaruReduce = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 1 ) // 1 sebagai default
console.log(angkaBaruReduce)

// chaining method: (1.) cari angka > 5, (2.) hasilnya kalikan 3, (3.) jumlahkan
const rantai = angka.filter(paramRantai => paramRantai > 5)
                    .map(paramRantai => paramRantai * 3)
                    .reduce((acc, paramRantai) => acc + paramRantai)
console.log(rantai)                    

// Latihan filter, map, reduce, chaining method, cek di file praktik.js //

// String template/literal template & latihan di file praktik.js //
// string yang bisa nampung expression & menggunakan backtick ``
const StrTemplate = `This is string templat`;

// bisa multiline string
const canMultiline = `This 
                      is 
                      multiline 
                      string!`;

// bisa embedded expression
const ex = 20;
const embedEx = `My age is ${ex} as expression in string template`;
const y = 25; // contoh lain embedded expression
const evenOrOdd = y % 2 === 0 ? 'genap' : 'ganjil';
console.log(evenOrOdd);

// bisa html fragments, penerapan multiline string ketika ingin membuat html fragments
const mhsa = {
  nama: 'Ricky',
  usia: 20,
  npm: 10124996,
  email: 'example@email.com'
};
const ele = `<div class="mhs>
              <h2>${mhsa.nama}</h2>
              <span class="npm">${mhsa.npm}</span>
            </div>`;
console.log(ele);

// bisa expression interpolation
const a = 10;
const b = 15;
const interpolation = `Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 * a + b}`;
console.log(interpolation); */

// bisa tagged template
// Tagged template literal //
// 1.HTML fragment
/* const mhsw = {
  nama: 'Ryu',
  usia: 20,
  npm: 10124996,
  email: 'email@example.com'
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="npm">${mhs.npm}</span>
</div>` */

// 2. Looping
/* const mhsArr = [
  {
    nama: 'riyu',
    email: 'riyu@example.com' 
  },
  {
    nama: 'ricky',
    email: 'ricky@example.com' 
  },
  {
    nama: 'ucup',
    email: 'ucup@example.com'
  }
];

const el = `<div class="mhs">
  ${mhs.map(m => `<ul>
      <li>${m.nama}</li>
      <li>${m.email}</li>
    </ul>`).join('')}
</div>`; */

// 3. Conditional ternary
/* const lagu = {
  judul: 'kau adalah',
  penyanyi: 'isyana sarasvati',
  feat: 'rayi saputra'
};

const el = `<div class="lagu">
  <ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
  </ul>
</div>`; */

// 4. Campuran dan nested
/* const mhs = {
  nama: 'Ricky',
  semester: 4,
  matakuliah: [
    'TPT', 'Matlan 1', 'SBD', 'MSIM'
  ]
}

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
      ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
  `
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">Semester: ${mhs.semester}</span>
  <h4>Mata kuliah:</h4>
  ${cetakMataKuliah(mhs.matakuliah)}
</div>`

document.body.innerHTML = el;

// Tagged template //
// Bentuk kompleks > template literal, memungkinkan membaca template literal lewat function
const nama = 'Chubz'
const umur = 21
const email = 'chubz@example.com'
// const str = coba`Halo, saya ${nama}, berusia ${umur} tahun`
// function coba(strings, ...values) {
  //   // let result = ''
  //   // strings.forEach((str, i) => {
    //   //   result += `${str}${values[i] || ''}`
    //   // })
    //   // return result
    //   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
    // }

const str = highlight`Halo, saya ${nama}, berusia ${umur} tahun. Contact saya melalui email ${email}`;
function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    "",
  );
};

document.body.innerHTML = str; */

// selain itu tagged template juga berguna untuk escaping/sanitize html tags, translation & internationalization, styled component (contoh-contohnya ada di ss-an di galeri foto hp)

// for..of & for..in //
// for of membuat perulangan yang dapat mengiterasi iterabel object: string, array, arguments/nodelist, typedarray, map, set, user-defined iterables
/* const mahasiswa = ["ucup", "revan", "satya"];
// mahasiswa.forEach(m => console.log(m));
for (const mhs of mahasiswa) {
  console.log(mhs);
}
// mahasiswa.forEach((m, i) => console.log(`${m} adalah mahasiswa ke-${i + 1}`));
for (const [i, m] of mahasiswa.entries()) {
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}

// for of di nodelist
const listName = document.querySelectorAll(".name");
// listName.forEach(n => console.log(n.textContent))
for (const n of listName) {
  console.log(n.innerHTML);
}

// for of di arguments
function sum() {
  let result = 0;
  // return arguments.reduce((a, i) => a + i);
  // arguments.forEach(a => result += a);
  for (const a of arguments) {
    result += a;
  }
  return result;
}
console.log(sum(1, 2, 3, 4, 5));

// for in membuat perulangan yang dapat mengiterasi enumerable
const mhs = {
  nama: 'ricky',
  usia: 23,
  email: 'ricky@example.com'
}

for (const m in mhs) {
  // console.log(m)
  console.log(mhs[m])
} 

// Destructuring variable/assignment //
// expression/syntax untuk membongkar nilai array/property object ke variabel terpisah
// contoh array:
const array = ['one', 'two', 'three'];
const [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

// const intro = ['Hi', 'my', 'name', 'is', 'Ricky'];
// const [greet, one, two, three, name] = intro;
// skipping items
// const [greet, , , , name] = intro;
// console.log(name);

// swap items
let a = 1;
let a = 2;
conosole.log(a);
conosole.log(b);
[a,b] = [b, a];
conosole.log(a);
conosole.log(b);

// return value pada function (function return array, array ditangkap sintaks destructuring)
function try() {
  return [1, 2];
};
// const a = try();
const [a, b] = try();
// console.log(a[1]);
console.log(a);
console.log(b);

// rest parameter
// const [a, b] = [1, 2, 3];
const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
console.log(values[5]); 

// contoh object
const mhs = {
  nama: 'Yusuf',
  usia: 30,
  kelas: 2,
  email: 'yusuf@example.com'
};
const { name, age, class, email } = mhs;
console.log(name);
console.log(age);
console.log(class);
console.log(email); 

const mhs = {
  nama: 'Yusuf',
  umur: 23,
}
// const nama = mhs.nama; // dulu
// const umur = mhs.umur; // dulu
// const { a, b } = mhs; // ngga bisa
// console.log(a);
const { nama, umur } = mhs; // sekarang
console.log(nama);

// destructuring/assignment tanpa deklarasi object
({ nama, umur } = {
  nama: 'Joseph',
  umur: 24
});
// assign ke variabel baru
const mhs = {
  nama: 'Ucup',
  umur: 30,
  email: 'ucup@example.com'
};
// const { nama: n, umur: u } = mhs;
// console.log(n);

// memberikan default value & assign ke variabel baru
// const { nama: n, umur: u, email: e = 'ucup@emailexample.com' } = mhs;
// console.log(email);
// console.log(e);
// rest parameter
const { nama: n, ...restParam } = mhs;
console.log(restParam.email); */

// mengambil field pada object, setelah dikirim sebagai parameter untuk function
// const mhs = {
//   id: 10124996,
//   nama: "Ucup",
//   umur: 30,
//   email: "ucup@example.com",
// };
// // function getIdMhs(mhs) {
// function getIdMhs({ id }) { // masuk kesini objectnya, dibongkar, diambil hanya property-nya saja (ga ngambil semua object, hanya beberapa bisa)
// //  return mhs.id;
//  return id;
// };
// console.log(getIdMhs(mhs)); // dikirim object

// Destructuring function //
// destructuring return value pada function
// function addMultiply(a, b) {
// function calculate(a, b) {
//   // return [a + b, a * b];
//   // return [a + b, a - b, a * b, a / b];
//   return [a + b, a - b, a * b];
// }
// // const add = addMultiply(5, 6)[0]; // ambil pertambahan
// // const multiply = addMultiply(5, 6)[1]; // ambil perkalian
// // console.log(add);
// // console.log(multiply);
// // const [ jumlah, kali ] = addMultiply(2, 3);
// // console.log(jumlah);
// // console.log(kali);
// // const [ tambah, kurang, kali, bagi ] = calculate(2, 3);
// // const [ tambah, kurang, kali, bagi = 'nothing' ] = calculate(2, 3);
// console.log(bagi);
// const [ kali, tambah, kurang, bagi = 'nothing' ] = calculate(2, 3); // kekurangan kalau men-destructure array, harus presisi/pas urutannya, tidak boleh salah/tertukar
// console.log(kali); // kalau ingin ga terpengaruh, ubah return valuenya menjadi object bukan array
// function newCalculate(a, b) {
//   return { // me-return object sebagai solusi, agar bisa tukar menukar
//     tambah: a + b;
//     kurang: a - b;
//     kali: a * b;
//     bagi: a / b;
//   };
// };
// const { bagi, tambah, kali, kurang } = newCalculate(2, 3);
// console.log(kurang);

// destructuring function arguments
// tanpa destructuring
// const mhs1 = {
//   nama: 'dika',
//   umur: 33,
//   email: 'dika@unpas.com',
//   // object complex example
//   nilai: {
//     tugas: 80,
//     uts: 85,
//     uas: 75
//   }
// }
// // function cetakMhs(nama, umur) {
//   // // console.log(cetakMhs(mhs1.nama, mhs1.umur));
//   // console.log(cetakMhs(mhs1)); // pecah di parameter, yang ditangkap adalah object
//   // };
// // dengan destructuring
// // function cetakMhs({ nama, umur, nilai }) { // destructuring disini, akan berguna jika objectnya kompleks
// function cetakMhs( { nama, umur, nilai: { tugas, uts, uas } } ) { // destructuring lagi nilainya disini agar di return value tidak perlu ${nilai.uas}
//   // return `Halo, nama saya ${nama}, saya berusia ${umur} tahun, dan nilai uas saya adalah ${nilai.uas}`;
//   return `Halo, nama saya ${nama}, saya berusia ${umur} tahun, dan nilai uas saya adalah ${uas}`;
// };
// console.log(cetakMhs(mhs1));

// Spread operator //
// operator yang memecah (expand/unpack) iterables (sesuatu yang bisa di loop) menjadi single element
// const  mhs = ['snadhika', 'doddy', 'erik'];
// console.log(...mhs); // tiap-tiap element di array dipecah
// console.log(...mhs[0]); // dipecah menjadi masing-masing 1 huruf terpisah
// kapan dipakai? Ketika:
// menggabungkan 2 array
// const dosen = ['ike', 'adi', 'imam'];
// const orang = [...mhs, ...dosen]; // menggabungkan dengan syntax ini
// const orang = [mhs, dosen]; // contoh menggabungkan yang salah, menghasilkan array di dalam array
// const orang = mhs.concat(dosen); // contoh lain dalam menggabungkan array menggunakan method array concat, spread operator lebih fleksibel daripada ini, contohnya ketika ingin menambahkan element ditengah-tengah gabungan element array mhs dan dosen
// const orang = [...mhs, 'dedes', ...dosen];
// console.log(orang);

// meng-copy array
// const  mhs = ['sandhika', 'doddy', 'erik'];
// const mhs1 = mhs; // sama, tapi mengubah variabel mhs
// mhs1[0] = 'Fajar';
// console.log(mhs1);
// console.log(mhs); // berubah, harapannya hanya copy-annya yang berubah padahal
// const mhs1 = [...mhs]; // solusinya dengan ini
// mhs1[0] = 'Jafar';
// console.log(mhs1);
// console.log(mhs); // tidak berubah, benar

// contoh lain
// const listMahasiswa = document.querySelectorAll("li");
// console.log(listMahasiswa); // NodeList
// console.log(listMahasiswa[0].textContent); // tiap-tiap huruf ingin dimasukkan ke array
// looping biasa
// const mahasiswa = [];
// for (let i = 0l i < listMahasiswa.length; i++) { // pakai map, alih-alih pakai ini
//   mahasiswa.push(listMahasiswa[i].textContent);
// };
// console.log(mahasiswa)
// const mahasiswa = listMahasiswa.map(m => m.textContent); // error, karena nodelist tidak ada method map, sementara map untuk array
// const mahasiswa = [...listMahasiswa].map(m => m.textContent); // solusinya ubah jadi array dengan spread operator
// console.log(mahasiswa);

// contoh lain (cek file html dan css), zoom huruf ketika di hover
// pada saat di hover sudah berubah perilakunya (cek file css), tapi inginnya per huruf, maka kita ubah stringnya menjadi single element pakai spread operator dan kita sisipkan span
// ambil nama
// const nama = document.querySelector(".nama");
// pecah huruf, lalu di looping pakai map, dan diubah ke string pakai join
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// console.log(huruf); // untuk cek di console, apakah logic code jalan
// tampilkan dengan menimpan variabel nama dengan huruf (apa beda innerHTML dengan innerText dan textContent?)
// nama.innerHTML = huruf;
// ubah dan tulis css (cek file css baris 37 - 47)

// Rest parameter //
// sesuatu yang merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array
// function f(a,b, ...args) {
// function f(...args, salah) { // rest parameter hanya bisa dipakai di akhir parameter
// function f(...args) {
// a dan b mewakili 1 dan 2 sementara ...args mewakili sisanya
// return `a = ${a}, b = ${b}, myArgs = ${args}`;
// return args;
// return arguments; // di dalam function secara default punya variabel namanya arguments yang berisi semua parameter yang dikirim pada saat function dipanggil dan bukan array sehingga kita tidak bisa memakai method-method dalam array
// kalau pakai rest parameter, sama saja, kita ambil semua parameternya tapi bentuknya sudah langsung array
// pakai arguments bisa, tapi harus ubah dulu arguments-nya jadi array atau pakai spread operator
// return Array.from(arguments);
// return [...arguments];
// };
// console.log(f(1,2,3,4,5));

// contoh kasus menjumlahkan seluruh parameter yang dikirim
// bisa pakai for loop biasa
// bisa pakai for of
// bisa pakai reduce
// function jumlahkan(...angka) {
//   // let total = 0;
//   // for (const totals of angka) {
//   //   total += totals;
//   // }
//   // return total;
//   return angka.reduce((ac, totals) => ac + totals);
// };
// console.log(jumlahkan(1,2,3,4,5));

// kita juga bisa memakai rest parameter ketika melakukan array dan object destructuring
// array kelompok 1
// const kelompok1 = ['sandra', 'ameliahhh', 'kiya', 'fahmi', 'raden'];
// kita ingin nama 1 adalah ketua dan nama 2 adalah wakil ketua sisanya member
// const [ketua, wakil, ...member] = kelompok1;
// console.log(member);
// object tim developer
// const team = {
//   pm: 'Meilani',
//   fe1: 'ucup',
//   fe2: 'nabilaa',
//   be: 'najwin',
//   do: 'atan',
//   uiux: 'natalia'
// }
// const { pm, ...myTeam } = team;
// console.log(myTeam);

// contoh lain: ketika mau filtering pada parameter yang ada (yang dikirimkan)
// kita bagi menjadi 2 bagian parameter, parameter pertama tipenya mau apa, parameter kedua sisa nilainya
// function filterBy(type, ...values) {
//   return values.filter(val => typeof val === type)
// };
// // kita ingin memfilter berdasarkan tipe datanya
// console.log(filterBy('number', 1, 2, 'ucup', false, 'cecep', true, 99));
// console.log(filterBy('string', 1, 2, 'ucup', false, 'cecep', true, 99));
// console.log(filterBy('boolean', 1, 2, 'ucup', false, 'cecep', true, 99));

// Asynchronous //
// promise, callback, ajax, async await
// secara umum, js bahasa pemrograman tingkat tinggi, dinamis, dapat berjalan pada browser -wikipedia.com
// jsecara spesifik, js is single-threaded, asynchronous, non-blocking, concurrent language -latenflip.com
// single threaded itu apa? Pahami thread terlebih dahulu, thread adalah urutan eksekusi kode yang dapat dilakukan secara bebas/independent satu sama lain, artinya js hanya bisa melakukan 1 hal, dalam 1 waktu tertentu
// contoh single thread: thread 1 task 1 -> task 2 -> task 3 -> task 4 (membaca dan menyelesaikan baris per baris)
// multi thread: secara umum task dikerjakan satu per satu tapi bisa dibagi atau dipecah ke berbagai thread atau thread yang berbeda
// contoh multi thread: thread 1 task 1            task 4
//                      thread 2       task 2
//                      thread 3             task 3
// blocking: "kalau task 1 atau suatu task belum selesai, maka tidak dapat mengerjakan task berikutnya, menunggu hingga task sebelumnya selesai"
// non-blocking: "walau suatu task belum selesai, kita dapat mengerjakan task berikutnya (kebalikan blocking)"
// synchronous: task 1 -> task 2 -> task 3 -> task 4 (berurut)
// asynchronous (single threaded): task 1 (start) -> task 2 (start) -> task 1 -> task 2 --- task 1 (done) -> task 2 (done) (concurrent/concurrency)
// asynchronous (multi threaded): thread 1 task 1 task 4 (parallel/parallelism)
//                                thread 2    task 2
//                                thread 3  task 3..........
// kesimpulan:
// single thread & multi thread: berhubungan dengan task execution environment
// blocking & non blocking: berhubungan dengan code technique yang behubungan dengan input output
// asynchronous & synchronous: berhubungan dengan code technique yang behubungan dengan http request, biasanya ajax
// concurrent & parallelism: berhubungan dengan task execuiton environment, biasanya berhubungan dengan infrastructure, hardware, virtualization
// js punya v8 engine untuk menjalankannya, yang tertanam di dalam browser, khususnya chrome, isinya ada heap & stack
// heap tempat untuk alokasi memory, tempat menyimpan variabel, function, untuk melakukan hoisting
// stack tempat untuk menjalankan code/logic/script & pemanggilan function
// contoh stack:
// console.log('satu'); // tertera di stack - dieksekusi - hilang dari stack/selesai
// console.log('dua'); // tertera di stack - dieksekusi - hilang dari stack/selesai
// console.log('tiga'); // tertera di stack - dieksekusi - hilang dari stack/selesai
// // contoh lain yang lebih kompleks:
// function kalikan(a, b) { // 1. heap, 9. cari function kalikan
//   return a * b; // 10. muncul di stack - pertama dieksekusi - hilang
// };
// function hitungLuas(sisi) { // 2. heap, 7. cari function hitungLuas
//   return kalikan(sisi, sisi); // 8. muncul di stack, 11. - kedua dieksekusi - hilang
// };
// function cetakLuasKotak(sisi) {
//   // 3. heap, 5. cek apakah ada function cetakLuasKotak
//   const luas = hitungLuas(sisi); // 6. muncul di stack, 12. meyimpan 25 ke variabel luas (masuk ke heap), dan - ketiga dieksekusi - hilang
//   console.log(luas); // 13. muncul di stack - keempat dieksekusi - hilang
// };
// cetakLuasKotak(5); // 4. stack (muncul), 14. - selesai dieksekusi - hilang
// // konsep event loop: latenflip.com/loupe dan youtube.com/watch?v=8aGhZQkoFbQ
// // contoh lagi
// console.log('satu'); // 1. muncul di stack - eksekusi - hilang
// complexFunction(); // 2. delay, menunggu function ini dijalankan hingga selesai, barulah menampilkan tiga (salah satu contoh blocking)
// kondisi diatas kadang membuat kita tidak bisa berinteraksi dengan web karena prosesnya masih berjalan, membuat web menjadi lag/hang
// console.log('tiga'); // 3. muncul di stack - eksekusi - hilang
// // solusinya dengan asynchronous callback
// // asynchronous callback terjadi karena adanya event loop
// console.log('satu'); // 1. muncul di stack - eksekusi - hilang
// setTimeout(() => { // 2. muncul di stack - langsung eksekusi (tidak menunggu 5 detik) - hilang. Parameter pertamanya callback, callback ada yang bertipe asynchronous, contohnya setTimeout
// //   complexFunction();
// // }, 0);
//   console.log('dua'); // 4. setelah 5 detik, muncul di stack - eksekusi - hilang
// }, 5000);
// console.log('tiga'); // 3. muncul di stack (ngga ke block dua) - eksekusi - hilang
// arsitektur v8 lengkap: v8 = [heap, stack] -> web_api = [asynchronous_callback = [[dom], [ajax (XMLHttpRequest)], [setTimeout], [setInterval], [...]]] -> callabck_queue = [[onClick], [onLoad], [$.get], [delay], [...]] -> event-loop (back to v8)
// penjelasan kenapa setTimeout hilang sebenarnya bukan hilang tapi pindah ke web_api (menangani asynchronous callback yang bukan bagian dari v8). Setelah waktu selesai (asynchronous callback di web_api), seharusnya callback dijalankan, tapi web_api tidak bisa langsung menjalankan kembali ke dalam stack, sehingga masuk dan disimpan ke callback_queue, kemudian event-loop berjalan (mengecek apakah ada antrian di callback_queue, jika ada maka ambil callbacknya lalu simpan ke dalam stack untuk dieksekusi/dijalankan seperti biasa), setelah itu ulangi proses
// syarat kapan sebuah callback bisa masuk ke dalam stack -> jika stacknya telah kosong
// contoh (jangan lupa demokan code di bawah ini di latenflip.com/loupe)
// console.log('satu'); // 1. stack -> eksekusi -> hilang
// setTimeout(() => { // 2. stack -> web_api (milik web_api) -> menunggu 5 detik ->
//   console.log('dua') // 4b./4. callback_queue -> event_loop mengecek callback_queue -> tidak langsung masuk stack jika masih ada queue, -> 6. stack -> hilang
// }, 5000);
// // }, 0); // mengakali asynchronous function, mengubah delay setTimeoutnya menjadi 0, meski 0, prosesnya tetap sama harus lewat web_api dahulu
// console.log('tiga'); // 3. stack -> terus mengeksekusi apa yang ada di dalam program hingga dua masuk callback_queue (tapi di latenflip, ini langsung dieksekusi/hilang), -> 4a./5. hilang
// contoh terakhir menggunakan script dari web latenflip.com/loupe dan mendemokannya disana, intinya console.log selain web_api dijalankan seperti biasa (didahulukan karena bukan milik web_api), masuk - eksekusi - hilang. Dan function timer() serta function timeout() melalui proses web_api - callback_queue - event_loop - stack - repeat. Disini kita coba spam click "Click me!" button yang menyebabkan console.log("Click the button!") milik function timeout() sangat lama tampil, karena harus antri dari function timer() dispam click
// tujuan mempelajari dan membuat asynchronous function/asynchronous callback ini agar memberi kenyamanan pada user terutama dalam berinteraksi dengan aplikasi kita
// "don't block the event loop!"

// Callback & latihannya (cek di file praktik.js) //
// callback: sebuah function yang dikirmkan sebagai parameter pada function ynag lain -mdn
// callback: function yang dieksekusi setelah function lain selesai dijalanklan -codeburst.io
// contoh synchronous callback:
// function nama(nama) {
//   alert(`Halo, ${nama}`);
// };
// function tampilPesan(callback) {
//   const nama = prompt('Masukkan nama');
//   callback(nama);
// };
// tampilPesan(nama => alert(`Halo, ${nama}`));
// contoh lagi
// const mhs = [
//   {
//     "nama": "Ucup",
//     "npm": "10124996",
//     "email": "@example.com",
//     "jurusan": "Sistem informasi",
//     "idDospem": 1,
//   },
//   {
//     "nama": "Yusuf",
//     "npm": "10124997",
//     "email": "@example.com",
//     "jurusan": "Teknik informatika",
//     "idDospem": 2,
//   },
//   {
//     "nama": "Ricky",
//     "npm": "10124998",
//     "email": "@example.com",
//     "jurusan": "Teknologi informasi",
//     "idDospem": 3,
//   },
//   {
//     "nama": "Rika",
//     "npm": "10124999",
//     "email": "@example.com",
//     "jurusan": "Teknik komputer",
//     "idDospem": 4,
//   },
// ];
// code di bawah dijalankan secara synchronous
// console.log('mulai');
// mhs.forEach((m) => {
//   for (let i = 0; i < 10000000; i++) { // contoh dengan for loop yang lama agar synchronousnya lebih terlihat
//     let date = new Date();
//   };
//   console.log(m.nama); // hof parameternya sudah termasuk callback
// });
// console.log('selesai');
// contoh asynchronous callback: ajax dengan vanilla js
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       };
//     };
//   };
//   xhr.open('get', url);
//   xhr.send();
// };
// getDataMahasiswa('data/mahasiswa.json', success, error); // harus punya success dan error function, solusinya kalau ngga punya adalah pakai anonymous function
// code di bawah dengan di atas bedanya yang di bawah ini sudah asynchronous, mari kita cek:
// console.log('mulai');
// // getDataMahasiswa('data/mahasiswa.json', results => {
// //   const mhs = JSON.parse(results); // error, karena harus kita jalankan ke web server (simpan di web server)/pakai live server
// //   mhs.forEach(m => console.log(m.nama));
// // }, () => {});
// // untuk lebih mempermudah agar tidak perlu menulis code diatas dengan vanilla js adalah menggunakan bantuan jQuery minified cdn
// $.ajax({
//   url: 'data/mahasiswa.json',
//   // url: 'data/mahasiswa.jso', // contoh jika disalahin codenya untuk menampilkan kondisi ketika error
//   success: mhs => { // sudah dikembalikan langsung dalam bentuk json, jadi tidak perlu parsing
//     mhs.forEach(m => console.log(m.nama)) // untuk mengambil/menampilkan nama
//   },
//   error: (e) => {
//     console.log(e.responseText);
//   }
// });
// console.log('selesai');
// solusi untuk menggantikan ajax dengan jQuery (karena bergantung library eksternal), adalah dengan menggunakan function baru bawaan vanilla js yaitu fetch

// Promise //
// solusi callback hell
// 1. jQuery ajax
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=1618295e&s=avengers",
//   success: m => console.log(m),
//   error: e => console.log(e.responseText);
// });
// 2. vanilla js ajax
// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };
// xhr.open("get", "http://www.omdbapi.com/?apikey=1618295e&s=avengers");
// xhr.send();
// 3. fetch
// const movies = fetch("http://www.omdbapi.com/?apikey=1618295e&s=avengers");
// console.log(movies); // yang dikembalikan promise alih-alih data film
// fetch("http://www.omdbapi.com/?apikey=1618295e&s=avengers")
//     .then(response => response.json())
//     .then(response => console.log(response));
// promise: janji, "object yang merepresentasikan keberhasilan/kegagalan sebuah event yang asynchronous di masa yang akan datang"
// janji (terpenuhi/tidak/menunggu)
// status (fulfilled/rejected/pending)
// callback (resolve/reject/finally (bila waktu tunggu selesai, baik terpenuhi/tidak))
// aksi (that/catch)
// contoh:
// let ditepati = true;
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => { // new untuk membuat object
//   if (diteapti) {
//     resolve('Janji ditepati');
//   } else {
//     reject('Janji diingkari');
//   };
// });
// // console.log(janji1);
// janji1
//       .then(response => console.log('OK! : ' + response)) // mengambil resolvenya
//       .catch(response => console.log('NOT OK! : ' + response)); // kalau gagal di chaining catch
// contoh 2: membuat agar janji tidak langsung ditepati tetapi menunggu proses terlebih dahulu
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve('Ditepati setelah beberapa saat...');
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       resolve('Tidak ditepati setelah beberapa saat!');
//     }, 2000);
//   }
// });
// console.log('mulai');
// console.log(janji2); // promise pending tapi tidak selesai karena tidak menjalankan thennya
// console.log(janji2.then(() => console.log(janji2))); // janji2.then yang pertama saat promisenya mulai dijalankan, console.log(janji2) saat promisenya sudah selesai
// janji2
//       .finally(() => console.log('Selesai menunggu...')) // dijalankan bila then/catch sudah siap dijalankan, jika sudah tidak pending, urutan dijalankannya finally dulu, barulah then/catch. Finally biasa digunakan untuk animasi loading
//       .then(response => console.log('OK! : ' + response)) // mengambil resolvenya
//       .catch(response => console.log('NOT OK! : ' + response));
// console.log('selesai'); // pending tidak terlihat karena yang dijalankan langsung yang di dalamnya
// Promise.all() untuk menjalankan semua promise yang dimiliki sekaligus
// const film = new Promise(resolve => {
//   setTimeout(() => {
//     resolve([{
//       judul: 'bebas',
//       sutradara: 'ucup',
//       pemeran: 'ricky'
//     }]);
//   }, 1000);
// });
// const cuaca = new Promise(resolve => {
//   setTimeout(() => {
//     resolve([{
//       kota: 'jkt',
//       temp: 26,
//       kondisi: 'berawan'
//     }]);
//   }, 500);
// });
// // film.then(response => console.log(response));
// // cuaca.then(response => console.log(response)); // satu per satu
// Promise.all([film, cuaca])
//         // .then(response => console.log(response));
//         .then(response => {
//           const [film, cuaca] = response;
//           console.log(film);
//           console.log(cuaca);
//        }); // sekaligus
// promise biasa digunakan bila kita ingin melakukan request ke sebuah api

// Fetch (me-refactor jQuery ajax dengan fetch vanilla js, cek file praktik js) //
// api modern js, untuk mengambil data secara asynchronous (ajax)
// fetch: sebuah method pada api js untuk mengambil resources dan jaringan, serta mengembalikan promis yang selessai (fulfilled) ketika ada response yang tersedia -mdn
// fetch(resources, init);
// resources seperti url, request object (mirip promise (special object), representasi permintaan sumber -> jarang dipakai), dan init untuk additional config
// init (opsional), didalamnya kita bisa beri config tambahan pada saat mengirim sebuah request, bentuknya object (mirip seperti di jQuery -> $.ajax({})), default methodnya get, bila tidak ada initnya
// response: hasil dari fetch berupa promise, didalamnya ada 2 (property, method), property yang bisa digunakan: header, ok, redirected, dll. Sedangkan methodnya: json(), text(), clone(), dll. Rata-rata method ini mengembalikan promise juga
// fetch juga bisa untuk mengirim data menggunakan post (complex concept)

// Fetch: refactor My Cinema project part 2 (async await), cek file praktik.js //

// Async await //
// asynchronous function: 1. sebuah function yang bekerja secara asynchronous (melalui event loop), 2. yang menghasilkan (implicit) promise sebagai return vakuenya, 3. tapi cara penulisan codenya menggunakan penulisan yang synchronous (standard), 4. sebuah function dapat memiliki keyword await  di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promisenya selesai. -mdn mozilla
// async await tanpa api fetch (promise buatan sendiri)
// const coba = new Promise(resolve => resolve('selesai'));
// console.log(coba); // promise langsung resolve selesai
// const coba = new Promise(resolve => {
//   setTimeout(() => {
//     resolve('selesai')});
//   }, 2000);
// // console.log(coba); // promise pending karena dijalankan (console.log()) secara synchronous
// coba.then(() => console.log(coba)); // asynchronous
// menerapkan async await dengan menyimpan promise yang telah dibuat ke dalam function sebagai return value
// function tryPromise() {
//   // return new Promise((resolve) => {
//   return new Promise((resolve, reject) => {
//     // const time = 3000;
//     const time = 5000;
//     if (time < 5000) {
//       setTimeout(() => {
//         resolve("Done");
//       }, time);
//     } else {
//       reject("Too slow!");
//     }
//   });
// }
// jalankan dengan ini
// const coba = tryPromise(); // sama seperti di atas tapi tidak pakai new Promise(), tetap butuh then
// // console.log(coba); // pending
// coba.then(coba => console.log(coba)); // tidak ada bedanya dengan yang di atas sehingga belum bisa pakai async await, kalau mau ubah ke async await, kita butuh function yang memanggil/meng-callback function tryPromise
// function tryAsync() {
// async function tryAsync() { // tidak bisa pakai then
//   try { // try untuk resolve dan then
//     const coba = await tryPromise();
//     console.log(coba); // tidak menangkap reject, solusinya menggunakan keyword try
//   } catch(err) { // catch yang ada parameternya untuk reject dan catch, pesan di dalam reject masuk ke dalam pesan catch
//     // console.log(err);
//     console.error(err);
//   };
// };
// tryAsync(); // pending karena synchronous, tambahin async di depan keyword function
// const coba = tryPromise();
// coba
//   .then(coba => console.log(coba))
//   .catch(coba => console.log(coba));
// error handling pada script async await caranya dengan menggunakan keyword try dan catach

// Error handling //
// method error handling: .then(), .catch() -> contoh code ada di materi async await, lalu async await dengan try dan catch() -> code di materi async await
// fetch() ? -> cek file praktik.js, error handling fetch pada project My Cinema