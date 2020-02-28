const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  isLogin: state => state.user.isLogin,
  title: state => state.app.title
}

export default getters