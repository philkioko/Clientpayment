
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import Vuex from 'vuex'
import VueGoodTable from 'vue-good-table'
import store from "../src/views/store/store"
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/index.css';


Vue.use(BootstrapVue)
Vue.use(Vuex)
Vue.use(VueGoodTable)
Vue.use(VueSweetalert2)
Vue.use(VueToast, {
  // One of options
  position: 'top-right'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
