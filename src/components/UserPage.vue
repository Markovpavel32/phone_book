<template>
  <div v-if="user">
    <h1 class="flex py-4 mx-auto justify-center text-4xl">{{capitalized_title}} {{capitalized_name_first}} {{capitalized_name_last}}</h1>
    <div class="flex justify-center">
      <img @click="show" :src="user.picture.large" class="p-4 w-1/4"/>
      <div class="p-4">
        <div class="p-3 border-l-2 border-orange-700">{{'email: ' + user.email}}</div>
        <div class="p-3 border-l-2 border-orange-700">{{'phone: ' + user.phone}}</div>
      </div>
    </div>
    <modal name="full-img" height="75%">
      <img @click="show" :src="user.picture.large" class="p-4 w-full h-full"/>
    </modal>
  </div>
</template>

<script>
import { capitalize } from '../assets/js/data_presenter'
import VModal from 'vue-js-modal'
import Vue from 'vue'

Vue.use(VModal)
export default {
  name: 'user-page',
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
    },
    show () {
      this.$modal.show('full-img')
    }
  }
}
</script>
