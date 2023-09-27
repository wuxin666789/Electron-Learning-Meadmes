# 1.配置 electron forge

- https://www.electronforge.io/import-existing-project

# 2. 安装 Mac 构建 win 环境：

`brew install--bark wine stable`

# 2.1:安装 mono 环境：

`https://www.mono-project.com/download/stable/`

# 3.构建 win ：

`yarn make --platform=win32`

# 4.打包 dmg 文件：json 加入

```{
        "name": "@electron-forge/maker-dmg",
        "config": {
          "format": "ULFO"
        }
      }
```

# 5.打包 64 位 exe：

`yarn make --arch x64 --platform win32`

# 6.加密 app：

`asar pack ./app app.asar`

```

```
