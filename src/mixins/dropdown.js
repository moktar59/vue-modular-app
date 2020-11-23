import RestApi from './../api/config'

export default {
  created () {
    const hasDropdownLoaded = this.$store.state.commonObj.hasDropdownLoaded

    if (hasDropdownLoaded) {
      return
    }

    RestApi.getData('div-dist-upa-list', null).then(response => {
      console.log('response of dropdown', response)

      if (response.status_code === 200) {
        this.$store.commit('mutateCommonProperties', {
          hasDropdownLoaded: true,
          divisionList: response.data.divisionList,
          districtList: response.data.districtList,
          upazilaList: response.data.upazilaList
        })
      }
    })

    console.log('store in mixin=', hasDropdownLoaded)
    console.log('Test in mixin')
  },
  methods: {
    testMixin () {
      console.log('Mixin called')
    },
    getDivisionList () {
      console.log('getDivisionList commonObj=', this.$store.state.commonObj)
      return this.$store.state.commonObj.divisionList
    },
    getDistrictList (divisionId = null) {
      const districtList = this.$store.state.commonObj.districtList

      if (divisionId) {
        return districtList.filter(district => district.division_id === divisionId)
      }

      return districtList
    },
    getUpazilaList (districtId = null) {
      const upazilaList = this.$store.state.commonObj.upazilaList

      if (districtId) {
        return upazilaList.filter(upazila => upazila.district_id === districtId)
      }

      return upazilaList
    }
  }
}
