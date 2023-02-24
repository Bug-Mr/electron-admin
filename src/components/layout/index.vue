<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="store.getters['collapsed']" :trigger="null" collapsible :collapsedWidth="50"
      width="150px" theme="light">
      <Menu />
    </a-layout-sider>
    <a-layout>
      <Header />
      <div class="content-box">
        <a-layout-content id="content-el" class="content">
          <Tabs />
          <router-view></router-view>
        </a-layout-content>
      </div>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useStore } from "@/store";
const store = useStore();
onMounted(() => {
  let key = store.getters["getSelectedKeys"][0];
  store.commit("setSelectedKeys", key);


});
</script>

<style lang="scss" scoped>
.content-box {
  background: #fff;
}

.content {
  background: #ffffff;
  height: calc(100vh - 96px);
  padding: 16px;
  border-radius: 10px;
  margin: 10px;
  border: 10px #f5f5f5 solid;
}
</style>
