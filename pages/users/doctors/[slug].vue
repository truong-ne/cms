<template>
  <section class="flex flex-col md:gap-4 gap-2">
    <UserDoctorProfile :doctorStore="doctorStore" />
    <UserDoctorCharts :doctorStore="doctorStore"/>
  </section>
</template>
<script setup lang="ts">
const doctorStore = useDataDoctor();
</script>