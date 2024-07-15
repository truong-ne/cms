<template>
  <div class="flex flex-col md:gap-4 gap-2">
    <PatientHeader />
    <PatientProfile :medicalStore="medicalStore" :patientStore="patientStore" />
    <!-- <UserPatientTest /> -->
  </div>
</template>
<script setup lang="ts">
const medicalStore = useDataMedicalRecord();
const patientStore = useDataPatient();
// 
</script>