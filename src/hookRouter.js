import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Dialog } from 'vant'
import router from './router'
import store from './store'
import { getToken } from './utils/auth'
// const whiteList = ['/login', '/', '/express/index', '/index']
const whiteList = ['/login', '/regist']
NProgress.configure({ showSpinner: false })

const isHome = process.env.VUE_APP_ADDR === 'home'

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  let isLogin = true
  if(isHome) {
    isLogin = getToken()
  }
  if(isLogin) {
    if(to.path === '/login' || to.path === '/regist') {
      next({ path: '/' })
      NProgress.done()
    } else {
      let hasRoles = true
      if(!isHome) {
        hasRoles = store.getters.roles >= to.meta.roles ? true : false
      }
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


