<template>
  <div class="md:grid md:grid-cols-3 md:gap-4 gap-2 md:mb-4 mb-2 z-0 h-auto">
    <div
      class="col-span-2 relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full md:mb-4 mb-2 h-full"
    >
      <div class="flex absolute top-4 left-4 items-center">
        <span
          class="text-xl items font-extrabold leading-none text-black md:text-2xl lg:text-3xl"
        >
          Doanh thu</span
        >
      </div>
      <div class="md:h-96 h-56 w-full mt-14 border-t">
        <ClientOnly>
          <apexchart
            :key="lineseries"
            height="100%"
            width="100%"
            :options="lineoptions"
            :series="lineseries"
          >
          </apexchart>
        </ClientOnly>
      </div>
    </div>
    <div
      class="col-span-1 relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full md:mb-4 mb-2 h-full"
    >
      <div
        href="https://flowbite.com/"
        class="flex absolute top-4 left-4 items-center mb-5"
      >
        <span
          class="text-xl items font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white"
          >Cuộc hẹn</span
        >
      </div>
      <div class="h-96 w-full mt-14 border-t">
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
</template>

<script setup lang="ts">
const { doctorStore, medicalStore } = defineProps([
  "doctorStore",
  "medicalStore",
]);
//linechart
const lineoptions = ref({
  chart: {
    height: "100%",
    maxWidth: "100%",
    type: "area",
    fontFamily: "Helvetica, Arial, sans-serif",
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 1,
      opacityTo: 0,
      shade: "#fff",
      gradientToColors: ["#fff"],
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  grid: {
    show: true,
    strokeDashArray: 4,
    padding: {
      left: 20,
      right: 20,
      top: 10,
      bottom: 10,
    },
  },
  xaxis: {
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
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
  yaxis: {
    show: true,
    labels: {
      style: {
        fontSize: "12px",
      },
    },
  },
});
const lineseries = ref();
const updateLineChart = () => {
  lineoptions.value = {
    ...lineoptions.value,
  };
  lineseries.value = [
    {
      name: "Doanh thu",
      data: moneyMonth.value,
      color: "#0b9f6e",
    },
  ];
};

//piechart
const pieoptions = ref({
  chart: {
    height: 280,
    type: "donut",
  },

  colors: ["#2463eb", "#e7b72f", "#0b9f6e", "#fe5bb2"],

  stroke: {
    lineCap: "round",
  },
  labels: ["Đã huỷ", "Hoàn thành", "Đã xác nhận", "Đang chờ"],
  legend: {
    position: "bottom",
  },
  dataLabels: {
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

const moneyMonth = ref<number[]>([]);
const consultationPie = ref<number[]>([0, 0, 0]);
onMounted(async () => {
  updateLineChart();
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
  updateLineChart();
});
</script>