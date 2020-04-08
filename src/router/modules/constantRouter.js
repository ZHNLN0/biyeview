const constantRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/sign/login'),
    meta: { title: '登录', roles: 1, keepAlive: true }
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('@/views/sign/regist'),
    meta: { title: '注册', roles: 1, keepAlive: true }
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import('@/views/redirect'),
    meta: { title: '', roles: 1, keepAlive: true }
  }
]


export default constantRouter