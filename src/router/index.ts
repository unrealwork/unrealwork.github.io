import Vue from 'vue'
import Router from 'vue-router'
import Logo from '@/components/Logo.vue'
import NotFound from '@/components/NotFound.vue'
import CvView from '@/views/CvView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Logo,
      meta: {title: 'Home'}
    },
    {
      path: '/about/',
      name: 'About',
      component: CvView,
      meta: {title: 'About'}
    },
    {
      path: '*',
      name: 'Not found',
      component: NotFound,
      meta: {title: 'Not found'}
    }
  ]
})
