<template>
  <div>
    <p class="page-head">User Form</p>
    <p>
      <br/>
      {{ $t('name') }} <input type="text" v-model="user.name" />
      <br/>
      {{ $t('email') }} <input type="text" v-model="user.email" />

      <br/>
      <br/>
      <button @click="saveUser()">Save</button>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        id: 3,
        name: 'sulaiman',
        email: '',
        status: 1
      }
    }
  },
  methods: {
    saveUser () {
      this.$store.dispatch('UserStore/addUser', this.user)
    }
  }
}
</script>

<style scoped>
.page-head {
  font-size: 16px;
  color: blue;
}
</style>
