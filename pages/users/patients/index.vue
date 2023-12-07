<template>
  <section>
    <UserHeader :header="header" />
    <UserPatientBody :data="dataDoctor" />
    <UserPatientFormcreate />
    <UserPatientFormupdate />
  </section>
</template>

<script setup lang="ts">
const dataDoctor = useDataMedicalRecord();

definePageMeta({
  middleware: ["auth"],
});

const header = ref({
  title: "Bệnh nhân",
  quantity: dataDoctor.medicalQuantity,
  name: "Doctor",
});
</script>