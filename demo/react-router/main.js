//引入electron并创建一个Browserwindow
const { app, BrowserWindow } = require("electron");

const path = require("path");

const url = require("url");

let mainWindow;

function createWindow() {
  //创建浏览器窗口，宽高800、600
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "./build/index.html"),
      protocol: "file:",
      slashes: true,
    })
  );

  //打开开发者工具，默认不打开
  // mainWindow.webContents.openDevTools()

  //关闭window时触发下列事件。
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

//dangElectron，完成初始化并创建浏览器窗口时调用此方法
app.on("ready", createWindow);

//所有窗口关闭时退出应用。
app.on("window-all-closed", function () {
  //macOS中除非用户按下‘Cmd+Q’ 显式退出，否则应用与菜单栏始终处于活动状态。
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  //MacOS中点击DOck图标时没有已打开的其余应用窗口时，则通常在应用中重建一个窗口
  if (mainWindow === null) {
    createWindow();
  }
});

try {
  require("electron-reloader")(module);
} catch (_) {}
