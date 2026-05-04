import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '@/views/Accueil.vue'
import Trains from '@/views/Trains.vue'
import Sae3a from '@/views/Sae3a.vue'
import Nuisance from '@/views/Nuisance.vue'
import MyAvatar from '@/views/MyAvatar.vue'
import IAs from '@/views/IAs.vue'
import NuitInfo2024 from '@/views/NuitInfo2024.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        redirect: {name : 'accueil'}
      },
      {
        path: '/accueil',
        name: 'accueil',
        component: Accueil
      },
      {
        path: '/trains',
        name: 'trains',
        component: Trains
      },
      {
        path: '/sae3a',
        name: 'sae3a',
        component: Sae3a
      },
      {
        path: '/nuit-info2024',
        name: 'nuit-info2024',
        component: NuitInfo2024
      },
      {
        path: '/nuisance',
        name: 'nuisance',
        component: Nuisance
      },
      {
        path: '/my-avatar',
        name: 'my-avatar',
        component: MyAvatar
      },
      {
        path: '/ias',
        name: 'ias',
        component: IAs
      },
      /*{
        path: '/cgj2026',
        name: 'cgj2026',
        component: CGJ2026
      },*/
      {
        path: '/:pathMatch(.*)*',
        redirect: {name : 'accueil'}
      }
    ],
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition // bouton retour navigateur
      } else {
        return { top: 0 }
      }
    }
})

export default router
