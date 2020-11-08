<template>
  <div>
    <h1>Registration</h1>
    <div>
      <p>Name <br/>
        <input type="text" v-model="user.name"/>
      </p>
      <p>Email<br/>
        <input type="text" v-model="user.email"/>
      </p>
      <p>Password <br/>
        <input type="password" v-model="user.password"/>
      </p>
      <br/>
      <p><button @click="register">Register</button></p>

      <p>
        Already register? <router-link :to="{ name: 'user_login' }">Login</router-link>
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
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register () {
      console.log('user in register=', this.user)
      const result = await RestApi.postData('/register', this.user)
      console.log('result=', result)
    }
  }
}
</script>
