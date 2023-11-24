<template>
  <section class="">
    <DashboardAnylytics />

    <DashboardCharts />

    <DashboardQuickview />
  </section>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"],
});
</script>