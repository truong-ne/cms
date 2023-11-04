<template>
    <UserHeader :header="header" />
    <UserBody />
</template>

<script setup lang="ts">
const header = {
    title: "Bác sĩ",
    quantity: 123,
    name: "doctor"
}
</script>