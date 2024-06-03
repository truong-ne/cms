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

</script>