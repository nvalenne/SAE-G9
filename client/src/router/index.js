import Vue from 'vue'
import VueRouter from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import CarteView from "../views/CarteView";
import ContactView from "../views/ContactView";
import ListeManegeView from "../views/ListeManegeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'AccueilView',
    component: AccueilView
  },
  {
    path: '/carte',
    name: 'CarteView',
    component: CarteView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  },
  {
    path: '/liste_manege',
    name: 'ListeManegeView',
    component: ListeManegeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
