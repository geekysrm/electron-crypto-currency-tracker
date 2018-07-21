const electron = require("electron");
const path = require("path");
const BrowserWindow = electron.remote.BrowserWindow;
const axios = require("axios");
const ipc = electron.ipcRenderer;

const notifyBtn = document.getElementById("notifyBtn");
const price = document.querySelector("h1");
const targetPrice = document.getElementById("targetPrice");
let targetPriceVal;

const notification = {
  title: "BTC Alert",
  body: "BTC just beat your target price!",
  icon: path.join(__dirname, "../assets/images/btc.png")
};

function getBTC() {
  axios
    .get(
      "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD"
    )
    .then(res => {
      const cryptos = res.data.BTC.USD;
      price.innerHTML = "$" + cryptos.toLocaleString("en");
      //toLocaleString('en') makes it comma separated string
      if (targetPrice.innerHTML != "" && targetPriceVal < res.data.BTC.USD) {
        const myNotification = new Notification(
          notification.title,
          notification
        );
      }
    });
}
getBTC();
// Refresh BTC price every 30 seconds
setInterval(getBTC, 10000);

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

ipc.on("targetPriceVal", function(event, arg) {
  targetPriceVal = Number(arg);
  targetPrice.innerHTML = "$" + targetPriceVal.toLocaleString("en");
});
