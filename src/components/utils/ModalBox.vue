<template>
  <div
    class="absolute z-40 inset-y-0 inset-x-0 flex justify-center items-center space-x-0 space-y-0 h-screen bg-slate-700 bg-opacity-50 overflow-hidden backdrop-blur-sm"
  >
    <div
      class="flex flex-col justify-center items-center w-96 rounded-md shadow-md bg-white border border-gray-50"
    >
      <button @click="$emit('modalClose')" class="p-2 bg-slate-400 rounded-md">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: [
    "modalClose"
  ]
}
</script>