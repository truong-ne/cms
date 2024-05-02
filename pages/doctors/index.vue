<template>
  <section>
    <DoctorHeader />
    <DoctorBody :doctorStore="doctorStore" />
    <DoctorFormupdate :doctorStore="doctorStore" />
    <!-- <DoctorFormcreate :doctorStore="doctorStore" />
    <DoctorFormupdate  /> -->
  </section>
</template>

<script setup lang="ts">
const doctorStore = useDataDoctor();

await doctorStore.getQuantityDoctor();

definePageMeta({
  middleware: ["auth"],
});
const header = {
  title: "Bác sĩ",
  quantity: doctorStore.doctorQuantity?.quantity,
  name: "Doctor",
};
</script>