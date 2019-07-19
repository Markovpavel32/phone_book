import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    update_users (state, users) {
      state.users = users
    },
    change_loading_state (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    load_data ({ commit }) {
      axios.get('https://randomuser.me/api/?results=100&inc=name,picture,dob,id&nat=us').then(response => {
        commit('update_users', response.data.results)
        commit('change_loading_state', false)
      })
    }
  }
})
