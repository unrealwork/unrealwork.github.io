// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire';
import {db} from "./firebase";
import VueProgressBar from 'vue-progressbar'

const progressBarOptions = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.1s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}



router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

Vue.use(VueProgressBar, progressBarOptions)
Vue.use(VueFire);

/* eslint-disable no-new */
const options = {
  el: '#app',
  router,
  firebase: {
    cv: db.ref('cv')
  },
  template: '<App/>',
  components: {App}
}
new Vue(options).$mount('#app')
