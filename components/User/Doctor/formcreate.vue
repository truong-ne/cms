<template>
  <!-- Create modal -->
  <div
    id="createDoctor"
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
          <h3 class="text-lg font-semibold text-gray-900">Thêm bác sĩ</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-target="createDoctor"
            data-modal-toggle="createDoctor"
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
          <div class="grid gap-4 mb-4 sm:grid-cols-3 w-full">
            <div class="sm:col-span-2">
              <label
                for="name"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.fullName,
                  'text-red-500 peer-focus:text-red-600 ': errors.fullName,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Họ tên</label
              >
              <input
                type="text"
                name="name"
                id="name"
                v-bind="fullName"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
                :class="{
                  'border-gray-300 focus:border-blue-600 focus:ring-primary-600':
                    !errors.fullName,
                  'border-red-300 focus:border-red-600 focus:ring-red-600':
                    errors.fullName,
                }"
                placeholder="Họ và tên bác sĩ"
              />
              <span for="name" class="text-xs text-red-500">
                {{ errors.fullName }}</span
              >
            </div>
            <div class="sm:col-span-1">
              <label
                for="specialty"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.specialty,
                  'text-red-500 peer-focus:text-red-600 ': errors.specialty,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Chuyên ngành</label
              >
              <select
                v-bind="specialty"
                id="specialty"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-500':
                    !errors.specialty,
                  'border-red-300  focus:border-red-600 focus:ring-red-500':
                    errors.specialty,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option selected disabled value="">Chọn chuyên ngành</option>
                <option
                  v-for="{ key, value } in mapSpecialty"
                  :value="key"
                  :key="key"
                >
                  {{ value }}
                </option>
              </select>
              <span for="specialty" class="text-xs text-red-500">
                {{ errors.specialty }}</span
              >
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.email,
                  'text-red-500 peer-focus:text-red-600 ': errors.email,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Email</label
              ><input
                type="email"
                name="email"
                id="email"
                v-bind="email"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-600':
                    !errors.email,
                  'border-red-300  focus:border-red-600 focus:ring-red-600':
                    errors.email,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
              <span for="email" class="text-xs text-red-500">
                {{ errors.email }}
              </span>
            </div>
            <div class="sm:col-span-1">
              <label
                for="phone"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.phone,
                  'text-red-500 peer-focus:text-red-600 ': errors.phone,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Số điện thoại</label
              >
              <input
                type="phone"
                name="phone"
                v-bind="phone"
                id="phone"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-600':
                    !errors.phone,
                  'border-red-300  focus:border-red-600 focus:ring-red-600':
                    errors.phone,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="+84 "
              />
              <span for="phone" class="text-xs text-red-500">
                {{ errors.phone }}</span
              >
            </div>
            <div>
              <label
                for="experience"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ':
                    !errors.experience,
                  'text-red-500 peer-focus:text-red-600 ': errors.experience,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Kinh nghiệm</label
              ><input
                type="number"
                name="experience"
                id="experience"
                v-bind="experience"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-600':
                    !errors.experience,
                  'border-red-300  focus:border-red-600 focus:ring-red-600':
                    errors.experience,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="1"
              />
              <span for="experience" class="text-xs text-red-500">
                {{ errors.experience }}</span
              >
            </div>
            <div>
              <label
                for="fee"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ':
                    !errors.feePerMinute,
                  'text-red-500 peer-focus:text-red-600 ': errors.feePerMinute,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Phí mỗi phút</label
              ><input
                type="number"
                name="fee"
                id="fee"
                v-bind="feePerMinute"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-600':
                    !errors.feePerMinute,
                  'border-red-300  focus:border-red-600 focus:ring-red-600':
                    errors.feePerMinute,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="1,000"
              />
              <span for="fee" class="text-xs text-red-500">
                {{ errors.feePerMinute }}</span
              >
            </div>
            <!-- <div class="sm:col-span-1">
              <label
                for="avatar"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Ảnh</label
              ><input
                type="file"
                name="avatar"
                id="avatar"
                accept=".png, jpg, jpeg, svg"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-auto"
              />
            </div>
            <div class="sm:col-span-3">
              <label
                for="biography"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Tiểu sử</label
              ><textarea
                id="biography"
                rows="4"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Thông tin bác sĩ"
              ></textarea>
            </div> -->
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
              Tạo tài khoản
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Specialty } from "~/stores/enums/enum";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { type Doctor } from "~/stores/structs/doctor_struct";

const { data } = defineProps(["data"]);

const mapSpecialty = Object.entries(Specialty).map(([key, value]) => ({
  key: key,
  value: value,
}));

const { defineInputBinds, resetForm, isSubmitting, handleSubmit, errors } =
  useForm({
    validationSchema: yup.object({
      fullName: yup
        .string()
        .trim()
        .required("Họ và tên không hợp lệ")
        .min(2, "Họ và tên không hợp lệ"),
      email: yup
        .string()
        .trim()
        .email("Email không hợp lệ")
        .required("Email không hợp lệ"),
      phone: yup
        .string()
        .trim()
        .matches(
          /([\+84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
          "Số điện thoại phải bắt đầu: +84 hoặc 03, 09, ..."
        )
        .required("Số điện thoại không hợp lệ"),
      experience: yup
        .number()
        .typeError("Số năm kinh nghiệm không hợp lệ")
        .min(0, "Số năm kinh nghiệm không thể âm")
        .max(70, "Số năm kinh nghiệm không thể lớp hơn 70")
        .positive("Số năm kinh nghiệm không thể âm")
        .integer("Số năm kinh nghiệm không hợp lệ")
        .required("Số năm kinh nghiệm không hợp lệ"),
      feePerMinute: yup
        .number()
        .typeError("Phí khám không hợp lệ")
        .min(0, "Phí khám không thể âm")
        .required("Phí khám không hợp lệ"),
      specialty: yup.string().trim().required("Bạn chưa chọn chuyên ngành"),
    }),
  });

resetForm();

const fullName = defineInputBinds("fullName", {
  validateOnInput: true,
});
const phone = defineInputBinds("phone", {
  validateOnInput: true,
});
const email = defineInputBinds("email", {
  validateOnInput: true,
});
const experience = defineInputBinds("experience", {
  validateOnInput: true,
});
const feePerMinute = defineInputBinds("feePerMinute", {
  validateOnInput: true,
});
const specialty = defineInputBinds("specialty", {
  validateOnInput: true,
});

const onSubmit = handleSubmit(async (values) => {
  const doctor: Doctor = {
    full_name: values.fullName,
    specialty: values.specialty,
    email: values.email,
    phone: values.phone,
    experience: values.experience,
    fee_per_minutes: values.feePerMinute,
  };
  console.log(doctor);
});
</script>