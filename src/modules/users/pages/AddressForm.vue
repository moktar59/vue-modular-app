<template>
  <div>
    <h1>User Address Form</h1>
    <select v-model="user_id">
      <option disabled value="">Please select one</option>
      <option v-for="(name, id) in userList" :value="id" :key="id">{{ name }}</option>
    </select>
    <hr>
    <address-entry v-bind:userId="user_id" v-if="user_id" :key="user_id"></address-entry>
  </div>
</template>

<script>
import RestApi from '../../../api/config'
import AddressEntry from './../components/AddressEntry'

export default {
  components: {
    AddressEntry
  },
  data () {
    return {
      user_id: '',
      hasUserId: false,
      userList: []
    }
  },
  async created () {
    const result = await RestApi.getData('/user-list')

    if (result.status_code === 200) {
      this.userList = result.data
    }
    console.log('userList=', this.userList)
  },
  methods: {
    displayUserAddressForm () {
      this.hasUserId = this.user_id !== ''
    }
  }
}
</script>
