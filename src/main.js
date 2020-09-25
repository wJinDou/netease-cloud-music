import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入全局组件
import './utils/global.js'
// 引入初始化样式
import './styles/base.less'
// 引入element-ui组件
import './utils/element-ui'
// 引入字体图标
import './styles/iconfont.css'
// 引入axios请求
import './utils/request'
// 引入动画库
import 'animate.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
