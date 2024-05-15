<template>
  <section class="">
    <DashboardAnylytics
      :doctorStore="doctorStore"
      :medicalStore="medicalStore"
    />

    <DashboardCharts
      :doctorStore="doctorStore"
      :medicalStore="medicalStore"
      :consultationStore="consultationStore"
      :patientStore="patientStore"
    />

    <!-- <DashboardQuickview /> -->
  </section>
</template>
<script setup>
const doctorStore = useDataDoctor();
const medicalStore = useDataMedicalRecord();
const patientStore = useDataPatient();
const consultationStore = useDataConsultation();
definePageMeta({
  middleware: ["auth"],
});
</script>