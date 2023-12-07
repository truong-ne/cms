<template>
  <section class="flex flex-col md:gap-4 gap-2">
    <NewDetail :data="data" />
  </section>
</template>
<script setup lang="ts">
const route = useRoute();
const data = useDataBlog();
onMounted(async () => {
    await data.getDetail(route.params["slug"].toString());
});
</script>