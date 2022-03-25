<template>
  <div
    class="absolute inset-x-0 bottom-0 w-32 h-10 bg-gray-600 transition"
    :class="{ hidden: !isActive }"
  >{{ hint }}</div>
</template>

<script>
export default {
  props: {
    hint: String,
    isActive: Boolean
  },
  data() {
    return {

    }
  }
}
</script>