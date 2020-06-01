# 组件文档

## 安装

```bash
yarn add vue-general-components
```

在 main.js 中写入以下内容：

```js
import vgc from "vue-general-components";
import "vue-general-components/index.css";

Vue.use(vgc);
```

## 代码实例

<code-box title="标题" description="这是helloworld的demo简单描述支持`简单md格式`">
  <p>下面是hello world 的 vue 组件</p>
  <hello-world message="World"></hello-world>
  <p>这是底部说明文字</p>
</code-box>

```vue
<hello-world :message="World"></hello-world>
```

## 参数

| 参数    | 说明 | 类型   | 可选值 | 默认值  |
| ------- | ---- | ------ | ------ | ------- |
| message | 信息 | string | -      | "world" |
