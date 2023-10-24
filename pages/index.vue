<template>
  <div class="antialiased bg-gray-50 dark:bg-gray-900">
    <main class="p-4 md:ml-64 h-auto pt-20">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div
          class="border-2 border-gray-300 bg-white rounded-lg dark:border-gray-600 h-28 md:h-48 grid grid-cols-1 place-content-center px-5 md:px-8"
        >
          <div class="row">
            <span class="text-sm md:text-base font-semibold text-gray-400"
              >Doanh thu</span
            >

            <div class="flex justify-between md:grid">
              <p
                class="leading-none text-right text-xl md:text-2xl font-bold text-gray-900 dark:text-white py-2 text-ellipsis overflow-hidden ..."
              >
    {{$route.path}}
                32.000.000.000 VNĐ 
              </p>

              <div
                class="flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center ml-2 md:ml-0"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3L54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7L466.7 160H384z"
                  />
                </svg>
                +12%
              </div>
            </div>
            <p
              class="leading-none text-left text-sm md:text-base font-semibold text-gray-400 dark:text-white"
            >
              Tuần này
            </p>
          </div>
        </div>
        <div
          class="border-2 border-gray-300 bg-white rounded-lg dark:border-gray-600 h-28 md:h-48 grid grid-cols-1 place-content-center px-5 md:px-8"
        >
          <div class="row">
            <span class="text-sm md:text-base font-semibold text-gray-400"
              >Người dùng</span
            >

            <div class="flex justify-between md:grid">
              <p
                class="leading-none text-left text-xl md:text-2xl font-bold text-gray-900 dark:text-white py-2 text-ellipsis overflow-hidden ..."
              >
                32.000
              </p>

              <div
                class="flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center ml-2 md:ml-0"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32h160c17.7 0 32 14.3 32 32v160c0 17.7-14.3 32-32 32s-32-14.3-32-32v-82.7L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3L54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7L466.7 160H384z"
                  />
                </svg>
                +12.000
              </div>
            </div>
            <p
              class="leading-none text-left text-sm md:text-base font-semibold text-gray-400 dark:text-white"
            >
              Tuần này
            </p>
          </div>
        </div>
        <div
          class="border-2 border-gray-300 bg-white rounded-lg dark:border-gray-600 h-28 md:h-48 grid grid-cols-1 place-content-center px-5 md:px-8"
        >
          <div class="row">
            <span class="text-sm md:text-base font-semibold text-gray-400"
              >Báo cáo</span
            >

            <div class="flex justify-between md:grid">
              <p
                class="leading-none text-left text-xl md:text-2xl font-bold text-gray-900 dark:text-white py-2 text-ellipsis overflow-hidden ..."
              >
                1.074
              </p>

              <div
                class="flex items-center text-base font-semibold text-red-500 dark:text-red-500 text-center ml-2 md:ml-0"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7L54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3L466.7 352H384z"
                  />
                </svg>
                -12%
              </div>
            </div>
            <p
              class="leading-none text-left text-sm md:text-base font-semibold text-gray-400 dark:text-white"
            >
              Hôm nay
            </p>
          </div>
        </div>
        <div
          class="border-2 border-gray-300 bg-white rounded-lg dark:border-gray-600 h-28 md:h-48 grid grid-cols-1 place-content-center px-5 md:px-8"
        >
          <div class="row">
            <span class="text-sm md:text-base font-semibold text-gray-400"
              >Cuộc hẹn</span
            >

            <div class="flex justify-between md:grid">
              <p
                class="leading-none text-left text-xl md:text-2xl font-bold text-gray-900 dark:text-white py-2 text-ellipsis overflow-hidden ..."
              >
                1.074
              </p>

              <div
                class="flex items-center text-base font-semibold text-red-500 dark:text-red-500 text-center ml-2 md:ml-0"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7L54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3L466.7 352H384z"
                  />
                </svg>
                -120
              </div>
            </div>
            <p
              class="leading-none text-left text-sm md:text-base font-semibold text-gray-400 dark:text-white"
            >
              Hôm nay
            </p>
          </div>
        </div>
      </div>

      <div
        class="border-2 border-solid rounded-lg border-gray-300 dark:border-gray-600 mb-4 p-5 md:p-8"
      >
        <p class="font-bold text-base md:text-xl">Sales over time</p>
        <div class="mt-5 h-[300px] bg-background md:p-3">
          <Line :data="data" :options="options" />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
      </div>
      <div
        class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
      ></div>
      <div class="grid grid-cols-2 gap-4">
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
        <div
          class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
        ></div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from "chart.js";
import { Line } from "vue-chartjs";
import colors from "#tailwind-config/theme/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const mode = useColorMode();

const options = computed<ChartOptions<"line">>(() => {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        intersect: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: mode.value === "dark" ? colors.slate[900] : colors.slate[200],
        },
        ticks: {
          color: colors.slate[500],
        },
      },
      x: {
        grid: {
          color: mode.value === "dark" ? colors.slate[800] : colors.slate[200],
        },
        ticks: {
          color: colors.slate[500],
        },
      },
    },
  };
});

const data = ref<ChartData<"line">>({
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Sales over time",
      backgroundColor: colors.white,
      tension: 0.4,
      borderColor: colors.blue[500],
      borderWidth: 2,
      pointBackgroundColor: colors.blue[500],
      data: [40, 39, 10, 40, 39, 80, 40],
    },
  ],
});
</script>
