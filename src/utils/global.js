// 这里引用全局组件
import Vue from 'vue'

// 引用组件
import MusicHeader from '../components/Music-Header.vue'
import MusicMenu from '../components/Music-Menu.vue'

// 使用组件
Vue.component('music-header', MusicHeader)
Vue.component('music-menu', MusicMenu)
