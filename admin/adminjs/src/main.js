import Vue from 'vue'
import App from './App.vue'
import store from './store'

import "./assets/app.scss"

import vDragDrop from 'v-drag-drop';
Vue.use(vDragDrop);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
