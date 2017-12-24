// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire';
import {db} from "./firebase";

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})


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
new Vue(options)
