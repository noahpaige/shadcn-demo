<script setup>
import { columns } from './components/columns'
import DataTable from './components/DataTable.vue'
import tasks from './data/tasks.json'
</script>

<template>
    <div class="md:hidden">
        <VPImage alt="Tasks" width="1280" height="1214" class="block" :image="{
            dark: '/examples/tasks-dark.png',
            light: '/examples/tasks-light.png',
        }" />
    </div>

    <div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">

        <DataTable :data="tasks" :columns="columns" />
    </div>
</template>