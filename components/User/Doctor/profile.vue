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
              class="flex items-center justify-center w-full md:w-auto text-black bg-yellow-300 hover:bg-yellow-400 hover:text-black focus:ring-4 focus:ring-yellow-200 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
            >
              Đặt lại mật khẩu
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
function resetPassword() {
  doctorStore
    .resetPassword(param.value)
    .then(() => {
      toastStatus.value = "error";
      message.value = "Reset mật khẩu thành công";
    })
    .catch((error: string) => {
      toastStatus.value = "error";
      message.value = error;
    });
  addToast();
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