<template>
  <section
    class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-center md:gap-4 gap-2"
  >
    <article
      v-for="blog in data.blogs"
      :key="blog._id"
      class="group bg-white rounded-xl relative overflow-hidden shadow-sm mb-4"
    >
      <NuxtImg
        v-if="blog.photo"
        provider="cloudinary"
        :src="blog.photo"
        class="h-auto w-auto object-contain absolute blur-2xl"
        :alt="blog.title"
      />

      <div class="md:p-8 p-4 relative">
        <div class="flex justify-between items-center mb-5 text-gray-500">
          <span
            class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded"
          >
            <svg
              class="mr-1 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clip-rule="evenodd"
              ></path>
              <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
            </svg>
            Bài báo
          </span>
          <span class="text-sm">{{ blog.updated_at }}</span>
        </div>
        <h2
          class="mb-2 w-full text-2xl font-bold tracking-tight text-gray-900 transform duration-500 ease-in-out md:group-hover:scale-[1.1]"
        >
          {{ blog.title }}
        </h2>
        <p
          class="line-clamp-4 mb-5 font-light text-justify text-gray-500 dark:text-gray-400 transform duration-500 ease-in-out md:group-hover:scale-[1.1]"
        >
          {{ blog.content }}
        </p>
        <div class="flex justify-between items-center">
          <a
            href="#"
            class="inline-flex items-center font-normal px-3 py-2 border border-gray-200 rounded-lg text-gray-200 hover:border-primary-600 hover:bg-primary-600 hover:text-white"
          >
            Cập nhật
          </a>
          <a
            href="#"
            class="px-3 py-2 rounded-lg inline-flex items-center font-medium text-primary-600 hover:underline"
          >
            Xem thêm
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  </section>
</template>
<script setup lang="ts">
const { data } = defineProps(["data"]);
</script>