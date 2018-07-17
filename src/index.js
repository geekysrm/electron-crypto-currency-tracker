const electron = require("electron");
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;
const axios = require("axios");

const notifyBtn = document.getElementById("notifyBtn");
const price = document.querySelector("h1");
const targetPrice = document.getElementById("targetPrice");

function getBTC() {
  axios
    .get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD"
    )
    .then(res => {
      const cryptos = res.data.BTC.USD;
      price.innerHTML = "$" + cryptos.toLocaleString("en");
      //toLocaleString('en') makes it comma separated string
    });
}
getBTC();
// Refresh BTC price every 30 seconds
setInterval(getBTC, 30000);

notifyBtn.addEventListener("click", function(event) {
  const modalPath = path.join("file://", __dirname, "add.html");
  win = new BrowserWindow({
    frame: false,
    transparent: true,
    alwaysOnTop: true, // To set it always on top in OS other than linux
    width: 400,
    height: 200
  });
  // To set it always on top in linux
  win.setAlwaysOnTop(true);
  win.on("close", function() {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});
