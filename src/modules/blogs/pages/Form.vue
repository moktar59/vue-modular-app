<template>
  <div>
    <ValidationObserver ref="form">
      <h2>Integrating i18n with VeeValidate: vue-i18n</h2>
      <ValidationProvider
        name="email"
        rules="required|email"
        v-slot="{ errors }"
      >
        <input type="text" v-model="email" placeholder="type some email" />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider
        name="password"
        rules="required|min:6"
        v-slot="{ errors }"
      >
        <input
          type="password"
          v-model="password"
          placeholder="type something"
        />
        <span>{{ errors[0] }}</span>
      </ValidationProvider>
    </ValidationObserver>

    <button @click="switchLoc">Switch Locale</button>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

export default {
  name: 'Example',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async submit () {
      console.log('email submitted!')
    },
    switchLoc () {
      // switch the locale.
      this.$i18n.locale = this.$i18n.locale === 'en' ? 'bn' : 'en'

      // re-validate to re-generate messages.
      this.$refs.form.validate()
    }
  }
}

// Install required rule and message.
extend('required', required)

// Install email rule and message.
extend('email', email)

// Install min rule and message.
extend('min', min)
</script>

<style>
span {
  display: block;
  margin-top: 20px;
}

input + span {
  margin-top: 3px;
}
</style>
