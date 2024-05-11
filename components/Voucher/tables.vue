<template>
  <!-- <section class="w-full mt-8">
    <div class="relative overflow-hidden rounded-2xl bg-white w-full">
      <div
        class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 md:p-4 p-2"
      > -->
  <!-- <div class="w-full md:w-1/3">
          <div class="flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 "
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
          class="w-full md:w-2/3 flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
        >
          <button
            type="button"
            v-show="currentId"
            class="block py-2 px-4 text-sm text-red-500 hover:bg-red-100 rounded-lg"
            @click="deleteDiscount()"
          >
            Xoá
          </button>
          <button
            type="button"
            id="createDiscountButton"
            data-modal-target="createDiscount"
            data-modal-toggle="createDiscount"
            class="flex items-center justify-center w-full md:w-auto text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
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
        </div> -->
  <!-- </div>

      <div class="p-4 rounded-xl bg-white w-full">
        <div class="overflow-x-auto"> -->

  <!-- Header -->
  <div class="flex justify-between w-full">
    <form class="w-96">
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-6 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search-voucher"
          class="block w-full p-4 ps-12 text-sm font-semibold text-gray-900 border-0 focus:ring-0 rounded-2xl bg-white"
          placeholder="Tìm mã giảm giá" v-model="keySearch" @input="meilisearch" required />
      </div>
    </form>
    <div class="flex gap-4">
      <button type="button" data-modal-target="createDiscount" data-modal-toggle="createDiscount"
        class="text-white inline-flex bg-primary items-center justify-center hover:bg-primary/80 focus:ring-0 font-medium rounded-xl text-sm px-5 py-2.5 text-center w-full sm:w-auto">
        + Thêm phiếu giảm giá
      </button>
      <button type="button"
        class="text-white inline-flex bg-red-600 items-center justify-center hover:bg-red-500 focus:ring-0 font-medium rounded-xl text-sm px-5 py-2.5 text-center w-full sm:w-auto">
        - Xoá
      </button>
    </div>
  </div>
  <!-- Body -->
  <section class="w-full md:mb-4">
    <div class="relative overflow-hidden rounded-2xl bg-white w-full mt-8 p-4">
      <div class="text-2xl mb-8 mt-4 ml-4 font-bold">Danh sách mã giảm giá</div>
      <div class="overflow-x-auto">
        <table id="listPatient"
          class="text-left mt- w-full text-sm table-fixed bg-transparent border-separate border-spacing-x-0 border-spacing-y-2 border-translate">
          <thead class="text-black uppercase text-xs">
            <tr>
              <th class="px-4 py-2 border-l-2">
                <input disabled type="checkbox" value="false" class="w-4 h-4 border-gray-300 rounded focus:ring-0" />
              </th>
              <th class="px-4 border-l-2">Mã</th>
              <th class="px-4 border-l-2">Giá trị</th>
              <th class="px-4 border-l-2">Loại</th>
              <th class="px-4 border-l-2">Thời gian hết hạn</th>

              <th class="px-4 border-r-2 w-36">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody v-for="discount in resultSearch" :key="discount.discount">
            <tr class="bg-primary/20" :class="{
              'bg-primary/40 transition duration-200':
                currentId == discount.id,
              'hover:bg-primary/40': currentId != discount.id,
            }" @click="chooseDiscount(discount.id)">
              <th class="rounded-l-2xl px-4 items-center">
                <input type="checkbox" value="false" class="w-4 h-4 border-gray-300 rounded focus:ring-0" />
              </th>
              <td class="p-4">
                {{ discount.code }}
              </td>
              <td class="p-4">
                {{ getValue(discount.value, discount.type) }}
              </td>

              <td class="p-4">{{ getType(discount.type) }}</td>
              <td class="p-4" v-if="discount.expiration_time">
                {{ getDate(discount.expiration_time) }}
              </td>
              <td class="p-4" v-else></td>
              <td class="rounded-r-2xl">
                <button v-show="currentId == discount.id" type="button" @click="toggle"
                  class="flex items-center justify-center w-full md:w-auto text-primary bg-white hover:bg-primary hover:text-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-4 py-2 focus:outline-none">
                  Chỉnh sửa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 ">
          Hiển thị
          <span class="font-semibold text-gray-900 ">{{ hitsPerPage * (currentPage - 1) + 1 }}-{{
            hitsPerPage * currentPage > totalHits
              ? totalHits
              : hitsPerPage * currentPage
          }}</span>
          của
          <span class="font-semibold text-gray-900 ">{{
            totalHits
          }}</span>
        </span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <button type="button" :class="currentPage != 1
              ? 'border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-gray-500'
              : 'text-gray-300'
              " @click="previous"
              class="flex items-center justify-center h-full py-1.5 px-3 ml-0 bg-white rounded-l-lg border">
              <span class="sr-only">Trước</span>
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </li>

          <li>
            <button type="button" @click="choosePage(currentPage - 2)" v-if="currentPage - 2 >= 1"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              {{ currentPage - 2 }}
            </button>
          </li>
          <li>
            <button type="button" @click="choosePage(currentPage - 1)" v-if="currentPage - 1 >= 1"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              {{ currentPage - 1 }}
            </button>
          </li>
          <li>
            <button type="button" @click="choosePage(currentPage)"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-primary border border-gray-300 hover:bg-primary hover:text-primary">
              {{ currentPage }}
            </button>
          </li>
          <li>
            <button type="button" @click="choosePage(currentPage + 1)" v-if="currentPage + 1 <= totalPages"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              {{ currentPage + 1 }}
            </button>
          </li>
          <li>
            <button type="button" @click="choosePage(currentPage + 2)" v-if="currentPage + 2 <= totalPages"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              {{ currentPage + 2 }}
            </button>
          </li>

          <li>
            <button href="#" :class="totalPages != currentPage && totalHits > 0
              ? 'border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-gray-500'
              : 'text-gray-300'
              " @click="next"
              class="flex items-center justify-center h-full py-1.5 px-3 leading-tight bg-white rounded-r-lg border b">
              <span class="sr-only">Tiếp</span>
              <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd" />
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
import { getDate } from "~/utils/datetime";
import { converCurrency } from "~/utils/currency";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

const { search, result } = useMeiliSearch("discount");

const keySearch = ref("");
const resultSearch = ref();
const hitsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref();
const totalHits = ref(0);
const currentId = ref();

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

const modal = ref();

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

function getType(type: string) {
  return type.toUpperCase();
}

function getValue(value: string, type: string) {
  if (type === "vnd") {
    return converCurrency(value);
  } else return value;
}
onBeforeMount(async () => {
  result.value = await search(keySearch.value.trim(), {
    hitsPerPage: hitsPerPage.value,
    page: currentPage.value,
  });
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
  discountStore.saveDiscounts(resultSearch.value);
});
onMounted(async () => {
  setTimeout(() => {
    try {
      // select the two elements that we'll work with
      const $modalElement = document.getElementById("updateDiscount");
      const $closeButton = document.getElementById("buttonClose");

      // set modal options
      const modalOptions: ModalOptions = {
        backdropClasses:
          "bg-gray-900/50  fixed inset-0 z-40",
      };
      // create a new modal instance
      if ($modalElement) {
        modal.value = new Modal($modalElement, modalOptions);

        // set event listeners for the button to show the modal
        $closeButton!.addEventListener("click", () => modal.value.hide());
      }
    } catch (e) {
      console.log(e);
    }
  }, 0);
});

function toggle() {
  modal.value.toggle();
}

async function deleteDiscount() {
  clearNuxtData();
  await discountStore
    .deleteDiscount(currentId.value)
    .then(() => {
      toastStatus.value = "success";
      message.value = "Xoá thành công";
      currentId.value = undefined;
      addToast();
    })
    .catch((e: string) => {
      toastStatus.value = "error";
      message.value = e;
      addToast();
    });
}

async function previous() {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    currentId.value = undefined;
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
    discountStore.saveDiscounts(resultSearch.value);
  }
}

async function next() {
  if (currentPage.value < totalPages.value) {
    currentPage.value = currentPage.value + 1;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    currentId.value = undefined;
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
    discountStore.saveDiscounts(resultSearch.value);
  }
}
async function choosePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    currentId.value = undefined;
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
    discountStore.saveDiscounts(resultSearch.value);
  }
}

const { discountStore } = defineProps(["discountStore"]);
function chooseDiscount(id: string) {
  currentId.value = id;
  discountStore.chooseDiscount(id);
}

async function meilisearch() {
  // if (keySearch.value.trim() !== "") {
  currentPage.value = 1;
  result.value = await search(keySearch.value.trim(), {
    hitsPerPage: hitsPerPage.value,
    page: 1,
  });
  currentId.value = undefined;
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
  discountStore.saveDiscounts(resultSearch.value);

}
</script>