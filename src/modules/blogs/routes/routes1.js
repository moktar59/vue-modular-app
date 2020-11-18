const routes = [
  {
    path: '/blog/list',
    name: 'blog.list',
    component: () => import('../pages/List'),
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
