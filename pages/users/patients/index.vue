<template>
  <section>
    <UserHeader :header="header" />
    <UserPatientBody  :data="dataDoctor" />
    <UserPatientFormcreate/>
    <UserPatientFormupdate/>
  </section>
</template>

<script setup lang="ts">
const dataDoctor = useDataMedicalRecord();

await dataDoctor.getAllMedicalRecordPerPage(1, 10);
await dataDoctor.getQuantityPatient();

definePageMeta({
  middleware: ["auth"],
});
const header = {
  title: "Bệnh nhân",
  quantity: dataDoctor.medicalQuantity,
  name: "Doctor",
};
</script>