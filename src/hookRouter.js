import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Dialog } from 'vant'
import router from './router'
import store from './store'
import { getToken } from './utils/auth'
// const whiteList = ['/login', '/', '/express/index', '/index']
const whiteList = ['/login', '/regist']
NProgress.configure({ showSpinner: false })

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  const isLogin = getToken()
  if(isLogin) {
    if(to.path === '/login' || to.path === '/regist') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = store.getters.roles >= to.meta.roles ? true : false
      if(hasRoles) {
        store.dispatch('app/setTitle', to.meta.title)
        next()
      } else {
        Dialog.alert({
          message: '无权限访问！'
        }).then(() => {
          next({ ...from })
          NProgress.done()
        }).catch(() => {
          next('/')
        })
      }
    }
  } else {
    if(whiteList.indexOf(to.path) > -1) {
      store.dispatch('app/setTitle', to.meta.title)
      next()
    } else {
      store.dispatch('app/setTitle', to.meta.title)
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})


