
<template>
  <div class="rounded-xl bg-white overflow-hidden" v-if="data.blog">
    <div class="w-full md:h-96 h-60 overflow-hidden relative group">
      <a
        href="/news"
        class="group-hover:bg-white duration-200 transform ease-linear p-3 absolute rounded-full z-20 left-5 top-5"
        rel="noopener noreferrer"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="h-5 w-5 text-gray-900"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </div>
      </a>
      <div
        class="absolute bottom-0 z-10 md:h-96 h-60 w-full grid grid-cols-1 items-end justify-end bg-gradient-to-t from-gray-900 group-hover:bg-gray-900 group-hover:opacity-100 duration-200 transform ease-linear"
      >
        <span
          class="text-white 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-7xl text-5xl font-bold line-clamp-2 w-auto 2xl:m-8 xl:m-7 lg:m-6 md:m-5 m-4"
        >
          {{ data.blog.title }}</span
        >
      </div>
      <NuxtImg
        provider="cloudinary"
        :src="data.blog.photo"
        width="700"
        height="700"
        class="object-cover object-center w-full h-full"
        alt="news"
      />
    </div>

    <div
      class="md:flex flex-col gap-4 w-full items-start justify-start md:p-16 md:px-56 p-4"
    >
      <div class="text-sm text-gray-400 font-thin flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          class="h-4 w-4 text-gray-400 mr-2"
          fill="currentColor"
          viewBox="0 0 512 512"
        >
          <path
            d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24h110.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24v104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
          />
        </svg>

        {{ getDateTime(data.blog.updatedAt) }}
      </div>

      <div class="col-span-2 flex flex-col items-start justify-start">
        <span
          class="mb-1 lg:text-md md:text-base text-sm font-bold leading-none text-black"
        >
          <p
            class="font-normal md:text-lg text-base tracking-normal text-justify"
          >
            {{ data.blog.content }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getDateTime } from "~/utils/datetime";
const { data } = defineProps(["data"]);
</script>
 