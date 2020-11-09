import Vue from 'vue'
import VueI18n from 'vue-i18n'
import bn from 'vee-validate/dist/locale/bd.json'
import en from 'vee-validate/dist/locale/en.json'
// import { AllFieldsEn, AllGeneralsEn } from './en'
// import { AllFieldsBn, AllGeneralsBn } from './bn'
import blogEn from '../modules/blogs/lang/en'
import blogBn from '../modules/blogs/lang/bn'

Vue.use(VueI18n)

const messages = {
  en: { ...blogEn.general, fields: blogEn.fields, validation: en.messages },
  bn: { ...blogBn.general, fields: blogBn.fields, validation: bn.messages }
}
// const messages = {
//   en: { ...AllGeneralsEn, fields: AllFieldsEn, validation: en },
//   bn: { ...AllGeneralsBn, fields: AllFieldsBn, validation: bn }
// }

const messagesOrg = {
  bn: {
    fields: {
      email: 'ইমেইল',
      password: 'পাসওয়ার্ড'
    },
    validation: bn.messages
  },
  en: {
    fields: {
      email: 'E-mail',
      password: 'Password'
    },
    validation: en.messages
  }
}

console.log('messageOrg y=', messagesOrg)
console.log('messageOrg typey=', typeof messagesOrg)
console.log('messagesy=', messages)
console.log('message typey=', typeof messages)

const i18n = new VueI18n({
  locale: 'en',
  messages: messages
})

export { i18n }
