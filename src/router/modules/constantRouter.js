const constantRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/sign/login'),
    meta: { title: '登录', roles: 1 }
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import('@/views/sign/regist'),
    meta: { title: '注册', roles: 1 }
  },
  {
    path: '/redirect',
    name: 'redirect',
    component: () => import('@/views/redirect')
  }
]


export default constantRouter