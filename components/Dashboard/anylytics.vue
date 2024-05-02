<template>
  <section>
    <div class="text-lg text-black font-extrabold py-5 px-4">Xem nhanh</div>
    <div
      class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 md:mb-4 mb-2"
    >
      <div class="bg-white px-4 py-6 flex-col items-center rounded-2xl">
        <div class="flex items-center justify-start w-full">
          <div class="p-4 bg-colorDF9F1E/20 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 14 14"
            >
              <path
                fill="#DF9F1E"
                fill-rule="evenodd"
                d="M13.462 9.692C13.462 12.664 10.77 14 7 14C3.23 14 .537 12.664.537 9.713c0-2.825 1.235-4.432 3.705-5.885a4.59 4.59 0 0 0 5.52-.004c2.467 1.438 3.7 3.045 3.7 5.868M8.743 3.008l1.27-1.985A.699.699 0 0 0 9.41 0H4.843a.7.7 0 0 0-.603 1.077l1.047 1.95c1.061.635 2.4.629 3.456-.019"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="flex-col ml-4">
            <div class="py-0.5 text-sm font-semibold text-gray-500">
              Doanh thu
            </div>
            <div class="w-full text-2xl text-black font-extrabold">
              {{ converCurrency(doctorStore.moneyQuantity?.totalMoney ?? 0) }}
            </div>
          </div>
        </div>
        <!-- <div
          class="mt-2 w-full justify-end flex gap-1 items-center text-base font-semibold text-green-500 text-center ml-2 md:ml-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 14 14"
          >
            <path
              fill-rule="evenodd"
              d="M1.898 10.778A1 1 0 0 1 .483 9.363l3.333-3.332l.007-.007a1.457 1.457 0 0 1 2.039 0l.007.007L7.57 7.732L9.917 5.25l-1.04-1.04a.75.75 0 0 1 .53-1.28h3.652a.75.75 0 0 1 .75.75v3.652a.75.75 0 0 1-1.28.53l-1.197-1.198l-2.704 2.861a1.457 1.457 0 0 1-2.066.027l-.007-.007l-1.713-1.712z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-black">
            {{
              converCurrency(doctorStore.moneyQuantity?.doctorThisMonth ?? 0)
            }}
          </span>
        </div> -->
      </div>
      <div class="bg-white px-4 py-6 flex-col items-center rounded-2xl">
        <div class="flex items-center justify-start w-full">
          <div class="p-4 bg-color1C6AA3/20 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 14 14"
            >
              <path
                fill="#1C6AA3"
                fill-rule="evenodd"
                d="M4.5 1a1 1 0 0 0-2 0v1h-1A1.5 1.5 0 0 0 0 3.5V5h14V3.5A1.5 1.5 0 0 0 12.5 2h-1V1a1 1 0 1 0-2 0v1h-5zM14 6.25H0v6.25A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div class="flex-col ml-4">
            <div class="py-0.5 text-sm font-semibold text-gray-500">
              Cuộc hẹn
            </div>
            <div class="w-full text-2xl text-black font-extrabold">
              {{ doctorStore.consultationQuantity?.quantity ?? "--" }}
            </div>
          </div>
        </div>
        <!-- <div
          class="mt-2 w-full justify-end flex gap-1 items-center text-base font-semibold text-green-500 text-center ml-2 md:ml-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 14 14"
          >
            <path
              fill-rule="evenodd"
              d="M1.898 10.778A1 1 0 0 1 .483 9.363l3.333-3.332l.007-.007a1.457 1.457 0 0 1 2.039 0l.007.007L7.57 7.732L9.917 5.25l-1.04-1.04a.75.75 0 0 1 .53-1.28h3.652a.75.75 0 0 1 .75.75v3.652a.75.75 0 0 1-1.28.53l-1.197-1.198l-2.704 2.861a1.457 1.457 0 0 1-2.066.027l-.007-.007l-1.713-1.712z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-black">
            {{ doctorStore.consultationQuantity?.quantityThisMonth ?? "--" }}
          </span>
          <span class="text-black ml-1">Cuộc hẹn</span>
        </div> -->
      </div>
      <div class="bg-white px-4 py-6 flex-col items-center rounded-2xl">
        <div class="flex items-center justify-start w-full">
          <div class="p-4 bg-color9D4B6C/20 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="32"
              viewBox="0 0 448 512"
            >
              <path
                fill="#9D4B6C"
                d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256m-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48"
              />
            </svg>
          </div>
          <div class="flex-col ml-4">
            <div class="py-0.5 text-sm font-semibold text-gray-500">Bác sĩ</div>
            <div class="w-full text-2xl text-black font-extrabold">
              {{ converCurrency(doctorStore.moneyQuantity?.totalMoney ?? 0) }}
            </div>
          </div>
        </div>
        <!-- <div
          class="mt-2 w-full justify-end flex gap-1 items-center text-base font-semibold text-green-500 text-center ml-2 md:ml-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 14 14"
          >
            <path
              fill-rule="evenodd"
              d="M1.898 10.778A1 1 0 0 1 .483 9.363l3.333-3.332l.007-.007a1.457 1.457 0 0 1 2.039 0l.007.007L7.57 7.732L9.917 5.25l-1.04-1.04a.75.75 0 0 1 .53-1.28h3.652a.75.75 0 0 1 .75.75v3.652a.75.75 0 0 1-1.28.53l-1.197-1.198l-2.704 2.861a1.457 1.457 0 0 1-2.066.027l-.007-.007l-1.713-1.712z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-black">{{
            doctorStore.doctorQuantity?.doctorThisMonth ?? "--"
          }}</span>
          <span class="text-black ml-1">Bác sĩ</span>
        </div> -->
      </div>
      <div class="bg-white px-4 py-6 flex-col items-center rounded-2xl">
        <div class="flex items-center justify-start w-full">
          <div class="p-4 bg-color009DC7/20 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="32"
              viewBox="0 0 448 512"
            >
              <path
                fill="#009DC7"
                d="M240 80h102.7c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4l91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zm-100 56.4c-9.7 3.1-19.1 7-28 11.7V512h147.7l-62.2-103.8l-57.5-95.8zm33-7.2l47.3 78.8H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3h-91.4c-7.2 0-14.3.4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3zM320 464c0-26.5-21.5-48-48-48h-48.5l57.1 95.2c22.4-4 39.4-23.6 39.4-47.2z"
              />
            </svg>
          </div>
          <div class="flex-col ml-4">
            <div class="py-0.5 text-sm font-semibold text-gray-500">
              Bệnh nhân
            </div>
            <div class="w-full text-2xl text-black font-extrabold">
              {{ medicalStore.medicalQuantity?.quantity ?? "--" }}
            </div>
          </div>
        </div>
        <!-- <div
          class="mt-2 w-full justify-end flex gap-1 items-center text-base font-semibold text-green-500 text-center ml-2 md:ml-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 14 14"
          >
            <path
              fill-rule="evenodd"
              d="M1.898 10.778A1 1 0 0 1 .483 9.363l3.333-3.332l.007-.007a1.457 1.457 0 0 1 2.039 0l.007.007L7.57 7.732L9.917 5.25l-1.04-1.04a.75.75 0 0 1 .53-1.28h3.652a.75.75 0 0 1 .75.75v3.652a.75.75 0 0 1-1.28.53l-1.197-1.198l-2.704 2.861a1.457 1.457 0 0 1-2.066.027l-.007-.007l-1.713-1.712z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="text-black">
            {{ medicalStore.medicalQuantity?.increase ?? "--" }}
          </span>
          <span class="text-black ml-1">Bệnh nhân</span>
        </div> -->
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { doctorStore, medicalStore } = defineProps([
  "doctorStore",
  "medicalStore",
]);
onMounted(async () => {
  await Promise.all([
    doctorStore.getQuantityDoctor(),
    doctorStore.getConsultationDashboard(),
    medicalStore.getQuantityMedical(),
    doctorStore.getConsultationMoney(),
  ]);
});
</script>