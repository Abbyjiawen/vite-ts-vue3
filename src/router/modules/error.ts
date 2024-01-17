// import { $t } from "@/plugins/i18n";
import { error } from "@/router/enums";

export default {
  path: "/error",
  redirect: "/error/403",
  meta: {
    icon: "informationLine",
    // showLink: false,
    title: "正常展示",
    // title: $t("menus.hsabnormal"),
    rank: error
  },
  children: [
    {
      path: "/error/403",
      name: "403",
      component: () => import("@/views/error/403.vue"),
      meta: {
        // title: $t("menus.hsfourZeroOne")
        title: "403",
      }
    },
    {
      path: "/error/404",
      name: "404",
      component: () => import("@/views/error/404.vue"),
      meta: {
        // title: $t("menus.hsfourZeroFour")
        title: "404",
      }
    },
    {
      path: "/error/500",
      name: "500",
      component: () => import("@/views/error/500.vue"),
      meta: {
        // title: $t("menus.hsFive")
        title: "500",
      }
    }
  ]
} satisfies RouteConfigsTable;
