import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/users/store'
import Items from './modules/items/store'
import Reports from "./modules/reports/store"


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Users,
    Items,
    Reports
  }
})
