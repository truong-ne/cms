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
            <form
              class="space-y-4 md:space-y-6"
              action="#"
              @submit.prevent="onSubmit"
            >
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Tên đăng nhập</label
                >
                <input
                  type="username"
                  name="username"
                  v-bind="username"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tên đăng nhập"
                  required
                  oninvalid="this.setCustomValidity('Vui lòng nhập tên đăng nhập')"
                  oninput="setCustomValidity('')"
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
                  v-bind="password"
                  placeholder="••••••••"
                  required
                  oninvalid="this.setCustomValidity('Vui lòng nhập mật khẩu')"
                  oninput="setCustomValidity('')"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <span
                class="w-full px-5 py-2.5"
                :class="!isSubmitting ? 'hidden' : ''"
              >
                <l-jelly size="40" speed="0.9" color="white"></l-jelly>
              </span>

              <button
                type="submit"
                :class="
                  isSubmitting
                    ? ' bg-transparent'
                    : ' bg-primary-600 hover:bg-primary-700'
                "
                :disabled="isSubmitting"
                class="w-full overflow-hidden text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm pb-3 pt-3.5 text-center"
              >
                <l-jelly
                  size="40"
                  speed="0.9"
                  color="blue"
                  v-if="isSubmitting"
                ></l-jelly>
                <span v-else> Xác thực </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section class="hidden lg:col-span-1 lg:flex bg-screen"></section>
  </div>
  <ToastList />
</template>

<script setup>
import { useForm } from "vee-validate";
import * as yup from "yup";

const { defineInputBinds, resetForm, isSubmitting, handleSubmit, errors } =
  useForm({
    validationSchema: yup.object({
      username: yup.string().trim(),
      password: yup.string().trim(),
    }),
  });

resetForm();

const username = defineInputBinds("username");
const password = defineInputBinds("password");

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

const onSubmit = handleSubmit(async (values) => {
  toastStatus.value = "success";
  message.value = "Đăng nhập thành công!";
  const authStore = useAuthStore();
  await authStore
    .login(values.username, values.password)
    // .then(() => {
    //   toastStatus.value = "success";
    //   message.value = "Đăng nhập thành công!";
    //   addToast();
    //   return true;
    // })
    .catch(() => {
      toastStatus.value = "error";
      message.value = "Tên hoặc mật khẩu không đúng";
    });
  addToast();

  // resetForm();
});

definePageMeta({
  layout: false,
});
</script>

<style scoped>
@import "@/assets/css/background.css";
</style>
