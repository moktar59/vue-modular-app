import bnLang from './bn'
import enLang from './en'

const langs = Object.assign({}, ...bnLang, ...enLang)
console.log('langs from blog locale=', langs)
export default langs
