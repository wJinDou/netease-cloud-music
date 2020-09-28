import Vue from 'vue'
function changeColor ({ bgColor, fontColor, bgColor2, fontColor2, bgColor3 }) {
  document.documentElement.style.setProperty('--bgColor', bgColor)
  document.documentElement.style.setProperty('--bgColor2', bgColor2)
  document.documentElement.style.setProperty('--bgColor3', bgColor3)
  document.documentElement.style.setProperty('--fontColor', fontColor)
  document.documentElement.style.setProperty('--fontColor2', fontColor2)
}
Vue.prototype.$changeColor = changeColor
