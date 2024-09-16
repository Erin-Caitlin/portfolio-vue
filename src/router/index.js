import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('../views/LandingView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/education-experience',
    name: 'education-experience',
    component: () => import('../views/Education&ExperienceView.vue')
  },
  // {
  //   path: '/projects',
  //   name: 'projects',
  //   component: () => import('../views/ProjectsView.vue')
  // },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: () => import('../views/ContactView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
