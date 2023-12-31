if (require("electron-squirrel-startup")) app.quit();
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let bluetoothPinCallback;
let selectBluetoothCallback;

//打开开发者工具，默认不打开
// mainWindow.webContents.openDevTools();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.webContents.on(
    "select-bluetooth-device",
    (event, deviceList, callback) => {
      event.preventDefault();
      selectBluetoothCallback = callback;
      const result = deviceList.find((device) => {
        return device.deviceName === "test";
      });
      if (result) {
        callback(result.deviceId);
      }
    }
  );

  ipcMain.on("cancel-bluetooth-request", (event) => {
    selectBluetoothCallback("");
  });

  ipcMain.on("bluetooth-pairing-response", (event, response) => {
    bluetoothPinCallback(response);
  });

  mainWindow.webContents.session.setBluetoothPairingHandler(
    (details, callback) => {
      bluetoothPinCallback = callback;

      mainWindow.webContents.send("bluetooth-pairing-request", details);
    }
  );

  mainWindow.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows.length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
