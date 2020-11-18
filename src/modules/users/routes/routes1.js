const routes = [
  {
    path: '/user/list',
    name: 'user.list',
    component: () => import('../pages/List'),
    meta: {
      requiresAuth: true,
      isAdmin: true
    }
  },
  {
    path: '/user/logout',
    name: 'logout',
    component: () => import('../pages/Logout'),
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
