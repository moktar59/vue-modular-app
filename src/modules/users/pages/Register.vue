<template>
  <div>
    <h1>Registration</h1>
    <div>
      <ValidationObserver ref="form"  v-slot="{ handleSubmit, reset }">
        <form @submit.prevent="handleSubmit(register)" @reset.prevent="reset" autocomplete="off">
          <ValidationProvider name="name" rules="required|min:3" v-slot="{ errors }">
          <p>{{ $t(`name`)}} <br/>
            <input type="text" name="name" v-model="user.name"/>
            <br/>
            <span>{{ errors[0] }}</span>
          </p>
        </ValidationProvider>
        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <p>{{ $t('email')}}<br/>
            <input type="text" v-model="user.email"/>
            <br/>
            <span>{{ errors[0] }}</span>
          </p>
        </ValidationProvider>
        <ValidationProvider name="password" rules="required|min:6" v-slot="{ errors }">
          <p>{{ $t('password')}} <br/>
            <input type="password" v-model="user.password"/>
            <br/>
            <span>{{ errors[0] }}</span>
          </p>
        </ValidationProvider>
        <ValidationProvider name="user_type" rules="required" v-slot="{ errors }">
          <p>{{ $t('user_type')}} <br/>
            <select v-model="user.user_type">
              <option disabled value="">Please select one</option>
              <option value="ADMIN">Admin</option>
              <option value="OFFICER">Officer</option>
            </select>
            <br/>
            <span>{{ errors[0] }}</span>
          </p>
        </ValidationProvider>
        <br/>
        <p><button type="submit">Register</button> &nbsp; &nbsp; <button type="reset" @click="resetForm">Reset</button></p>

        <p>
          Already register? <router-link :to="{ name: 'user_login' }">Login</router-link>
        </p>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import RestApi from '../../../api/config'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

export default {
  components: {
    ValidationProvider, ValidationObserver
  },
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        user_type: ''
      }
    }
  },
  methods: {
    register () {
      console.log('user in register=', this.user)
      // const result = await RestApi.postData('/register', this.user)
      // console.log('result=', result)

      // if (result.status_code === 200) {
      //   this.$router.push('/user/login')
      //   this.resetForm()
      // }

      // if (status_code === 400) {
      //   this.$refs.form.setErrors({
      //     email: ['This email is already taken']
      //   });
      // }
    },
    resetForm () {
      const that = this
      Object.keys(this.user).forEach(function (key, index) {
        that.user[key] = ''
      })
    }
  },
  mounted () {
    console.log('Register mounted formRef=', this.$refs.form)
    this.$store.dispatch('changeCommonProperties', { formRef: this.$refs.form })
  }
}

// Install required rule and message.
extend('required', required)

// Install email rule and message.
extend('email', email)

// Install min rule and message.
extend('min', min)
</script>
