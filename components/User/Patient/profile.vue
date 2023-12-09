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
          <li
            class="my-2"
            v-for="record in medicalStore.records"
            :key="record.id"
          >
            <div class="flex items-center md:gap-2 gap-1 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-7 w-7 text-orange-400"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path
                  d="M0 64C0 28.7 28.7 0 64 0h160v128c0 17.7 14.3 32 32 32h128v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0l128 128z"
                />
              </svg>
              <span class="group-hover:underline cursor-pointer">
                {{ getNameFile(record.record) }}
              </span>
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

function getNameFile(publicId: string) {
  return publicId.split("/").pop();
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
    await Promise.all([
      medicalStore.getVaccinationRecord(medicalStore.medicals[0].id),
      medicalStore.getListRecordById(medicalStore.medicals[0].id),
    ]);
  } catch (error) {
    console.log(error);
  }
});
</script>