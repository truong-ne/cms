<template>
  <section>
    <DoctorHeader />
    <DoctorBody :doctorStore="doctorStore" :consultationStore="consultationStore"/>
    <DoctorFormupdate :doctorStore="doctorStore" />
    <!-- <DoctorFormcreate :doctorStore="doctorStore" />
    <DoctorFormupdate /> -->
  </section>
</template>

<script setup lang="ts">
const doctorStore = useDataDoctor();
const consultationStore = useDataConsultation();
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