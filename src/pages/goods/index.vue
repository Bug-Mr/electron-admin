<template>
    <Table :columns="steta.columns" :data-source="steta.data">
   
    </Table>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import type { TableColumnsType } from 'ant-design-vue';

interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
}

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
    },
    {
        key: '3',
        name: 'John Brown',
        age: 32,
        address: 'New York Park',
    },
    {
        key: 'operation',
        name: 'Jim Green',
        age: 40,
        address: 'London Park',
    },
];
const steta = reactive({
    data: <DataItem[]>[],
    columns: <TableColumnsType>[
        { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', ellipsis: true },
        { title: 'Age', width: 100, dataIndex: 'age', key: 'age', ellipsis: true },
        { title: 'Column 1', dataIndex: 'address', key: '1', ellipsis: true },
        { title: 'Column 2', dataIndex: 'address', key: '2', ellipsis: true },
        { title: 'Column 3', dataIndex: 'address', key: '3', ellipsis: true },
        { title: 'Column 4', dataIndex: 'address', key: '4', ellipsis: true },
        { title: 'Column 5', dataIndex: 'address', key: '5', ellipsis: true },
        { title: 'Column 6', dataIndex: 'address', key: '6', ellipsis: true },
        { title: 'Column 7', dataIndex: 'address', key: '7', ellipsis: true },
        { title: 'Column 8', dataIndex: 'address', key: '8', ellipsis: true },
        {
            title: '操作',
            key: 'operation',
            fixed: 'right',
            width: 100,
        },
    ]
})

function getData() {
    setTimeout(() => {
        steta.data = data
    }, 5000)
}
onMounted(() => {
    getData()
})
</script>