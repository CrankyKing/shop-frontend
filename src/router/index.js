import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('../pages/myHome/MyHome'),

        },
        {
            path: '/home',
            component: () => import('../pages/myHome/MyHome'),

        },
        {
            path: '/cart',
            component: () => import('../pages/myCart/MyCart'),

        },
        {
            path: '/mine',
            component: () => import('../pages/mine/Mine'),

        },
        {
            path: '/order',
            component: () => import('../pages/myOrder/MyOrder'),

        },
    ]
})

export default router;

