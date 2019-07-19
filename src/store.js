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
    change_loading_state (state, loading) {
      state.loading = loading
    }
  },
  actions: {
    load_data ({ commit }) {
      axios.get(`https://randomuser.me/api/?results=100&seed=${window.localStorage.getItem('seed')}&inc=info,name,picture,dob,id,phone,email&nat=us`).then(response => {
        if (!window.localStorage.getItem('seed')) window.localStorage.setItem('seed', response.data.info.seed)
        commit('update_users', response.data.results)
        commit('change_loading_state', false)
      })
    }
  },
  getters: {
    get_user_by_id: state => id => {
      return state.users.find(user => user.id.value === id);
    }
  }
})
