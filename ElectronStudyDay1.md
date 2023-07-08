##什么是Electron?
Electron是一个使用 JavaScript、HTML 和 CSS 构建桌面应用程序的框架。 嵌入 Chromium 和 Node.js 到 二进制的 Electron 允许您保持一个 JavaScript 代码代码库并创建 在Windows上运行的跨平台应用 macOS和Linux——不需要本地开发 经验。
第一步确认本地电脑是否安装有node和npm
##使用脚手架创建
npm:
mkdir my-electron-app && cd my-electron-app
npm init
yarn:
mkdir my-electron-app && cd my-electron-app
yarn init
##执行以上命令后，可以在命令行修改文件名字，需要安装Electron官网的规范了定义文件名。
![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/a9eeacff-36ae-4dbc-9a40-669cfbd620ce)

![image](https://github.com/wuxin666789/Electron-Learning-Meadmes/assets/86199312/445c4446-f9d8-498e-a95c-69944ffde4f3)

##将 electron 包安装到应用的开发依赖中
npm install --save-dev electron
yarn add --dev electron

在使用npm安装依赖时出现了报错，重新用npm安装依旧报错，后面换成yarn命令安装依赖成功。所以搜索了一下它两点区别、优缺点学习复习一下：
##区别：
1.性能：Yarn在安装依赖时比npm更快，因为它使用了并行下载的方式，而npm是串行下载。
2.安全性：Yarn在安装依赖时会进行校验，确保下载的包没有被篡改。而npm则没有这个功能。
3.离线模式：Yarn支持离线模式，可以使用之前缓存的依赖进行安装。而npm需要联网才能安装依赖。
4.锁定机制：Yarn使用yarn.lock文件来锁定每个包的版本号，确保团队成员之间使用相同的依赖版本。而npm使用package-lock.json文件来实现类似的功能。
##优点：
- npm和yarn都有庞大的包生态系统，可以方便地找到和安装各种开源库。
- npm和yarn都支持自动解决依赖关系，并且可以通过命令行轻松地更新和删除包。
- npm和yarn都支持脚本命令，在项目中可以方便地运行自定义脚本。
##缺点：
- npm在性能方面稍逊于yarn，在处理大型项目时可能会较慢。
- yarn在某些情况下可能会导致一些依赖冲突，需要手动解决。
##总结：
npm和yarn都是强大的包管理工具，选择使用哪个取决于项目需求和个人偏好。如果项目需要更快的安装速度和更好的安全性，可以选择yarn。如果项目对性能要求不高或者已经习惯使用npm，可以继续使用npm。
