<template>
  <div class="right-box">
    <Icons type="SyncOutlined" @click="reload" />
    <span class="name">欢迎您，杨梦桃</span>
    <a-dropdown>
      <a-avatar src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F09%2F20210609081952_51ef5.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1677992497&t=e365bb330c74b13792e32bfa0e139058" shape="circle" class="a-avatar-box" />
      <template #overlay>
        <a-menu @click="changeMenu">
          <a-menu-item :key="1"> 个人信息 </a-menu-item>
          <a-menu-item :key="2"> 修改资料 </a-menu-item>
          <a-menu-item :key="3"> 退出登录 </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import {} from "vue";
function reload() {
  window.location.reload();
}
function changeMenu(val: any) {
  if (val.key === 3) {
    router.replace("/login");
  }
}
</script>

<style lang="scss" scoped>
.right-box {
  display: flex;
  align-items: center;
  cursor: pointer;
  .name {
    color: #6d6d6d;
    font-size: 12px;
    margin: 0 10px;
  }
  .a-avatar-box {
    border: 1px red solid;
    transition: all 2s;
    &:hover {
      transform: rotate(360deg);
    }
  }
}
</style>