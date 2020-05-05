const userRouter = [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user'),
    meta: { title: '我的', roles: 1, keepAlive: true }
  },
  {
    path: '/diary',
    name: 'diary',
    component: () => import('@/views/user/diary/index'),
    meta: { title: '发表日记', roles: 1 }
  }
]

export default userRouter