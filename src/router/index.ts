import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import CvView from '@/views/CvView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {title: 'Home'}
    },
    {
      path: '/about',
      name: 'About',
      component: CvView,
      meta: {title: 'About'}
    }
  ]
})
