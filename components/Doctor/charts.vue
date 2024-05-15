<!-- <template>
  <section
    class="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 h-full w-full mb-4"
  >
    <div
      class="relative flex items-center rounded-xl justify-center bg-white md:p-4 w-full h-full"
    >
      <div class="flex absolute top-4 left-4 items-center">
        <span
          class="text-md items font-bold leading-none text-black md:text-lg lg:text-xl"
        >
          Đánh giá</span
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
    <div
      class="relative col-span-2 flex items-center rounded-xl justify-center bg-white md:p-4 w-full h-full"
    >
      <div class="flex absolute top-4 left-4 items-center">
        <span
          class="text-md items font-bold leading-none text-black md:text-lg lg:text-xl"
        >
          Thu nhập</span
        >
      </div>
      <div class="md:h-72 h-56 w-full mt-12 border-t">
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
  </section>
</template>
  
  <script setup lang="ts">
const { doctorStore } = defineProps(["doctorStore"]);
const route = useRoute();
const param = ref();
const moneyMonth = ref<number[]>([]);
const feedbackBar = ref<number[]>([]);
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
    categories: ["1 sao", "2 sao", "3 sao", "4 sao", "5 sao"],
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
      name: "Đánh giá",
      data: feedbackBar.value,
      color: "#e7b72f",
    },
  ];
};

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
      right: 18,
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
  },
  axisBorder: {
    show: false,
  },
  axisTicks: {
    show: false,
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

onMounted(async () => {
  updateBarChart();
  updateLineChart();
  param.value = route.params["slug"].toString();
  await Promise.all([
    doctorStore.getConsultationMoneyAreaById(param.value),
    doctorStore.getConsultationFeedbackBar(param.value),
  ]);

  moneyMonth.value = doctorStore.moneyMonth?.map(
    (a: MoneyMonth) => a.totalMoneyThisMonth
  );
  feedbackBar.value = doctorStore.feedbackBar;
  updateLineChart();
  updateBarChart();
});
</script> -->