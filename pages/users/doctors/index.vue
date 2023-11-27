<template>
  <section>
    <UserHeader :header="header" />
    <UserDoctorBody :data="dataDoctor" />
    <UserDoctorFormcreate />
    <UserDoctorFormupdate />
  </section>
</template>

<script setup lang="ts">
const dataDoctor = useDataDoctor();

await dataDoctor.getAllDoctorPerPage(1, 10);
await dataDoctor.getQuantityDoctor();

definePageMeta({
  middleware: ["auth"],
});
const header = {
  title: "Bác sĩ",
  quantity: dataDoctor.doctorQuantity,
  name: "Doctor",
};
</script>