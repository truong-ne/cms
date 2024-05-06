<template>
  <section>
    <!-- <UserHeader :header="header" /> -->
    <PatientHeader />
    <PatientBody :medicalStore="medicalStore" />
    <PatientFormupdate />

    <!-- <UserPatientFormcreate />
    <UserPatientFormupdate /> -->
  </section>
</template>

<script setup lang="ts">
const medicalStore = useDataMedicalRecord();

// await medicalStore.getQuantityMedical();

definePageMeta({
  // middleware: ["auth"],
});

const header = ref({
  title: "Bệnh nhân",
  quantity: medicalStore.medicalQuantity?.quantity,
  name: "Patient",
});
</script>