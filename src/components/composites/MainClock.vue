<template>
    <div
        class="flex gap-0.5 align-middle  bg-slate-50/20 dark:bg-slate-900/20  backdrop-invert rounded w-36 h-8 justify-center items-center select-none">
        <div class="flex flex-col items-center h-6 w-6 overflow-y-hidden">
            <div class="animate-flip-clock w-fit" v-for="(timeStr, index) in timeArr[0]" :key="index">
                {{ timeStr }}
            </div>
        </div>
        <div class="text-muted-foreground">:</div>
        <div class="flex flex-col items-center h-6 w-6 overflow-y-hidden">
            <div class="animate-flip-clock w-fit" v-for="(timeStr, index) in timeArr[1]" :key="index">
                {{ timeStr }}
            </div>
        </div>
        <div class="text-muted-foreground">:</div>
        <div class="flex flex-col items-center h-6 w-6 overflow-y-hidden">
            <div class="animate-flip-clock w-fit" v-for="(timeStr, index) in timeArr[2]" :key="`${index}-${timeStr}`">
                {{ timeStr }}
            </div>
        </div>
        <div class="ml-1">UTC</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Define your clock data and functionality here
const timeArr = ref([['00', '00'], ['00', '00'], ['00', '00']]);

// Define your clock methods here
function updateClock() {
    const currentTime = new Date();
    const timeStrs = [
        currentTime.getUTCHours().toString().padStart(2, '0'),
        currentTime.getUTCMinutes().toString().padStart(2, '0'),
        currentTime.getUTCSeconds().toString().padStart(2, '0'),
    ];

    function updateTime(index) {
        if (timeArr.value[index][0] !== timeStrs[index]) {
            timeArr.value[index].unshift(timeStrs[index]);
            timeArr.value[index].pop();
        }
    }

    updateTime(0);
    updateTime(1);
    updateTime(2);
}



// Call the updateClock method at regular intervals
setInterval(updateClock, 1000);
updateClock();
</script>
