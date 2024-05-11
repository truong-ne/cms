<template>
  <!-- Create modal -->
  <div id="createDiscount" tabindex="-1" aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] md:max-h-md p-2">
    <div class="relative w-full max-w-3xl md:max-h-full">
      <!-- Modal content -->
      <div class="sm:relative p-4 bg-white rounded-lg shadow sm:p-5">
        <!-- Modal header -->
        <div class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
          <h3 class="text-lg font-semibold text-gray-900">
            Thêm phiếu giảm giá
          </h3>
          <button type="button" data-modal-target="createDiscount" data-modal-toggle="createDiscount"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <form action="#" @submit.prevent="onSubmit">
          <div class="grid gap-4 mb-4 sm:grid-cols-2 w-full">
            <div class="col-span-1">
              <label for="code" :class="{
                'text-gray-500  peer-focus:text-blue-600 ': !errors.code,
                'text-red-500 peer-focus:text-red-600 ': errors.code,
              }" class="block mb-2 text-sm font-medium text-gray-900">Mã giảm giá</label>
              <input type="text" name="code" id="code" v-model="code" v-bind="codeAttrs"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5" :class="{
                  'border-gray-300 focus:border-blue-600 focus:ring-primary':
                    !errors.code,
                  'border-red-300 focus:border-red-600 focus:ring-red-600':
                    errors.code,
                }" placeholder="FREESHIP" />
              <span for="code" class="text-xs text-red-500">
                {{ errors.code }}</span>
            </div>
            <div class="col-span-1">
              <label for="type" :class="{
                'text-gray-500  peer-focus:text-blue-600 ': !errors.type,
                'text-red-500 peer-focus:text-red-600 ': errors.type,
              }" class="block mb-2 text-sm font-medium text-gray-900">Loại</label>
              <select v-model="type" v-bind="typeAttrs" id="type" :class="{
                'border-gray-300  focus:border-blue-600 focus:ring-primary':
                  !errors.type,
                'border-red-300  focus:border-red-600 focus:ring-red-500':
                  errors.type,
              }" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                <option selected disabled value="">Chọn loại</option>
                <option value="%">%</option>
                <option value="vnd">VNĐ</option>
              </select>
              <span for="type" class="text-xs text-red-500">
                {{ errors.type }}</span>
            </div>

            <div class="col-span-1">
              <label for="value" :class="{
                'text-gray-500  peer-focus:text-blue-600 ': !errors.value,
                'text-red-500 peer-focus:text-red-600 ': errors.value,
              }" class="block mb-2 text-sm font-medium text-gray-900">Giá trị</label><input type="number" name="value"
                id="value" v-model="value" v-bind="valueAttrs" :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary':
                    !errors.value,
                  'border-red-300  focus:border-red-600 focus:ring-red-600':
                    errors.value,
                }" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="--" />
              <span for="value" class="text-xs text-red-500">
                {{ errors.value }}
              </span>
            </div>

            <!-- <div class="relative max-w-sm"></div> -->
            <div class="col-span-1">
              <div class="relative">
                <label for="dateOfReceipt" class="block mb-2 text-sm font-medium text-gray-900">Ngày nhận bằng</label>
                <div class="absolute inset-y-0 start-0 top-7 flex items-center ps-3.5 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 " aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input datepicker datepicker-autohide datepicker-format="dd/mm/yyyy" name="date" type="text" required
                  id="expirationTime" v-model="expirationTime" v-bind="expirationTimeAttrs"
                  class="bg-gray-50 ps-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Chọn ngày nhận văn bằng" />
              </div>
            </div>
          </div>

          <div class="w-full flex items-center justify-center">
            <button type="submit" :disabled="isSubmitting"
              class="flex items-center justify-center text-black bg-blue-500 font-medium rounded-lg text-sm px-4 py-2">
              <div role="status" v-if="isSubmitting">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin  fill-blue-600"
                  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>

              <span v-else class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-2" fill="currentColor" aria-hidden="true"
                  viewBox="0 0 448 512">
                  <path
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
                Tạo phiếu
              </span>
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
import { type Discount } from "~/stores/structs/discount_struct";
import Datepicker from "flowbite-datepicker/Datepicker";

const { discountStore } = defineProps(["discountStore"]);

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

const { defineField, resetForm, isSubmitting, handleSubmit, errors } = useForm({
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
    expirationTime: yup
      .date()
      .nullable()
      .transform((curr: any, orig: any) => (orig === "" ? null : curr))
      .required()
      .min(new Date(1900), "Date cannot be this early")
      .max(new Date(), "Date too much in the future")
      .test(
        "format",
        "Date is invalid",
        (date: Date) => (date?.getFullYear() ?? 0) > new Date().getFullYear()
      ),
  }),
  initialValues: {
    code: "",
    value: "",
    type: "",
    expirationTime: "",
  },
});

resetForm();

const [code, codeAttrs] = defineField("code", {
  validateOnInput: true,
});
const [value, valueAttrs] = defineField("value", {
  validateOnInput: true,
});

const [type, typeAttrs] = defineField("type", {
  validateOnInput: true,
});
const [expirationTime, expirationTimeAttrs] = defineField("expirationTime", {
  validateOnInput: true,
});

const onSubmit = handleSubmit(async (values: any) => {
  if (expirationTime.value == undefined || expirationTime.value == "") {
    // errorExpirationTime.value = "Vui lòng chọn ngày hết hạn";
    return;
  } else {
    // errorExpirationTime.value = undefined;
    const discount: Discount = {
      code: values.code,
      value: values.value,
      type: values.type,
      expiration_time: expirationTime.value.toString(),
    };

    clearNuxtData();
    await discountStore
      .createDiscount(discount)
      .then(() => {
        toastStatus.value = "success";
        message.value = "Thêm thành công";
        addToast();
      })
      .catch((e: string) => {
        toastStatus.value = "error";
        message.value = e;
        addToast();
      });
  }
});
onMounted(() => {
  const expirationTime = document.getElementById("expirationTime");
  new Datepicker(expirationTime, {
    todayHighlight: true,
    autohide: true,
    format: "dd/mm/yyyy",
    language: "vi",
    defaultDate: false,
    maxDate: new Date(),
    minDate: new Date(1900),
  });
});
</script>