<template>
  <section>
    <DoctorHeader />
    <DoctorBody :doctorStore="doctorStore" />
    <DoctorFormupdate :doctorStore="doctorStore" />
    <!-- <DoctorFormcreate :doctorStore="doctorStore" />
    <DoctorFormupdate /> -->
  </section>
</template>

<script setup lang="ts">
const doctorStore = useDataDoctor();
try {
  await doctorStore.getQuantityDoctor();
} catch (e) {
  console.log(e);
}

definePageMeta({
  middleware: ["auth"],
});
const header = {
  title: "Bác sĩ",
  quantity: doctorStore.doctorQuantity?.quantity,
  name: "Doctor",
};
</script>