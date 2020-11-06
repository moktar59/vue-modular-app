import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { AllFieldsEn, AllGeneralsEn } from './en'
import { AllFieldsBn, AllGeneralsBn } from './bn'
import en from 'vee-validate/dist/locale/en.json'
import bd from 'vee-validate/dist/locale/bd.json'
// import ValidationMessagesEn from 'vee-validate/dist/locale/en.json'
// import ValidationMessagesBn from 'vee-validate/dist/locale/bd.json'

Vue.use(VueI18n)

const messages = {
  en: { ...AllGeneralsEn, fields: AllFieldsEn, validation: en },
  bn: { ...AllGeneralsBn, fields: AllFieldsBn, validation: bd }
}

console.log('messages = ', messages)
const anotherMessage = {
  en: {
    fields: {
      title: 'Title',
      description: 'Description'
    },
    title: 'Title',
    description: 'Description',
    validation: en
  },
  bn: {
    fields: {
      title: 'B title',
      description: 'B Description'
    },
    description: 'B Description',
    title: 'B Title',
    validation: bd
  }
}
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
  messages: anotherMessage // set locale messages
})

export default i18n
