<template>
  <div class="lg:grid lg:grid-cols-2 gap-4 bg-gray-50 h-screen">
    <section class="dark:bg-gray-900 items-center justify-center flex">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full"
      >
        <a href="#" class="flex items-center pl-2.5 mb-5">
          <span
            class="text-4xl items font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl"
            ><mark
              class="px-3 py-1 text-white bg-blue-600 rounded dark:bg-blue-500"
              >Quản trị viên</mark
            ></span
          >
        </a>
        <div
          class="w-full bg-white rounded-xl shadow-xl shadow-gray-300 sm:max-w-md"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <span
              class="text-3xl items font-extrabold leading-none tracking-tight md:text-3xl lg:text-3xl"
            >
              Đăng nhập
            </span>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Số điện thoại</label
                >
                <input
                  type="phone"
                  name="phone"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+84"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Mật khẩu</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <!-- <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500 dark:text-gray-300"
                      >Ghi nhớ đăng nhập</label
                    >
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >Quên mật khẩu?</a
                >
              </div> -->
              <button
                type="submit"
                class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="hidden lg:col-span-1 lg:flex bg-screen"></section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped>
@import "@/assets/css/background.css";
</style>