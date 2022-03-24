<template>
  <nav id="nav-menu">
    <router-link v-for="link in links" :key="link.id" :to="link.url" active-class="nav-menu-active">
      <component :is="link.icon" class="h-4 w-4" />
      <span class="mx-2 text-xs font-normal">{{ link.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import { ChartSquareBarIcon } from "@heroicons/vue/solid";
import { ClipboardCheckIcon } from "@heroicons/vue/solid";
import { DocumentTextIcon } from "@heroicons/vue/solid";

export default {
  data() {
    return {
      links: [
        { id: "1", title: "Документы", url: "/documents", icon: "DocumentTextIcon" },
        { id: "2", title: "Задачи", url: "/tasks", icon: "ClipboardCheckIcon" },
        { id: "3", title: "Статистика", url: "/stats", icon: "ChartSquareBarIcon" },
      ]
    }
  },
  components: {
    ChartSquareBarIcon, ClipboardCheckIcon, DocumentTextIcon
  }
}
</script>
