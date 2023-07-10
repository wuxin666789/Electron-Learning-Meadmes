## 什么是Electron?
Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在Windows上运行的跨平台应用 macOS和Linux——不需要本地开发 经验。
第一步确认本地电脑是否安装有node和npm
## 使用脚手架创建
npm:
mkdir my-electron-app && cd my-electron-app
npm init
yarn:
mkdir my-electron-app && cd my-electron-app
yarn init
## 执行以上命令后，可以在命令行修改文件名字，需要安装Electron官网的规范了定义文件名。
![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/a9eeacff-36ae-4dbc-9a40-669cfbd620ce)

![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/445c4446-f9d8-498e-a95c-69944ffde4f3)

## 将 electron 包安装到应用的开发依赖中
npm install --save-dev electron
yarn add --dev electron

在使用npm安装依赖时出现了报错，重新用npm安装依旧报错，后面换成yarn命令安装依赖成功。所以搜索了一下它两点区别、优缺点学习复习一下：
### 区别：
- 1.性能：Yarn在安装依赖时比npm更快，因为它使用了并行下载的方式，而npm是串行下载。
- 2.安全性：Yarn在安装依赖时会进行校验，确保下载的包没有被篡改。而npm则没有这个功能。
- 3.离线模式：Yarn支持离线模式，可以使用之前缓存的依赖进行安装。而npm需要联网才能安装依赖。
- 4.锁定机制：Yarn使用yarn.lock文件来锁定每个包的版本号，确保团队成员之间使用相同的依赖版本。而npm使用package-lock.json文件来实现类似的功能。
### 优点：
- npm和yarn都有庞大的包生态系统，可以方便地找到和安装各种开源库。
- npm和yarn都支持自动解决依赖关系，并且可以通过命令行轻松地更新和删除包。
- npm和yarn都支持脚本命令，在项目中可以方便地运行自定义脚本。
### 缺点：
- npm在性能方面稍逊于yarn，在处理大型项目时可能会较慢。
- yarn在某些情况下可能会导致一些依赖冲突，需要手动解决。
### 总结：
npm和yarn都是强大的包管理工具，选择使用哪个取决于项目需求和个人偏好。如果项目需要更快的安装速度和更好的安全性，可以选择yarn。如果项目对性能要求不高或者已经习惯使用npm，可以继续使用npm。
## 此时还不能运行electron项目，你需要做以下操作：
### 往package.json文件里添加一条start命令：
 "scripts": {
    "start": "electron ."
  }

运行：
yarn start  (后面就尽量不用npm命令安装依赖）

如果马上使用yarn start 运行则会出现报错，没有找到main.js文件。
### 向根目录添加main.js文件和index.html文件：

![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/9ed9c483-8836-42d0-8634-2f1123c614b8)

1.使用CommonJs require导入app，BrowserWindow模块，使用creat
Window方法 创建一个宽800、高600的浏览器窗口，将index.html插入改窗口（index.html的内容写个hello world，顺便写的东西进去）
## 再次运行项目
yarn start 
![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/927136ee-fc4c-44d9-bba9-899daea67e69)

## 关闭所有窗口时退出应用 (Windows & Linux)
监听 app 模块的 'window-all-closed' 事件。如果用户不是在 macOS(darwin) 上运行程序，则调用 app.quit()
在main.js加入以下代码：
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
## 如果没有窗口打开则打开一个窗口 (macOS)
因为窗口无法在 ready 事件前创建，需要中whenReady（）回调中调用
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
## 最后添加preload.js预加载脚本插入版本信息：
![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/9ca7d41a-d9ce-460c-b799-ecfd9231b894)

在main.js文件中加入代码：

![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/f371945e-eb84-4217-b52d-8634a1f85c26)

这里使用了两个Node.js概念：

- __dirname 字符串指向当前正在执行脚本的路径 (在本例中，它指向你的项目的根文件夹)。
- path.join API 将多个路径联结在一起，创建一个跨平台的路径字符串。

## 最终结果
![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/beb28d03-620b-4496-9b7f-739b84f48564)



