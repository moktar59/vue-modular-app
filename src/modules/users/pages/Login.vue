<template>
<div>
  <h1>Login</h1>
  <div>
      <p>
        Email <br/>
        <input type="text" v-model="user.email"/>
      </p>
      <p>
          Password <br/>
          <input type="password" v-model="user.password"/>
      </p>
      <p>
          <button @click="login">Login</button>
      </p>

      <p>
        If you do not have an account <router-link :to="{ name: 'user_register'}">register here.</router-link>
      </p>
  </div>
</div>
</template>

<script>
import RestApi from '../../../api/config'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login () {
      console.log('user=', this.user)
      const result = await RestApi.postData('/login', this.user)
      console.log('accessToken=', result)
      if (result.status_code === 200) {
        localStorage.setItem('accessToken', result.token)
        localStorage.setItem('userType', result.user.user_type)
        this.$store.commit('mutateCommonProperties', { accessToken: result.token })
        if (result.user.user_type !== 'ADMIN') {
          this.$router.push('/blog/form')
        } else {
          this.$router.push('/user/list')
        }
      }
    }
  }
}
</script>
