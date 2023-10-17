import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const HomeView = defineAsyncComponent(() => import('@/views/home/index.vue'))
const FlowEditorView = defineAsyncComponent(() => import('@/views/flowEditor/index.vue'))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/flow-editor',
      name: 'flow-editor',
      component: FlowEditorView
    }
  ]
})

export default router
