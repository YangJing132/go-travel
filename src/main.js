// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 整个项目的入口文件
import Vue from 'vue'
import App from './App'
import router from './router'
// 点击延迟300ms解决方案
import fastClick from 'fastclick'
// vuex
import store from './store'
// 加载reset样式
import 'styles/reset.css'
// 1像素边框解决方案
import 'styles/border.css'
// 引入iconfont
import 'styles/iconfont.css'
// 轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper, /* { default global options } */)
/* eslint-disable no-new */
// components: { App },=== components: { App :App},
// router, ===  router:router,
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
// 路由就是根据网址的不同，返回不同的内容给用户