<template>
  <!-- <AppHeader />
    <SideBar :class="{ hidden: $route.name === 'login' }" />
    <NuxtPage />
    <AppFooter /> -->
  <NuxtLayout>
    <div class="overflow-y-hidden h-full mt-16 lg:mt-0">
      <NuxtLoadingIndicator color="#348feb" :height="5" />
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>