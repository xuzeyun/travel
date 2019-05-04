import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false
// 初始化 fastClick
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: '<app/>'
// })
