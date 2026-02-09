// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
// Adicione 'type' se quiser ser bem específico, mas não é obrigatório se renomear p/ .ts
import type { RouteRecordRaw } from 'vue-router' 

import HomeView from '../views/home.vue'
import LaboratoriosView from '../views/laboratorios.vue' // Lembre-se da letra maiúscula!
import BibliotecaView from '../views/biblioteca.vue'
import QuadrasView from '../views/quadras.vue'
import SalasView from '../views/salas-de-aula.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/laboratorios',
    name: 'laboratorios',
    component: LaboratoriosView
  },
  {
    path: '/biblioteca',
    name: 'biblioteca',
    component: BibliotecaView
  },
  {
    path: '/quadras',
    name: 'quadras',
    component: QuadrasView
  },
  {
    path: '/salas',
    name: 'salas',
    component: SalasView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router