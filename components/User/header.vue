
<template>
    <div class="mb-4 inline-flex w-full border-gray-200 dark:border-gray-700">
        <span
            class="inline-flex items-center justify-center px-2 py-0.5 text-2xl font-bold text-black rounded dark:bg-gray-700 dark:text-gray-400">{{
                header.title }}</span>
        <span
            class="inline-flex items-center mt-4 justify-center text-xl font-bold text-black rounded dark:bg-gray-700 dark:text-gray-400">({{
                header.quantity }})</span>
        <ul class="ml-auto inline-flex border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
            <button class="p-4" id="grid-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile"
                aria-selected="false">
                <svg class="w-[15px] h-[15px] text-gray-500 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path
                        d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg></button>
            <button class="p-4 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="list-tab"
                data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">
                <svg class="w-[18px] h-[18px] text-gray-500 dark:text-white" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        d="M1 5h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 1 0 0-2H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2Zm18 4h-1.424a3.228 3.228 0 0 0-6.152 0H1a1 1 0 1 0 0 2h10.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Zm0 6H8.576a3.228 3.228 0 0 0-6.152 0H1a1 1 0 0 0 0 2h1.424a3.228 3.228 0 0 0 6.152 0H19a1 1 0 0 0 0-2Z" />
                </svg></button>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const { header } = defineProps(['header'])
</script>