<template>
  <div>
    <button @click="switchLocale('en')">English</button>
    <button @click="switchLocale('bn')">Bengali</button>
  </div>
</template>

<script>
export default {
  methods: {
    switchLocale (lang) {
      console.log(`lang=${lang}`)
      // switch the locale.
      this.$i18n.locale = lang

      // re-validate to re-generate messages.
      // this.$refs.form.validate()
      const formRef = this.$store.state.commonObj.formRef
      console.log('nnnn formRef=', formRef)
      formRef.validate()
    }
  }
}
</script>
