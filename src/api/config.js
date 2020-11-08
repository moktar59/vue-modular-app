import axios from 'axios'

const baseURL = 'http://api.lara8sanctum.localdev/api/'

const client = axios.create({
  baseURL: baseURL,
  json: true
})

export default {
  async execute (method, uri, data, params = {}) {
    const accessToken = localStorage.getItem('accessToken')
    return client({
      method,
      url: uri,
      data,
      params: params,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(req => {
      return req.data
    })
  },
  getData (uri, params = {}) {
    return this.execute('get', uri, {}, params)
  },
  postData (uri, data) {
    return this.execute('post', uri, data)
  },
  putData (uri, data) {
    return this.execute('put', uri, data)
  },
  deleteData (uri) {
    return this.execute('delete', uri)
  }
}
