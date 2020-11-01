export default {
  userFind: (state) => state.users.find(user => user.status === 1)
}
