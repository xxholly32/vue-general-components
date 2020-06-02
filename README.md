# vue-general-components

> 基于 vuepress 文档的 vue 组件快速开发方案

## 项目背景

在日常开发中，我们经常会在项目中写很多组件，有些是通用的有些是非常业务的，而一些优秀的组件会随着项目结项而`封印`；而不会说提炼成对应的 npm 仓库；社区上有很多优秀的 ui 库比如，[element-ui](https://element.eleme.cn/)、[ant-design-vue](https://antdv.com/docs/vue/introduce-cn/)等，又无法加入自己的组件到其中，也无法魔改他们的组件。所以 一个简单快速的开发 vue 组件的项目 vue-general-components 就这么诞生了；

## 项目安装

利用脚手架安装

```
mkdir <project-name>

# 或 npx create-vgc
yarn create vgc

# 或 npm install
yarn install
```

> vgc 即 vue-general-components

或者直接 fork [vgc 项目](https://github.com/xxholly32/vue-general-components)

生成包含以下功能

- [x] hello-world 组件
- [x] 组件 api 文档系统
- [x] 组件测试用例
- [x] 组件打包
- [x] 组件版本日志

## 组件开发

### 新建组件

demo 中自带 hello-world 组件，代码中包含了简单的多语言（你也可以完全不用多语言），基本的 vue 实例，和 scss 样式

> 组件多语言还需要加入 lang 语言包

```vue
<template>
  <div>
    <p class="demo-box">
      This is VGC {{ t("hgc.helloworld.hello") }} {{ message }} demo
    </p>
  </div>
</template>

<script>
import Locale from "../../../src/utils/mixins/locale.js";
export default {
  name: "HelloWorld",
  mixins: [Locale],
  data() {
    return {
      message: "world",
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-box {
  font-size: 24px;
  font-weight: bold;
}
</style>
```

> 如果不是`yarn create vgc`命令生成的项目一定要修改对应的 package.json 中的 name，这个很重要，因为最终发布到 npm 是根据这个名字来的

### 组件测试用例

我引入的是 jest ，以及 [vue-test-utils](https://vue-test-utils.vuejs.org/zh/)，在 demo 中加入了一个简单的 helloworld test 供参考；

> 一个优秀的软件，test 必不可少

`package.json` 配置

```json
"jest": {
  "moduleFileExtensions": [
    "js",
    "vue"
  ],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  "snapshotSerializers": [
    "<rootDir>/node_modules/jest-serializer-vue"
  ]
}
```

## 组件文档

文档系统引入 vue 官方的 vuepress，用起来也最顺手，主要还是因为 vuepress 支持 md 和其内置的一些周边，代码展示，emoji 等也不用再单独引入，直接有内置；

我加入了自己的一个插件 [vuepress-plugin-code-box](https://xxholly32.github.io/vuepress-plugin-code-box/guide/)，支持代码的隐藏可让展现方式多样化。antd 和 elementui 都有类似。

vuepress 默认的 dev 和 build 功能也支持，如果你想发布到 pages 上可以查看 [vuepress 部署文档](https://vuepress.vuejs.org/zh/guide/deploy.html#%E9%83%A8%E7%BD%B2)

## 组件打包

引入了 rollup 进行组件打包，喜欢撸 webpack 的也可以用 webpack

- 'rollup-plugin-node-resolve' // 告诉 Rollup 如何查找外部模块
- 'rollup-plugin-commonjs' // 将 CommonJS 模块转换为 ES2015 供 Rollup 处理
- 'rollup-plugin-vue' // 处理 vue 文件
- 'rollup-plugin-babel' // rollup 的 babel 插件，ES6 转 ES5
- 'rollup-plugin-css-only' // 提取 css，压缩能力不行

会打包出 esm、min、umd 的 js 文件以及一个 css 文件

## 组件代码提交规范

项目中自带 husky 的 hooks，会自动对提交代码进行校验，建议使用下面提交规范。

### 代码提交

```
# 或 npx git-cz
yarn cz:commit
```

默认选项 ：

- feat: 新的功能
- fix: 修复 bug
- docs: 只是文档的更改
- style: 不影响代码含义的更改 (例如空格、格式化、少了分号)
- refactor: 既不是修复 bug 也不是添加新功能的代码更改
- perf: 提高性能的代码更改
- test: 添加或修正测试
- chore: 对构建或者辅助工具的更改，例如生成文档

> 可以修改提交模版，但建立在有一定 git commit 基础之上

### changelog 生成

如果您的代码是通过以上命令提交的话，那 changelog 生产就是一个命令行的事；

```
# npm run release
yarn release
```

它会根据提交记录修改你的版本号和对应的 changelog 文档，让您的组件库提交变得非常简单。

> 更多内容可以查看 [git commit 规范参考](https://juejin.im/post/5e8ee53251882573cb7221c2#heading-15)

## 发布

最后只需要 push 到 npm 仓库就好了

```
npm publish
```

> 可以用 npm link 软链接的方式在本地进行开发
