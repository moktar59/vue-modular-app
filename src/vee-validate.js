import { configure } from 'vee-validate'
import { i18n } from './locale/i18n'

configure({
  defaultMessage: (field, values) => {
    // override the field name.
    values._field_ = i18n.t(`${field}`)

    return i18n.t(`validation.${values._rule_}`, values)
  }
})
