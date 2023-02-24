<template>
  <div>
    <div>HOME</div>
    <div @click="goDetails" style="cursor: pointer;color:dodgerblue;">details</div>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import routes from "@/router"
function goDetails() {
  router.push("/details")
}
</script>