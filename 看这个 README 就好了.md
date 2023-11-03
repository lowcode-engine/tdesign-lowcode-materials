## 环境
```
node  v16.17.1
npm   8.15.0
win10
以上环境下可运行
```
## 如何运行
必须使用 npm

只需关注 packages/tdeisgn-lowcode-materials 这个包

进入 packages/tdeisgn-lowcode-materials 这个包，

执行 npm i 安装依赖；

执行 npm run build 构建供 demo 安装的 npm 包；

执行 npm run lowcode:build 构建供 demo 配置的物料包；

执行 npm run lowcode:dev 本地开发环境运行（不过我没基本没使用过，可能需要调试才能正常打开）；

## 备注

不清楚的可以查看 git 历史提交记录

本仓库没有提交 package-lock.json，因此重新 npm i 后很可能无法运行

本仓库基于 https://github.com/alibaba/lowcode-materials 7f14ac4 检出

配套文章：
[阿里低代码引擎 | LowCodeEngine - 如何将新组件库接入物料，以TDesign为例
](https://juejin.cn/post/7296412955477655567)

## FAQ
如果构建过程中控制台发生错误，十有八九都是这个错误（https://github.com/alibaba/lowcode-engine/issues/301）
