<template>
  <component
    :is="type"
    class="tab"
    :style="{ color: color, fontSize: fontSize }"
  ></component>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "",
  },
});
onMounted(()=>{

})
</script>
