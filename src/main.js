import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import './assets/main.css'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Login from './components/Login.vue'
import Botiquin from './components/Botiquin.vue'
import Catalogo from './components/Catalogo.vue'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"

import {PiniaVuePlugin, createPinia} from "pinia"

Vue.prototype.$http = axios

Vue.use(PiniaVuePlugin)
const pinia = createPinia()

const routes = [
  {path: "/", component: Home },
  {path: "/user", component: User },
  {path: "/login", component: Login },
  {path: "/botiquin", component: Botiquin },
  {path: "/catalogo", component: Catalogo }
];

const router =  new VueRouter({
  routes
});

Vue.use(VueRouter)

new Vue({
  pinia,
  router,
  render: (h) => h(App)
}).$mount('#app')
