<template>
  <section>
    <div class="text-lg text-black font-extrabold py-5 px-4">
      Biểu đồ và thống kê
    </div>
    <div class="gap-4">
      <div
        class="md:grid md:grid-cols-2 md:gap-4 gap-2 md:mb-4 mb-2 z-0 h-auto"
      >
        <div
          class="relative flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
        >
          <div class="flex absolute top-4 left-4 items-center">
            <span class="text-md items font-extrabold leading-none text-black">
              Doanh thu</span
            >
          </div>

          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="columnseries"
                height="100%"
                width="100%"
                :options="columnoptions"
                :series="columnseries"
              >
              </apexchart>
            </ClientOnly>
          </div>
        </div>
        <div
          class="relative flex items-center justify-center bg-white rounded-2xl md:p-4 w-full md:mb-4 mb-2 h-full"
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
          <button
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
          </button>

          <!-- Dropdown menu -->
          <div
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
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
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
              Số lượng bệnh nhân theo tháng</span
            >
          </div>

          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="patientMonthSeries"
                height="100%"
                width="100%"
                :options="patientMonthOptions"
                :series="patientMonthSeries"
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
              Số lượng bệnh nhân theo chuyên khoa</span
            >
          </div>
          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <ClientOnly>
              <apexchart
                :key="patientSpecialtySeries"
                height="100%"
                width="100%"
                :options="patientSpecialtyOptions"
                :series="patientSpecialtySeries"
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
              Thống kê cuộc hẹn</span
            >
          </div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdownTreatmentCosts"
            class="absolute top-2 right-0 text-black bg-white font-medium text-xs px-5 py-2.5 text-center inline-flex items-center"
            type="button"
          >
            Sắp tới
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
          </button>

          <!-- Dropdown menu -->
          <div
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
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Earnings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >Sign out</a
                >
              </li>
            </ul>
          </div>
          <div class="md:h-96 h-56 w-full mt-6 border-t">
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-left text-gray-500">
                <thead class="text-xs text-gray-700 uppercase bg-colorCDDEFF">
                  <tr>
                    <th scope="col" class="px-4 py-3">Bác sĩ</th>
                    <th scope="col" class="px-4 py-3">Chuyên ngành</th>
                    <th scope="col" class="px-4 py-3">Bệnh nhân</th>
                    <th scope="col" class="px-4 py-3">Thời gian</th>
                    <th scope="col" class="px-4 py-3">Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <th
                      scope="row"
                      class="flex items-center px-4 py-3 mr-4 font-normal text-gray-900 whitespace-nowrap"
                    >
                      Trần Huỳnh Tấn Phát
                    </th>
                    <td class="px-4 py-3 mr-4">Đa khoa</td>

                    <td class="px-4 py-3 mr-4">Phạm Nhật Minh</td>
                    <td class="px-4 py-3 mr-4">{{ Date() }}</td>
                    <td class="px-4 py-3 mr-4">Đã xác nhận</td>
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
const { doctorStore, medicalStore } = defineProps([
  "doctorStore",
  "medicalStore",
]);

//patients count by Specialties
const patientMonthOptions = ref({
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
  colors: ["#DF9F1E", "#009DC7"],
});
const patientMonthSeries = ref();
const updatePatientMonthOptions = () => {
  patientMonthOptions.value = {
    ...patientMonthOptions.value,
  };
  patientMonthSeries.value = [
    {
      name: "Bệnh nhân cũ",
      data: moneyMonth.value,
    },
    {
      name: "Bệnh nhân mới",
      data: [10, 20, 50, 2, 30, 100, 98, 49, 90, 5, 60, 65],
    },
  ];
};

//piechart
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
const pieseries = ref();
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
    position: "right",
    fontSize: "14px",
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
const treatmentSeries = ref();
const updateTreatmentSeries = () => {
  treatmentCostsOptions.value = {
    ...treatmentCostsOptions.value,
  };
  treatmentSeries.value = [15, 70, 45, 77, 44];
};

const columnoptions = ref({
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "25%",
      // endingShape: "rounded",
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
        return val + "K";
      },
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    opacity: 1,
  },
  colors: ["#5981FA", "#9D4B6C"],

  tooltip: {
    y: {
      formatter: function (val: number) {
        return Math.abs(val) + "K VNĐ";
      },
    },
  },
});
const columnseries = ref();
const updateColumnChart = () => {
  columnoptions.value = {
    ...columnoptions.value,
  };
  columnseries.value = [
    {
      name: "Tiền vào",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 55, 20],
    },
    {
      name: "Tiền ra",
      data: [-76, -85, -101, -98, -87, -105, -91, -114, -94, -10, -90, -100],
    },
  ];
};

const patientSpecialtyOptions = ref({
  chart: {
    type: "bar",
    height: "100%",
    maxWidth: "100%",
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "25%",
      endingShape: "rounded",
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
    categories: [
      "Ngoại khoa",
      "Nội khoa",
      "Chuẩn đoán",
      "Sản phụ khoa",
      "Các khoa khác",
    ],
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
  colors: ["#DF9F1E", "#009DC7"],
  tooltip: {
    y: {
      formatter: function (val: number) {
        return val + " người";
      },
    },
  },
});
const patientSpecialtySeries = ref();
const updatePatientSpecialty = () => {
  patientSpecialtyOptions.value = {
    ...patientSpecialtyOptions.value,
  };
  patientSpecialtySeries.value = [
    {
      name: "Bệnh nhân cũ",
      data: [44, 55, 57, 56, 61],
    },
    {
      name: "Bệnh nhân mới",
      data: [58, 63, 60, 66, 70],
    },
  ];
};

const moneyMonth = ref<number[]>([]);
const consultationPie = ref<number[]>([0, 0, 0]);
onMounted(async () => {
  updatePieChart();
  await Promise.all([
    doctorStore.getConsultationPie(),
    doctorStore.getConsultationMoneyArea(),
  ]);
  consultationPie.value = [
    doctorStore.consultationPie?.cancel ?? 0,
    doctorStore.consultationPie?.finish ?? 0,
    doctorStore.consultationPie?.confirm ?? 0,
    doctorStore.consultationPie?.pending ?? 0,
  ];
  moneyMonth.value = doctorStore.moneyMonth?.map(
    (a: MoneyMonth) => a.totalMoneyThisMonth
  );
  updatePieChart();
  updateColumnChart();
  updateTreatmentSeries();
  updatePatientMonthOptions();
  updatePatientSpecialty();
});
</script>