const billRouter = [
  {
    path: '/bill',
    name: 'bill',
    component: () => import('@/views/bill'),
    meta: { title: '账单', roles: 1, keepAlive: true }
  }
]

export default billRouter