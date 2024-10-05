import Vue from 'vue'
import App from './App.vue'
import plugins from "./plugins";

Vue.config.productionTip = false

Vue.use(plugins)
new Vue({
  // 完成了將App 组件放入到容器中
  // $mount = el:'#app'
  render: h => h(App),
  // render(createElement){
  //   return createElement("h1","你好啊");
  // }
}).$mount('#app')
