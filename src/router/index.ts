
/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        meta: {
            title: "系统介绍-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/introduction.vue')
    },
    {
        path: '/catalogue',
        name: 'catalogue',
        meta: {
            title: "功能目录-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/catalogue.vue')
    },
    {
        path: '/form',
        name: 'form',
        meta: {
            title: "表单组件-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/form.vue')
    },
    {
        path: '/table',
        name: 'table',
        meta: {
            title: "Table-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/table.vue')
    },
    {
        path: '/echarts-normal',
        name: 'echarts-normal',
        meta: {
            title: "常见图表-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/echarts-normal.vue')
    },
    {
        path: '/echarts-3d',
        name: 'echarts-3d',
        meta: {
            title: "3D-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/echarts-3d.vue')
    },
    {
        path: '/user',
        name: 'user',
        meta: {
            title: "切换皮肤-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/user.vue')
    },
    {
        path: '/skin',
        name: 'skin',
        meta: {
            title: "个人中心-Abby作品展示",
            keepAlive: false
        },
        component: () => import('./../views/skin.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;

export const initRouter = (app : App<Element>) => {
    app.use(router)
}