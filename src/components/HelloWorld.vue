
<script lang="ts" setup>
// import route from "@/router";
// import store from "@/store";
import {
  View,
  Histogram,
  Menu,
  MagicStick,
  User,
} from "@element-plus/icons-vue";
import { reactive } from "vue";

const openeds = [1, 2, 3];

const navbarArr = reactive([
  {
    navigator_one: "Dashboard",
    img: View,
    children: [
      {
        name: "系统介绍",
        path: "/",
      },
      {
        name: "功能目录",
        path: "/catalogue",
      },
    ],
  },
  {
    navigator_one: "Form",
    img: Menu,
    children: [
      {
        name: "表单组件",
        path: "/form",
      },
      {
        name: "Table",
        path: "/table",
      },
    ],
  },
  {
    navigator_one: "Echarts",
    img: Histogram,
    children: [
      {
        name: "常见图表",
        path: "/echarts-normal",
      },
      {
        name: "3D",
        path: "/echarts-3d",
      },
    ],
  },
  {
    navigator_one: "切换皮肤",
    img: MagicStick,
    path: "/skin",
  },
  {
    navigator_one: "个人中心",
    img: User,
    path: "/user",
  },
]);
</script>

<template>
  <el-row class="tac">
    <div class="logo">
      <img src="./../assets/img/logo.png" alt="" />
      <img src="https://element-plus.org/images/element-plus-logo.svg" alt="" />
    </div>
    <el-menu :default-openeds="openeds" :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen"
      @close="handleClose">
      <template v-for="(item, index) in navbarArr" :key="index + 1">
        <el-sub-menu v-if="item.children" :index="index + 1">
          <template #title>
            <el-icon>
              <component :is="item.img" color="#767676" />
            </el-icon>
            <span>{{ item.navigator_one }}</span>
          </template>
          <router-link v-for="(ele, i) in item.children" :key="i" :to="ele.path">
            <el-menu-item :index="ele.path">{{
              ele.name
            }}</el-menu-item></router-link>
        </el-sub-menu>

        <el-menu-item class="single-item" v-else :index="item.path">
          <router-link :to="item.path" style="width: 100%">
            <el-icon color="#767676">
              <component :is="item.img" />
            </el-icon>
            <span>{{ item.navigator_one }}</span>
          </router-link>
        </el-menu-item>
      </template>
    </el-menu>
  </el-row>

  <router-view></router-view>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
a {
  text-decoration: none !important;
  color: #000;
}

.el-row {
  background-color: #fff;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: auto;
  flex-direction: column;
  flex-wrap: inherit !important;
  border-right: solid 1px var(--el-menu-border-color);

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .logo {
    width: 280px;
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;

    img {
      height: 40px;
    }
  }

  ::v-deep {
    .el-menu {
      border-right: 0 !important;

      .el-sub-menu__title:hover {
        background-color: inherit !important;
      }

      .el-sub-menu {
        .el-menu-item {
          padding: 0 !important;
          margin: 10px auto;
          padding-left: 30px !important;
          width: 240px;
          height: 45px;

          border-radius: 6px;
          text-align: center;

          &:hover {
            color: #409eff;
            background-color: inherit;
          }

          .is-active {
            background-color: rgba(64, 158, 255, 0.15) !important;
            transition: all 0.3s !important;
          }
        }
      }

      .el-menu-item.is-active {
        background-color: rgba(64, 158, 255, 0.15) !important;
        transition: all 0.3s !important;
      }

      .single-item.is-active a {
        color: #409eff;
      }
    }
  }
}
</style>
