<template>
  <div class="md:grid md:grid-cols-3 gap-4 mb-4 z-0">
    <div
      class="col-span-2 relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full mb-4 md:mb-0"
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
      class="col-span-1 relative flex items-center rounded-xl justify-center h-auto bg-white md:p-4 w-full"
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
      opacityFrom: 0.55,
      opacityTo: 0,
      shade: "#1C64F2",
      gradientToColors: ["#1C64F2"],
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
      right: 18,
      top: 0,
      bottom: 0,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
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
        fontSize: "15px",
      },
    },
  },
  yaxis: {
    show: true,
    labels: {
      style: {
        fontSize: "15px",
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
      name: "current month",
      data: [13, 21, 25, 15, 35, 15, 16, 4, 20, 40, 11, 35],
      color: "#3B56DB",
    },
  ];
};

//piechart
const pieoptions = ref({
  chart: {
    height: 280,
    type: "donut",
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Progress", "Done"],
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
  pieseries.value = [67, 33];
};
onMounted(() => {
  updateLineChart();
  updatePieChart();
});
</script>