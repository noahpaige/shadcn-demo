<template>
  <div class="p-2 h-full">
    <Card class="h-full w-full">
      <ResizablePanelGroup
        id="demo-group-1"
        direction="horizontal"
        class="w-full h-full"
      >
        <ResizablePanel
          id="demo-panel-1"
          :default-size="50"
          :min-size="20"
          :max-size="80"
        >
          <div class="flex items-center justify-center p-6 h-full">
            <span class="font-semibold">Launch Feed</span>
          </div>
        </ResizablePanel>
        <ResizableHandle id="demo-handle-1" with-handle />
        <ResizablePanel
          id="demo-panel-2"
          :default-size="50"
          :min-size="20"
          :max-size="80"
        >
          <ResizablePanelGroup id="demo-group-2" direction="vertical">
            <ResizablePanel id="demo-panel-3" :default-size="25">
              <div class="flex h-full items-center justify-center p-6">
                <span class="font-semibold">Timeline Display</span>
              </div>
            </ResizablePanel>
            <ResizableHandle id="demo-handle-2" with-handle />
            <ResizablePanel
              id="demo-panel-4"
              :default-size="75"
              :min-size="20"
              :max-size="80"
            >
              <div class="flex h-full items-center justify-center p-6">
                <span class="font-semibold">Earth Display</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Card>
  </div>
</template>

<script setup>
import Card from "@/components/ui/card/Card.vue";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable";
import { ref } from "vue";

const isCollapsed = ref(false);
const sidebarPanel = ref(null);
</script>

<style scoped>
/* Your styles go here */
</style>
