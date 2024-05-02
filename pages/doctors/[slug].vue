<template>
  <section>
    <DoctorHeader />
    <DoctorProfile :doctorStore="doctorStore" />
    <!-- <DoctorCharts :doctorStore="doctorStore" /> -->
  </section>
</template>
<script setup lang="ts">
const doctorStore = useDataDoctor();
</script>