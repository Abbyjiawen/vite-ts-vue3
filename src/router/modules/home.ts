// import { $t } from "@/plugins/i18n";
import { home } from "@/router/enums";
const { VITE_HIDE_HOME } = import.meta.env;
// const Layout = () => import("@/layout/index.vue");

// const routes: Array<RouteRecordRaw> = [
//   {
//       path: '/',
//       name: 'home',
//       meta: {
//           title: "系统介绍-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/introduction.vue')
//   },
//   {
//       path: '/catalogue',
//       name: 'catalogue',
//       meta: {
//           title: "功能目录-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/catalogue.vue')
//   },
//   {
//       path: '/form',
//       name: 'form',
//       meta: {
//           title: "表单组件-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/form.vue')
//   },
//   {
//       path: '/table',
//       name: 'table',
//       meta: {
//           title: "Table-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/table.vue')
//   },
//   {
//       path: '/echarts-normal',
//       name: 'echarts-normal',
//       meta: {
//           title: "常见图表-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/echarts-normal.vue')
//   },
//   {
//       path: '/echarts-3d',
//       name: 'echarts-3d',
//       meta: {
//           title: "3D-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/echarts-3d.vue')
//   },
//   {
//       path: '/user',
//       name: 'user',
//       meta: {
//           title: "切换皮肤-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/user.vue')
//   },
//   {
//       path: '/skin',
//       name: 'skin',
//       meta: {
//           title: "个人中心-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/skin.vue')
//   },
//   {
//       path: '/login',
//       name: 'login',
//       meta: {
//           title: "login-Abby作品展示",
//           keepAlive: false
//       },
//       component: () => import('./../views/login.vue')
//   },
// ];





export default {
  path: '/home',
  redirect: "/home",
  name: 'home',
  meta: {
    title: "系统介绍-Abby作品展示",
    // keepAlive: false,
    rank: home,
    icon: "homeFilled",
  },
  // component: () => import('@/views/introduction.vue'),
  // },
  children: [
    {
      path: "/welcome",
      name: "Welcome",
      component: () => import('@/views/introduction.vue'),
      meta: {
        title: "子目录",
        showLink: VITE_HIDE_HOME === "true" ? false : true
      }
    }
  ]




  
} satisfies RouteConfigsTable;
