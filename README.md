# Electron-crypto-currency-tracker

### This "native" Windows+Mac OS+ Linux app displays the current crypto-currency price (only BTC for now). It also notifies the user in form of a custom alert/notification when it crosses the value specified by the user.

## Screenshot:
![alt text](https://geekysrm.github.io/img/project-electron-crypto.png "Screenshot")


## TODO:

- [ ] Add other cryptocurrencies
- [ ] Add other currencies to display price in

## Development

Uncomment line no. 16 in main.js to show devtools

> win.webContents.openDevTools();

Run below command to install dependencies

> $ npm i

Run below command to start server and develop

> $ npm start

## Build and Packaging

Building and packaging is **quite easy**.

_Important_: Check line no. 16 in main.js is not present or commented-out.(to close dev tools in final app package)

All you have to do is to run the following commands in appropriate OS:

> $ npm package-win

> $ npm package-mac

> $ npm package-linux

## License: MIT

Refer to the License [here](https://github.com/geekysrm/electron-crypto-currency-tracker/blob/master/LICENSE).

## Contact

Soumya Ranjan Mohanty ([geekysrm](https://github.com/geekysrm))

**Reach out to me on:**

[Twitter](https://twitter.com/SoumyaRnMohanty),
[Medium](https://medium.com/@geekysrm),
[email](mailto:soumyacool2012@gmail.com)
