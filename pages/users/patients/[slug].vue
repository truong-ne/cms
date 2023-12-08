<template>
  <div class="flex flex-col md:gap-4 gap-2">
    <!-- <UserPatientCharts /> -->
    <UserPatientProfile :data="data" />
    <!-- <UserPatientTest /> -->
  </div>
</template>
<script setup>

const route = useRoute();
const data = useDataMedicalRecord();

onMounted(async () => {


});
</script>