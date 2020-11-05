import BlogLangs from '../modules/blogs/lang/bn'
import UserLangs from '../modules/users/lang/bn'

/**
 * All bn fields are unique all over the system
 */
export const AllFieldsBn = Object.assign({}, BlogLangs.fields, UserLangs.fields)
export const AllGeneralsBn = Object.assign({}, BlogLangs.general, UserLangs.general)
