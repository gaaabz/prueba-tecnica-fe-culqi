import { useUserStore } from '@/stores'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory('/prueba-tecnica-fe-culqi/'),
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'LoginPage',
            component: () => import('@pages/LoginPage.vue'),
        },
        {
            path: '/dashboard',
            name: 'DashboardPage',
            component: () => import('@layouts/DefaultLayout.vue'),
            children: [
                {
                    path: 'empleados',
                    name: 'EmpleadosPage',
                    component: () => import('@pages/EmpleadosPage.vue'),
                },
                {
                    path: 'reclutamiento',
                    name: 'ReclutamientoPage',
                    component: () => import('@pages/ReclutamientoPage.vue'),
                },
            ],
        },
    ],
})

router.beforeEach(to => {
    const store = useUserStore()
    const { isAuthenticated } = store

    if (to.name !== 'LoginPage' && !isAuthenticated) {
        return { name: 'LoginPage' }
    }

    if ((to.name === 'LoginPage' || to.name === 'DashboardPage') && isAuthenticated) {
        return { name: 'EmpleadosPage' }
    }
})

export default router
