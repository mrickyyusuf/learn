// Study case arrow function //
/* const box = document.querySelector(".box");
box.addEventListener("click", () => { // can't because hoisted
  console.log(this);
}); */
/* const box = document.querySelector(".box");
box.addEventListener("click", function() {
  // can call the class
  // fixing printing color -> masih kurang paham sama code fixing printing color terutama yang menukar pakai [], logicnya bagaimana
  let one = "size";
  let two = "caption";
  if (this.classList.contains(one)) {
    [one, two] = [two, one];
  }
  this.classList.toggle(one); */
/* setTimeout(function() { // can't because hoisting and this = window -> masih kurang paham kenapa kalau pakai function() malah mengacu ke window
    this.classList.toggle("caption")
  }, 600) */
/* setTimeout(() => { // do this, can
    this.classList.toggle(two);
  }, 600);
}); */

// Study case filter, map, reduce, method chaining //
// ambil seluruh li
// const allList = Array.from(document.querySelectorAll("[data-duration]"));
// // pilih hanya ADVANCED JS
// const advJs = allList
//   .filter((adv) => adv.textContent.includes("ADVANCED JS"))
//   // ambil durasi video (dalam string)
//   .map((dur) => dur.dataset.duration)
//   // ubah jadi integer/number
//   .map((num) => {
//     const roundInt = num.split(":").map(parseFloat);
//     // ubah menit menjadi detik
//     return roundInt[0] * 60 + roundInt[1];
//   })
//   // totalkan seluruh detik
//   .reduce((acc, sumVid) => acc + sumVid);
// // ubah lagi total keseluruhan detik menjadi jam-menit-detik
// const hr = Math.floor(advJs / 3600);
// const min = Math.floor((advJs % 3600) / 60);
// const sec = advJs % 60;
// // simpan/tampilkan di dom (total durasi)
// const durationTotal = document.querySelector(".total-durasi");
// durationTotal.textContent += `${hr} Jam, ${min} Menit, ${sec} Detik.`;
// // simpan/tampilkan di dom (total video)
// const totalVid = allList.filter((adv) =>
//   adv.textContent.includes("ADVANCED JS"),
// ).length;
// const videoTotal = document.querySelector(".jumlah-video");
// videoTotal.textContent += `${totalVid} Video.`;
// ini sudah jadi, hasil usaha sendiri, ngelihat dikit doang (2x) tapi ngga plek ketiplek, jadi ngamatin dulu, lupa lihat ss-an lalu ngerjain sampai tuntas, jadi main muscle memory tapi masih ada method/fitur js yang asing dan bingung cara pakai/nulisnya, yaitu:
// include, split, (dataset & duration, ini default dari js atau dari sesuai yang kita buat?), map(pasreFloat) (map-nya sudah paham, parseFloat-nya belum), Array.from, mengambil attribute html dengan "[attribute-name]" (materi dom), variabel hr, min, sec bagaimana cara mengubah codenya menjadi dinamis

// Study case callback //
// $(".search-btn").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=1618295e&s=" + $(".input-keyword").val(),

//     success: (results) => {
//       const movies = results.Search;
//       let cards = "";
//       movies.forEach((mvs) => {
//         cards += showCards(mvs);
//       });
//       $(".movie-container").html(cards);

//       // Ketika tombol detail di-click
//       $(".modal-detail-btn").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=1618295e&i=" +
//             $(this).data("imdbid"),

//           success: (mvs) => {
//             const movieDetail = showMovieDetails(mvs);
//             $(".modal-body").html(movieDetail);
//           },

//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },

//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// Study case refactor My Cinema project menggunakan fetch //
// const searchBtn = document.querySelector('.search-btn'); // 1. Ambil element search button pakai dom selection
// searchBtn.addEventListener('click', function() { // 2. Beri event pada tombol yang ketika diklik, menjalankan sebuah fungsi
//   const inputKeyword = document.querySelector('.input-keyword');
//   fetch("http://www.omdbapi.com/?apikey=1618295e&s=" + inputKeyword.value)
//         // .then(response => console.log(response.json()));
//         .then(response => response.json())
//         // .then(response => console.log(response));
//         .then(response => {
//           const movies = response.Search;
//           let cards = '';
//           movies.forEach(m => cards += showCards(m));
//           const movieContainer = document.querySelector('.movie-container');
//           movieContainer.innerHTML = cards;

//           // Ketika tombol detail diklik
//           const modalDetailBtn = document.querySelectorAll('.modal-detail-btn');
//           modalDetailBtn.forEach(btn => {
//             btn.addEventListener('click', function() { // pakai anon function karena butuh this
//               // console.log(this);
//               const imdbid = this.dataset.imdbid;
//               // console.log(imdbid);
//               fetch("http://www.omdbapi.com/?apikey=1618295e&i=" + imdbid)
//                     .then(response => response.json())
//                     .then(m => {
//                       const movieDetail = showMovieDetails(m);
//                       const modalBody = document.querySelector('.modal-body');
//                       modalBody.innerHTML = movieDetail;
//                     });
//             });
//           });
//         });
// });

// Refactor My Cinema part 2 (make readable) //
// 1. Perbaiki pada saat menampilkan data
// 2. Menampilkan data ke dalam container
// 3. tujuan merefactor code seperti di bawah ialah untuk membuat code terlihat seperti synchronous padahal asynchronous dengan async await

// Error handling: ketahui dahulu perkiraan error yang akan muncul
// 1. cari film dengan input kosong
// 2. cari film dengan input tidak valid/tidak ada

// function showCards(mvs) {
//   return `<div class="col-md-3 my-3">
//             <div class="card">
//               <img src="${mvs.Poster}" class="card-img-top">
//               <div class="card-body">
//                 <h5 class="card-title">${mvs.Title}</h5>
//                 <h6 class="card-subtitle mb-2 text-body-secondary">
//                   ${mvs.Year}
//                 </h6>
//                 <a href="#" class="btn btn-primary modal-detail-btn" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${mvs.imdbID}">Show details</a>
//               </div>
//             </div>
//           </div>`;
// }

// function showMovieDetails(mvs) {
//   return `<div class="container-fluid">
//             <div class="row">
//               <div class="col-md-3">
//                 <img src="${mvs.Poster}" class="img-fluid" />
//               </div>
//               <div class="col-md">
//                 <ul class="list-group">
//                   <li class="list-group-item"><h4>${mvs.Title} (${mvs.Year})</h4></li>
//                   <li class="list-group-item"><strong>Director : </strong>${mvs.Director}</li>
//                   <li class="list-group-item"><strong>Actors : </strong>${mvs.Actors}</li>
//                   <li class="list-group-item"><strong>Writer : </strong>${mvs.Writer}</li>
//                   <li class="list-group-item"><strong>Plot : </strong><br>${mvs.Plot}</li>
//                 </ul>
//               </div>
//             </div>
//           </div>`;
// } // masalah pada project ini yaitu callback hell, solusinya kita bisa menggunakan fetch, untuk memahami fetch kita harus memahami promise

// function getMovies(keyword) {
//   // return fetch("http://www.omdbapi.com/?apikey=salahSengaja&s=" + keyword) // dan kalau url salah seperti ini, fetch tetap jalan, hanya ada error unauthorized, cara menangkap errornya dengan menangkap manual pada code yang dicomment dibawah, dicode then
//   return (
//     fetch("http://www.omdbapi.com/?apikey=1618295e&s=" + keyword) // problem error handling pada fetch: error yang ditangkap hanya error yang ada pada url/network, jadi kalau misal function updateUIs dicomment dan mencoba salah input/input kosong, diconsole tidak tampil error, kecuali jika url/network fetch ini bermasalah
//       // .then((response) => response.json())
//       .then((response) => {
//         // console.log(response);
//         if (!response.ok) {
//           throw new Error(response.statusText); // lempar error ke catch. Jika tidak ok, ini dikerjakan
//         }
//         return response.json(); // jika ok, ini dikerjakan
//       }) // error handling pada fetch ialah harus menangkap manual disini. Method ini harusnya hanya akan jalan jika data sudah benar, film ada, input valid. Cek menggunakan kondisi untuk error handlingnya, ketahui dan cek dulu dengan console.log(response), lalu cek status/oknya
//       // .then((response) => response.Search);
//       .then((response) => {
//         // console.log(response);
//         if (response.Response === "False") {
//           throw new Error(response.Error);
//         }
//         //  console.log(response); // untuk cek di console jika berhasil (ada data filmnya/input valid)
//         return response.Search;
//       })
//   ); // kalau ditest tidak terjadi apa-apa berarti sudah masuk kesini, sehingga harus kita cek manual lagi, misal sudah berhasil, api key sudah aman, cek ada isinya atau tidak
// }

// function updateUIs(movies) {
//   // tidak perlu pakai return karena cukup menjalankan saja, tidak sampai mengembalikan nilai
//   let cards = "";
//   movies.forEach((m) => (cards += showCards(m)));
//   const movieContainer = document.querySelector(".movie-container");
//   movieContainer.innerHTML = cards;
// }

// function getMovieDetails(imdbid) {
//   return fetch("http://www.omdbapi.com/?apikey=1618295e&i=" + imdbid)
//     .then((response) => response.json())
//     .then((m) => m);
// }

// function updateUIDetails(m) {
//   const movieDetail = showMovieDetails(m);
//   const modalBody = document.querySelector(".modal-body");
//   modalBody.innerHTML = movieDetail;
// }

// const searchBtn = document.querySelector(".search-btn");
// searchBtn.addEventListener("click", async function () {
//   try {
//     // b. untuk memberitahu js kalau di dalam function ini ada sesuatu yang asynchronous, dan beritahu yang mana yang asynchronous dengan memberi keyword await (perhatikan keyword await di depan keyword getMovies di bawah)
//     const inputKeyword = document.querySelector(".input-keyword"); // sampai sini code masih sama
//     // fetch ditarik/diabstraksi ke dalam function yang berbeda
//     // saat menampilkan cards ke dalam document, kita akan simpan ke dalam function yang berbeda pula
//     const movies = await getMovies(inputKeyword.value); // variabel untuk mengambil data pakai fetch ke api omdb // c. await, karena getMovies asynchronous yang mengembalikan promise, jangan langsung dimasukkan ke movies, tapi tunggu dulu hingga promisenya resolve, jika sudah, barulah masukkan ke movies dan bisa ditampilkan
//     // console.log(movies); // seharusnya movies berisi dan menampilkan 10 data film dalam object, tetapi yang ditampilkan malah promise padahal sudah menggunakan then
//     // semakin kita membuat code kita menjadi modular, dengan cara ini sebenarnya kita membuatnya dengan cara synchronous
//     // getMovies masuk ke movies, adalah cara synchronous, saat getMovies dijalankan dia langsung jalan, ketika pertama kali dijalankan dan karena dia promise, maka pending, setelah data balik harusnya resolve, tapi keburu dimasukkan ke console.log(movies), dalam konsep event loop hal ini sudah kelewat, keburu ditampilkan karena synchronous, js ngga tau kalo getMovies adalah asynchronous
//     // solusinya adalah dengan menggunakan async await
//     // a. beri tahu js kalau di dalam function ini akan ada sesuatu yang asynchronous (cek keyword async di depan keyword function diatas)
//     updateUIs(movies); // looping cards (menumpuk) lalu simpan ke container
//     // updateUIs(movies); // error handling: bila ini dimatikan tanpa error handling, tidak terjadi apa-apa/tidak muncul informasi apa-apa di console bila kita mencoba salah input search/search input kosong
//   } catch (err) {
//     // lempar kesini pakai throw Error()
//     // console.error(err); // bila film tidak ada/search kosong -> error dari browser bukan fetch
//     alert(err);
//   }
// });

// const modalDetailBtn = document.querySelectorAll('.modal-detail-btn') // tidak bisa seperti ini karena baris ini akan dijalankan ketika js dieksekusi pertama kali
// dan ketika baris dieksekusi, adakah element yang punya class modal-detail-button, sekarang tidak ada karena masih container masih kosong, kalau di search baru ada, kalau kita kasih event handler disini lalu kita jalankan event listenernya, baris ini tidak akan jalan, karena pada saat pertama kali dijalankan, detail buttonnya belum ada
// modalDetailBtn.forEach(btn => {
//   btn.addEventListener('click', funtion() {
//     console.lgog('OK'); // OKnya tidak ada karena event handler sudah jalan ketika detail button belum ada
//   });
// });
// solusi mengatasi ini adalah dengan event binding (memberi event ke element yang belum ada, tapi ketika ada, eventnya tetap bisa berjalan)
// cara melakukan event binding: dengan menyimpan event handler ke element document
// event binding:
// document.addEventListener("click", async function (e) {
//   // console.log(e);
//   try {
//     if (e.target.classList.contains("modal-detail-btn")) {
//       // mengecek apapun yang kita klik (dibagian mana saja, bebas). Boleh klik dimana saja tapi ketika detail button diklik, apa yang ingin dilakukan
//       // console.log('ok')
//       // ambil imdbid pakai e.target
//       const imdbid = e.target.dataset.imdbid;
//       // fetch
//       const movieDetail = await getMovieDetails(imdbid);
//       updateUIDetails(movieDetail);
//     }
//   } catch (err) {
//     alert(err);
//   }
// });