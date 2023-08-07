import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import sports from '../components/sports.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path:'/',
      name:'homeview',
      component:HomeView
    },
    {
   path:'/sports',
   name:'sports',
   component:sports
   
    }
  ]
})

export default router
