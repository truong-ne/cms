<template>
  <section id="default-tab-content" class="w-full md:mb-4">
    <!-- Start coding here -->
    <div class="relative overflow-hidden rounded-xl bg-white w-full">
      <div
        class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 md:p-4 p-2"
      >
        <div class="w-full md:w-1/3">
          <div class="flex items-center">
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
                @input="meilisearch"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2"
                placeholder="Tìm kiếm"
              />
            </div>
          </div>
        </div>
        <div
          class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
        >
          <button
            type="button"
            id="createDiscountButton"
            data-modal-target="createDiscount"
            data-modal-toggle="createDiscount"
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
            Thêm phiếu giảm giá
          </button>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-white w-full">
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3">Mã</th>
                <th scope="col" class="px-4 py-3">Giá trị</th>
                <th scope="col" class="px-4 py-3">Loại</th>
                <th scope="col" class="px-4 py-3">Thời gian hết hạn</th>
                <th scope="col" class="px-4 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody v-for="item in resultSearch" :key="item.item">
              <tr class="border-b hover:bg-gray-100">
                <th
                  scope="row"
                  class="flex items-center px-4 py-3 mr-4 font-normal text-gray-900 whitespace-nowrap"
                >
                  {{ item.code }}
                </th>
                <td class="px-4 py-3 mr-4">{{ item.value }}</td>

                <td class="px-4 py-3 mr-4">{{ item.type }}</td>
                <td class="px-4 py-3 mr-4">{{ item.expiration_time }}</td>
                <td class="px-4 py-3 flex items-center justify-end">
                  <button
                    :id="'discount-dropdown' + item.id + '-button'"
                    :data-dropdown-toggle="'discount-dropdown' + item.id"
                    class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M8 256a56 56 0 1 1 112 0a56 56 0 1 1-112 0zm160 0a56 56 0 1 1 112 0a56 56 0 1 1-112 0zm216-56a56 56 0 1 1 0 112a56 56 0 1 1 0-112z"
                      />
                    </svg>
                  </button>
                  <div
                    :id="'discount-dropdown' + item.id"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      :aria-labelledby="
                        'discount-dropdown' + item.id + '-button'
                      "
                    >
                      <li>
                        <button
                          type="button"
                          :id="'updateDiscountButton' + item.id"
                          data-modal-target="updateDiscount"
                          data-modal-toggle="updateDiscount"
                          class="py-2 px-4 w-full flex items-start justify-start hover:bg-gray-100"
                          @click="chooseDiscount('')"
                        >
                          Chỉnh sửa
                        </button>
                      </li>
                    </ul>
                    <div class="py-1">
                      <a
                        href="#"
                        class="block py-2 px-4 text-sm text-red-500 hover:bg-gray-100"
                        >Xoá</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <nav
        class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Hiển thị
          <span class="font-semibold text-gray-900 dark:text-white"
            >{{ hitsPerPage * (currentPage - 1) + 1 }}-{{
              hitsPerPage * currentPage
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
      </nav>
    </div>
    <!-- </div> -->
  </section>
</template>
  
<script setup lang="ts">
const { search, result } = useMeiliSearch("discount");

const keySearch = ref("");
const resultSearch = ref();
const hitsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref();
const totalHits = ref(0);

onMounted(async () => {
  result.value = await search(keySearch.value.trim(), {
    hitsPerPage: hitsPerPage.value,
    page: currentPage.value,
  });
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
});

async function previous() {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
  }
}

async function next() {
  if (currentPage.value < totalPages.value) {
    currentPage.value = currentPage.value + 1;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
  }
}
async function choosePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
  }
}

async function meilisearch() {
  // if (keySearch.value.trim() !== "") {
  currentPage.value = 1;
  result.value = await search(keySearch.value.trim(), {
    hitsPerPage: hitsPerPage.value,
    page: 1,
  });
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
  // }
}

const { data } = defineProps(["data"]);
function chooseDiscount(id: string) {
  data.chooseDiscount(id);
}
</script>