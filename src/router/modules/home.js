
const homeRouter = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/index'),
    meta: {
      title: '首页',
      roles: 1
    }
  }
]

export default homeRouter