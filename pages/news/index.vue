<template>
  <section>
    <NewHeader />
    <NewBody :blogStore="blogStore" />
    <NewFormcreate :blogStore="blogStore" />
    <NewFormupdate :blogStore="blogStore" />
  </section>
</template>
  
<script setup lang="ts">
const blogStore = useDataBlog();

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
  await blogStore
    .getAllBlog()
    .then(() => {})
    .catch((e: string) => {
      toastStatus.value = "error";
      message.value = e;
      addToast();
    });
});
blogStore.getAllBlog();
definePageMeta({
  // middleware: ["auth"],
});
</script>