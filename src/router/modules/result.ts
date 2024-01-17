// import { $t } from "@/plugins/i18n";
import { result } from "@/router/enums";

export default {
  path: "/result",
  redirect: "/result/success",
  meta: {
    icon: "checkboxCircleLine",
    // title: $t("menus.hsResult"),
    title: "跳转结果",
    rank: result
  },
  children: [
    {
      path: "/result/success",
      name: "Success",
      component: () => import("@/views/result/success.vue"),
      meta: {
        // title: $t("menus.hsSuccess")
        title : "跳转成功"
      }
    },
    {
      path: "/result/fail",
      name: "Fail",
      component: () => import("@/views/result/fail.vue"),
      meta: {
        // title: $t("menus.hsFail")
        title : "跳转失败"
      }
    }
  ]
} satisfies RouteConfigsTable;
