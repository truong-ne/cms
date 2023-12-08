<template>
  <section class="grid md:gap-4 gap-2">
    <div
      class="grid md:grid-cols-3 grid-cols-1 gap-4 w-full h-auto items-start justify-start bg-white rounded-xl md:p-8 p-4"
      v-if="mainAccount"
    >
      <a
        href="/users/doctors"
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
        class="flex flex-col items-center justify-start mb-2 md:mb-4 pr-8 md:col-span-1 md:border-r h-full"
      >
        <div
          class="md:w-40 md:h-40 w-40 h-40 mb-2 rounded-full overflow-hidden"
        >
          <NuxtImg
            v-if="mainAccount.avatar !== null"
            provider="cloudinary"
            :src="mainAccount.avatar ?? ''"
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
        <!-- <div class="flex flex-col"> -->
        <span
          class="mb-5 lg:text-2xl md:text-xl text-lg font-extrabold leading-none text-black overflow-hidden truncate ..."
        >
          Hồ sơ bác sĩ
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
            Chuyên ngành:
            <span class="font-thin">{{ mainAccount.specialty }}</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Email:
            <a
              :href="'mailto:' + mainAccount.email"
              class="font-thin hover:underline"
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
            Số dư tài khoản:
            <span class="font-thin">{{ mainAccount.account_balance }}</span>
          </span>

          <span
            class="mb-1 lg:text-md md:text-base text-sm font-thin leading-none text-black overflow-hidden truncate ..."
          >
            <span
              class="mb-1 lg:text-md md:text-base text-sm font-thin leading-none text-black overflow-hidden truncate ..."
            >
              Cập nhật {{ getDateTime(mainAccount.updated_at) }}
            </span>
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

        <!-- </div> -->
      </div>

      <div
        class="relative md:col-span-2 flex flex-col items-start justify-start md:pl-4 h-auto"
      >
        <span
          class="mb-1 lg:text-md md:text-base text-sm font-bold leading-none text-black"
        >
          Tiểu sử:
          <p class="font-thin text-justify">
            {{ mainAccount.biography ?? "Trống" }}
          </p>
        </span>
      </div>
    </div>
    <div
      class="grid gap-4 w-full items-start justify-start bg-white rounded-xl md:p-4 p-2 relative"
    >
      <div class="flex top-4 left-4 items-center w-full">
        <span
          class="text-md items font-bold leading-none text-black md:text-lg lg:text-xl"
        >
          Danh sách bệnh nhân ({{
            doctorStore.patientConsultation?.quantity
          }})</span
        >
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 w-full">
            <tr>
              <th scope="col" class="px-4 py-3">Họ tên</th>
              <th scope="col" class="px-4 py-3">Email</th>
              <th scope="col" class="px-4 py-3">Số diện thoại</th>
            </tr>
          </thead>
          <tbody v-if="doctorStore.patientConsultation">
            <tr
              class="border-b"
              v-for="patient in doctorStore.patientConsultation.consultation"
              :key="patient.medical_id"
            >
              <th
                scope="row"
                class="flex items-center px-4 py-3 mr-4 font-normal text-gray-900 whitespace-nowrap"
              >
                {{ patient.medical_id }}
              </th>
              <td class="px-4 py-3 mr-4">
                {{ patient.email }}
              </td>

              <td class="px-4 py-3 mr-4">{{ patient.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { array, mask, number } from "superstruct";

const { search, result } = useMeiliSearch("doctors");
const route = useRoute();
const mainAccount = ref();
const param = ref();
const loading = ref();

const doctorStore = useDataDoctor();

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}
async function resetPassword() {
  try {
    loading.value = true;
    await doctorStore
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
  mainAccount.value = mask(
    (await search(param.value, { hitsPerPage: 1 })).hits,
    array(DoctorSchema)
  )[0];

  await doctorStore
    .getPatientConsultation(mainAccount.value.id)
    .then(() => {})
    .catch((e: string) => {
      toastStatus.value = "error";
      message.value = e;
      addToast();
    });
});
</script>