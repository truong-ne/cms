<template>
  <section id="default-tab-content" class="w-full md:mb-4">
    <!-- Start coding here -->
    <div class="relative overflow-hidden rounded-xl bg-white w-full">
      <div
        class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 md:p-4 p-2"
      >
        <div class="w-full md:w-1/3">
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2"
                placeholder="Tìm kiếm"
              />
            </div>
          </form>
        </div>
        <div
          class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
        >
          <button
            type="button"
            id="createPatientButton"
            data-modal-target="createPatient"
            data-modal-toggle="createPatient"
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
            Thêm tài khoản
          </button>
        </div>
      </div>
      <div
        class="hidden md:p-4 p-2 w-full"
        id="profile"
        role="tabpanel"
        aria-labelledby="grid-tab"
      >
        <div
          class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-4 gap-2"
        >
          <a
            :href="route.path + '/' + element.id"
            class="relative col-span-1 w-full bg-white border-gray-200 shadow hover:border-gray-200 rounded-lg md:p-4 border-4 border-transparent group"
            v-for="element in data"
            :key="element.id"
          >
            <div class="absolute md:right-5 right-1 md:top-5 top-1 z-10">
              <button
                id="example-dropdow-button"
                data-dropdown-toggle="example-dropdow"
                class="inline-flex items-center p-0.5 text-sm font-medium text-center text-black rounded-lg focus:outline-none"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 128 512"
                >
                  <path
                    d="M64 360a56 56 0 1 0 0 112a56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112a56 56 0 1 0 0-112zm56-104A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                  />
                </svg>
              </button>
              <div
                id="example-dropdow"
                class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
              >
                <ul
                  class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="apple-imac-27-dropdown-button"
                >
                  <li>
                    <a
                      :href="route.path + '/' + element.id"
                      class="block py-2 px-4 hover:bg-gray-100"
                      >Chi tiết</a
                    >
                  </li>
                  <li>
                    <button
                      type="button"
                      id="updatePatientButton"
                      data-modal-target="updatePatient"
                      data-modal-toggle="updatePatient"
                      class="py-2 px-4 w-full flex items-start justify-start hover:bg-gray-100"
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
            </div>
            <div class="flex flex-col items-start">
              <div
                class="md:h-52 h-40 w-full md:rounded-lg rounded-t-lg md:mb-4 mb-2 overflow-hidden"
              >
                <CldImage
                  v-if="element.avatar"
                  width="700"
                  height="700"
                  :src="element.avatar"
                  :alt="element.full_name"
                  class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                />
                <img
                  v-else
                  class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                  src="/default.png"
                  :alt="element.full_name"
                />
              </div>

              <h5
                class="mb-1 md:text-lg text-base font-bold text-gray-900 overflow-hidden px-2 md:px-0 truncate ..."
              >
                {{ element.name }}
              </h5>
              <span
                class="w-full text-xs font-semibold text-gray-500 px-2 md:px-0"
                >{{ element.email }}</span
              >

              <span
                class="w-full text-sm font-thin text-gray-500 px-2 md:px-0 truncate ..."
                >{{ element.phone }}</span
              >
            </div>
          </a>
        </div>
      </div>
      <div class="bg-white shadow-xl" v-if="isLoading">
        <div
          class="flex flex-col items-center justify-center px-4 py-6 sm:px-8 sm:py-10"
        >
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div
        class="hidden p-4 rounded-xl bg-white w-full"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="list-tab"
      >
        <div
          class="overflow-x-auto"
          id="testnha"
          :class="isLoading ? 'hidden' : ''"
        >
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3" v-for="f in field" :key="f">
                  {{ f }}
                </th>

                <th scope="col" class="px-4 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody
              v-for="element in dataMedicalRecord.medicals"
              :key="element.id"
            >
              <tr class="border-b dark:border-gray-700 hover:bg-gray-200">
                <th
                  scope="row"
                  class="flex items-center px-4 py-3 font-normal text-gray-900 whitespace-nowrap"
                >
                  <div class="w-8 h-8 rounded-full overflow-hidden">
                    <!-- <img
                    class="w-8 h-8 rounded-full"
                    :src="element.avatar"
                    alt="Neil image"
                  /> -->
                    <CldImage
                      v-if="element.avatar"
                      width="400"
                      height="400"
                      :src="element.avatar"
                      :alt="element.full_name"
                      class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                    />
                    <img
                      v-else
                      class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                      src="/default.png"
                      :alt="element.full_name"
                    />
                  </div>
                  <span class="ml-2">{{ element.full_name }}</span>
                </th>

                <td class="px-4 py-3 mr-4">{{ element.gender }}</td>
                <td class="px-4 py-3 mr-4">
                  {{
                    element.relationship === ""
                      ? "Main Profile"
                      : element.relationship
                  }}
                </td>
                <td class="px-4 py-3 mr-4">
                  {{ element.date_of_birth.split("T")[0] }}
                </td>
                <td class="px-4 py-3 mr-4">{{ element.address }}</td>
                <td class="px-4 py-3 mr-4">
                  {{ element.updated_at.split("T")[0] }}
                </td>
                <td class="px-4 py-3 flex items-center justify-end">
                  <!-- <a :href="'/users/patients/' + element.id">* * *</a> -->
                  <button
                    :id="'dropdownButton' + element.id"
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
                    :id="'dropdownMenu' + element.id"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <a
                          :href="route.path + '/' + element.id"
                          class="block py-2 px-4 hover:bg-gray-100"
                          >Chi tiết</a
                        >
                      </li>
                      <li>
                        <button
                          type="button"
                          id="updatePatientButton"
                          data-modal-target="updatePatient"
                          data-modal-toggle="updatePatient"
                          class="py-2 px-4 w-full flex items-start justify-start hover:bg-gray-100"
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
          Showing
          <span class="font-semibold text-gray-900 dark:text-white"
            >{{ pagePrevious * 10 + 1 }}-{{ pageCurrent * 10 }}</span
          >
          of
          <span class="font-semibold text-gray-900 dark:text-white">{{
            dataMedicalRecord.medicalQuantity
          }}</span>
        </span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <div
              @click="previousPage"
              class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Previous</span>
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
            </div>
          </li>
          <li>
            <div
              v-if="pagePrevious > 0"
              @click="previousPage"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {{ pagePrevious }}
            </div>
          </li>
          <li>
            <div
              aria-current="page"
              class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              {{ pageCurrent }}
            </div>
          </li>
          <li>
            <div
              v-if="
                Math.ceil(dataMedicalRecord.medicalQuantity / 10) >= pageNext
              "
              @click="nextPage"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {{ pageNext }}
            </div>
          </li>

          <li>
            <div
              @click="nextPage"
              class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span class="sr-only">Next</span>
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
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <!-- </div> -->
  </section>
</template>
    
<script setup>
import { Dropdown } from "flowbite";
import { ref, onMounted, nextTick } from "vue";
import { useDataMedicalRecord } from "@/stores/medical_record";

const route = useRoute();
const { field, data } = defineProps(["field", "data"]);

const isLoading = ref(false);

const dataMedicalRecord = useDataMedicalRecord();
await dataMedicalRecord.getAllMedicalRecordPerPage(1, 10);
await dataMedicalRecord.getQuantityPatient();

const pagePrevious = ref(0);
const pageCurrent = ref(1);
const pageNext = ref(2);

async function nextPage() {
  if (pageCurrent.value < Math.ceil(dataMedicalRecord.medicalQuantity / 10)) {
    pagePrevious.value = pageCurrent.value;
    pageCurrent.value = pageNext.value;
    pageNext.value = pageNext.value + 1;
    switchPage(pageCurrent.value);
  }
}

async function previousPage() {
  if (pageCurrent.value > 1) {
    pageNext.value = pageCurrent.value;
    pageCurrent.value = pagePrevious.value;
    pagePrevious.value = pagePrevious.value - 1;
    switchPage(pageCurrent.value);
  }
}

const dropdown = () => {
  for (let e of dataMedicalRecord.medicals) {
    const $targetEl = document.getElementById("dropdownMenu" + e.id);

    const $triggerEl = document.getElementById("dropdownButton" + e.id);

    // options with default values
    const options = {
      placement: "bottom",
      triggerType: "click",
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: false,
    };

    // instance options object
    const instanceOptions = {
      id: "dropdownMenu",
      override: true,
    };

    const dropdown = new Dropdown(
      $targetEl,
      $triggerEl,
      options,
      instanceOptions
    );
  }
};

const switchPage = async (index) => {
  isLoading.value = true;
  await dataMedicalRecord.getAllMedicalRecordPerPage(index, 10);
  isLoading.value = false;
  dropdown();
};

onMounted(dropdown);
</script>