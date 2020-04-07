const userRouter = [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user'),
    meta: { title: '我的', roles: 1 }
  }
]

export default userRouter