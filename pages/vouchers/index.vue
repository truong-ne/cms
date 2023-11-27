<template>
  <section >
    <VoucherCharts />
    <VoucherTables />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  middleware:['auth']
});
</script>