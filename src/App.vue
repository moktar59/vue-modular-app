<template>
  <div id="app">
    <div>
      <button
        v-for="entry in languages"
        :key="entry.title"
        @click="changeLocale(entry.language)"
      >
        {{ entry.title }}
      </button>
    </div>
    <br />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="{ name: 'blog.list' }">Blog List</router-link> |
      <router-link :to="{ name: 'blog.form' }">Blog Form</router-link> |
      <router-link :to="{ name: 'user.list' }">User List</router-link> |
      <router-link :to="{ name: 'user.form' }">User Form</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import i18n from './locale'

export default {
  data () {
    return {
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'bn', language: 'bn', title: 'Bengali' }
      ]
    }
  },
  methods: {
    changeLocale (locale) {
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
