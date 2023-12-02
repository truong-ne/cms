<script setup>
const { search, result } = useMeiliSearch("discount");

const hitsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref();
const totalHits = ref(0);

const input = ref("");

async function meilisearch() {
  if (input.value.trim() !== "") {
    await search(input.value.trim(), {
      hitsPerPage: 10,
      page: 2,
    });
  } else {
    result.value = null;
  }
}
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 p-3">
    <div class="mx-auto max-w-screen-xl px-4">
      <!-- Start coding here -->
      <div
        class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4"
        >
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
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
                  v-model="input"
                  @input="meilisearch"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2"
                  placeholder="Tìm kiếm"
                />
              </div>
            </form>
          </div>
        </div>

        <div v-if="result != null">
          {{ result }}
          <div v-for="item in result.hits" :key="item">{{ item }}</div>
        </div>
      </div>
    </div>
  </section>
</template>