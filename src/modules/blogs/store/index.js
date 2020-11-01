import actions from './actions'
import getters from './getters'
import { mutations } from './mutations'

const state = {
  posts: [
    { id: 1, title: 'Test Post Title', description: 'Test Description', publish_date: null, status: 1 },
    { id: 2, title: 'Test Post Title 2', description: 'Te Description 2', publish_date: null, status: 0 }
  ]
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
