import Vue from 'vue'
import Router from 'vue-router'
import Brandom from '@/components/Brandom'
import Submission from '@/components/Submission'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/submission',
      name: 'submission',
      component: Submission,
    },
    {
      path: '/',
      name: 'Brandom',
      component: Brandom,
     //  children: [
     //   {
     //     // UserProfile will be rendered inside User's <router-view>
     //     // when /user/:id/profile is matched
     //     path: 'submission',
     //     component: Submission,
     //     name:'Submission'
     //   }
     // ]
   },
   {
     path: '/user',
     name: 'user',
     component: User,
   },
 ],
 mode: 'history'
})
