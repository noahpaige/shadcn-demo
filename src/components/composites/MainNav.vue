<script setup>
import { Button } from "@/components/ui/button";

import { SidebarTrigger } from "@/components/ui/sidebar";
import MainClock from "@/components/composites/MainClock.vue";
import { Moon, Sun } from "lucide-vue-next";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="flex min-h-screen w-full flex-col">
    <header
      class="sticky top-0 flex h-16 items-center gap-4 border-b backdrop-blur-xl justify-between px-4 md:px-6 z-10">
      <SidebarTrigger />

      <MainClock />

      <div class="flex gap-4 md:gap-4">
        <Button variant="outline" class="shrink-0 bg-transparent" size="icon" @click="toggleDark()">
          <Moon v-if="isDark" class="h-5 w-5" />
          <Sun v-else class="h-5 w-5" />
        </Button>
      </div>
    </header>
    <slot />
  </div>
</template>
