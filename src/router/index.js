import Vue from 'vue'
import VueRouter from 'vue-router'
import constantRouter from './modules/constantRouter'
import expressRouter from './modules/express'
import homeRouter from './modules/home'

Vue.use(VueRouter)

const routes = [].concat(expressRouter, homeRouter, constantRouter)

const creatRouter = () => new VueRouter({
  mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = creatRouter()

export default router
