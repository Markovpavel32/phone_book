import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import './assets/css/styles.scss'
import 'tailwindcss/base.css'
import 'tailwindcss/components.css'
import 'tailwindcss/utilities.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  computed: Vuex.mapState(['users', 'loading']),
  created () {
    this.$store.dispatch('load_data') // dispatch loading
  },
  render: h => h(App)
}).$mount('#app')
