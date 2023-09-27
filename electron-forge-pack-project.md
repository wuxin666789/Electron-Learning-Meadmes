# 0.构建：vite+electron+ts

` yarn create electron-app my-new-app --template=vite-typescript`

# 1.配置 electron forge

- https://www.electronforge.io/import-existing-project

## 导入 forge：

```
yarn add --dev @electron-forge/cli
yarn electron-forge import
```

## 配置 package.json

```
{
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "publish": "electron-forge publish"
  }
  //打包包配置
  "config": {
    "forge": {
      "packagerConfig": {},
      "makers": [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "electron_quick_start"
          }
        },
        {
          "name": "@electron-forge/maker-zip",
          "platforms": [
            "darwin"
          ]
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {}
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {}
        }
      ]
    }
  }
}
```

## 添加 Squirrel.Window：打包 win exe 包官网建议添加

`yarn add electron-squirrel-startup`
-main.js 加入：
`if (require('electron-squirrel-startup')) app.quit();`

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

# 发布到服务器：

```
yarn add --dev @electron-forge/publisher-s3

//package.json:
"publishers": [
        {
        "name": "@electron-forge/publisher-s3",
        "platforms": ["darwin", "linux"],
          "config": {
            "bucket": "my-bucket",
            "folder": "my/key/prefix"
          }
        }
      ]
```
