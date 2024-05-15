<template>
  <section>
    <DoctorHeader />
    <DoctorProfile :doctorStore="doctorStore" :consultationStore="consultationStore"/>
    <!-- <DoctorCharts :doctorStore="doctorStore" /> -->
  </section>
</template>
<script setup lang="ts">
const doctorStore = useDataDoctor();
const consultationStore = useDataConsultation();
</script>