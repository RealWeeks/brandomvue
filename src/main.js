// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'bootstrap/dist/css/bootstrap.min.css'
// import * as uiv from 'uiv'
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuex from 'vuex';
import BootstrapVue from 'bootstrap-vue';
import {store} from './store.js'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import VueRouter from 'vue-router'

import { faDiceOne } from '@fortawesome/free-solid-svg-icons'
import { faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vuetify from 'vuetify'

const toastTypes = {
  success: 'success',
  error: 'error',
  info: 'info',
  warn: 'warn'
}

miniToastr.init({types: toastTypes})

function toast ({title, message, type, timeout, cb}) {
  return miniToastr[type](message, title, timeout, cb)
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

library.add(faCoffee, faDiceOne, faDiceTwo)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */

Vue.use(Vuetify)
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueRouter)
Vue.use(VueNotifications, options);
// Vue.use(uiv)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
