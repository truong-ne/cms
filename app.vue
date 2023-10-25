<template>
  <div>
    <!-- <AppHeader />
    <SideBar :class="{ hidden: $route.name === 'login' }" />
    <NuxtPage />
    <AppFooter /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>