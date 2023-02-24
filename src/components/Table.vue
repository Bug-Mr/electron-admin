<template>
    <a-table v-bind="$attrs" :scroll="{ x: config.Width, y: config.Height - 190 }">
        <!-- <slot></slot> -->
    </a-table>
</template>

<script setup lang="ts">
import { onMounted, reactive, nextTick } from "vue"

const config = reactive({
    Height: 200,
    Width: 400
})
nextTick(() => {
    config.Height = document.getElementById("content-el")?.clientHeight || 0
    config.Width = document.getElementById("content-el")?.clientWidth || 0
})
onMounted(() => {

    window.onresize = () => {
        config.Height = document.getElementById("content-el")?.clientHeight || 0
        config.Width = document.getElementById("content-el")?.clientWidth || 0
    }
})


</script>