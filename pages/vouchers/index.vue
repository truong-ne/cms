<template>
  <section>
    <!-- <VoucherCharts /> -->
    <VoucherTables :discountStore="discountStore"/>
    <VoucherFormcreate :discountStore="discountStore" />
    <VoucherFormupdate :discountStore="discountStore" />
  </section>
</template>

<script setup lang="ts">
const discountStore =useDataDiscount();
definePageMeta({
  middleware: ["auth"],
});
</script>