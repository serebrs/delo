<template>
  <div
    class="bg-gray-100 dark:bg-gray-800 h-screen overflow-y-hidden overflow-x-auto relative flex items-start justify-start flex-nowrap"
  >
    <!-- Основной блок слева с навигационным меню -->
    <div class="flex-none h-screen hidden lg:block lg:w-28 shadow-lg bg-gray-700 shadow-gray-500">
      <div class="flex items-center justify-center pt-8">
        <span class="relative">
          <span
            class="block absolute -inset-1 -skew-y-3 bg-sky-700 shadow-md shadow-gray-700"
            aria-hidden="true"
          ></span>
          <span class="relative text-white font-semibold font-mono text-xl px-1">Дело</span>
        </span>
      </div>
      <div class="bg-gray-600 mt-8 w-8 h-[0.1rem] mx-auto"></div>
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
export default {
  computed: {
    title() {
      return this.$route.meta.title || "";
    }
  },
  components: {
    NavigationMenu, HeaderMenu
  }
}
</script>
