<template>
  <div
    class="relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full mb-2 md:mb-4 pb-4"
  >
    <div class="flex absolute top-4 left-4 items-center">
      <span
        class="text-xl items font-extrabold leading-none text-black md:text-2xl lg:text-3xl"
      >
        Phiếu giảm giá</span
      >
    </div>
    <div class="md:h-96 h-56 w-full mt-14 border-t">
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
    <!-- <div class="md:h-96 h-56 w-full mt-14 border-t">
      <ClientOnly>
        <apexchart
          :key="barseries"
          height="100%"
          width="100%"
          :options="baroptions"
          :series="baroptions"
        >
        </apexchart>
      </ClientOnly>
    </div> -->
  </div>
</template>

<script setup lang="ts">
//linechart
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
    stacked: true,
  },
  tooltip: {
    enabled: true,
    x: {
      show: false,
    },
  },
  fill: {
    opacity: 1,
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
      style: {
        fontSize: "15px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
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
const barseries = ref();
const updateBarChart = () => {
  baroptions.value = {
    ...baroptions.value,
  };
  barseries.value = [
    {
      name: "Tiền vào",
      data: [13, 21, 25, 15, 35, 15, 16, 4, 20, 40, 11, 35],
      color: "#9ADE7B",
    },
    {
      name: "Tiền gốc",
      data: [18, 11, 20, 25, 15, 15, 17, 1, 22, 60, 15, 45],
      color: "#FF8F8F",
    },
  ];
};

onMounted(() => {
  updateBarChart();

});
</script>