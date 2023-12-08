<template>
  <section class="w-full md:mb-4 mb-2 relative">
    <div
      class="fixed z-30 right-0 md:left-80 left-0 overflow-hidden mb-8 rounded-b-xl h-auto bg-gradient-to-b from-gray-100 md:from-80% from-70% top-0 w-auto"
    >
      <div
        class="relative flex flex-col md:flex-row items-center justify-between rounded-xl bg-white space-y-3 md:space-y-0 md:space-x-4 md:p-4 p-2 md:mt-8 mt-20 md:m-4 m-2 md:shadow-lg shadow"
      >
        <div class="relative w-full md:w-1/3 flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              v-model="keySearch"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2"
              placeholder="Tìm kiếm"
              @input="meilisearch"
            />
          </div>
        </div>
        <div
          class="relative w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
        >
          <button
            type="button"
            v-show="currentId"
            @click="deleteBlog"
            class="block py-2 px-4 text-sm text-red-500 hover:bg-red-100 rounded-lg"
          >
            Xoá
          </button>
          <button
            v-show="currentId"
            id="updateNewsButton"
            data-modal-target="updateNews"
            data-modal-toggle="updateNews"
            type="button"
            class="flex items-center justify-center w-full md:w-auto text-primary-700 bg-white hover:bg-primary-300 hover:text-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
          >
            Cập nhật
          </button>
          <button
            id="createNewsButton"
            data-modal-target="createNews"
            data-modal-toggle="createNews"
            class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 448 512"
            >
              <path
                d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
              />
            </svg>
            Thêm bài viết
          </button>
        </div>
      </div>
    </div>
    <div
      class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 items-start justify-center md:gap-4 gap-2 md:pt-24 pt-56"
      v-if="resultSearch"
    >
      <article
        v-for="blog in resultSearch.hits"
        :key="blog._id"
        class="group bg-white rounded-xl relative overflow-hidden shadow-sm mb-4"
        @click="chooseBlog(blog._id)"
      >
        <NuxtImg
          v-if="blog.photo"
          provider="cloudinary"
          :src="blog.photo"
          class="h-auto w-auto object-cover absolute rounded-xl blur-2xl group-hover:opacity-70 duration-200 transform ease-linear"
          :class="{
            'opacity-70': currentId == blog._id,
            'opacity-20': currentId != blog._id,
          }"
          :alt="blog.title"
        />

        <div
          class="md:p-8 p-4 relative cursor-pointer rounded-xl border-4 hover:border-gray-200"
          :class="{
            'border-gray-200': currentId == blog._id,
            'border-transparent': currentId != blog._id,
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
      </article>
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