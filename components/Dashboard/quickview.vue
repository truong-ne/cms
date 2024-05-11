<template>
  
  <div class="lg:grid lg:grid-cols-3 md:gap-4 gap-2 md:mb-4 mb-2">
    <div class="lg::col-span-1 w-full h-min max-w-md p-4 mb-2 bg-white">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-lg leading-none font-bold text-gray-900">
          Bác sĩ hàng đầu
        </h5>
        <a
          href="/users/doctors"
          class="py-2.5 px-5 text-sm italic font-medium hover:underline hover:underline-offset-2focus:outline-none bg-white text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Xem thêm
        </a>
      </div>
      <div class="flow-root border-t">
        <ul
          role="list"
          class="divide-y divide-gray-200 "
          v-if="resultDoctor"
        >
          <li
            class="py-3 sm:py-4"
            v-for="doctor in resultDoctor.hits"
            :key="doctor.id"
          >
            <div class="flex overflow-hidden items-center space-x-4 relative">
              <a :href="'/users/doctors/' + doctor.id" class="relative">
                <NuxtImg
                  v-if="doctor.avatar !== null && doctor.avatar !== undefined"
                  provider="cloudinary"
                  :src="doctor.avatar"
                  width="700"
                  height="700"
                  class="w-10 h-10"
                  :alt="doctor.full_name"
                />
                <NuxtImg
                  v-else
                  provider="cloudinary"
                  src="healthline/avatar/doctors/default"
                  width="700"
                  height="700"
                  class="w-10 h-10"
                  :alt="doctor.full_name"
                />
                <span
                  class="absolute bottom-0 left-8 transform translate-y-1/4 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full"
                ></span>
              </a>
              <div class="flex-1 w-full relative">
                <a
                  :href="'/users/doctors/' + doctor.id"
                  class="text-sm font-medium text-gray-900 overflow-hidden ... line-clamp-1 pr-5"
                >
                  {{ doctor.full_name }}
                </a>
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
                    class="text-sm text-gray-500 truncate "
                    >{{ Math.round(doctor.ratings * 100) / 100 }}</span
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
                    class="ml-1 text-sm text-gray-500 truncate "
                    >{{ doctor.number_of_consultation }}</span
                  >
                  <span
                    class="text-xs text-gray-500 truncate "
                    >Cập nhật {{ getDateTime(doctor.updated_at) }}</span
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="lg:col-span-2 w-full h-min p-4 bg-white">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-lg leading-none font-bold text-gray-900">
          Bảng tin mới nhất
        </h5>
        <a
          href="/news"
          class="py-2.5 px-5 text-sm italic font-medium hover:underline hover:underline-offset-2focus:outline-none bg-white text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Xem thêm
        </a>
      </div>
      <div class="flow-root border-t">
        <ul
          role="list"
          class="divide-y divide-gray-200 "
          v-if="resultBlog"
        >
          <li
            class="py-3 sm:py-4"
            v-for="blog in resultBlog.hits"
            :key="blog._id"
          >
            <div class="flex overflow-hidden items-start gap-4 relative w-full">
              <a :href="'/news/' + blog._id" class="relative">
                <NuxtImg
                  v-if="blog.photo !== null && blog.photo !== undefined"
                  provider="cloudinary"
                  :src="blog.photo"
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
              </a>
              <div class="flex-1 w-full relative">
                <a
                  :href="'/news/' + blog._id"
                  class="text-base font-bold text-gray-900 overflow-hidden ... line-clamp-1 pr-5"
                >
                  {{ blog.title }}
                </a>

                <div
                  class="relative text-sm font-normal w-full text-ellipsis overflow-hidden ... line-clamp-4"
                >
                  {{ blog.content }}
                </div>
              </div>
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