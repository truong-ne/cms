<template>
    <UserHeader :header="header" />
    <UserBody />
</template>

<script setup lang="ts">
const header = {
    title: "Bệnh nhân",
    quantity: 200,
    name: "patient"
}
</script>