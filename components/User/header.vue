
<template>
  <div
    class=" md:mb-4 mb-2 md:py-4 py-2 md:px-8 px-4 inline-flex gap-2 md:gap-4 items-center w-full bg-white rounded-xl"
  >
    <span
      class="inline-flex items-center justify-center md:text-2xl text-lg font-bold text-black rounded"
      >{{ header.title }}</span
    >
    <span
      class="inline-flex items-center justify-center md:text-xl text-md font-bold text-black rounded"
      >({{ header.quantity }})</span
    >
    <ul
      class="ml-auto inline-flex text-gray-900 text-sm"
      id="default-tab"
      data-tabs-toggle="#default-tab-content"
      role="tablist"
    >
      <button
        class="pr-4"
        id="grid-tab"
        data-tabs-target="#profile"
        type="button"
        role="tab"
        aria-controls="profile"
        aria-selected="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 hover:w-6 hover:h-6 text-gray-500 dark:text-white"
          aria-hidden="true"
          viewBox="0 0 448 512"
          fill="currentColor"
        >
          <path
            d="M384 96v128H256V96h128zm0 192v128H256V288h128zm-192-64H64V96h128v128zM64 288h128v128H64V288zm0-256C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
          />
        </svg>
      </button>
      <button
        class=" "
        id="list-tab"
        data-tabs-target="#dashboard"
        type="button"
        role="tab"
        aria-controls="dashboard"
        aria-selected="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5 hover:w-6 hover:h-6 text-gray-500 dark:text-white"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path
            d="M40 48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zm152 16c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zm24 136c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H40z"
          />
        </svg>
      </button>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const { header } = defineProps(["header"]);
</script>