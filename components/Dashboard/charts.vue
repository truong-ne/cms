<template>
  <section>
    <div class="text-lg text-black font-extrabold py-5 px-4">
      Biểu đồ và thống kê
    </div>
    <div class="gap-4">
      <div class="grid grid-cols-10 gap-4 mb-4 z-0 h-auto">
        <div
          class="col-span-7 relative flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div class="flex absolute top-4 left-4 items-center">
            <span class="text-md items font-extrabold leading-none text-black">
              Doanh thu</span
            >
          </div>

          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="moneyMonthSeries"
                height="100%"
                width="100%"
                :options="moneyMonthOptions"
                :series="moneyMonthSeries"
              >
              </apexchart>
            </ClientOnly>
          </div>
        </div>
        <div
          class="col-span-3 relative flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div
            href="https://flowbite.com/"
            class="flex absolute top-4 left-4 items-center"
          >
            <span
              class="text-md items font-extrabold leading-none tracking-tight text-gray-900"
              >Chi phí điều trị trung bình theo nhóm tuổi</span
            >
          </div>
          <!-- <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdownTreatmentCosts"
            class="absolute top-2 right-0 text-black bg-white font-medium text-xs px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Tháng 4
            <svg
              class="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button> -->

          <!-- Dropdown menu -->
          <!-- <div
            id="dropdownTreatmentCosts"
            class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
          >
            <ul
              class="py-2 text-sm text-gray-700"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Dashboard</a
                >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Settings</a
                >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Earnings</a
                >
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                  >Sign out</a
                >
              </li>
            </ul>
          </div> -->
          <div class="h-96 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="treatmentSeries"
                height="100%"
                width="100%"
                :options="treatmentCostsOptions"
                :series="treatmentSeries"
              >
              </apexchart>
            </ClientOnly>
          </div>
        </div>
      </div>
      <div
        class="md:grid md:grid-cols-2 md:gap-4 gap-2 md:mb-4 mb-2 z-0 h-auto"
      >
        <div
          class="relative flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div class="flex absolute top-4 left-4 items-center">
            <span class="text-md items font-extrabold leading-none text-black">
              Số lượng bệnh nhân khám theo tháng</span
            >
          </div>

          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="quantityMedicalOldNewSeries"
                height="100%"
                width="100%"
                :options="quantityMedicalOldNewOptions"
                :series="quantityMedicalOldNewSeries"
              >
              </apexchart>
            </ClientOnly>
          </div>
        </div>
        <div
          class="relative flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div class="flex absolute top-4 left-4 items-center">
            <span class="text-md items font-extrabold leading-none text-black">
              Số lượng bệnh nhân mới theo tháng</span
            >
          </div>

          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="quantityNewPatientSeries"
                height="100%"
                width="100%"
                :options="quantityNewPatientOptions"
                :series="quantityNewPatientSeries"
              >
              </apexchart>
            </ClientOnly>
          </div>
        </div>
        <div
          class="col-span-2 relative flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div class="flex absolute top-4 left-4 items-center">
            <span class="text-md items font-extrabold leading-none text-black">
              Số lượng bác sĩ theo chuyên khoa</span
            >
          </div>
          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="quantityDoctorBySpecialtySeries"
                height="100%"
                width="100%"
                :options="quantityDoctorBySpecialtyOptions"
                :series="quantityDoctorBySpecialtySeries"
              >
              </apexchart>
            </ClientOnly>
          </div>
        </div>
      </div>
      <div
        class="md:grid md:grid-cols-3 md:gap-4 gap-2 md:mb-4 mb-2 z-0 h-auto"
      >
        <div
          class="relative col-span-2 flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div class="flex absolute top-4 left-4 items-center">
            <span class="text-md items font-extrabold leading-none text-black">
              Top 10 bác sĩ</span
            >
          </div>

          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-colorCDDEFF">
                  <tr>
                    <th scope="col" class="px-4 py-3">ID</th>
                    <th scope="col" class="px-4 py-3"></th>
                    <th scope="col" class="px-4 py-3">Tên đầy đủ</th>
                    <th scope="col" class="px-4 py-3">Số cuộc hẹn</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="border-b"
                    v-for="doctor in topDoctors"
                    :key="doctor.id"
                  >
                    <th
                      scope="row"
                      class="flex items-center px-4 py-3 mr-4 font-normal text-gray-900 whitespace-nowrap"
                    >
                      {{ doctor.id }}
                    </th>
                    <td class="px-4 py-3 mr-4">{{ doctor.avatar }}</td>

                    <td class="px-4 py-3 mr-4">{{ doctor.full_name }}</td>
                    <td class="px-4 py-3 mr-4">{{ doctor.consultation }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          class="relative col-span-1 flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div class="flex absolute top-4 left-4 items-center">
            <span class="text-xl items font-extrabold leading-none text-black">
              Biểu đồ cuộc hẹn</span
            >
          </div>
          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="pieseries"
                height="100%"
                width="100%"
                :options="pieoptions"
                :series="pieseries"
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
const { doctorStore, medicalStore, consultationStore, patientStore } =
  defineProps([
    "doctorStore",
    "medicalStore",
    "consultationStore",
    "patientStore",
  ]);

//patients count by Specialties
const quantityNewPatient = ref<object[]>([]);
const quantityNewPatientOptions = ref({
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
    strokeColors: ["#DF9F1E", "#5981FA"],
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
  colors: ["#DF9F1E", "#5981FA"],
});
const quantityNewPatientSeries = ref([
  {
    name: "Bệnh nhân mới",
    data: quantityNewPatient.value,
  },
]);
const updateQuantityNewPatientChart = () => {
  quantityNewPatientOptions.value = {
    ...quantityNewPatientOptions.value,
  };
  quantityNewPatientSeries.value = [
    {
      name: "Bệnh nhân mới",
      data: quantityNewPatient.value,
    },
  ];
};

const quantityMedicalOld = ref<number[]>([0]);
const quantityMedicalNew = ref<number[]>([0]);
const quantityMedicalOldNewOptions = ref({
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
    strokeColors: ["#DF9F1E", "#5981FA"],
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
  colors: ["#DF9F1E", "#5981FA"],
});
const quantityMedicalOldNewSeries = ref([
  {
    name: "Bệnh nhân mới",
    data: quantityMedicalNew.value,
  },
  {
    name: "Bệnh nhân cũ",
    data: quantityMedicalOld.value,
  },
]);
const updateQuantityMedicalOldNewChart = () => {
  quantityMedicalOldNewOptions.value = {
    ...quantityMedicalOldNewOptions.value,
  };
  quantityMedicalOldNewSeries.value = [
    {
      name: "Bệnh nhân mới",
      data: quantityMedicalNew.value,
    },
    {
      name: "Bệnh nhân cũ",
      data: quantityMedicalOld.value,
    },
  ];
};

//piechart
const consultationPie = ref<number[]>([]);
const pieoptions = ref({
  labels: ["Đã huỷ", "Hoàn thành", "Đã xác nhận", "Đang chờ"],

  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "donut",
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      expandOnClick: false,
      offsetX: 0,
      offsetY: 0,
      customScale: 1,
      dataLabels: {
        offset: 0,
        minAngleToShowLabel: 10,
      },
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
            formatter: function (val: String) {
              return val;
            },
          },
          value: {
            show: true,
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            color: undefined,
            offsetY: 16,
            formatter: function (val: number) {
              return val + " cuộc hẹn";
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "22px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            color: "#373d3f",
            formatter: function (w: any) {
              return (
                w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0) + " cuộc hẹn"
              );
            },
          },
        },
      },
    },
  },

  colors: ["#9D4B6C", "#1C6AA3", "#DF9F1E", "#009DC7", "#5981FA"],

  stroke: {
    show: false,
  },

  legend: {
    position: "bottom",
    fontSize: "14px",
    fontFamily: "Helvetica, Arial",
    formatter: function (seriesName: String, opts: any) {
      return (
        [
          seriesName +
            " tuổi" +
            "  -  " +
            opts.w.globals.series[opts.seriesIndex],
        ] + " cuộc hẹn"
      );
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "14px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#ffffff"],
    },
    formatter: function (val: number, opts: any) {
      return [Math.round(val) + "%"];
    },
    dropShadow: {
      enabled: false,
    },
  },
  tooltip: {
    enabled: false,
  },
});
const pieseries = ref(consultationPie.value);
const updatePieChart = () => {
  pieoptions.value = {
    ...pieoptions.value,
  };
  pieseries.value = consultationPie.value;
};

//treatment costs
const treatmentCostsOptions = ref({
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "donut",
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      startAngle: 0,
      endAngle: 360,
      expandOnClick: false,
      offsetX: 0,
      offsetY: 0,
      customScale: 1,
      dataLabels: {
        offset: 0,
        minAngleToShowLabel: 10,
      },
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            color: undefined,
            offsetY: -10,
            formatter: function (val: String) {
              return val;
            },
          },
          value: {
            show: true,
            fontSize: "14px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: "bold",
            color: undefined,
            offsetY: 16,
            formatter: function (val: number) {
              return val + "k VNĐ";
            },
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "22px",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 600,
            color: "#373d3f",
            formatter: function (w: any) {
              return (
                w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0) + "k VNĐ"
              );
            },
          },
        },
      },
    },
  },

  colors: ["#9D4B6C", "#1C6AA3", "#DF9F1E", "#009DC7", "#5981FA"],

  stroke: {
    show: false,
  },
  labels: ["0-10", "10-30", "30-40", "40-50", "Trên 50"],

  legend: {
    position: "bottom",
    fontSize: "12px",
    fontFamily: "Helvetica, Arial",
    formatter: function (seriesName: String, opts: any) {
      return (
        [
          seriesName +
            " tuổi" +
            "  -  " +
            opts.w.globals.series[opts.seriesIndex],
        ] + "k VNĐ"
      );
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      fontSize: "14px",
      fontFamily: "Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      colors: ["#ffffff"],
    },
    formatter: function (val: number, opts: any) {
      return [Math.round(val) + "%"];
    },
    dropShadow: {
      enabled: false,
    },
  },
});
const treatmentSeries = ref([15, 70, 45, 77, 44]);
const updateTreatmentSeries = () => {
  treatmentCostsOptions.value = {
    ...treatmentCostsOptions.value,
  };
  treatmentSeries.value = [15, 70, 45, 77, 44];
};

const moneyMonth = ref<number[]>([]);
const moneyMonthOptions = ref({
  chart: {
    type: "bar",
    height: 350,
    stacked: false,
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      // endingShape: "rounded",
      borderRadiusApplication: "start",
      borderRadius: 5,
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
      text: "VNĐ",
      rotate: -90,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "bold",
      },
    },
    labels: {
      show: true,
      align: "top",
      minWidth: 0,
      maxWidth: 160,
      style: {
        colors: [],
        fontSize: "12px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "normal",
        cssClass: "apexcharts-yaxis-label",
      },
      rotate: 60,
      offsetX: 0,
      offsetY: 0,
      formatter: (val: number) => {
        return converCurrency(val);
      },
    },
  },
  grid: {
    show: true,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#5981FA"],

  tooltip: {
    y: {
      formatter: function (val: number) {
        return converCurrency(Math.abs(val));
      },
    },
  },
});
const moneyMonthSeries = ref([{ name: "Tiền vào", data: moneyMonth.value }]);
const updateColumnChart = () => {
  moneyMonthOptions.value = {
    ...moneyMonthOptions.value,
  };
  moneyMonthSeries.value = [
    {
      name: "Tiền vào",
      data: moneyMonth.value,
    },
  ];
};

const quantityDoctorBySpecialty = ref<object[]>([]);
const quantityDoctorBySpecialtyOptions = ref({
  chart: {
    type: "bar",
    height: "100%",
    maxWidth: "100%",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "35%",
      endingShape: "rounded",
      borderRadiusApplication: "start",
      borderRadius: "5",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
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
  },
  yaxis: {
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
  grid: {
    show: true,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#DF9F1E"],
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + " người";
      },
    },
  },
});
const quantityDoctorBySpecialtySeries = ref([
  { name: "Số lượng bác sĩ", data: quantityDoctorBySpecialty.value },
]);
const updateQuantityDoctorSpecialty = () => {
  quantityDoctorBySpecialtyOptions.value = {
    ...quantityDoctorBySpecialtyOptions.value,
  };
  quantityDoctorBySpecialtySeries.value = [
    {
      name: "Số lượng bác sĩ",
      data: quantityDoctorBySpecialty.value,
    },
  ];
};

const topDoctors = ref<TopDoctor[]>([]);
const mapSpecialty = Object.entries(Specialty).map(([key, value]) => ({
  key: key,
  value: value,
}));
function getByKey(searchKey: string) {
  for (let { key, value } of mapSpecialty) {
    if (key === searchKey) return value;
  }
  return "Không xác định";
}

onMounted(async () => {
  try {
    const date = new Date();
    try {
      await consultationStore.getConsultationChart(
        date.getMonth() + 1,
        date.getFullYear()
      );
      consultationPie.value = [
        consultationStore.consultationChart?.cancel ?? 0,
        consultationStore.consultationChart?.finish ?? 0,
        consultationStore.consultationChart?.confirm ?? 0,
        consultationStore.consultationChart?.pending ?? 0,
      ];
    } catch (e) {
      console.log(e);
    }
    try {
      await consultationStore.getMoneyChart(date.getFullYear());
      moneyMonth.value = consultationStore.moneyMonth?.map(
        (a: MoneyMonth) => a.moneyByMonth
      );
    } catch (e) {
      console.log(e);
    }
    try {
      await consultationStore.getTop10Doctor(
        date.getMonth() + 1,
        date.getFullYear()
      );
      topDoctors.value = consultationStore.topDoctors;
    } catch (e) {
      console.log(e);
    }
    try {
      await doctorStore.getQuantityDoctorBySpecialty();

      quantityDoctorBySpecialty.value = Object.entries(
        doctorStore.quantityDoctorBySpecialty
      ).map(([key, value]) => {
        return { x: getByKey(key), y: value };
      });
    } catch (e) {
      console.log(e);
    }
    try {
      await patientStore.getQuantityNewPatient(date.getFullYear());

      quantityNewPatient.value =
        patientStore.quantityNewPatient.userByMonth.map(
          (ob: QuantityNewPatientMonth) => ({
            x: ob.month,
            y: ob.totalUserThisMonth,
          })
        );
    } catch (e) {
      console.log(e);
    }
    try {
      await consultationStore.getQuantityMedicalOldNew(date.getFullYear());

      quantityMedicalNew.value =
        consultationStore.quantityMedicalOldNew.medicalByMonth.map(
          (ob: QuantityMedicalOldNewByMonth) => ob.newMedical
        );
      quantityMedicalOld.value =
        consultationStore.quantityMedicalOldNew.medicalByMonth.map(
          (ob: QuantityMedicalOldNewByMonth) => ob.oldMedical
        );
    } catch (e) {
      console.log(e);
    }

    updatePieChart();
    updateColumnChart();
    updateTreatmentSeries();
    updateQuantityNewPatientChart();
    updateQuantityDoctorSpecialty();
    updateQuantityMedicalOldNewChart();
  } catch (e) {
    console.log(e);
  }
});
</script>