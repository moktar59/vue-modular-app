import BlogLangs from '../modules/blogs/lang/en'
import UserLangs from '../modules/users/lang/en'

/**
 * All bn fields are unique all over the system
 */
export const AllFieldsEn = Object.assign({}, BlogLangs.fields, UserLangs.fields)
export const AllGeneralsEn = Object.assign({}, BlogLangs.general, UserLangs.general)
