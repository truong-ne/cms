<template>
  <section class="w-full md:mb-4">
    <div class="relative overflow-hidden rounded-2xl bg-white w-full mt-8 p-8">
      <div class="text-2xl mb-8 mt-4 ml-4 font-bold">Danh sách bài đăng</div>

      <div class="grid grid-cols-2 gap-8" v-if="resultSearch">
        <div
          v-for="blog in resultSearch.hits"
          :key="blog._id"
          class="group bg-white rounded-xl relative overflow-hidden mb-4 h-96"
          @click="chooseBlog(blog._id)"
        >
          <NuxtImg
            v-if="blog.photo"
            provider="cloudinary"
            :src="blog.photo"
            class="h-auto w-auto object-cover absolute rounded-xl blur-xl group-hover:opacity-70 duration-200 transform ease-linear"
            :class="{
              'opacity-70': currentId == blog._id,
              'opacity-20': currentId != blog._id,
            }"
            :alt="blog.title"
          />

          <div
            class="md:p-8 p-4 relative cursor-pointer rounded-xl  border-2  border-primary/20 hover:border-8 h-96"
            :class="{
              'border-8': currentId == blog._id,
            }"
          >
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
                :href="route.path + '/' + blog._id"
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
        </div>
      </div>

      <!-- <nav
        class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Hiển thị
          <span class="font-semibold text-gray-900 dark:text-white"
            >{{ hitsPerPage * (currentPage - 1) + 1 }}-{{
              hitsPerPage * currentPage > totalHits
                ? totalHits
                : hitsPerPage * currentPage
            }}</span
          >
          của
          <span class="font-semibold text-gray-900 dark:text-white">{{
            totalHits
          }}</span>
        </span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <button
              type="button"
              :class="
                currentPage != 1
                  ? 'border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-gray-500'
                  : 'text-gray-300'
              "
              @click="previous"
              class="flex items-center justify-center h-full py-1.5 px-3 ml-0 bg-white rounded-l-lg border"
            >
              <span class="sr-only">Trước</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </li>

          <li>
            <button
              type="button"
              @click="choosePage(currentPage - 2)"
              v-if="currentPage - 2 >= 1"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage - 2 }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage - 1)"
              v-if="currentPage - 1 >= 1"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage - 1 }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage)"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-primary-100 border border-gray-300 hover:bg-primary-100 hover:text-primary-700"
            >
              {{ currentPage }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage + 1)"
              v-if="currentPage + 1 <= totalPages"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage + 1 }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage + 2)"
              v-if="currentPage + 2 <= totalPages"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage + 2 }}
            </button>
          </li>

          <li>
            <button
              href="#"
              :class="
                totalPages != currentPage && totalHits > 0
                  ? 'border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-gray-500'
                  : 'text-gray-300'
              "
              @click="next"
              class="flex items-center justify-center h-full py-1.5 px-3 leading-tight bg-white rounded-r-lg border b"
            >
              <span class="sr-only">Tiếp</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav> -->
    </div>
  </section>
</template>
<script setup lang="ts">
const { blogStore } = defineProps(["blogStore"]);
const route = useRoute();
const { search, result } = useMeiliSearch("blog");

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

const keySearch = ref("");
const resultSearch = ref();
const hitsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref();
const totalHits = ref(0);
const currentId = ref();

async function deleteBlog() {
  try {
    await blogStore
      .deleteBlog(currentId.value)
      .then(() => {
        toastStatus.value = "success";
        message.value = "Xoá thành công";
        addToast();
      })
      .catch((e: string) => {
        toastStatus.value = "error";
        message.value = e;
        addToast();
      });
  } catch (error) {
    console.log(error);
  }
}

function chooseBlog(id: string) {
  if (id == currentId.value) {
    currentId.value = undefined;
  } else {
    currentId.value = id;
    blogStore.chooseBlog(id);
  }
}

onMounted(async () => {
  result.value = await search(keySearch.value.trim(), {});
  resultSearch.value = result.value;
  blogStore.saveBlogs(resultSearch.value.hits);
});

async function meilisearch() {
  // if (keySearch.value.trim() !== "") {

  result.value = await search(keySearch.value.trim(), {});
  resultSearch.value = result.value;
  blogStore.saveBlogs(resultSearch.value.hits);

  // }
}
</script>