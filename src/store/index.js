import Vue from 'vue'
import Vuex from 'vuex'
import PostStore from '../modules/blogs/store'
import UserStore from '../modules/users/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    common: {}
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    PostStore,
    UserStore
  }
})
