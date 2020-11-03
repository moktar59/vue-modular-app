import Vue from 'vue'
import VueI18n from 'vue-i18n'
import UserLangs from '../modules/users/lang'
import BlogLangs from '../modules/blogs/lang'
import enValidationMessages from 'vee-validate/dist/locale/en.json'
import bnValidationMessages from 'vee-validate/dist/locale/bd.json'

Vue.use(VueI18n)
console.log('BlogLangsf=', BlogLangs)
const enLangs = Object.assign(BlogLangs.en, UserLangs.en)
const bnLangs = Object.assign(BlogLangs.bn, UserLangs.bn)
enLangs.validation = enValidationMessages
bnLangs.validation = bnValidationMessages
const messages = { en: enLangs, bn: bnLangs }

const dateTimeFormats = {
  en: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric'
    }
  },
  bn: {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    },
    long: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  }
}

const numberFormats = {
  en: {
    currency: {
      style: 'currency',
      currency: 'USD'
    }
  },
  bn: {
    currency: {
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'symbol'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale, could be the http header?
  fallbackLocale: 'bn', // set fallback locale
  dateTimeFormats,
  numberFormats,
  // mergedMessages
  messages // set locale messages
})

console.log('message=', messages)

export default i18n
