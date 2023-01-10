import Vue from 'vue'
import VueRouter from 'vue-router'
import ModifierManegeView from "@/views/ModifierManegeView.vue";
import ModifierPrestataireView from "@/views/ModifierPrestataireView";
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AccueilView',
    component: () => import("@/views/AccueilView.vue"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/carte',
    name: 'CarteView',
    component: () => import("@/views/CarteView"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: () => import("@/views/ContactView"),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/liste_manege',
    name: 'ListeManegeView',
    component: () => import("@/views/ListeManegeView"),
    meta: {
      authRequired: false
    },
    children: [
      {
        path: ':id',
        name: 'manege',
        component: ModifierManegeView,
        meta: {
          authRequired: true
        },
      }
    ]
  },
  {
    path: '/modifier_manege',
    name: 'ModifierManegeView',
    component: ModifierManegeView,
    meta: {
      authRequired: true
    },
  },
  {
    path: '/liste_prestataire',
    name: 'ListePrestataireView',
    component: () => import("@/views/ListePrestataireView"),
    meta: {
      authRequired: false
    },
    children: [
      {
        path: ':id',
        name: 'prestataire',
        component: ModifierPrestataireView,
        meta: {
          authRequired: true
        },
      }
    ]
  },
  {
    path: '/connexion',
    name: 'connexionView',
    component: () => import('@/views/ConnexionView'),
    meta: {
      authRequired: false
    },
  },
  {
    path: '/inscription',
    name: 'inscriptionView',
    component: () => import("@/views/InscriptionView"),
    meta: {
      authRequired: false
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.authRequired){
    console.log("authentification necessaire");
  }
  next();
})

export default router;
