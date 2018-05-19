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


Vue.use(BootstrapVue);
Vue.use(Vuex);
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
