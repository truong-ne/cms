<template>
  <section>
    <UserHeader :header="header" />
    <UserDoctorBody :doctorStore="doctorStore" />
    <UserDoctorFormcreate :doctorStore="doctorStore" />
    <UserDoctorFormupdate :doctorStore="doctorStore" />
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