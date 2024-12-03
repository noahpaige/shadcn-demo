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
    <Toaster closeButton :toastOptions="{
      unstyled: true,
      class: 'bg-primary',
    }" />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { SidebarProvider } from "@/components/ui/sidebar";
import MainSidebar from "./components/composites/MainSidebar.vue";
import MainNav from "./components/composites/MainNav.vue";
import { Toaster } from "@/components/ui/sonner";
import routes from "./router/routes";

const route = useRoute();

const sidebarComponents = new Map(
  routes.map((route) => [route.name, route.sidebar])
);

const currentSidebarComponent = ref(null);

watch(
  route,
  (newRoute) => {
    if (sidebarComponents.has(newRoute.name)) {
      currentSidebarComponent.value = sidebarComponents.get(newRoute.name);
    }


    console.log(newRoute.name, newRoute.path, newRoute.fullPath);
  },
  { immediate: true }
);
</script>
