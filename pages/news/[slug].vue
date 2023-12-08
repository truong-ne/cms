<template>
  <section class="flex flex-col md:gap-4 gap-2">
    <NewDetail :blogStore="blogStore" />
  </section>
</template>
<script setup lang="ts">
const route = useRoute();
const blogStore = useDataBlog();
onMounted(async () => {
    await blogStore.getDetail(route.params["slug"].toString());
});
</script>