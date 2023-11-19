<template>
  <div>
    <!-- <AppHeader />
    <SideBar :class="{ hidden: $route.name === 'login' }" />
    <NuxtPage />
    <AppFooter /> -->
    <NuxtLayout>
      <div class="bg-white overflow-y-hidden h-full">
        <NuxtLoadingIndicator color="#348feb" :height="5" />
        <NuxtPage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>