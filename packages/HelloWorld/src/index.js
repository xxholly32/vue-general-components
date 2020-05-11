import HelloWorld from "./HelloWorld.vue"

HelloWorld.install = (Vue) => {
  Vue.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld