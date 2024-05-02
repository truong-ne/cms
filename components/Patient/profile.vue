<template>
  <section>
    <div class="grid grid-cols-3 gap-4 mt-8">
      <div class="col-span-2 rounded-2xl bg-white p-12">
        <div class="flex items-center justify-start gap-4" v-if="mainAccount">
          <div
            class="md:w-40 md:h-40 w-40 h-40 mb-2 rounded-full overflow-hidden"
            v-if="mainAccount"
          >
            <NuxtImg
              v-if="mainAccount.avatar != 'default'"
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
          <div class="grid gap-4">
            <span class="text-4xl font-extrabold">{{
              mainAccount.full_name
            }}</span>
            <div class="grid">
              <span class="text-sm font-thin">ID: {{ mainAccount.id }}</span>
              <span class="text-sm font-normal">Đau khớp</span>
            </div>
          </div>
        </div>

        <div class="mb-4 border-b border-gray-200">
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
                id="profile-styled-tab"
                data-tabs-target="#styled-profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Thông tin bệnh nhân
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                id="file-styled-tab"
                data-tabs-target="#styled-file"
                type="button"
                role="tab"
                aria-controls="file"
                aria-selected="false"
              >
                Hồ sơ bệnh án
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                id="vaccination-his-styled-tab"
                data-tabs-target="#styled-vaccination-his"
                type="button"
                role="tab"
                aria-controls="vaccination-his"
                aria-selected="false"
              >
                Lịch sử tiêm chủng
              </button>
            </li>
            <li role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                id="prescriptions-styled-tab"
                data-tabs-target="#styled-prescriptions"
                type="button"
                role="tab"
                aria-controls="prescriptions"
                aria-selected="false"
              >
                Đơn thuốc
              </button>
            </li>
          </ul>
        </div>
        <div id="default-styled-tab-content">
          <div
            class="hidden p-4 text-md font-normal text-gray-500"
            id="styled-profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="flex flex-col gap-2">
              <div class="grid grid-cols-2 gap-2">
                <span>Ngày sinh</span>
                <span class="text-gray-900">8/5/2002</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Tuổi</span>
                <span class="text-gray-900">18</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Giới tính</span>
                <span class="text-gray-900">Nam</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Địa chỉ</span>
                <span class="text-gray-900"
                  >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Alias quibusdam autem magni! Voluptatem autem perspiciatis
                  quidem cum iure reprehenderit tempora debitis nam rem
                  quisquam? Optio dignissimos recusandae ex consequuntur
                  illo.</span
                >
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Nghề nghiệp</span>
                <span class="text-gray-900">Sinh viên</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Tình trạng hôn nhân</span>
                <span class="text-gray-900">Chưa kết hôn</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Số điện thoại</span>
                <span class="text-gray-900">0389052819</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Người giám hộ</span>
                <span class="text-gray-900">Huỳnh Thị Kim Yến</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Mối quan hệ</span>
                <span class="text-gray-900">Mẹ con</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <span>Số điện thoại người giám hộ</span>
                <span class="text-gray-900">0389052819</span>
              </div>
            </div>
          </div>

          <div
            class="hidden p-4"
            id="styled-file"
            role="tabpanel"
            aria-labelledby="file-tab"
          >
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
            class="hidden p-4"
            id="styled-vaccination-his"
            role="tabpanel"
            aria-labelledby="vaccination-his-tab"
          >
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
            class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
            id="styled-prescriptions"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the
              <strong class="font-medium text-gray-800 dark:text-white"
                >Contacts tab's associated content</strong
              >. Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4">
        <div class="rounded-2xl bg-white p-12">
          <div class="text-lg text-black font-extrabold py-5">Trạng thái</div>
          <div class="flex flex-col gap-2 text-gray-500">
            <div class="grid grid-cols-2 gap-2">
              <span>Nhịp tim</span>
              <span class="text-gray-900">110 bpm</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <span>Nhóm máu</span>
              <span class="text-gray-900">A+</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <span>Chiều cao</span>
              <span class="text-gray-900">180 cm</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <span>Cân nặng</span>
              <span class="text-gray-900">70 kg</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <span>BMI</span>
              <span class="text-gray-900">00</span>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <span>Nhiệt độ</span>
              <span class="text-gray-900">37º</span>
            </div>
          </div>
        </div>
        <div
          class="relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full h-full"
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
const barseries = ref();
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
  updateBarChart();
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