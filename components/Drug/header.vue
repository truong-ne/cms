<template>
  <div class="flex justify-between w-full">
    <form class="w-96">
      <div class="relative">
        <div
          class="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          class="block w-full p-4 ps-12 text-sm font-semibold text-gray-900 border-0 focus:ring-0 rounded-2xl bg-white"
          placeholder="Tìm thuốc"
          required
        />
      </div>
    </form>
    <div class="flex gap-4">
      <button
        type="button"
        class="text-white inline-flex bg-primary items-center justify-center hover:bg-primary/80 focus:ring-0 font-medium rounded-xl text-sm px-5 py-2.5 text-center w-full sm:w-auto"
      >
        + Thêm thuốc
      </button>
      <button
        type="button"
        class="text-white inline-flex bg-red-600 items-center justify-center hover:bg-red-500 focus:ring-0 font-medium rounded-xl text-sm px-5 py-2.5 text-center w-full sm:w-auto"
      >
        - Xoá
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
  