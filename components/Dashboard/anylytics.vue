<template>
  <div
    class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 md:mb-4 mb-2"
  >
    <div class="h-40 bg-white px-4 rounded-xl grid items-center">
      <div class="block">
        <div class="flex items-center justify-start w-full">
          <lord-icon
            src="https://cdn.lordicon.com/ncitidvz.json"
            trigger="loop"
            delay="2000"
            colors="primary:#2463eb"
            style="width: 50px; height: 50px"
          >
          </lord-icon>
          <span
            class="flex items-center justify-center px-2 py-0.5 text-base font-bold text-black"
            >Doanh thu</span
          >
        </div>
        <div class="mt-4 w-full text-2xl text-black font-bold">
          {{ converCurrency(doctorStore.moneyQuantity?.totalMoney ?? 0) }}
        </div>
        <div
          class="mt-2 w-full flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center ml-2 md:ml-0"
        >
          <span
            >+{{
              converCurrency(doctorStore.moneyQuantity?.quantityThisMonth ?? 0)
            }}</span
          >
          <span class="text-black ml-1">Tổng số doanh thu</span>
        </div>
      </div>
    </div>
    <div class="h-40 bg-white px-4 rounded-xl grid items-center">
      <div class="block">
        <div class="flex items-center justify-start w-full">
          <lord-icon
            src="https://cdn.lordicon.com/wmlleaaf.json"
            trigger="loop"
            delay="2500"
            state="morph-calendar"
            colors="primary:#2463eb"
            style="width: 50px; height: 50px"
          >
          </lord-icon>
          <span
            class="flex items-center justify-center px-2 py-0.5 text-base font-bold text-black"
            >Cuộc hẹn</span
          >
        </div>
        <div class="mt-4 w-full text-2xl text-black font-bold">
          {{ doctorStore.consultationQuantity?.quantity ?? "--" }}
        </div>
        <div
          class="mt-2 w-full flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center ml-2 md:ml-0"
        >
          <span
            >+{{
              doctorStore.consultationQuantity?.quantityThisMonth ?? "--"
            }}</span
          >
          <span class="text-black ml-1">Tổng số cuộc hẹn</span>
        </div>
      </div>
    </div>
    <div class="h-40 bg-white px-4 rounded-xl grid items-center">
      <div class="block">
        <div class="flex items-center justify-start w-full">
          <lord-icon
            src="https://cdn.lordicon.com/hrjifpbq.json"
            trigger="loop"
            delay="3000"
            colors="primary:#2463eb"
            style="width: 50px; height: 50px"
          >
          </lord-icon>
          <span
            class="flex items-center justify-center px-2 py-0.5 text-base font-bold text-black"
            >Bệnh nhân</span
          >
        </div>
        <div class="mt-4 w-full text-2xl text-black font-bold">
          {{ medicalStore.medicalQuantity?.quantity ?? "--" }}
        </div>
        <div
          class="mt-2 w-full flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center ml-2 md:ml-0"
        >
          <span> +{{ medicalStore.medicalQuantity?.increase ?? "--" }} </span>
          <span class="text-black ml-1">Bệnh nhân</span>
        </div>
      </div>
    </div>
    <div class="h-40 bg-white px-4 rounded-xl grid items-center">
      <div class="block">
        <div class="flex items-center justify-start w-full">
          <lord-icon
            src="https://cdn.lordicon.com/hrjifpbq.json"
            trigger="loop"
            delay="3500"
            colors="primary:#2463eb"
            style="width: 50px; height: 50px"
          >
          </lord-icon>
          <span
            class="flex items-center justify-center px-2 py-0.5 text-base font-bold text-black"
            >Bác sĩ</span
          >
        </div>
        <div class="mt-4 w-full text-2xl text-black font-bold">
          {{ doctorStore.doctorQuantity?.quantity ?? "--" }}
        </div>
        <div
          class="mt-2 w-full flex items-center text-base font-semibold text-green-500 dark:text-green-500 text-center ml-2 md:ml-0"
        >
          <span
            >+{{ doctorStore.doctorQuantity?.doctorThisMonth ?? "--" }}</span
          >
          <span class="text-black ml-1">Bác sĩ</span>
        </div>
      </div>
    </div>
  </div>
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