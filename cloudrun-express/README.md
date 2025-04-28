# cloudrun-express

## 快速开始

前往 [腾讯云托管快速开始页面](https://tcb.cloud.tencent.com/dev?envId=lowcode-9gms1m53798f7294#/platform-run),选择相应语言的模版，根据引导完成部署。

## 本地调试

## Dockerfile 最佳实践

请参考 [优化容器镜像](https://docs.cloudbase.net/run/develop/image-optimization)

## 目录结构说明

```
.
├── Dockerfile
├── README.md
├── app.js
├── bin
│   └── www
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade
```