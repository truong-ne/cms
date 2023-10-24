<template>
  <div>
    <AppHeader />
    <SideBar :class="{ hidden: $route.name === 'login' }" />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

onMounted(() => {
  initFlowbite();
});
</script>