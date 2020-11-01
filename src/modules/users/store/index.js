import actions from './actions'
import getters from './getters'
import { mutations } from './mutations'

const state = {
  users: [
    { id: 1, name: 'Moktar', email: 'im.moktar@gmail.com', status: 1 }
  ]
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
