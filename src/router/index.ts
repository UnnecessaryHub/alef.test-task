import { createRouter }     from 'vue-router'
import { createWebHistory } from 'vue-router'

import FormView             from '../views/FormView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/alef.test-task/form',
      name: 'form',
      component: FormView
    },
    {
      path: '/alef.test-task/preview',
      name: 'preview',
      component: () => import('../views/PreviewView.vue')
    }
  ]
})

export default router
