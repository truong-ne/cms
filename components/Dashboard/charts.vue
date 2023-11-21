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

<script setup>
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
    "Th1",
      "Th2",
      "Th3",
      "Th4",
      "Th5",
      "Th6",
      "Th7",
      "Th8",
      "Th9",
      "Th10",
      "Th11",
      "Th12",
    ],
    labels: {
      show: true,
    },
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
      name: "Thu nhập hiện tại",
      data: [13, 21, 25, 15, 35, 15, 16, 4, 20, 40, 11, 35],
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

  colors: ["#2463eb", "#e7b72f","#0b9f6e"],

  stroke: {
    lineCap: "round",
  },
  labels: ["Đã huỷ", "Hoàn thành", "Sắp tới"],
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
  pieseries.value = [67, 33, 12];
};
onMounted(() => {
  updateLineChart();
  updatePieChart();
});
</script>