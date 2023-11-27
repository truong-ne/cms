<template>
  <section>
    <NewHeader />
    <NewGridview />
  </section>
</template>
  
<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>