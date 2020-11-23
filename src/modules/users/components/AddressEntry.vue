<template>
  <div>
    <div>
      <ValidationObserver ref="userAddressForm"  v-slot="{ handleSubmit, reset }">
        <form @submit.prevent="handleSubmit(saveUserAddress)" @reset.prevent="reset" autocomplete="off">
          <ValidationProvider name="division" rules="required" v-slot="{ errors }">
            <p>Division <br/>
            <select v-model="userAddress.division_id">
                <option disabled value="">Please select one</option>
                <option v-for="division in divisionList" :value="division.id" :key="division.id">{{ division.name }}</option>
              </select>
              <br/>
              <span>{{ errors[0] }}</span>
            </p>
          </ValidationProvider>
        <ValidationProvider name="district" rules="required" v-slot="{ errors }">
          <p>District<br/>
            <select v-model="userAddress.district_id">
              <option disabled value="">Please select one</option>
              <option v-for="district in districtList" :value="district.id" :key="district.name">{{ district.name }}</option>
            </select>
            <br/>
            <span>{{ errors[0] }}</span>
          </p>
        </ValidationProvider>
        <ValidationProvider name="upazila" rules="required" v-slot="{ errors }">
          <p>Upazila <br/>
            <select v-model="userAddress.upazila_id">
              <option disabled value="">Please select one</option>
              <option v-for="upazila in upazilaList" :value="upazila.id" :key="upazila.id">{{ upazila.name }}</option>
            </select>
            <br/>
            <span>{{ errors[0] }}</span>
          </p>
        </ValidationProvider>
        <ValidationProvider name="address" rules="required" v-slot="{ errors }">
          <p>Address <br/>
            <textarea name="" id="" cols="30" rows="10" v-model="userAddress.address"></textarea>
            <br/>
            <span>{{ errors[0] }}</span>
          </p>
        </ValidationProvider>
        <br/>
        <button @click="testMixin">Test Mixin</button>
        <p><button type="submit">Save</button> &nbsp; &nbsp; <button type="reset" @click="resetForm">Reset</button></p>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import RestApi from '../../../api/config'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'
import DropdownMixin from './../../../mixins/dropdown'

export default {
  props: ['userID'],
  mixins: [DropdownMixin],
  components: {
    ValidationProvider, ValidationObserver
  },
  data () {
    return {
      userAddress: {
        user_id: this.$vnode.key,
        division_id: '',
        district_id: '',
        upazila_id: '',
        address: ''
      },
      userList: [],
      districtList: [],
      upazilaList: []
    }
  },
  computed: {
    testVar: function () {
      return this.userAddress.user_id
    },
    divisionList: function () {
      return this.$store.state.commonObj.divisionList
    }
  },
  watch: {
    'userAddress.division_id': function (newVal, oldVal) {
      console.log('testing watcher newVal', newVal)
      this.districtList = this.getDistrictList(newVal)
      console.log('this.districtList in watcher = ', this.districtList)
    },
    'userAddress.district_id': function (newVal, oldVal) {
      console.log('testing watcher newVal', newVal)
      this.upazilaList = this.getUpazilaList(newVal)
      console.log('this.upazilaList in watcher = ', this.upazilaList)
    }
  },
  updated () {
    console.log('updated called')
  },
  methods: {
    async saveUserAddress () {
      console.log('user in user address=', this.userAddress)
      const result = await RestApi.postData('/user/address/store', this.userAddress)
      console.log('result=', result)

      if (result.status_code === 200) {
        this.$router.push('/user/list')
        // this.resetForm()
      }
    },
    resetForm () {
      const that = this
      Object.keys(this.user).forEach(function (key, index) {
        that.user[key] = ''
      })
    }
  },
  mounted () {
    console.log('user id = ', this.$vnode.key)
    // this.divisionList = this.getDivisionList()
    console.log('divisionList=', this.divisionList)
    console.log('Register mounted formRef=', this.$refs.userAddressForm)
    this.$store.dispatch('changeCommonProperties', { formRef: this.$refs.userAddressForm })
  }
}

// Install required rule and message.
extend('required', required)
</script>
