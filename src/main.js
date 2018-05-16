// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 整个项目的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
// 点击延迟300ms解决方案
import fastClick from 'fastclick'
// 加载reset样式
import './assets/styles/reset.css'
// 1像素边框解决方案
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
// components: { App },=== components: { App :App},
// router, ===  router:router,
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同，返回不同的内容给用户