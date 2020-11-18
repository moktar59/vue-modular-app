<template>
  <div id="app">
    <div>
      <Localization/>
    </div>
    <br />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name: 'blog.list' }">Blog List</router-link> |
      <router-link :to="{ name: 'blog.form' }">Blog Form</router-link> |
      <router-link :to="{ name: 'user.list' }">User List</router-link> |
      <router-link :to="{ name: 'user_register' }">User Form</router-link>
      <router-link :to="{ name: 'logout' }" v-if="isLoggedIn">| Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import i18n from './locale'
import Localization from './components/Localization'

export default {
  components: {
    Localization
  },
  data () {
    return {
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'bn', language: 'bn', title: 'Bengali' }
      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.commonObj.accessToken
    }
  },
  created () {
    console.log('accessToken===', this.isLoggedIn)
  },
  methods: {
    changeLocale (locale) {
      console.log('changed locale', locale)
      i18n.locale = locale
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
