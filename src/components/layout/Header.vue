<template>
  <a-layout-header style="background: #fff" class="header">
    <Icons :type="
      store.getters['collapsed'] ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'
    " class="trigger" @click="() => store.commit('setCollapsed', !store.getters['collapsed'])" />
    <div class="right-box">
      <HeadRight />
    </div>
  </a-layout-header>
</template>
<script lang="ts" setup>
import router from "@/router";
import { store } from "@/store";
function go() {
  router.replace("/login");
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;


  .login {
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;

    &:hover {
      color: #1d83d6;
    }
  }

  .right-box {
    display: flex;
    align-items: center;
  }
}
</style>