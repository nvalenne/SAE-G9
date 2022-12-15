import Vue from 'vue'
import VueRouter from 'vue-router'
import AccueilView from '@/views/AccueilView.vue'
import CarteView from "@/views/CarteView";
import ContactView from "@/views/ContactView";
import ListeManegeView from "@/views/ListeManegeView";
import ListePrestataireView from "@/views/ListePrestataireView";
import ConnexionView from "@/views/ConnexionView";
import InscriptionView from "@/views/InscriptionView";
import ModifierManegeView from "@/views/ModifierManegeView.vue";

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
  },
  {
    path: '/modifier_manege',
    name: 'ModifierManegeView',
    component: ModifierManegeView
  },
  {
    path: '/liste_prestataire',
    name: 'ListePrestataireView',
    component: ListePrestataireView
  },
  {
    path: '/connexion',
    name: 'connexionView',
    component: ConnexionView
  },
  {
    path: '/inscription',
    name: 'inscriptionView',
    component: InscriptionView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
