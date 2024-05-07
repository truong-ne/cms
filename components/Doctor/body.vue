<template>
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
        <input type="search" id="default-search-doctor"
          class="block w-full p-4 ps-12 text-sm font-semibold text-gray-900 border-0 focus:ring-0 rounded-2xl bg-white"
          placeholder="Tìm kiếm bác sĩ" v-model="keySearch" @input="meilisearch" required />
      </div>
    </form>
    <div class="flex gap-4">
      <button type="button"
        class="text-white inline-flex bg-primary items-center justify-center hover:bg-primary/80 focus:ring-0 font-medium rounded-xl text-sm px-5 py-2.5 text-center w-full sm:w-auto">
        + Thêm bác sĩ
      </button>
      <button type="button"
        class="text-white inline-flex bg-red-600 items-center justify-center hover:bg-red-500 focus:ring-0 font-medium rounded-xl text-sm px-5 py-2.5 text-center w-full sm:w-auto">
        - Xoá
      </button>
    </div>
  </div>
  <!-- Body -->
  <section class="w-full md:mb-4">
    <div class="relative overflow-hidden rounded-2xl bg-white w-full mt-8 p-8">
      <div class="text-2xl mb-8 mt-4 ml-4 font-bold">Danh sách bác sĩ</div>

      <div class="grid grid-cols-2 gap-8">
        <div
          class="relative col-span-1 w-full bg-white rounded-2xl group cursor-pointer outline outline-offset-2 outline-2 outline-primary/20 hover:outline-8"
          v-for="doctor in doctorStore.doctors" :key="doctor.id" @click="chooseDoctor(doctor.id)">
          <div class="grid grid-cols-7 rounded-s-2xl">
            <div class="col-span-3 h-80 rounded-s-2xl overflow-hidden">
              <NuxtImg v-if="
                doctor.avatar != 'default' &&
                doctor.avatar != null &&
                doctor.avatar != ''
              " provider="cloudinary" width="400" height="400" :src="doctor.avatar" :alt="doctor.full_name"
                class="object-cover h-full group-hover:scale-[1.15] duration-200 transform ease-linear bg-primary/80" />

              <NuxtImg v-else provider="cloudinary" src="healthline/avatar/doctors/default" width="700" height="700"
                class="object-cover h-full group-hover:scale-[1.15] duration-200 transform ease-linear"
                :alt="doctor.full_name" />
            </div>
            <div class="relative col-span-4 p-4 flex flex-col">
              <div class="text-lg text-black font-bold">
                {{ doctor.full_name }}
              </div>

              <div class="flex items-center">
                <svg class="w-4 h-4 me-1" :class="{
                  'text-gray-300': i > doctor.ratings,
                  ' text-yellow-300': i < doctor.ratings,
                }" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20"
                  v-for="i in 5" :key="i">
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <div v-for="s in doctor.specialty">
                <div class="text-xs font-light text-gray-500 mt-3">
                  {{ s.specialty.toUpperCase() }}
                </div>
              </div>
              <div class="text-xs font-light text-gray-500 mt-1">
                {{ doctor.feePerMinutes ?? 0 }} ₫/phút
              </div>
              <div class="text-sm font-normal text-gray-500 line-clamp-3 mt-6">
                {{ doctor.biography }}
              </div>
              <div class="absolute bottom-0 left-0 right-0 my-5 flex gap-4 justify-center">
                <a :href="'/doctors/' + doctor.id"
                  class="flex items-center justify-center w-full md:w-auto text-white bg-colorDF9F1E font-medium rounded-xl text-sm px-4 py-2.5 hover:bg-colorDF9F1E/80">
                  Xem hồ sơ </a><button type="button" @click="toggle"
                  class="flex items-center justify-center w-full md:w-auto text-colorDF9F1E bg-white font-medium rounded-xl text-sm px-4 py-2.5 hover:outline-1 outline-colorDF9F1E outline outline-0">
                  Chỉnh sửa
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Hiển thị
          <span class="font-semibold text-gray-900 dark:text-white">{{ hitsPerPage * (currentPage - 1) + 1 }}-{{
            hitsPerPage * currentPage > totalHits
              ? totalHits
              : hitsPerPage * currentPage
          }}</span>
          của
          <span class="font-semibold text-gray-900 dark:text-white">{{
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
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-primary-100 border border-gray-300 hover:bg-primary-100 hover:text-primary-700">
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
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

const { search, result } = useMeiliSearch("doctors");

const mapSpecialty = Object.entries(Specialty).map(([key, value]) => ({
  key: key,
  value: value,
}));
const route = useRoute();

const isLoading = ref(false);
const { doctorStore } = defineProps(["doctorStore"]);
onBeforeMount(async () => {
  result.value = await search(keySearch.value.trim(), {
    hitsPerPage: hitsPerPage.value,
    page: currentPage.value,
  });
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
  console.log(resultSearch.value)
  doctorStore.saveDoctors(resultSearch.value);
});
onMounted(async () => {
  // doctorStore.doctors = await search("", { sort: ["ratings:desc"], hitsPerPage: 1000 });
  setTimeout(() => {
    try {
      // select the two elements that we'll work with
      const $modalElement = document.getElementById("updateDoctor");
      const $closeButton = document.getElementById("buttonClose");

      // set modal options
      const modalOptions: ModalOptions = {
        backdropClasses:
          "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
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

function chooseDoctor(id: string) {
  if (id == currentId.value) {
    currentId.value = undefined;
  } else {
    currentId.value = id;
    doctorStore.chooseDoctor(id);
  }
}

const modal = ref();
const keySearch = ref("");
const resultSearch = ref();
const hitsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref();
const totalHits = ref(0);
const currentId = ref();

function getByKey(searchKey: string) {
  for (let { key, value } of mapSpecialty) {
    if (key === searchKey) return value;
  }
  return "Không xác định";
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
    doctorStore.saveDoctors(resultSearch.value);
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
    doctorStore.saveDoctors(resultSearch.value);
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
    doctorStore.saveDoctors(resultSearch.value);
  }
}

async function meilisearch() {
  currentPage.value = 1;
  result.value = await search(keySearch.value.trim(), {
    hitsPerPage: hitsPerPage.value,
    page: 1,
  });
  currentId.value = undefined;
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
  doctorStore.saveDoctors(resultSearch.value);
}
</script>