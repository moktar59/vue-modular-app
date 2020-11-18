<template>
  <div>wait.....</div>
</template>

<script>
import restApi from '../../../api/config'
export default {
  async created () {
    if (!localStorage.getItem('accessToken')) {
      this.$router.push('/user/login')
      return
    }

    const res = await restApi.postData('/logout')
    console.log('res=', res)
    this.$store.commit('mutateCommonProperties', { accessToken: null })

    localStorage.removeItem('accessToken')
    this.$router.push('/user/login')
  }
}
</script>
