import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

export default router
