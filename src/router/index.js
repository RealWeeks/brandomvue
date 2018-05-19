import Vue from 'vue'
import Router from 'vue-router'
import Brandom from '@/components/Brandom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Brandom',
      component: Brandom
    }
  ]
})
