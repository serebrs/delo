<template>
  <div
    class="bg-gray-100 dark:bg-gray-800 h-screen overflow-y-hidden overflow-x-auto relative flex items-start justify-start flex-nowrap"
  >
    <!-- Основной блок слева с навигационным меню -->
    <div class="flex-none h-screen hidden lg:block lg:w-28 shadow-lg bg-gray-700 shadow-gray-500">
      <LogoImage />
      <NavigationMenu class="mt-7" />
    </div>

    <!-- Основной блок справа с заголовком и основным контентом -->
    <div class="flex-grow shrink-0 w-[58rem]">
      <HeaderMenu :title="title" />
      <router-view />
    </div>
  </div>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu.vue";
import HeaderMenu from "@/components/HeaderMenu.vue";
import LogoImage from "@/components/LogoImage.vue";
export default {
  computed: {
    title() {
      return this.$route.meta.title || "";
    }
  },
  components: {
    NavigationMenu, HeaderMenu, LogoImage
  }
}
</script>
