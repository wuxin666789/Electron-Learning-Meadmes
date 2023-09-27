# react native 使用 npm start 运行项目是报错： Watchman error: std::\_\_1::system_error: open: /Users/lvan/Documents/GitHub/Electron-Learning-Meadmes/demo/rn/AwesomeProject: Operation not permitted. Make sure watchman is running for this project. See https://facebook.github.io/watchman/docs/troubleshooting.

- 1. 运行：watchman version 检测是否安装没有则按官网安装
- 2. 嘗試清除 Watchman 的緩存並重新啓動。在終端中輸入以下命令：
- - watchman watch-del-all
- - watchman shutdown-server
