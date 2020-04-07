const billRouter = [
  {
    path: '/bill',
    name: 'bill',
    component: () => import('@/views/bill'),
    meta: { title: '账单', roles: 1 }
  }
]

export default billRouter