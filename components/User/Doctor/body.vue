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
            id="createDoctorButton"
            data-modal-target="createDoctor"
            data-modal-toggle="createDoctor"
            class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
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
        id="gridView"
        role="tabpanel"
        aria-labelledby="grid-tab"
      >
        <div
          class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 md:gap-4 gap-2"
        >
          <div
            class="relative col-span-1 w-full bg-white border-gray-200 shadow hover:border-gray-200 rounded-lg md:p-4 border-4 border-transparent group"
            v-for="element in data.doctors"
            :key="element.id"
          >
            <a
              :href="route.path + '/' + element.id"
              class="w-full h-full absolute z-10"
            ></a>

            <div class="absolute md:right-5 right-1 md:top-5 top-1 z-20 group">
              <button
                id="example-dropdow-button"
                :data-dropdown-toggle="'example-dropdow' + element.id"
                class="inline-flex items-center p-0.5 text-sm font-medium text-center text-black rounded-lg hover:bg-white"
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
                :id="'example-dropdow' + element.id"
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
                      :id="'updateDoctorButton' + element.id"
                      data-modal-target="updateDoctor"
                      data-modal-toggle="updateDoctor"
                      class="py-2 px-4 w-full flex items-start justify-start hover:bg-gray-100"
                      @click="chooseDoctor(element.id)"
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
                <NuxtImg
                  v-if="element.avatar"
                  provider="cloudinary"
                  :src="element.avatar"
                  width="700"
                  height="700"
                  class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                  :alt="element.full_name"
                />
                <img
                  v-else
                  src="/default.png"
                  :alt="element.full_name"
                  width="700"
                  height="700"
                  class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                />
              </div>

              <h5
                class="mb-1 md:text-lg text-base font-bold text-gray-900 overflow-hidden px-2 md:px-0 truncate ..."
              >
                {{ element.full_name }}
              </h5>
              <span
                class="w-full text-xs font-semibold text-gray-500 px-2 md:px-0"
                >{{ getByKey(element.specialty) }}</span
              >

              <span
                class="w-full text-sm font-thin text-gray-500 px-2 md:px-0 truncate ..."
                >{{ element.email ?? "Không xác định" }}</span
              >

              <div
                class="flex items-center justify-between w-full mt-4 md:mb-0 mb-2 px-2 md:px-0"
              >
                <div class="flex items-center justify-center">
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
                  <span class="text-sm text-gray-500 truncate">{{
                    element.ratings
                  }}</span>
                </div>
                <span class="text-sm text-gray-500 truncate"
                  >{{ element.fee_per_minutes }} VND</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden p-4 rounded-xl bg-white w-full"
        id="listView"
        role="tabpanel"
        aria-labelledby="list-tab"
      >
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3">Họ tên</th>
                <th scope="col" class="px-4 py-3">Email</th>
                <th scope="col" class="px-4 py-3">Chuyên ngành</th>
                <th scope="col" class="px-4 py-3">Phí / phút</th>
                <th scope="col" class="px-4 py-3">Rating</th>
                <th scope="col" class="px-4 py-3">Số lần khám</th>

                <th scope="col" class="px-4 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody v-for="element in data.doctors" :key="element.id">
              <tr class="border-b hover:bg-gray-200">
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
                    <NuxtImg
                      v-if="element.avatar"
                      provider="cloudinary"
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

                <td class="px-4 py-3 mr-4">{{ element.email }}</td>
                <td class="px-4 py-3 mr-4">{{ element.specialty }}</td>
                <td class="px-4 py-3 mr-4">{{ element.fee_per_minutes }}</td>
                <td class="px-4 py-3 mr-4">{{ element.ratings }}</td>
                <td class="px-4 py-3 mr-4">
                  {{ element.number_of_consultation }}
                </td>
                <td class="px-4 py-3 flex items-center justify-end">
                  <button
                    :id="'data-' + element.id + '-button'"
                    :data-dropdown-toggle="'data-' + element.id"
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
                    :id="'data-' + element.id"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      :aria-labelledby="'data-' + element.id + '-button'"
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
                          :id="'updateDoctorButton' + element.id"
                          data-modal-target="updateDoctor"
                          data-modal-toggle="updateDoctor"
                          class="py-2 px-4 w-full flex items-start justify-start hover:bg-gray-100"
                          @click="chooseDoctor(element.id)"
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
            >{{ pagePrevious * 10 + 1 }}-{{ pageCurrent * 10 }}</span
          >
          của
          <span class="font-semibold text-gray-900 dark:text-white">{{
            data.doctorQuantity
          }}</span>
        </span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <button
              type="button"
              @click="previousPage"
              class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
              @click="nextPage"
              class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
import { Specialty } from "~/stores/enums/enum";

const mapSpecialty = Object.entries(Specialty).map(([key, value]) => ({
  key: key,
  value: value,
}));
const route = useRoute();

const isLoading = ref(false);
const { data } = defineProps(["data"]);
onMounted(() => {});

function chooseDoctor(value: string) {
  data.chooseId(value);
}

const pagePrevious = ref(0);
const pageCurrent = ref(1);
const pageNext = ref(2);

function getByKey(searchKey: string) {
  for (let { key, value } of mapSpecialty) {
    if (key === searchKey) return value;
  }
  return "Không xác định";
}

async function nextPage() {
  if (pageCurrent.value < Math.ceil(data.quantity / 10)) {
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

const switchPage = async (index: number) => {
  isLoading.value = true;
  await data.getAllDoctorPerPage(index, 10);
  isLoading.value = false;
};
</script>