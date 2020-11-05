import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { AllFieldsEn, AllGeneralsEn } from './en'
import { AllFieldsBn, AllGeneralsBn } from './bn'
import ValidationMessagesEn from 'vee-validate/dist/locale/en.json'
import ValidationMessagesBn from 'vee-validate/dist/locale/bd.json'

Vue.use(VueI18n)

const messages = {
  en: { ...AllGeneralsEn, fields: AllFieldsEn, validation: ValidationMessagesEn },
  bn: { ...AllGeneralsBn, fields: AllFieldsBn, validation: ValidationMessagesBn }
}

console.log('messages = ', messages)
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

export default i18n
