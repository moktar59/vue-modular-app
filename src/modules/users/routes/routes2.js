const routes = [
  {
    path: '/user/register',
    name: 'user_register',
    component: () => import('../pages/RegisterBackendValidation')
  },
  {
    path: '/user/login',
    name: 'user_login',
    component: () => import('../pages/Login')
  },
  {
    path: '/user/address',
    name: 'user_address',
    component: () => import('../pages/AddressForm')
  }
]

export default routes
