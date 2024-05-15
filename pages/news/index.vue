<template>
  <section>
    <NewHeader />
    <NewBody :blogStore="blogStore" />
    <NewFormcreate :blogStore="blogStore" />
    <NewFormupdate :blogStore="blogStore" />
  </section>
</template>
  
<script setup lang="ts">
const blogStore = useDataBlog();

definePageMeta({
  middleware: ["auth"],
});
</script>