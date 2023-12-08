<template>
  <section class="flex flex-col items-center justify-start md:gap-4 gap-2">
    <div
      class="md:grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 w-full items-start justify-start bg-white rounded-xl md:p-8 p-4"
    >
      <a
        href="/users/patients"
        class="hover:bg-gray-200 p-3 absolute rounded-full"
        rel="noopener noreferrer"
        ><div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            class="h-5 w-5 text-gray-900"
            fill="currentColor"
            viewBox="0 0 448 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg></div
      ></a>
      <div
        class="flex flex-col items-center justify-start mb-2 md:mb-4 pr-8 md:col-span-1 border-r h-full"
        v-if="mainAccount"
      >
        <div
          class="md:w-40 md:h-40 w-40 h-40 mb-2 rounded-full overflow-hidden"
        >
          <NuxtImg
            v-if="mainAccount.avatar != 'default'"
            provider="cloudinary"
            :src="mainAccount.avatar"
            width="700"
            height="700"
            class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
            :alt="mainAccount.full_name"
          />
          <NuxtImg
            v-else
            provider="cloudinary"
            src="healthline/avatar/doctors/default"
            width="700"
            height="700"
            class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
            :alt="mainAccount.full_name"
          />
        </div>
        <span
          class="mb-5 lg:text-2xl md:text-xl text-lg font-extrabold leading-none text-black overflow-hidden truncate ..."
        >
          Tài khoản chính
        </span>
        <div class="flex flex-col items-start justify-start w-full">
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Họ tên:
            <span class="font-thin">{{ mainAccount.full_name }}</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Số dư tài khoản:
            <span class="font-thin">5000</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Ngày sinh:
            <span class="font-thin">{{
              getDate(mainAccount.date_of_birth)
            }}</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Email:
            <a
              class="font-thin hover:underline"
              :href="'mailto:' + mainAccount.email"
              >{{ mainAccount.email }}</a
            >
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Số điện thoại:
            <a
              :href="'tel:' + mainAccount.phone"
              class="font-thin hover:underline"
              >{{ mainAccount.phone }}</a
            >
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Địa chỉ:
            <span class="font-thin">{{ mainAccount.address }}</span>
          </span>

          <span
            class="mb-1 lg:text-md md:text-base text-sm font-thin leading-none text-black overflow-hidden truncate ..."
          >
            Cập nhật {{ getDateTime(mainAccount.update_at) }}
          </span>
          <div class="flex items-center justify-center w-full mt-8">
            <button
              type="button"
              @click="resetPassword"
              :disabled="loading"
              class="flex items-center justify-center w-full md:w-auto text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              <div role="status" v-if="loading">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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

              <span v-else class="flex items-center"> Đặt lại mật khẩu </span>
            </button>
          </div>
        </div>
      </div>

      <div
        class="col-span-2 flex flex-col items-center justify-start md:pl-4 overflow-x-auto"
        v-if="medicalStore.medicals"
      >
        <span
          class="mb-5 w-full lg:text-xl md:text-lg text-md font-bold leading-none text-black overflow-hidden truncate ..."
        >
          Hồ sơ bệnh nhân
        </span>
        <div class="overflow-x-auto w-full">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3">Họ tên</th>
                <th scope="col" class="px-4 py-3">Ngày sinh</th>
                <th scope="col" class="px-4 py-3">Giới tính</th>
                <th scope="col" class="px-4 py-3">Quan hệ</th>
                <th scope="col" class="px-4 py-3">Địa chỉ</th>
              </tr>
            </thead>
            <tbody v-for="medical in medicalStore.medicals" :key="medical.id">
              <tr class="border-b">
                <th
                  scope="row"
                  class="flex items-center px-4 py-3 mr-4 font-normal text-gray-900 whitespace-nowrap"
                >
                  {{ medical.full_name }}
                </th>
                <td class="px-4 py-3 mr-4">
                  {{ getDate(medical.date_of_birth) }}
                </td>

                <td class="px-4 py-3 mr-4">
                  {{ getByKey(medical.gender) }}
                </td>
                <td class="px-4 py-3 mr-4">{{ medical.relative }}</td>
                <td class="px-4 py-3 mr-4">{{ medical.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div
      class="md:grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 w-full items-start justify-start"
    >
      <div
        class="col-span-1 md:gap-4 gap-2 w-full items-start justify-start bg-white rounded-xl md:p-8 p-4 mb-2"
      >
        <span
          class="mb-5 w-full lg:text-xl md:text-lg text-md font-bold leading-none text-black overflow-hidden truncate ..."
        >
          Hồ sơ
        </span>
        <ul class="mt-4">
          <li class="my-2">
            <div class="flex items-center md:gap-2 gap-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-7 w-7 text-orange-400"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zM64 256a32 32 0 1 1 64 0a32 32 0 1 1-64 0zm152 32c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5S310 448 304 448H80c-5.8 0-11.1-3.1-13.9-8.1s-2.8-11.2.2-16.1l48-80c2.9-4.8 8.1-7.8 13.7-7.8s10.8 2.9 13.7 7.8l12.8 21.4l48.3-70.2c3-4.3 7.9-6.9 13.2-6.9z"
                />
              </svg>
              <span class="group-hover:underline cursor-pointer">Ảnh</span>
            </div>
          </li>
          <li class="my-2">
            <div class="flex items-center md:gap-2 gap-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-7 w-7 text-blue-400"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zM111 257.1l26.8 89.2l31.6-90.3c3.4-9.6 12.5-16.1 22.7-16.1s19.3 6.4 22.7 16.1l31.6 90.3l26.6-89.2c3.8-12.7 17.2-19.9 29.9-16.1s19.9 17.2 16.1 29.9l-48 160c-3 10-12 16.9-22.4 17.1s-19.8-6.2-23.2-16.1L192 336.6l-33.3 95.3c-3.4 9.8-12.8 16.3-23.2 16.1s-19.5-7.1-22.4-17.1l-48-160c-3.8-12.7 3.4-26.1 16.1-29.9s26.1 3.4 29.9 16.1z"
                />
              </svg>

              <span class="group-hover:underline cursor-pointer">Word</span>
            </div>
          </li>
          <li class="my-2">
            <div class="flex items-center md:gap-2 gap-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-7 w-7 text-green-400"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path
                  d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zM155.7 250.2l36.3 51.9l36.3-51.9c7.6-10.9 22.6-13.5 33.4-5.9s13.5 22.6 5.9 33.4L221.3 344l46.4 66.2c7.6 10.9 5 25.8-5.9 33.4s-25.8 5-33.4-5.9L192 385.8l-36.3 51.9c-7.6 10.9-22.6 13.5-33.4 5.9s-13.5-22.6-5.9-33.4l46.3-66.2l-46.4-66.2c-7.6-10.9-5-25.8 5.9-33.4s25.8-5 33.4 5.9z"
                />
              </svg>

              <span class="group-hover:underline cursor-pointer">Excel</span>
            </div>
          </li>
          <li class="my-2">
            <div class="flex items-center md:gap-2 gap-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-7 w-7 text-red-400"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v144H176c-35.3 0-64 28.7-64 64v144H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0l128 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56h-16v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-16v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-32c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-16v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V368z"
                />
              </svg>

              <span class="group-hover:underline cursor-pointer">Pdf</span>
            </div>
          </li>
        </ul>
      </div>
      <div
        class="col-span-2 md:gap-4 gap-2 w-full items-start justify-start bg-white rounded-xl md:p-8 p-4"
      >
        <span
          class="mb-5 w-full lg:text-xl md:text-lg text-md font-bold leading-none text-black overflow-hidden truncate ..."
        >
          Lịch sử tiêm chủng
        </span>

        <ul class="mt-4 mx-4">
          <li
            class="list-disc mb-8"
            v-for="vaccine in medicalStore.vaccinationRecord"
            :key="vaccine.id"
          >
            <span class="text-sm md:text-md font-medium">{{
              vaccine.vaccine.disease
            }}</span>
            <ol class="flex items-center w-full my-2">
              <li
                class="flex w-full items-center text-blue-600 after:inline-block"
                :class="{
                  'after:content-[\'\'] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4':
                    dose !== vaccine.vaccine.max_dose,
                }"
                v-for="dose in vaccine.vaccine.max_dose"
                :key="dose"
              >
                <span
                  v-if="dose <= vaccine.dose_number"
                  class="flex items-center justify-center w-7 h-7 bg-primary-700 rounded-full lg:h-9 lg:w-9 shrink-0"
                >
                  <svg
                    class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
                <span
                  v-else
                  class="flex items-center justify-center w-7 h-7 bg-primary-400 rounded-full lg:h-9 lg:w-9 shrink-0"
                >
                </span>
              </li>
            </ol>
            <span class="text-xs md:text-sm text-gray-500 font-thin">
              Thời gian tiêm mũi cuối {{ getDateTime(vaccine.updated_at) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { search, result } = useMeiliSearch("user");
const route = useRoute();
const mainAccount = ref();
const param = ref("");
const { medicalStore } = defineProps(["medicalStore"]);
const loading = ref(false);
const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

const mapGender = Object.entries(Gender).map(([key, value]) => ({
  key: key,
  value: value,
}));
function getByKey(searchKey: string) {
  for (let { key, value } of mapGender) {
    if (key === searchKey.toLowerCase()) return value;
  }
  return "Không xác định";
}
async function resetPassword() {
  try {
    loading.value = true;
    await medicalStore
      .resetPassword(param.value)
      .then(() => {
        toastStatus.value = "success";
        message.value = "Reset mật khẩu thành công";
        addToast();
      })
      .catch((error: string) => {
        toastStatus.value = "error";
        message.value = error;
        addToast();
      });
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
}
onMounted(async () => {
  param.value = route.params["slug"].toString();

  try {
    await Promise.all([
      search(param.value, { hitsPerPage: 1 }),
      medicalStore.getProfileById(param.value),
    ]);
    mainAccount.value = result.value.hits[0];
    await medicalStore.getVaccinationRecord(medicalStore.medicals[0].id);
  } catch (error) {
    console.log(error);
  }
});
</script>