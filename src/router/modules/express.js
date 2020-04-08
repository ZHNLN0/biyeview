const expressRouter = [
  {
    path: '/express',
    name: 'express',
    component: () => import('@/views/express/index'),
    meta: {
      title: '快递',
      roles: 2,
      keepAlive: true
    }
  },
  {
    path: '/expressSearch',
    name: 'expressSearch',
    component: () => import('@/views/express/expressSearch'),
    meta: {
      title: '快递查询',
      roles: 2,
      keepAlive: true
    }
  } 
]

export default expressRouter