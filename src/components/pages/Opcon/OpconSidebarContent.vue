<template>
  <SidebarGroup>
    <SidebarGroupLabel>Opcon Pages</SidebarGroupLabel>
    <SidebarMenu>
      <template v-for="item in data" :key="item.title">
        <Collapsible v-if="item.items && item.items.length > 0" as-child class="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger as-child>
              <SidebarMenuButton :tooltip="item.title">
                <component :is="item.icon" />
                <span>{{ item.title }}</span>
                <ChevronRight
                  class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                  <SidebarMenuSubButton as-child>
                    <a :href="subItem.url">
                      <span>{{ subItem.title }}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
        <SidebarMenuItem v-else>
          <SidebarMenuButton>
            <a :href="item.url">
              <span>{{ item.title }}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </template>

    </SidebarMenu>
  </SidebarGroup>
</template>

<script setup>

import {
  useSidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  ChevronRight,
} from "lucide-vue-next";

const data = [
  {
    title: "Launch Feed",
    url: "/opcon/launchfeed",
    isActive: true,
  },
  {
    title: "Tasks",
    url: "/opcon/tasks",
    isActive: true,
  },
  {
    title: "Minus Count",
    items: [
      {
        title: "Page 1",
        url: "#",
      },
      {
        title: "Page 2",
        url: "#",
      },
      {
        title: "Page 3",
        url: "#",
      },
    ],
  },
  {
    title: "Plus Count",
    items: [
      {
        title: "Mark Events",
        url: "#",
      },
      {
        title: "Trackers",
        url: "#",
      },
      {
        title: "Another page",
        url: "#",
      },
      {
        title: "Another one!",
        url: "#",
      },
    ],
  },

];
</script>
