import HomePage from "@/components/pages/Home/HomePage.vue";
import LoginPage from "@/components/pages/Login/LoginPage.vue";
import OpconPage from "@/components/pages/Opcon/OpconPage.vue";
import AnalyticsPage from "@/components/pages/Analytics/AnalyticsPage.vue";
import DocumentationPage from "@/components/pages/Documentation/DocumentationPage.vue";
import LaunchfeedPage from "@/components/pages/Opcon/pages/LaunchfeedPage/LaunchfeedPage.vue";
import AnalyticsSidebarContent from "@/components/pages/Analytics/AnalyticsSidebarContent.vue";
import OpconSidebarContent from "@/components/pages/Opcon/OpconSidebarContent.vue";
import HomeSidebarContent from "@/components/pages/Home/HomeSidebarContent.vue";
import TasksPage from "@/components/pages/Opcon/pages/Tasks/TasksPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
        sidebar: HomeSidebarContent
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
        sidebar: OpconSidebarContent
    },
    {
        path: "/opcon/launchfeed",
        name: "Launch Feed",
        component: LaunchfeedPage,
        sidebar: OpconSidebarContent
    },
        {
        path: "/opcon/tasks",
        name: "Tasks",
        component: TasksPage,
        sidebar: OpconSidebarContent
    },
    {
        path: "/analytics",
        name: "Analytics",
        component: AnalyticsPage,
        sidebar: AnalyticsSidebarContent

    },
    {
        path: "/documentation",
        name: "Documentation",
        component: DocumentationPage,
        sidebar: AnalyticsSidebarContent
    },
    // Add more routes as needed
]

export default routes;