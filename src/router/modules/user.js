const userRouter = [
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user'),
    meta: { title: '我的', roles: 1, keepAlive: true }
  },
  {
    path: '/createDiary',
    name: 'createDiary',
    component: () => import('@/views/user/diary/CreateDiary'),
    meta: { title: '发表日记', roles: 1 }
  },
  {
    path: '/myDiary',
    name: 'myDiary',
    component: () => import('@/views/user/diary/MyDiary'),
    meta: { title: '我的日记', roles: 1 }
  },
  {
    path: '/updateUser',
    name: 'updateUser',
    component: () => import('@/views/user/information/UpdateUser'),
    meta: { title: '修改信息', roles: 1 }
  }
]

export default userRouter