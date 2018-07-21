import Vue from 'vue'
import Router from 'vue-router'
import Css from '@/components/css/Css'
import Javascript from '@/components/javascript/Javascript'
import Other from '@/components/others/Other'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/css',
      name: 'css',
      component: Css
    },
    {
      path: '/javascript',
      name: 'javascript',
      component: Javascript
    },
    {
      path: '/other',
      name: 'other',
      component: Other
    },
    {
      path: '/',
      redirect: '/css'
    }
  ]
})
