<template>
  <main class="overflow-auto h-screen pb-24 px-6">
    <DocumentsFilters />
    <DocumentsList />
  </main>
</template>

<script>
import DocumentsList from "@/components/documents/DocumentsList.vue";
import DocumentsFilters from "@/components/documents/DocumentsFilters.vue";
export default {
  components: { DocumentsList, DocumentsFilters }
}
</script>