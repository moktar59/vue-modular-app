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
  }
]

export default routes
