<template>
  <div>
    <h1>User List</h1>
    <div>
      <input type="text" v-model="search_text" />
      <button type="button" @click="search">Search</button>
    </div>
    <br/>
    <div class="table-div">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>User Type</th>
          <th>Division</th>
          <th>District</th>
          <th>Upazila</th>
          <th>Address</th>
        </tr>
        <tr v-for="user in userList" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.user_type }}</td>
          <td>{{ user.division_name }}</td>
          <td>{{ user.district_name }}</td>
          <td>{{ user.upazila_name }}</td>
          <td>{{ user.address }}</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
        </tr>
      </table>
    </div>
    <hr>
    <div class="pagination" v-if="pagination.total">
      <button @click="nextPage" v-if="pagination.next">Next &gt;&gt;</button>
      &nbsp;
      <button @click="previousPage" v-if="pagination.prev">&lt;&lt; Previous</button>
    </div>
  </div>
</template>

<script>
import RestApi from './../../../api/config'

export default {
  data () {
    return {
      userList: [],
      search_text: '',
      pagination: {
        total: 0,
        per_page: 5,
        current: 0,
        links: [],
        next: 1,
        prev: 1,
        last_page: 0
      }
    }
  },
  async created () {
    this.search()
  },
  methods: {
    async search () {
      const result = await RestApi.getData('/user/list', { search_text: this.search_text, page: this.pagination.current })
      if (result.status_code === 200) {
        this.userList = result.data.data
        this.pagination.total = result.data.total
        this.pagination.last_page = result.data.last_page
        this.pagination.current = result.data.current_page
      }

      console.log('result=', result)
      console.log('userlist=', this.userList)
      console.log('pagination=', this.pagination)
    },
    nextPage () {
      this.pagination.current++
      this.pagination.prev = 1
      this.pagination.next = 1

      if (this.pagination.current >= this.pagination.last_page) {
        this.pagination.current = this.pagination.last_page
        this.pagination.next = 0
      }

      console.log('pagination in next=', this.pagination)
      this.search()
    },
    previousPage () {
      this.pagination.current--
      this.pagination.next = 1
      this.pagination.prev = 1

      if (this.pagination.current <= 1) {
        this.pagination.current = 1
        this.pagination.prev = 0
      }

      console.log('pagination in prev=', this.pagination)
      this.search()
    }
  }
}
</script>

<style scoped>
.page-head {
  font-size: 16px;
  color: blue;
}
.table-div {
  text-align: center !important;
  width: 60%;
  margin: auto;
}
</style>
