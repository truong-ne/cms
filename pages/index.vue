<template>
  <section class="">
    <DashboardAnylytics
      :doctorStore="doctorStore"
      :medicalStore="medicalStore"
    />

    <DashboardCharts :doctorStore="doctorStore" :medicalStore="medicalStore" />

    <!-- <DashboardQuickview /> -->
  </section>
</template>
<script setup>
const doctorStore = useDataDoctor();
const medicalStore = useDataMedicalRecord();
definePageMeta({
  // middleware: ["auth"],
});
</script>