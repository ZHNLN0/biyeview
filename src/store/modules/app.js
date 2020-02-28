const state = {
  title: '标题'
}

const mutations = {
  SET_TITLE: (state, title) => {
    state.title = title
  }
}

const actions = {
  setTitle: ({ commit }, title) => {
    commit('SET_TITLE', title)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}