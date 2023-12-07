<template>
  <section>
    <div class="fixed bg-white w-full z-10">
      <button
        data-drawer-target="cta-button-sidebar"
        data-drawer-toggle="cta-button-sidebar"
        aria-controls="cta-button-sidebar"
        type="button"
        class="inline-flex items-center p-1 m-3 text-sm text-gray-500 rounded-xl lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-8 h-8"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
    </div>
    <aside
      id="cta-button-sidebar"
      class="fixed top-0 left-0 z-50 w-64 lg:w-80 bg-gray-100 lg:pl-4 lg:py-8 h-full transition-transform -translate-x-full lg:translate-x-0"
    >
      <div class="h-full px-3 py-4 overflow-y-auto bg-white lg:rounded-xl">
        <a href="#" class="flex items-center justify-center mb-5">
          <span
            class="text-2xl font-extrabold leading-none tracking-tight text-gray-900 lg:text-3xl"
            ><mark
              class="px-2 lg:bg-primary-600 rounded lg:text-white bg-white text-primary-500"
              >HealthLine</mark
            ></span
          >
        </a>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
          <li>
            <a
              href="/"
              class="flex items-center p-2 text-gray-900 rounded-lg group"
            >
              <lord-icon
                src="https://cdn.lordicon.com/wmwqvixz.json"
                trigger="morph"
                state="morph-home-3"
                colors="primary:#1d4ed8"
                style="width: 30px; height: 30px"
              >
              </lord-icon>
              <span class="ml-3">Trang chủ</span>
            </a>
          </li>

          <li>
            <button
              type="button"
              class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
              aria-controls="customer-dropdown"
              data-collapse-toggle="customer-dropdown"
            >
              <lord-icon
                src="https://cdn.lordicon.com/hrjifpbq.json"
                trigger="morph"
                colors="primary:#1d4ed8"
                style="width: 30px; height: 30px"
              >
              </lord-icon>
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Khách hàng</span
              >
              <svg
                class="w-3 h-3"
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
            <ul id="customer-dropdown" class="hidden py-2 space-y-2">
              <li>
                <a
                  href="/users/doctors"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >Bác sĩ</a
                >
              </li>
              <li>
                <a
                  href="/users/patients"
                  class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100"
                  >Bệnh nhân</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a
              href="/vouchers"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <lord-icon
                src="https://cdn.lordicon.com/bqavqyaq.json"
                trigger="morph"
                colors="primary:#1d4ed8,secondary:#ffffff"
                style="width: 30px; height: 30px"
              >
              </lord-icon>
              <span class="flex-1 ml-3 whitespace-nowrap">Phiếu giảm giá</span>
            </a>
          </li>
          <li>
            <a
              href="/news"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
            >
              <lord-icon
                src="https://cdn.lordicon.com/depeqmsz.json"
                trigger="morph"
                colors="primary:#1d4ed8"
                style="width: 30px; height: 30px"
              >
              </lord-icon>
              <span class="flex-1 ml-3 whitespace-nowrap">Tin tức</span>
            </a>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
          <li>
            <button
              type="button"
              @click="logoutClick"
              class="flex items-center justify-start p-2 text-gray-900 rounded-lg hover:bg-gray-100 group w-full"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="ml-5">Đăng xuất</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  </section>
</template>
<script setup>
const route = useRoute();
// onMounted(() => {
//   console.log(route.path);
// });
async function logoutClick() {
  const authStore = useAuthStore();
  await authStore.logout();
  navigateTo("/authenticate");
}
</script>