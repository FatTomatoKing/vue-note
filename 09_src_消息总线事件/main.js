import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
  // 完成了將App 组件放入到容器中
  // $mount = el:'#app'
  render: h => h(App),
  // render(createElement){
  //   return createElement("h1","你好啊");
  // }
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
