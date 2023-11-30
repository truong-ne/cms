<template>
  <!-- Create modal -->
  <div
    id="updateDiscount"
    tabindex="-1"
    aria-hidden="true"
    class="hidden sm:overflow-y-auto sm:overflow-x-hidden sm:fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div
      class="fixed overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 sm:relative p-4 w-full max-w-3xl max-h-full"
    >
      <!-- Modal content -->
      <div class="sm:relative p-4 bg-white rounded-lg shadow sm:p-5">
        <!-- Modal header -->
        <div
          class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
        >
          <h3 class="text-lg font-semibold text-gray-900">
            Chỉnh sửa phiếu giảm giá
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-target="createDiscount"
            data-modal-toggle="createDiscount"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form action="#" @submit.prevent="onSubmit">
          <div class="grid gap-4 mb-4 sm:grid-cols-2 w-full">
            <div class="sm:col-span-1">
              <label
                for="code"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.code,
                  'text-red-500 peer-focus:text-red-600 ': errors.code,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Mã giảm giá</label
              >
              <input
                type="text"
                name="code"
                id="code"
                v-bind="code"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
                :class="{
                  'border-gray-300 focus:border-blue-600 focus:ring-primary-600':
                    !errors.code,
                  'border-red-300 focus:border-red-600 focus:ring-red-600':
                    errors.code,
                }"
                placeholder="Họ và tên bác sĩ"
              />
              <span for="code" class="text-xs text-red-500">
                {{ errors.code }}</span
              >
            </div>
            <div class="sm:col-span-1">
              <label
                for="type"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.type,
                  'text-red-500 peer-focus:text-red-600 ': errors.type,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Loại</label
              >
              <select
                v-bind="type"
                id="type"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-500':
                    !errors.type,
                  'border-red-300  focus:border-red-600 focus:ring-red-500':
                    errors.type,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option selected disabled value="">Chọn loại</option>
                <!-- <option
                  v-for="{ key, value } in mapSpecialty"
                  :value="key"
                  :key="key"
                >
                  {{ value }}
                </option> -->
              </select>
              <span for="type" class="text-xs text-red-500">
                {{ errors.type }}</span
              >
            </div>

            <div class="sm:col-span-1">
              <label
                for="value"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.value,
                  'text-red-500 peer-focus:text-red-600 ': errors.value,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >value</label
              ><input
                type="number"
                name="value"
                id="value"
                v-bind="value"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-600':
                    !errors.value,
                  'border-red-300  focus:border-red-600 focus:ring-red-600':
                    errors.value,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
              <span for="value" class="text-xs text-red-500">
                {{ errors.value }}
              </span>
            </div>

            <!-- <div class="relative max-w-sm"></div> -->
            <div class="relative sm:col-span-1">
              <label
                for="expirationTime"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ':
                    !errors.expirationTime,
                  'text-red-500 peer-focus:text-red-600 ':
                    errors.expirationTime,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Ngày hết hạn</label
              >
              <div
                class="absolute inset-y-0 left-0 flex items-center ps-3 pt-6 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                  />
                </svg>
              </div>
              <input
                id="expirationTime"
                v-bind="expirationTime"
                datepicker
                datepicker-format="mm/dd/yyyy"
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Chọn ngày"
              />
              <span for="expirationTime" class="text-xs text-red-500">
                {{ errors.expirationTime }}</span
              >
            </div>
          </div>
          <div class="w-full flex items-center justify-center">
            <button
              type="submit"
              class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5 mr-2"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 448 512"
              >
                <path
                  d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                />
              </svg>
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as yup from "yup";
import { useForm } from "vee-validate";

const { defineInputBinds, resetForm, isSubmitting, handleSubmit, errors } =
  useForm({
    validationSchema: yup.object({
      code: yup
        .string()
        .trim()
        .required("Bạn phải nhập mã giảm giá")
        .min(8, "Mã giảm giá không hợp lệ"),
      value: yup
        .number()
        .positive("Giá trị phải lớn hơn 0")
        .required("Bạn phải nhập giá trị "),

      type: yup.string().trim().required("Bạn chưa chọn loại"),
      expirationTime: yup.date().required("Bạn phải nhập ngày hết hạn"),
    }),
  });

resetForm();

const code = defineInputBinds("code", {
  validateOnInput: true,
});
const value = defineInputBinds("value", {
  validateOnInput: true,
});

const type = defineInputBinds("type", {
  validateOnInput: true,
});
const expirationTime = defineInputBinds("expirationTime", {
  validateOnInput: true,
});

const onSubmit = handleSubmit(async (values) => {
  console.log("OK");
});
</script>