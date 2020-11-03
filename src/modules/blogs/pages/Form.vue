<template>
  <div>
    <p class="page-head">Blog Form</p>
    <div>
      {{ $t('title')}}
      <br/>
      {{ $t('description') }}
      <validation-observer ref="form">
        <validation-provider name="title" rules="required|min:6" v-slot="{ errors }">
          <input type="text" v-model="title" placeholder="Type title of the blog"/>
          <span>{{ errors[0] }}</span>
        </validation-provider>
      </validation-observer>
    </div>
    <button @click="onChangeLocale">change message lang</button>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

export default {
  data () {
    return {
      title: '',
      description: ''
    }
  },
  components: {
    ValidationProvider, ValidationObserver
  },
  methods: {
    onChangeLocale () {
      this.$i18n.locale = 'bn'
      console.log('localchanged')
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

<style scoped>
.page-head {
  font-size: 16px;
  color: blue;
}
</style>
