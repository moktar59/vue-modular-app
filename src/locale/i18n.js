import Vue from 'vue'
import VueI18n from 'vue-i18n'
import bn from 'vee-validate/dist/locale/bd.json'
import en from 'vee-validate/dist/locale/en.json'
import blogEn from '../modules/blogs/lang/en'
import blogBn from '../modules/blogs/lang/bn'
import userEn from '../modules/users/lang/en'
import userBn from '../modules/users/lang/bn'

Vue.use(VueI18n)

const messages = {
  en: { ...blogEn.general, ...userEn.general, fields: blogEn.fields, validation: en.messages },
  bn: { ...blogBn.general, ...userBn.general, fields: blogBn.fields, validation: bn.messages }
}

console.log('messages=', messages)

const i18n = new VueI18n({
  locale: 'en',
  messages: messages
})

export { i18n }
