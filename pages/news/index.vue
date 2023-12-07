<template>
  <section>
    <NewBody :data="dataBlog"/>
    <NewFormcreate :data="dataBlog" />
    <NewFormupdate :data="dataBlog"/>
  </section>
</template>
  
<script setup lang="ts">
const dataBlog =useDataBlog();
dataBlog.getAllBlog();
definePageMeta({
  middleware: ["auth"],
});
</script>