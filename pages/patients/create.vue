<template>
  <section>
    <PatientHeader />
    <PatientFormcreate :patientStore="patientStore"/>
  </section>
</template>
<script lang="ts" setup>
const patientStore = useDataPatient();
</script>