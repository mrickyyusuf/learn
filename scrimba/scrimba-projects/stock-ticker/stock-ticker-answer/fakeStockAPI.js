// fakeStockAPI.js
export function getStockData() {
  return {
    name: "QtechAI",
    sym: "QTA",
    // simpan price sebagai Number agar perbandingan numerik benar
    price: Number((Math.random() * 3).toFixed(2)),
    // pastikan memanggil fungsi toLocaleTimeString()
    time: new Date().toLocaleTimeString(),
  };
}