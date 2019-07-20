<template>
  <div class="">
    <h2 class="flex py-4 mx-auto justify-center">{{'Телефонный справочник'}}</h2>
    <div class="flex flex-col justify-center">
      <div class="flex justify-center">
        <button class="inline-block m-2 p-3 border-orange-400 border-2" @click="sort_by_first">{{'По имени'}}</button>
        <button class="inline-block m-2 p-3 border-orange-400 border-2" @click="sort_by_last">{{'По фамилии'}}</button>
        <button class="inline-block m-2 p-3 border-orange-400 border-2" @click="sort_by_date">{{'По дате рождения'}}</button>
      </div>
      <div class="flex justify-center py-4">
        <div style="min-width: 400px">
          <label class="text-gray-700 text-sm font-bold mb-2 float-le ft">
            {{'Найти по имени:'}}
          </label>
          <input type="text" v-model="find_name" class="float-right shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
      </div>
      <div class="flex justify-center py-4" >
        <div style="min-width: 400px">
          <label class="text-gray-700 text-sm font-bold mb-2 float-left">
            {{'Найти по дате рождения:'}}
          </label>
          <input type="text" v-model="date" class="float-right shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
      </div>
      <div class="flex flex-row justify-center" v-for="user in users" :key="user.id.value" @click="replace(user)">
        <user-card class="mt-6 border-gray-400 rounded border-2 cursor-pointer"  :user="user" style="min-width: 400px"></user-card>
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
      sort_by: 'no-sorting',
      find_name: '',
      date: ''
    }
  },
  components: { UserCard },
  computed: {
    users () {
      return new SortableUsers(this.$store.state.users).sort_by(this.sort_by).filter_by(this.find_name, this.date).users
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
    },
    replace (user) {
      this.$router.push({ name: 'user_page', params: { id: user.id.value } })
    }
  }
}
</script>
