import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {
  Button,
  Input,
  Menu,
  MenuItem,
  MessageBox,
  Dialog
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Dialog)

Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$msbox = MessageBox
