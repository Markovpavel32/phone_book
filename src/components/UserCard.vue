<template>
  <div>
    <div class="p-3 flex">
      <img :src="user.picture.thumbnail" class="inline-block rounded-full p-3">
      <div class="inline-block p-3">
        <span>Full name: {{capitalized_title}} {{capitalized_name_first}} {{capitalized_name_last}}</span>
        <div>Date of born: {{moment(user.dob.date).format('DD.MM.YYYY')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { capitalize } from '../assets/js/data_presenter'

export default {
  name: 'user-card',
  props: {
    user: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      moment
    }
  },
  computed: {
    capitalized_title () {
      return this.capitalize(this.user.name.title)
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
