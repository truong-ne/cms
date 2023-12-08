<template>
  <div class="grid lg:grid-cols-3 md:gap-4 gap-2 md:mb-4 mb-2">
    <div class="col-span-1 w-full h-min max-w-md p-4 bg-white rounded-xl">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-lg leading-none font-bold text-gray-900">
          Bác sĩ hàng đầu
        </h5>
        <a
          href="/users/doctors"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Xem thêm
        </a>
      </div>
      <div class="flow-root border-t">
        <ul
          role="list"
          class="divide-y divide-gray-200 dark:divide-gray-700"
          v-if="resultDoctor"
        >
          <li
            class="py-3 sm:py-4"
            v-for="doctor in resultDoctor.hits"
            :key="doctor.id"
          >
            <div class="flex items-center space-x-4 relative">
              <div class="relative">
                <NuxtImg
                  v-if="doctor.avatar !== null && doctor.avatar !== undefined"
                  provider="cloudinary"
                  :src="doctor.avatar"
                  width="700"
                  height="700"
                  class="w-10 h-10 rounded"
                  :alt="doctor.full_name"
                />
                <NuxtImg
                  v-else
                  provider="cloudinary"
                  src="healthline/avatar/doctors/default"
                  width="700"
                  height="700"
                  class="w-10 h-10 rounded"
                  :alt="doctor.full_name"
                />
                <span
                  class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                ></span>
              </div>
              <div class="flex-1 w-full relative">
                <span class="text-sm font-medium text-gray-900 truncate">
                  {{ doctor.full_name }}
                </span>
                <div>
                  <a
                    :href="'mailto:' + doctor.email"
                    class="ml-auto text-sm text-gray-500 truncate hover:underline w-full"
                  >
                    {{ doctor.email }}</a
                  >
                </div>

                <div class="flex items-center">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-yellow-300"
                    fill="currentColor"
                    viewbox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span
                    class="text-sm text-gray-500 truncate dark:text-gray-400"
                    >{{ doctor.ratings }}</span
                  >
                  <svg
                    class="ml-2 w-[18px] h-[18px] text-blue-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M12 1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Zm7 11-6-2V4l6-2v10Z"
                    />
                  </svg>
                  <span
                    class="ml-1 text-sm text-gray-500 truncate dark:text-gray-400"
                    >{{ doctor.number_of_consultation }}</span
                  >
                  <span
                    class="text-xs text-gray-500 truncate dark:text-gray-400 ml-auto"
                    >Cập nhật {{ getDateTime(doctor.updated_at) }}</span
                  >
                </div>
              </div>
              <a
                :href="'/users/doctors/' + doctor.id"
                class="absolute right-0 top-0 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:col-span-2 w-full h-min p-4 bg-white rounded-xl">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-lg leading-none font-bold text-gray-900">
          Bảng tin mới nhất
        </h5>
        <a
          href="/news"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Xem thêm
        </a>
      </div>
      <div class="flow-root border-t">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700" v-if="resultBlog">
          <li class="py-3 sm:py-4" v-for="blog in resultBlog.hits" :key="blog._id">
            <div class="flex items-start space-x-4 relative">
              <div class="relative">
                <NuxtImg
                  v-if="blog.avatar !== null && blog.avatar !== undefined"
                  provider="cloudinary"
                  :src="blog.avatar"
                  width="700"
                  height="700"
                  class="w-10 h-10 rounded"
                  :alt="blog.full_name"
                />
                <NuxtImg
                  v-else
                  provider="cloudinary"
                  src="healthline/avatar/doctors/default"
                  width="700"
                  height="700"
                  class="w-10 h-10 rounded"
                  :alt="blog.full_name"
                />
                <span
                  class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"
                ></span>
              </div>
              <div class="flex-1 w-full relative">
                <div class="flex items-center w-full">
                  <span class="text-base font-bold text-gray-900 truncate">
                    {{ blog.title }}
                  </span>
                </div>

                <div
                  class="relative text-sm font-normal w-full text-ellipsis overflow-hidden ... line-clamp-4"
                >
                  {{ blog.content }}
                </div>
              </div>
              <a
                :href="'/news/'+blog._id"
                class="absolute right-0 top-0 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
              >
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path
                    d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0a144 144 0 1 1-288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
                  />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const meilisearchDoctor = useMeiliSearch("doctors");
const meilisearchBlog = useMeiliSearch("blog");
const resultDoctor = ref();
const resultBlog = ref();

onMounted(async () => {
  resultDoctor.value = await meilisearchDoctor.search("", {
    sort: ["ratings:desc"],
    hitsPerPage: 5,
  });
  resultBlog.value = await meilisearchBlog.search("", {
    sort: ["updateat:desc"],
    hitsPerPage: 5,
  });
});
</script>