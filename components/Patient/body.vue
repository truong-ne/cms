<template>
  <section class="w-full md:mb-4">
    <div class="relative overflow-hidden rounded-2xl bg-white w-full mt-8 p-4">
      <div class="text-2xl mb-8 mt-4 ml-4 font-bold">Danh sách bệnh nhân</div>
      <div class="overflow-x-auto">
        <table
          id="listPatient"
          class="text-left mt- w-full text-sm table-auto bg-transparent border-separate border-spacing-x-0 border-spacing-y-2 border-translate"
        >
          <thead class="text-black uppercase text-xs">
            <tr>
              <th class="px-4 py-2 border-l-2">
                <input
                  disabled
                  type="checkbox"
                  value="false"
                  class="w-4 h-4 border-gray-300 rounded focus:ring-0"
                />
              </th>
              <th class="px-4 border-l-2">ID</th>
              <th class="px-4 border-l-2">Họ tên bệnh nhân</th>
              <th class="px-4 border-l-2">Ngày sinh</th>
              <th class="px-4 border-l-2">Giới tính</th>
              <th class="px-4 border-l-2">Số điện thoại</th>
              <th class="px-4 border-l-2">Chuẩn đoán</th>

              <th class="px-4 border-l-2">Cập nhật lần cuối</th>

              <th class="px-4 border-r-2">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody v-for="patient in medicalStore.medicals" :key="patient.id">
            <tr
              class="bg-primary/20"
              :class="{
                'bg-primary/40 transition duration-200':
                  currentId == patient.id,
                'hover:bg-primary/40': currentId != patient.id,
              }"
              @dblclick="navigateToProfile(patient.id)"
              @click="choosePatient(patient.id)"
            >
              <th class="rounded-l-2xl px-4 items-center">
                <input
                  type="checkbox"
                  value="false"
                  class="w-4 h-4 border-gray-300 rounded focus:ring-0"
                />
              </th>
              <td class="p-4" v-if="patient.date_of_birth">
                {{ patient.id }}
              </td>
              <td class="p-4">
                <div class="flex justify-start items-center">
                  <div class="w-8 h-8 rounded-full overflow-hidden">
                    <NuxtImg
                      v-if="patient.avatar != 'default'"
                      provider="cloudinary"
                      width="400"
                      height="400"
                      :src="patient.avatar"
                      :alt="patient.full_name"
                      class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                    />

                    <NuxtImg
                      v-else
                      provider="cloudinary"
                      src="healthline/avatar/doctors/default"
                      width="700"
                      height="700"
                      class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                      :alt="patient.full_name"
                    />
                  </div>
                  <span class="ml-2">{{ patient.full_name }}</span>
                </div>
              </td>

              <td class="p-4" v-if="patient.date_of_birth">
                {{ getDate(patient.date_of_birth) }}
              </td>
              <td v-else></td>
              <td class="p-4">{{ getByKey(patient.gender) }}</td>
              <td class="p-4">{{ patient.address }}</td>
              <td class="p-4">{{ patient.address }}</td>

              <td class="p-4" v-if="patient.update_at">
                {{ getDate(patient.update_at) }}
              </td>
              <td v-else></td>
              <td class="rounded-r-2xl px-4">
                <button
                  v-show="currentId == patient.id"
                  type="button"
                  @click="toggle"
                  class="flex items-center justify-center w-full md:w-auto text-primary-700 bg-white hover:bg-primary-300 hover:text-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"

                >
                  Chỉnh sửa
                </button>
                <!-- <button
                  v-show="currentId == patient.id"
                  type="button"
                  class="flex items-center justify-center w-full md:w-auto text-primary-700 bg-white hover:bg-primary-300 hover:text-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                >
                  Hồ sơ
                </button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <nav
        class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Hiển thị
          <span class="font-semibold text-gray-900"
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
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-primary-100 hover:text-primary-700"
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
import { onMounted, onBeforeMount } from "vue";
import { getDate } from "~/utils/datetime";
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

const mapGender = Object.entries(Gender).map(([key, value]) => ({
  key: key,
  value: value,
}));
const route = useRoute();

const isLoading = ref(false);
const { medicalStore } = defineProps(["medicalStore"]);

function navigateToProfile(id: string) {
  window.location.href = "/patients/" + id;
}
function choosePatient(id: string) {
  if (id != currentId.value) {
    currentId.value = id;
    medicalStore.choosePatient(id);
  }
}

const { search, result } = useMeiliSearch("user");

onBeforeMount(async () => {
  result.value = await search(keySearch.value.trim(), {
    hitsPerPage: hitsPerPage.value,
    page: currentPage.value,
  });
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
  medicalStore.savePatients(resultSearch.value);
});

onMounted(() => {
  setTimeout(() => {
    try {
      // select the two elements that we'll work with
      const $modalElement = document.getElementById("updatePatient");
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

const modal = ref();

function toggle() {
  modal.value.toggle();
}

const keySearch = ref("");
const resultSearch = ref();
const hitsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref();
const totalHits = ref(0);
const currentId = ref();

function getByKey(searchKey: string) {
  for (let { key, value } of mapGender) {
    if (key === searchKey.toLowerCase()) return value;
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
    medicalStore.savePatients(resultSearch.value);
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
    medicalStore.savePatients(resultSearch.value);
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
    medicalStore.savePatients(resultSearch.value);
  }
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
  medicalStore.savePatients(resultSearch.value);

  // }
}
</script>