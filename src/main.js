import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './assets/main.css'
import Home from './components/Home.vue'
import User from './components/User.vue'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

const routes = [
  {path: "/", component: Home },
  {path: "/user", component: User }
];

const router =  new VueRouter({
  routes
});

Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
