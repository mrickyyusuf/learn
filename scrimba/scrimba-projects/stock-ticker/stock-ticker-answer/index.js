// index.js
import { getStockData } from "./fakeStockAPI.js"; // pastikan .js jika server butuh

let prevPrice = null;

function renderStockTicker(stockData) {
  const stockDisplayName = document.getElementById("name");
  const stockDisplaySymbol = document.getElementById("symbol");
  const stockDisplayPrice = document.getElementById("price");
  const stockDisplayPriceIcon = document.getElementById("price-icon");
  const stockDisplayTime = document.getElementById("time");

  // pastikan price adalah Number
  const { name, sym, price, time } = stockData;

  const priceDirectionIcon =
    prevPrice === null
      ? "grey.svg"
      : price > prevPrice
        ? "green.svg"
        : price < prevPrice
          ? "red.svg"
          : "grey.svg";

  const priceIconElement = document.createElement("img");
  priceIconElement.src = `svg/${priceDirectionIcon}`;
  priceIconElement.alt = "Price direction icon";

  stockDisplayPriceIcon.innerHTML = "";
  stockDisplayPriceIcon.appendChild(priceIconElement);

  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = sym;
  stockDisplayPrice.innerText = price; // tampilkan 2 desimal
  stockDisplayTime.innerText = time;

  prevPrice = price;
}

// jalankan sekali segera supaya tidak menunggu 1.5s pertama
renderStockTicker(getStockData());

// update setiap 1.5 detik
setInterval(() => {
  const stockData = getStockData();
  renderStockTicker(stockData);
}, 1500);