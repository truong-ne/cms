<template>
  <section class="lg:grid lg:grid-cols-2 gap-4 bg-gray-50 h-screen">
    <div class="dark:bg-gray-900 items-center justify-center flex">
      <div
        class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 w-full"
      >
        <a href="#" class="flex items-center mb-5">
          <span
            class="text-2xl items font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl"
            ><mark class="px-3 py-1 text-white bg-blue-600 rounded"
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
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Tên đăng nhập</label
                >
                <input
                  type="username"
                  name="username"
                  id="username"
                  v-model="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tên đăng nhập"
                  required
                  oninvalid="this.setCustomValidity('Vui lòng nhập tên đăng nhập')"
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
                  v-model="password"
                  placeholder="••••••••"
                  required
                  oninvalid="this.setCustomValidity('Vui lòng nhập mật khẩu')"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <!-- <span
                class="w-full px-5 py-2.5"
                :class="!loading ? 'hidden' : ''"
              >
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </span> -->

              <button
                type="button"
                :class="
                  loading
                    ? ' bg-transparent'
                    : ' bg-primary hover:bg-primary'
                "
                :disabled="loading"
                @click="handleSubmit"
                class="w-full flex items-center justify-center overflow-hidden text-white focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm pb-3 pt-3.5 text-center"
              >
                <div role="status" v-if="loading">
                  <svg
                    aria-hidden="true"
                    class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>

                <span v-else> Xác thực </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:col-span-1 lg:flex bg-screen"></div>
  </section>
</template>

<script setup>
const username = ref("");
const password = ref("");

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");
const loading = ref(false);

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

async function handleSubmit() {
  loading.value = true;

  const authStore = useAuthStore();
  try {
    clearNuxtData();
    await authStore
      .login(username.value, password.value)
      .then(() => {
        toastStatus.value = "success";
        message.value = "Đăng nhập thành công!";
      })
      .catch((error) => {
        toastStatus.value = "error";
        message.value = error;
      });
    addToast();
  } catch (e) {
    toastStatus.value = "error";
    message.value = "Tên hoặc mật khẩu không đúng";
  }
  loading.value = false;
  addToast();

  // resetForm();
}

definePageMeta({
  layout: false,
  // middleware: ["auth"],
});
</script>

<style scoped>
@import "@/assets/css/background.css";
</style>
