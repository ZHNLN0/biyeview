import Vue from 'vue'
import VueRouter from 'vue-router'
import billRouter from './modules/bill'
import constantRouter from './modules/constantRouter'
import expressRouter from './modules/express'
import homeRouter from './modules/home'
import userRouter from './modules/user'

Vue.use(VueRouter)

const routes = [].concat(expressRouter, homeRouter, constantRouter, billRouter, userRouter)

const creatRouter = () => new VueRouter({
  mode: 'history', 
  scrollBehavior: () => ({ y: 0 }),
  routes: routes
})

const router = creatRouter()

export default router
