import { login } from '@/api/user'

const state = {
  isLogin: false,
  roles: 2,
  information: {}
}

const mutations = {
  SET_ISLOGIN: (state, status) => {
    state.isLogin = status
  },
  SET_INFORMATION: (state, data) => {
    state.information = data
  }
}

const actions = {
  userLogin: async({ commit }, data) => {
    const result = await login(data)
    if(result && result.code ===  0) {
      commit('SET_ISLOGIN', true)
      commit('SET_INFORMATION', result)
    }
    return result
  },
  setIsLogin: ({ commit }, status) => {
    commit('SET_ISLOGIN', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}