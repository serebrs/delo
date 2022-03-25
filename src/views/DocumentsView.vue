<template>
  <main class="overflow-auto h-screen pb-24 px-6">
    <DocumentsFilterBlock />
    <DocumentsList />
  </main>
</template>

<script>
import DocumentsList from "@/components/documents/DocumentsList.vue";
import DocumentsFilterBlock from "@/components/documents/DocumentsFilterBlock.vue";
export default {
  components: { DocumentsList, DocumentsFilterBlock }
}
</script>