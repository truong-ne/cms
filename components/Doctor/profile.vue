<template>
  <section class="gap-4 flex flex-col">
    <div class="grid grid-cols-3 gap-4 mt-8">
      <div class="relative col-span-2 flex flex-col p-12 rounded-2xl bg-white">
        <div
          class="bg-gradient-to-tr from-primary to-secondary via-color9D4B6C w-full rounded-2xl absolute top-0 left-0 right-0 h-52"
          v-if="mainAccount"
        ></div>
        <div
          class="flex items-end justify-start gap-4 mt-16 mx-4"
          v-if="mainAccount"
        >
          <div
            class="w-52 h-52 rounded-full z-10 outline outline-8 outline-white overflow-hidden"
          >
            <NuxtImg
              v-if="
                mainAccount.avatar != 'default' &&
                mainAccount.avatar != null &&
                mainAccount.avatar != '' &&
                mainAccount
              "
              provider="cloudinary"
              :src="mainAccount.avatar"
              width="500"
              height="500"
              class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear bg-primary/20"
              :alt="mainAccount.full_name"
            />
            <NuxtImg
              v-else
              provider="cloudinary"
              src="healthline/avatar/doctors/default"
              width="500"
              height="500"
              class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
              :alt="mainAccount.full_name"
            />
          </div>
          <div class="flex justify-end items-end">
            <div class="flex flex-col mt-8" v-if="mainAccount">
              <span class="text-4xl font-extrabold">{{
                mainAccount.full_name
              }}</span>
              <span class="text-sm font-thin mt-2"
                >ID: {{ mainAccount.id }}</span
              >
              <span class="text-sm font-thin"
                >Số dư: {{ converCurrency(mainAccount.account_balance ?? 0) }}
              </span>
              <span class="text-sm font-thin flex">
                <div class="flex items-center mr-2">
                  <svg
                    class="w-4 h-4 me-1"
                    :class="{
                      'text-gray-300': i > mainAccount.ratings,
                      ' text-yellow-300': i <= mainAccount.ratings,
                    }"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                    v-for="i in 5"
                    :key="i"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                </div>
                {{ mainAccount.ratings ?? 0 }}</span
              >

              <!-- <span class="text-sm font-normal">{{
              // mainAccount.specialty.toUpperCase()
              mainAccount
            }}</span> -->
            </div>
            <div class="mt-16">
              <button
                :disabled="loading"
                class="bg-primary px-1 py-2 rounded-xl w-44 text-white font-medium"
                v-on:click="resetPassword"
              >
                Đặt lại mật khẩu
              </button>
            </div>
          </div>
        </div>

        <div class="my-8 border-b border-gray-200">
          <ul
            class="flex flex-unwrap justify-start -mb-px text-sm font-medium text-center"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-purple-600 hover:text-purple-600  border-purple-600 "
            data-tabs-inactive-classes=" text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300 "
            role="tablist"
          >
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg"
                id="biography-styled-tab"
                data-tabs-target="#styled-biography"
                type="button"
                role="tab"
                aria-controls="biography"
                aria-selected="false"
              >
                Thông tin bác sĩ
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                id="education-qualifications-styled-tab"
                data-tabs-target="#styled-education-qualifications"
                type="button"
                role="tab"
                aria-controls="education-qualifications"
                aria-selected="false"
              >
                Giáo dục và trình độ
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                id="career-specialty-styled-tab"
                data-tabs-target="#styled-career-specialty"
                type="button"
                role="tab"
                aria-controls="career-specialty"
                aria-selected="false"
              >
                Nghề nghiệp và chuyên môn
              </button>
            </li>
            <li role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                id="contact-styled-tab"
                data-tabs-target="#styled-contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Thông tin liên hệ
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content">
          <div
            class="hidden p-4 text-md font-normal bg-gray-50 rounded-lg text-gray-500"
            id="styled-biography"
            role="tabpanel"
            aria-labelledby="biography-tab"
          >
            <div class="flex flex-col gap-2" v-if="mainAccount">
              <div class="grid grid-cols-2 gap-2">
                <span>Ngày sinh</span>
                <span class="text-gray-900">{{
                  mainAccount.dayOfBirth ?? "Chưa xác định"
                }}</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Tuổi</span>
                <span class="text-gray-900">18</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Giới tính</span>
                <span class="text-gray-900">{{
                  mainAccount.gender == true ? "Name" : "Nữ"
                }}</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Địa chỉ</span>
                <span class="text-gray-900">{{
                  mainAccount.address ?? "Chưa xác định"
                }}</span>
              </div>
              <div v-if="mainAccount">
                <div class="text-xl font-bold text-black">Tiểu sử</div>
                {{ mainAccount.biography }}
                <div></div>
              </div>
            </div>
          </div>

          <div
            class="hidden p-4 text-md bg-gray-50 rounded-lg text-gray-500"
            id="styled-education-qualifications"
            role="tabpanel"
            aria-labelledby="education-qualifications-tab"
          >
            <div class="flex flex-col gap-4" v-if="mainAccount">
              <div
                class="flex flex-col gap-2"
                v-for="(x, index) in mainAccount.educationAndCertification"
                :key="index"
              >
                <div class="font-medium text-sm text-black">
                  Hồ sơ {{ index + 1 }}
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Loại hình giáo dục</span>
                  <span class="text-gray-900">{{
                    x.typeOfEducationAndExperience
                  }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Trình độ học vấn</span>
                  <span class="text-gray-900">{{ x.degreeOfEducation }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Tổ chức</span>
                  <span class="text-gray-900">{{ x.institution }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Chuyên ngành theo văn bằng</span>
                  <span class="text-gray-900">{{ x.specialtyByDiploma }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Số sê-ri</span>
                  <span class="text-gray-900">{{
                    x.diplomaNumberAndSeries
                  }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Địa chỉ</span>
                  <span class="text-gray-900">{{ x.address }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Ngày cấp</span>
                  <span class="text-gray-900">{{
                    x.dateOfReceiptOfDiploma
                  }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Ảnh</span>
                  <div class="w-24 h-24">
                    <NuxtImg
                      provider="cloudinary"
                      :src="x.image"
                      width="500"
                      height="500"
                      class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 bg-gray-50 text-md rounded-lg text-gray-500"
            id="styled-career-specialty"
            role="tabpanel"
            aria-labelledby="career-speicalty-tab"
          >
            <div class="flex flex-col gap-4" v-if="mainAccount">
              <div
                class="flex flex-col gap-2"
                v-for="(x, index) in mainAccount.specialty"
                :key="index"
              >
                <div class="font-medium text-sm text-black">
                  Hồ sơ {{ index + 1 }}
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Chuyên ngành</span>
                  <span class="text-gray-900">{{ x.specialty }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Trình độ</span>
                  <span class="text-gray-900">{{ x.levelOfSpecialty }}</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <span>Ảnh</span>
                  <div class="w-24 h-24">
                    <NuxtImg
                      provider="cloudinary"
                      :src="x.image"
                      width="500"
                      height="500"
                      class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="hidden p-4 rounded-lg bg-gray-50 text-md"
            id="styled-contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div class="flex flex-col gap-2" v-if="mainAccount">
              <div class="grid grid-cols-2 gap-2">
                <span>Số điện thoại</span>
                <span class="text-gray-900">{{ mainAccount.phone }}</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Email</span>
                <span class="text-gray-900">{{ mainAccount.email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-1 grid grid-cols-1 justify-items-center p-12 items-start content-start rounded-2xl bg-white gap-4"
      >
        <div
          class="grid grid-cols-1 justify-items-center place-self-center py-2 px-2 bg-secondary w-24 text-white rounded-xl text-sm font-medium"
        >
          Lịch khám
        </div>
        <div id="calendar" inline-datepicker data-date="{{ new Date() }}"></div>

        <div
          class="grid grid-cols-1 gap-1 w-full"
          v-if="allConsultation.coming.length > 0"
        >
          <div
            class="grid grid-cols-1 justify-items-start rounded-xl border-2 bg-white py-2 px-4 w-full"
            v-for="(consultation, index) in allConsultation.coming"
            :key="index"
          >
            <span class="font-medium test-sm"
              >Bệnh nhân:
              {{ consultation.medical?.full_name ?? "Chưa xác định" }}</span
            >
            <span class="font-normal text-xs">{{
              getDate(consultation.date)
            }}</span>
            <span class="font-normal text-xs">{{
              convertExpectedTime(consultation.expected_time)
            }}</span>
            <span class="font-normal text-xs">{{ consultation.status }}</span>
          </div>

          <button
            class="grid grid-cols-1 justify-items-center rounded-xl bg-primary text-white py-2 px-4 w-full mt-4"
          >
            Xem thêm
          </button>
        </div>
        <div v-else>Không có lịch hẹn</div>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div
        class="col-span-1 flex flex-col gap-4 justify-start w-full bg-white rounded-2xl p-12"
      >
        <div class="font-bold text-2xl flex items-center">
          <span>Nhận xét</span>
          <span class="text-sm font-thin flex mx-2">
            <div class="flex items-center mr-1">
              <svg
                class="w-5 h-5 me-0 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>
            </div>
            (4)</span
          >
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-start gap-2.5">
            <div class="w-12 h-12 rounded-full z-10 overflow-hidden">
              <NuxtImg
                provider="cloudinary"
                src="healthline/avatar/doctors/default"
                width="500"
                height="500"
                class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
                alt=""
              />
            </div>

            <div class="flex flex-col gap-1 w-full max-w-[320px]">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900"
                  >Bonnie Green</span
                >
                <span class="text-sm font-normal text-gray-500">11:46</span>
              </div>
              <div class="flex items-center mr-1 -mt-1 mb-2">
                <svg
                  class="w-3 h-3 me-1"
                  :class="{
                    'text-gray-300': i > 4,
                    ' text-yellow-300': i <= 4,
                  }"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                  v-for="i in 5"
                  :key="i"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
              <div
                class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700"
              >
                <p class="text-sm font-normal text-gray-900 dark:text-white">
                  That's awesome. I think our users will really appreciate the
                  improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-span-2 relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full h-full"
      >
        <div class="flex absolute top-4 left-4 items-center">
          <span
            class="text-md items font-bold leading-none text-black md:text-lg lg:text-xl"
          >
            Khám bệnh</span
          >
        </div>
        <div class="md:h-72 h-56 w-full mt-12 border-t">
          <ClientOnly>
            <apexchart
              :key="barseries"
              height="100%"
              width="100%"
              :options="baroptions"
              :series="barseries"
            >
            </apexchart>
          </ClientOnly>
        </div>
      </div>
    </div>
    <div
      class="col-span-3 relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full h-full"
    >
      <div class="flex absolute top-4 left-4 items-center">
        <span class="text-md items font-extrabold leading-none text-black">
          Thu nhập</span
        >
      </div>

      <div class="md:h-96 h-56 w-full mt-6 border-t">
        <ClientOnly>
          <apexchart
            :key="moneyChartByMonthSeries"
            height="100%"
            width="100%"
            :options="moneyChartByMonthOptions"
            :series="moneyChartByMonthSeries"
          >
          </apexchart>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { array, mask } from "superstruct";
import Datepicker from "flowbite-datepicker/Datepicker";
import type {
  AllConsultation,
  Consultation,
} from "~/stores/structs/consultation_struct";

const { search, result } = useMeiliSearch("doctors");
const route = useRoute();
const mainAccount = ref();
const param = ref();
const allConsultation = ref<AllConsultation>({ coming: [], finish: [] });
const moneyChartByMonth = ref<object[]>([]);

const loading = ref(false);

const { doctorStore, consultationStore } = defineProps([
  "doctorStore",
  "consultationStore",
]);
const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");
const moneyChartByMonthOptions = ref({
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "line",
    fontFamily: "Helvetica, Arial, sans-serif",
    dropShadow: {
      enabled: false,
    },
    zoom: { enabled: false },
  },
  markers: {
    size: 5,
    strokeWidth: 4,
    strokeOpacity: 1,
    strokeColors: ["#DF9F1E", "#009DC7"],
    colors: ["#fff"],
    hover: {
      size: 8,
      sizeOffset: 3,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 3,
  },
  grid: {
    show: true,
    padding: {
      left: 20,
      right: 20,
      top: 10,
      bottom: 10,
    },
  },
  legend: {
    position: "top",
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    // categories: [
    //   "Tháng 1",
    //   "Tháng 2",
    //   "Tháng 3",
    //   "Tháng 4",
    //   "Tháng 5",
    //   "Tháng 6",
    //   "Tháng 7",
    //   "Tháng 8",
    //   "Tháng 9",
    //   "Tháng 10",
    //   "Tháng 11",
    //   "Tháng 12",
    // ],
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    show: true,
    title: {
      text: "Người",
      rotate: -90,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 600,
      },
    },
    labels: {
      show: true,
      align: "right",
      minWidth: 0,
      maxWidth: 160,
      style: {
        colors: [],
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-yaxis-label",
      },
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
      formatter: (val: number) => {
        return val;
      },
    },
  },
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + " người";
      },
    },
  },
  colors: ["#DF9F1E", "#009DC7"],
});
const moneyChartByMonthSeries = ref([
  {
    name: "Thu nhập",
    data: moneyChartByMonth.value,
  },
]);
const updatemoneyChartByMonthOptions = () => {
  moneyChartByMonthOptions.value = {
    ...moneyChartByMonthOptions.value,
  };
  moneyChartByMonthSeries.value = [
    // {
    //   name: "Bệnh nhân cũ",
    //   data: moneyMonth.value,
    // },
    {
      name: "Thu nhập",
      data: moneyChartByMonth.value,
    },
  ];
};

const baroptions = ref({
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "bar",
    fontFamily: "Helvetica, Arial, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },

  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 20,
      right: 10,
      top: 0,
      bottom: 0,
    },
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "80%",
      borderRadiusApplication: "start",
      borderRadius: 10,
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
  },
  stroke: {
    show: false,
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    categories: [
      "Tháng 1",
      "Tháng 2",
      "Tháng 3",
      "Tháng 4",
      "Tháng 5",
      "Tháng 6",
      "Tháng 7",
      "Tháng 8",
      "Tháng 9",
      "Tháng 10",
      "Tháng 11",
      "Tháng 12",
    ],
  },
  yaxis: {
    title: {
      text: "Số lần",
      rotate: -90,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
      },
    },
    labels: {
      show: true,
      align: "right",
      minWidth: 0,
      maxWidth: 160,
      style: {
        colors: [],
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "normal",
        cssClass: "apexcharts-yaxis-label",
      },
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
      formatter: (val: number) => {
        return val;
      },
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#009dc7"],

  tooltip: {
    y: {
      formatter: function (val: number) {
        return Math.abs(val) + " lần";
      },
    },
  },
});
const barseries = ref([
  {
    name: "Số lần khám",
    data: [1, 3, 2, 1, 0, 0, 1, 1, 4, 1, 0, 0],
  },
]);
const updateBarChart = () => {
  baroptions.value = {
    ...baroptions.value,
  };
  barseries.value = [
    {
      name: "Số lần khám",
      data: [1, 3, 2, 1, 0, 0, 1, 1, 4, 1, 0, 0],
    },
  ];
};

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

async function resetPassword() {
  try {
    loading.value = true;
    await doctorStore.resetPassword(param.value);
    toastStatus.value = "success";
    message.value = "Đặt lại mật khẩu thành công";
  } catch (e: any) {
    toastStatus.value = "error";
    message.value = e;
  }
  addToast();
  loading.value = false;
}

function convertExpectedTime(expTime: string) {
  let times = expTime.split("-");
  if (times.length >= 2) {
    let hS = `${Math.floor(Number(times[0]) / 2)}`;
    let mS = "00";
    if (Number(times[0]) / 2 == 1) {
      mS = "30";
    }
    let hE = `${Math.floor((Number(times[times.length - 1]) + 1) / 2)}`;
    let mE = "00";
    if ((Number(times[times.length - 1]) + 1) / 2 == 1) {
      mE = "30";
    }

    return `${hS}:${mS} - ${hE}:${mE}`;
  } else {
    let hS = `${Math.floor(Number(times[0]) / 2)}`;
    let mS = "00";
    if (Number(times[0]) % 2 == 1) {
      mS = "30";
    }
    let hE = `${Math.floor(Number(times[0]) / 2)}`;
    let mE = "00";
    if ((Number(times[0]) + 1) % 2 == 1) {
      mE = "30";
    } else {
      hE = `${Math.floor((Number(times[0]) + 1) / 2)}`;
    }

    return `${hS}:${mS} - ${hE}:${mE}`;
  }
}
// async function resetPassword() {
//   try {
//     loading.value = true;
//     await doctorStore
//       .resetPassword(param.value)
//       .then(() => {
//         toastStatus.value = "success";
//         message.value = "Reset mật khẩu thành công";
//         addToast();
//       })
//       .catch((error: string) => {
//         toastStatus.value = "error";
//         message.value = error;
//         addToast();
//       });
//     loading.value = false;
//   } catch (error) {
//     console.log(error);
//   }
// }

onBeforeMount(async () => {
  let date = new Date();

  param.value = route.params["slug"].toString();
  mainAccount.value = mask(
    (await search(param.value, { hitsPerPage: 1 })).hits,
    array(DoctorSchema)
  )[0];
  try {
    await doctorStore
      .getPatientConsultation(mainAccount.value.id)
      .then(() => {})
      .catch((e: string) => {
        toastStatus.value = "error";
        message.value = e;
        addToast();
      });
  } catch (e) {
    console.log(e);
  }
  try {
    await consultationStore.getAllConsultationOfDoctor(mainAccount.value.id);
    allConsultation.value!.coming =
      consultationStore.allConsultation.coming.filter(
        (element: Consultation) => {
          let dateConsultation = new Date(element.date);
          if (
            date.getDay() == dateConsultation.getDay() &&
            date.getMonth() == dateConsultation.getMonth() &&
            date.getFullYear() == dateConsultation.getFullYear()
          ) {
            return true;
          } else return false;
        }
      );
    allConsultation.value!.finish =
      consultationStore.allConsultation.finish.filter(
        (element: Consultation) => {
          let dateConsultation = new Date(element.date);
          if (
            date.getDay() == dateConsultation.getDay() &&
            date.getMonth() == dateConsultation.getMonth() &&
            date.getFullYear() == dateConsultation.getFullYear()
          ) {
            return true;
          } else return false;
        }
      );
  } catch (e) {
    console.log(e);
  }
  try {
    await consultationStore.getMoneyChartOfMonth(
      mainAccount.value.id,
      date.getMonth() + 1,
      date.getFullYear()
    );

    moneyChartByMonth.value = Object.entries(
      consultationStore.moneyChartByMonth.moneyChartOfMonth
    ).map(([key, value]) => {
      return { x: key, y: value };
    });
    updatemoneyChartByMonthOptions();
  } catch (e) {
    console.log(e);
  }
  updateBarChart();
});
onMounted(async () => {
  const dayConsultation = document.getElementById("calendar");
  new Datepicker(dayConsultation, {
    todayHighlight: true,
    autohide: true,
    format: "dd/mm/yyyy",
    language: "vi",
    defaultDate: false,
    maxDate: new Date(),
    minDate: new Date(1900),
  });
  dayConsultation?.addEventListener("changeDate", (e) => {
    let date = new Date(e.detail.date);
    allConsultation.value!.coming =
      consultationStore.allConsultation.coming.filter(
        (element: Consultation) => {
          let dateConsultation = new Date(element.date);
          if (
            date.getDay() == dateConsultation.getDay() &&
            date.getMonth() == dateConsultation.getMonth() &&
            date.getFullYear() == dateConsultation.getFullYear()
          ) {
            return true;
          } else return false;
        }
      );
    allConsultation.value!.finish =
      consultationStore.allConsultation.finish.filter(
        (element: Consultation) => {
          let dateConsultation = new Date(element.date);

          if (
            date.getDay() == dateConsultation.getDay() &&
            date.getMonth() == dateConsultation.getMonth() &&
            date.getFullYear() == dateConsultation.getFullYear()
          ) {
            return true;
          } else return false;
        }
      );
    console.log(allConsultation.value);
  });
});
</script>