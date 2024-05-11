<template>
  <section class="bg-gray-100">
    <div class="fixed bg-white w-full z-40">
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
      class="fixed top-0 left-0 z-40 w-64 lg:w-80 bg-gray-100 lg:pl-4 lg:py-0 h-screen transition-transform -translate-x-full lg:translate-x-0"
    >
      <div class="h-full border-r-4 mb-4 px-3 py-4 overflow-y-auto bg-gray-100">
        <a href="#" class="flex items-center justify-center mb-5">
          <span
            class="text-2xl font-extrabold leading-none tracking-tight text-secondary lg:text-3xl"
            ><mark class="px-2 py-2 bg-gray-100 text-primary"
              >HealthLine</mark
            ></span
          >
        </a>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
          <li>
            <a
              href="/"
              class="flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white"
              :class="{ 'bg-primary/20 text-primary': route.path == '/' }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="24"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1c-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2c-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"
                />
              </svg>
              <span class="ml-3">Trang chủ</span>
            </a>
          </li>

          <li>
            <button
              type="button"
              class="flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white w-full text-base transition duration-75 group"
              :class="{
                'bg-primary/20 text-primary': route.path.includes('patients'),
              }"
              aria-controls="patient-dropdown"
              data-collapse-toggle="patient-dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="28"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M240 80h102.7c-7.9-19.5-20.4-36.5-36.2-49.9L240 80zm37.7-68.2C261.3 4.2 243.2 0 224 0c-53.7 0-99.7 33.1-118.7 80h81.4l91-68.2zM224 256c70.7 0 128-57.3 128-128c0-5.4-.3-10.8-1-16H97c-.7 5.2-1 10.6-1 16c0 70.7 57.3 128 128 128zm-100 56.4c-9.7 3.1-19.1 7-28 11.7V512h147.7l-62.2-103.8l-57.5-95.8zm33-7.2l47.3 78.8H272c44.2 0 80 35.8 80 80c0 18-6 34.6-16 48h82.3c16.4 0 29.7-13.3 29.7-29.7c0-98.5-79.8-178.3-178.3-178.3h-91.4c-7.2 0-14.3.4-21.3 1.3zM0 482.3C0 498.7 13.3 512 29.7 512H64V345.4C24.9 378.1 0 427.3 0 482.3zM320 464c0-26.5-21.5-48-48-48h-48.5l57.1 95.2c22.4-4 39.4-23.6 39.4-47.2z"
                />
              </svg>
              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Bệnh nhân</span
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
            <ul
              id="patient-dropdown"
              class="py-2 space-y-2"
              :class="{ hidden: !route.path.includes('patients') }"
            >
              <li>
                <a
                  href="/patients"
                  class="pl-11 group flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white w-full text-base transition duration-75 group"
                  :class="{
                    'bg-primary/20 text-primary':
                      !route.path.includes('create') &&
                      route.path.includes('patients'),
                  }"
                  >Danh sách bệnh nhân</a
                >
              </li>
              <li>
                <a
                  href="/patients/create"
                  class="pl-11 group flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white w-full text-base transition duration-75 group"
                  :class="{
                    'bg-primary/20 text-primary': route.path.includes('create'),
                  }"
                  >Thêm bệnh nhân</a
                >
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              class="flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white w-full text-base transition duration-75 group"
              :class="{
                'bg-primary/20 text-primary': route.path.includes('doctors'),
              }"
              aria-controls="doctor-dropdown"
              data-collapse-toggle="doctor-dropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="28"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M224 256a128 128 0 1 0 0-256a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16v-24c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-40c0-29.8 20.4-54.9 48-62v-57.1c-6-.6-12.1-.9-18.3-.9h-91.4c-6.2 0-12.3.3-18.3.9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7v-59.1zM144 448a24 24 0 1 0 0-48a24 24 0 1 0 0 48z"
                />
              </svg>

              <span class="flex-1 ml-3 text-left whitespace-nowrap"
                >Bác sĩ</span
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
            <ul
              id="doctor-dropdown"
              class="py-2 space-y-2"
              :class="{ hidden: !route.path.includes('doctors') }"
            >
              <li>
                <a
                  href="/doctors"
                  class="pl-11 group flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white w-full text-base transition duration-75 group"
                  :class="{
                    'bg-primary/20 text-primary':
                      !route.path.includes('create') &&
                      route.path.includes('doctors'),
                  }"
                  >Tất cả bác sĩ</a
                >
              </li>
              <li>
                <a
                  href="/doctors/create"
                  :class="{
                    'bg-primary/20': route.path.includes('/create'),
                  }"
                  class="flex items-center w-full p-2 text-secondary transition duration-75 rounded-lg pl-11 group hover:bg-primary hover:text-white"
                  >Thêm bác sĩ</a
                >
              </li>
            </ul>
          </li>
          <li>
            <a
              href="/vouchers"
              class="flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white"
              :class="{
                'bg-primary/20 text-primary': route.path.includes('/vouchers'),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.946 2.094a3 3 0 0 0-3.892 0L8.706 3.243a1 1 0 0 1-.569.236l-1.765.14A3 3 0 0 0 3.62 6.371l-.14 1.766a1 1 0 0 1-.237.569l-1.148 1.348a3 3 0 0 0 0 3.891l1.148 1.349a1 1 0 0 1 .236.569l.141 1.765a3 3 0 0 0 2.752 2.752l1.765.14a1 1 0 0 1 .57.237l1.347 1.148a3 3 0 0 0 3.892 0l1.348-1.148a1 1 0 0 1 .57-.236l1.765-.141a3 3 0 0 0 2.752-2.752l.14-1.765a1 1 0 0 1 .236-.57l1.149-1.347a3 3 0 0 0 0-3.892l-1.149-1.348a1 1 0 0 1-.236-.57l-.14-1.765a3 3 0 0 0-2.752-2.752l-1.766-.14a1 1 0 0 1-.569-.236zm.882 5.663l1.415 1.414l-7.071 7.072l-1.415-1.415zm-4.596 2.475a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.121m3.536 5.657a1.5 1.5 0 1 1 2.12-2.121a1.5 1.5 0 0 1-2.12 2.12"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Phiếu giảm giá</span>
            </a>
          </li>
          <li>
            <a
              href="/news"
              class="flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white"
              :class="{
                'bg-primary/20 text-primary': route.path.includes('/news'),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="#evenodd"
                  d="M0 16c0 1.1.9 2 2 2h16.5c.8 0 1.5-.7 1.5-1.5v-10c0-.8-.7-1.5-1.5-1.5H18v10c0 .6-.4 1-1 1V4c0-1.1-.9-2-2-2H2C.9 2 0 2.9 0 4zM3 4h11v4H3zm0 6h4v5H3zm5 0h6v1H8zm0 2h6v1H8zm0 2h6v1H8z"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Tin tức</span>
            </a>
          </li>
          <!-- <li>
            <a
              href="/drugs"
              class="flex items-center p-2 text-secondary rounded-lg group hover:bg-primary hover:text-white"
              :class="{
                'bg-primary/20 text-primary': route.path.includes('/medications'),
              }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M217.4 27.43c-27.9.47-53.1 17.11-64.5 42.84l136.5 41.23c6-35.79-15.5-70.49-50.1-81.02c-6.2-1.88-12.7-2.91-19.2-3.05zm-69.7 60.08c-6.1 35.89 15.4 70.69 50.1 81.19c34.8 10.5 71.9-6.7 86.5-40zm265.5 44.29c-25.3.1-52.2 12.3-72.5 41L215.9 349.7c-33.5 47.4-18.9 97 14.1 120.4c33.1 23.5 84.6 20.8 118.1-26.6l124.7-176.8c33.5-47.5 18.9-97-14.1-120.5c-12.4-8.8-27.3-13.9-43-14.4zm-1.8 17.3c1.3 0 2.6 0 3.8.1c12.1.5 23.5 4.8 33.1 11.7c25.7 18.2 38.6 54.5 9.7 95.4l-64.5 91.5c-35.8-9.6-81.8-42.3-102.7-73l64.7-91.6c16.9-23.9 37-33.7 55.9-34.1M91.25 225.3c-9.62.1-19.11 2.1-27.93 6c-33.11 14.5-50.34 51.5-40.24 86.3l130.72-57.1c-13.1-22.1-36.9-35.5-62.55-35.2m69.65 51.6L30.2 334.1c18.45 31.4 57.3 44 90.6 29.5c33.2-14.6 50.4-51.8 40.1-86.7"
                />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Thuốc</span>
            </a>
          </li> -->
        </ul>
        <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200">
          <li>
            <button
              type="button"
              @click="logoutClick"
              class="flex items-center justify-start p-2 text-secondary rounded-lg hover:bg-gray-100 group w-full"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-secondary"
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