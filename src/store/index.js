import Vue from 'vue'
import Vuex from 'vuex'
import PostStore from '../modules/blogs/store'
import UserStore from '../modules/users/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    commonObj: {
      formRef: null,
      hasDropdownLoaded: false,
      divisionList: [],
      districtList: [],
      upazilaList: []
    }
  },
  mutations: {
    mutateCommonProperties (state, payload) {
      if (!payload.formRef) {
        payload.formRef = null
      }

      state.commonObj = Object.assign({}, state.commonObj, payload)
    }
  },
  actions: {
    changeCommonProperties ({ commit }, payload) {
      commit('mutateCommonProperties', payload)
    }
  },
  modules: {
    PostStore,
    UserStore
  }
})
