<template>
  <SidebarGroup>
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger as-child>
          <Button
            variant="outline"
            class="!h-8 text-muted-foreground flex justify-between px-[0.4375rem]"
            @click="handleOpenChange"
          >
            <div class="flex gap-2 items-center">
              <Search class="w-4 h-4" />
              <span
                :class="cn(sidebarState === 'collapsed' ? 'hidden' : 'inherit')"
                >Add Display...</span
              >
            </div>
            <kbd
              :class="
                cn(
                  sidebarState === 'collapsed' ? 'hidden' : 'inline-flex',
                  'pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100'
                )
              "
            >
              <span class="text-xs">Ctrl J</span>
            </kbd>
          </Button>
        </TooltipTrigger>
        <TooltipContent v-if="sidebarState === 'collapsed'" side="right">
          <p>Add Displays and Groups</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
    <CommandDialog :open="openCommand" @update:open="handleOpenChange">
      <CommandInput placeholder="Search for displays and groups..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Displays">
          <CommandItem
            v-for="display in displays"
            :value="display.name"
            class="flex h-12 w-full gap-2 p-2 cursor-pointer"
            @click="onClickAddDisplay(display)"
          >
            <component :is="display.icon" class="h-8 w-8" />
            <div class="flex flex-col">
              <div class="text-md font-medium">
                {{ display.name }}
              </div>
              <p class="text-sm leading-tight text-muted-foreground">
                {{ display.desc }}
              </p>
            </div>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Groups">
          <CommandItem
            v-for="set in displaySets"
            :value="set"
            class="cursor-pointer"
            @click="onClickAddGroup(set)"
          >
            <div class="flex flex-row gap-2">
              <Group />
              {{ set }}
            </div>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </SidebarGroup>
</template>

<script setup>
import { SidebarGroup } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { Group, Search } from "lucide-vue-next";
import displays from "@/data/displays";
import { useMagicKeys } from "@vueuse/core";
import { ref, watch } from "vue";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { toast } from "vue-sonner";

const { state: sidebarState } = useSidebar();

const openCommand = ref(false);

const keys = useMagicKeys();
const CmdJ = keys["Cmd+J"];
const CtrlJ = keys["Ctrl+J"];

function handleOpenChange() {
  openCommand.value = !openCommand.value;
}
function onClickAddDisplay(display) {
  toast(`${display.name} Display Added`, {});
  console.log("Add display", display);
  handleOpenChange();
}

function onClickAddGroup(group) {
  console.log("Add group", group);
  handleOpenChange();
}

watch(CmdJ, (v) => {
  if (v) handleOpenChange();
});

watch(CtrlJ, (v) => {
  if (v) handleOpenChange();
});

const displaySets = [
  "Plus Group",
  "Minus Group",
  "Another Group",
  "Noah's Custom Group",
];
</script>
