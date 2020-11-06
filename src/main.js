import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import i18n from './locale'
// import { configure } from 'vee-validate'
import { i18n } from './locale/i18n'
import './vee-validate'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

// configure({
//   defaultMessage: (field, values) => {
//     // override the field name.
//     values._field_ = i18n.t(`fields.${field}`)

//     return i18n.t(`validation.${values._rule_}`, values)
//   }
// })
