<template>
  <section >
    <VoucherCharts />
    <VoucherTables />
    <VoucherFormcreate/>
    <VoucherFormupdate/>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  middleware:['auth']
});
</script>