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
  },
  tooltip: {
    shared: true,
    intersect: false,
    style: {
      fontFamily: "Inter, sans-serif",
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "70%",
      borderRadiusApplication: "end",
      borderRadius: 5,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  fill: {
    opacity: 1,
    color: "#F4CE14",
  },
  legend: {
    show: true,
    position: "bottom",
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
      right: 10,
      top: 0,
      bottom: 0,
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
    labels: {
      show: true,
      style: {
        fontSize: "12px",
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
        fontSize: "12px",
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
      name: "Số phiếu",
      data: [1, 3, 2, 1, 0, 0, 1, 1, 4, 1, 0, 0],
      color: "#e7b72f",
    },
  ];
};

onMounted(() => {
  updateBarChart();
});
</script>