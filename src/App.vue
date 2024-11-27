<template>
  <div id="app">
    <SidebarProvider>
      <MainSidebar>
        <template #sidebar-content>
          <component :is="currentSidebarComponent"></component>
        </template>
        <MainNav>
          <router-view></router-view>
        </MainNav>
      </MainSidebar>
    </SidebarProvider>
    <Toaster
      closeButton
      :toastOptions="{
        unstyled: true,
        class: 'bg-primary',
      }"
    />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./components/composites/MainSidebar.vue";
import MainNav from "./components/composites/MainNav.vue";
import HomeSidebarContent from "./components/pages/Home/components/HomeSidebarContent.vue";
import AnalyticsSidebarContent from "./components/pages/Analytics/components/AnalyticsSidebarContent.vue";
import { Toaster } from "@/components/ui/sonner";

const route = useRoute();

const sidebarComponents = {
  Home: HomeSidebarContent,
  Analytics: AnalyticsSidebarContent,
};

const currentSidebarComponent = ref(null);

watch(
  route,
  (newRoute) => {
    currentSidebarComponent.value = sidebarComponents[newRoute.name];
  },
  { immediate: true }
);
</script>
