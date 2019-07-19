<template>
  <div class="">
    <h2 class="flex py-4 mx-auto justify-center">{{'Телефонный справочник'}}</h2>
    <div class="flex flex-col justify-center">
      <div class="flex justify-center">
        <button class="inline-block m-2 p-3 border-orange-400 border-2" @click="sort_by_first">{{'По имени'}}</button>
        <button class="inline-block m-2 p-3 border-orange-400 border-2" @click="sort_by_last">{{'По фамилии'}}</button>
        <button class="inline-block m-2 p-3 border-orange-400 border-2" @click="sort_by_date">{{'По дате рождения'}}</button>
      </div>
      <div class="flex flex-row" v-for="user in users" :key="user.id.value">
        <div class="w-1/3 h-12"></div>
        <user-card class="w-1/3 mt-6 border-gray-400 rounded border-2"  :user="user" ></user-card>
        <div class="w-1/3 h-12"></div>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from './UserCard'
import { SortableUsers } from '../assets/js/data_presenter'

export default {
  name: 'root',
  data () {
    return {
      sort_by: 'no-sorting'
    }
  },
  components: { UserCard },
  computed: {
    users () {
      return new SortableUsers(this.$store.state.users).sort_by(this.sort_by)
    }
  },
  methods: {
    sort_by_first () {
      this.sort_by === 'sort_by_first_up' ? this.sort_by = 'sort_by_first_down' : this.sort_by = 'sort_by_first_up'
    },
    sort_by_last () {
      this.sort_by === 'sort_by_last_up' ? this.sort_by = 'sort_by_last_down' : this.sort_by = 'sort_by_last_up'
    },
    sort_by_date () {
      this.sort_by === 'sort_by_date_up' ? this.sort_by = 'sort_by_date_down' : this.sort_by = 'sort_by_date_up'
    }
  }
}
</script>
