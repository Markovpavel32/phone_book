import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    current_user: undefined
  },
  mutations: {
    update_users (state, users) {
      state.users = users
    },
    update_current_user (state, user) {
      state.current_user = user
    },
    change_loading_state (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    load_data ({ commit }) {
      axios.get('https://randomuser.me/api/?results=100&inc=name,picture,dob,id,phone,email&nat=us').then(response => {
        commit('update_users', response.data.results)
        commit('change_loading_state', false)
      })
    },
    load_user ({ commit }, payload) {
      console.log({ commit }, payload)
      axios.get(`https://randomuser.me/api/?id=${payload.id}`).then(response => {
        commit('update_current_user', response.data.results[0])
      })
    }
  }
})
