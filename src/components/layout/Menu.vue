<template>
  <a-menu v-model:selectedKeys="state.selectedKeys" v-model:openKeys="openKeys" theme="light" mode="inline"
    @click="handelItem">
    <span v-for="(item, index) in menuList" :key="index">
      <a-sub-menu v-if="item.children && item.children.length" :key="item.path" :title="item.meta.title">
        <template #icon>
          <component :is="item.meta.icon" />
          <!-- <Icons :type="item.meta.icon" /> -->
        </template>
        <a-menu-item v-for="chid in item.children" :key="chid.path">
          {{ chid.meta.title }}
        </a-menu-item>
      </a-sub-menu>
      <span v-else>
        <a-menu-item :key="item.path">
          <component :is="item.meta.icon" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
      </span>
    </span>
  </a-menu>
</template>
<script lang="ts" setup>
import { computed, reactive, watch } from "vue";
import { useStore } from "@/store";
import router from "@/router"
const store = useStore();
const menuList = computed(() => {
  return store.getters["getMenuList"];
});

const state = reactive({
  selectedKeys: store.getters["getSelectedKeys"]
})
watch(() => store.getters["getSelectedKeys"][0], (val: any) => {
  state.selectedKeys = [val]
})

const openKeys = computed({
  get() {
    return store.getters["getOpenKeys"];
  },
  set() { },
});
function handelItem({ key }: any) {
  router.push(key)
}
</script>