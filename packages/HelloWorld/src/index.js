import HelloWorld from "./HelloWorld"

const install = function (Vue){
  Vue.component(HelloWorld.name, HelloWorld)
}
export default{
  install
}