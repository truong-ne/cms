<template>
  <NuxtLayout>
    <div class="overflow-y-hidden h-full mt-16 lg:mt-0">
      <NuxtLoadingIndicator color="#348feb" :height="5" />
      <NuxtPage />
    </div>
    <ToastList />
  </NuxtLayout>
</template>

<script setup>
import { initFlowbite } from "flowbite";
onMounted(() => {
  initFlowbite();
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>