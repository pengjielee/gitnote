# GitNote

GitNote 是基于 Github API 的笔记应用。

## 如何构建

1、根目录安装

```
$ cd gitnote & npm install 
```

2、构建 renderer

```
$ cd gitnote/src/renderer_vue & npm install
$ npm run build
```

3、打包

```
$ npm run make
```

## 本地开发

1、启动 renderer 服务

```
$ cd gitnote/src/renderer_vue & npm install

// 本地启动
$ npm run serve

// 代码检查修复
$ npm run lint
```

2、启动 electron

```
$ cd gitnote & npm install

$ npm start
```
