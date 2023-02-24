

<template>
  <a-tabs v-model:activeKey="state.selectedKeys" @change="change" hide-add
    :type="tabsList.length > 1 ? 'editable-card' : 'card'" @edit="onEdit" size="small">
    <a-tab-pane v-for="item in tabsList" :key="item.path" :tab="item.meta.title">
      <slot></slot>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "@/store";
import router from "@/router"
const store = useStore();
const state = reactive({
  selectedKeys: store.getters["getSelectedKeys"][0]
})
watch(() => store.getters["getSelectedKeys"][0], (val: any) => {
  state.selectedKeys = val
})
const tabsList = computed({
  get() {
    return store.getters["getTabsList"];
  },
  set(data: any[]) { },
});
const onEdit = (targetKey: string | MouseEvent, action: string) => {
  store.commit("removeMenuList", targetKey);
};
function change(data: any) {
  router.push(data)
}
</script>