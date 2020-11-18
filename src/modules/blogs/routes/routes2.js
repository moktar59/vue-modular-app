const routes = [
  {
    path: '/blog/form',
    name: 'blog.form',
    component: () => import('../pages/Form.vue'),
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
