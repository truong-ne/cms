<template>
  <section>
    <VoucherCharts />
    <VoucherTables :data="dataDiscount"/>
    <VoucherFormcreate :data="dataDiscount" />
    <VoucherFormupdate :data="dataDiscount" />
  </section>
</template>

<script setup lang="ts">
const dataDiscount =useDataDiscount();
definePageMeta({
  middleware: ["auth"],
});
</script>