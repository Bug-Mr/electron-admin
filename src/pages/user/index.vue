<template>
    <div>
        <div v-for="(item, index) in state.list" :key="index">
            <span>key:{{ item.key }}</span>
            <span>value:{{ item.value }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import api from '@/serve/api';
import axios from '@/serve/axios';
import { onMounted, reactive } from 'vue';

const state: any = reactive({
    list: []
})
function getjobSalary() {
    axios.get(api.getjobSalary).then((res: any) => {
        state.list = res.data || []
    })
}
onMounted(() => {
    getjobSalary()
})
</script>