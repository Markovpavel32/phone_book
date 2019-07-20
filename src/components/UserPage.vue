<template>
  <div v-if="user">
    <div v-if="!show_img">
      <h1 class="flex py-4 mx-auto justify-center text-4xl">{{capitalized_title}} {{capitalized_name_first}} {{capitalized_name_last}}</h1>
      <div class="flex justify-center flex-wrap">
        <img @click="show_img = true" :src="user.picture.large" class="p-4 cursor-pointer"/>
        <div class="p-4">
          <div class="p-3 border-l-2 border-orange-700">{{'email: ' + user.email}}</div>
          <div class="p-3 border-l-2 border-orange-700">{{'phone: ' + user.phone}}</div>
        </div>
      </div>
    </div>
    <img v-else @click="show_img = false" :src="user.picture.large" class="p-4 w-3/4 h-full mx-auto"/>
  </div>
</template>

<script>
import { capitalize } from '../assets/js/data_presenter'
import VModal from 'vue-js-modal'
import Vue from 'vue'

Vue.use(VModal)
export default {
  name: 'user-page',
  data () {
    return {
      show_img: false
    }
  },
  computed: {
    user () {
      return this.$route.params.user || this.$store.getters.get_user_by_id(this.$route.params.id)
    },
    capitalized_title () {
      return this.user && this.capitalize(this.user.name.title)
    },
    capitalized_name_first () {
      return this.capitalize(this.user.name.first)
    },
    capitalized_name_last () {
      return this.capitalize(this.user.name.last)
    }
  },
  methods: {
    capitalize (s) {
      return capitalize(s)
    }
  }
}
</script>
