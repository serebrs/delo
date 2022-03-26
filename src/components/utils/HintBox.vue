<template>
  <div class="relative" @mouseover="isActive=true" @mouseleave="isActive=false">
    <slot />
    <transition name="fade">
      <div
        v-show="isActive"
        class="absolute inset-x-0 top-full z-10 w-fit py-1 px-2 text-[0.75rem] text-center whitespace-normal leading-3 text-white bg-gray-700 shadow-md rounded-md"
      >{{ hintText }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    hintText: String
  },
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>