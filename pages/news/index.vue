<template>
  <section>
    <NewBody :data="dataBlog" />
    <NewFormcreate :data="dataBlog" />
    <NewFormupdate :data="dataBlog" />
  </section>
</template>
  
<script setup lang="ts">
const dataBlog = useDataBlog();

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

onMounted(async () => {
  await dataBlog
    .getAllBlog()
    .then(() => {})
    .catch((e: string) => {
      toastStatus.value = "error";
      message.value = e;
      addToast();
    });
});
dataBlog.getAllBlog();
definePageMeta({
  middleware: ["auth"],
});
</script>