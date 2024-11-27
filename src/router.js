import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/Home/HomePage.vue";
import LoginPage from "@/components/pages/Login/LoginPage.vue";
import OpconPage from "@/components/pages/Opcon/OpconPage.vue";
import AnalyticsPage from "@/components/pages/Analytics/AnalyticsPage.vue";
import DocumentationPage from "@/components/pages/Documentation/DocumentationPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/opcon",
    name: "Opcon",
    component: OpconPage,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: AnalyticsPage,
  },
  {
    path: "/documentation",
    name: "Documentation",
    component: DocumentationPage,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
