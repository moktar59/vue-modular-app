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
      const accessToken = await RestApi.postData('/login', this.user)
      console.log('accessToken=', accessToken)
    }
  }
}
</script>
