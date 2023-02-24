import { RouteRecordRaw } from 'vue-router';

const pages: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: () => import("@/pages/home/index.vue"),
    meta: {
      title: "首页",
      icon: "AppstoreOutlined",
      hideTab: true,
      isMenu: true
    },

  },
  {
    path: "/details",
    component: () => import("@/pages/home/details.vue"),
    meta: {
      title: "详情",
    },
  },
  {
    path: "/mine",
    component: () => import("@/pages/mine/index.vue"),
    meta: {
      title: "我的",
      icon: "RadarChartOutlined",
      isMenu: true
    },
  },
  {
    path: "/goods",
    meta: {
      title: "商品管理",
      icon: "AreaChartOutlined",
      isMenu: true
    },
    children: [
      {
        path: "/list",
        component: () => import("@/pages/goods/index.vue"),
        meta: {
          title: "商品列表",
          icon: "AreaChartOutlined",
          isMenu: true
        },
      },
      {
        path: "/add",
        component: () => import("@/pages/goods/index.vue"),
        meta: {
          title: "新增商品",
          icon: "AreaChartOutlined",
          isMenu: true
        },
      },
    ],
  },
  {
    path: "/user",
    component: () => import("@/pages/user/index.vue"),
    meta: {
      title: "用户管理",
      icon: "team-outlined",
      isMenu: true
    }
  }
];

export default pages;
