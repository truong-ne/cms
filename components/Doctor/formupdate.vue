<template>
  <!-- Create modal -->
  <div
    id="updateDoctor"
    tabindex="-1"
    aria-hidden="true"
    class="hidden bg-black/20 sm:overflow-y-auto sm:overflow-x-hidden sm:fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
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
            Chỉnh sửa thông tin
          </h3>
          <button
            type="button"
            id="buttonClose"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
          <div class="col-span-2 mt-2">
            <label
              for="fullName"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Họ và tên</label
            >
            <input
              type="text"
              name="fullName"
              id="fullName"
              v-model="fullName"
              v-bind="fullNameAttrs"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Nhập họ và tên"
              required
            />
          </div>
          <div class="col-span-2 mt-2">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Email</label
            ><input
              type="email"
              name="email"
              id="email"
              v-bind="emailAttrs"
              v-model="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Nhập email"
              required
            />
          </div>
          <div class="col-span-2 mt-2">
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Số điện thoại</label
            >
            <input
              type="phone"
              name="phone"
              id="phone"
              v-model="phone"
              v-bind="phoneAttrs"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Nhập số điện thoại"
              required
            />
          </div>
          <div class="col-span-2 mt-2">
            <label
              for="feePerMinute"
              class="block mb-2 text-sm font-medium text-gray-900"
              >Phí khám mỗi phút</label
            ><input
              type="text"
              name="feePerMinute"
              id="feePerMinute"
              v-model="feePerMinute"
              v-bind="feePerMinuteAttrs"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              placeholder="Phí khám"
              required
            />
          </div>
          <div class="col-span-2">
            <label
              for="active"
              class="block mt-2 text-sm font-medium text-gray-900"
              >Kích hoạt tài khoản</label
            >
            <input
              type="checkbox"
              value="false"
              class="w-4 h-4 border-gray-300 rounded focus:ring-0"
              name="active"
              id="active"
              v-model="active"
              v-bind="activeAttrs"
            />
          </div>
          <div class="w-full flex items-center justify-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex items-center justify-center text-white bg-primary hover:bg-primary/80 focus:ring-0 font-medium rounded-xl text-sm px-4 py-2.5"
            >
              <div role="status" v-if="isSubmitting">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
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

              <span v-else class="flex items-center">
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

const { doctorStore } = defineProps(["doctorStore"]);
const currentId = ref();

onUpdated(()=>{
  if (currentId.value != doctorStore.doctor.id) {
    currentId.value = doctorStore.doctor.id;
    setFieldValue("fullName", doctorStore.doctor.full_name);
    setFieldValue("phone", doctorStore.doctor.phone);
    setFieldValue("email", doctorStore.doctor.email);
    setFieldValue("feePerMinute", doctorStore.doctor.fee_per_minutes);
    setFieldValue("active", doctorStore.doctor.is_active);
  }
})

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

const { defineField, resetForm, isSubmitting, handleSubmit, errors, setFieldValue } = useForm({
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
  }),
  initialValues: {
    fullName: "",
    phone: "",
    email: "",
    feePerMinute: "",
    active: "",
  },
});

resetForm();
const [fullName, fullNameAttrs] = defineField("fullName", {
  validateOnInput: true,
});
const [phone, phoneAttrs] = defineField("phone", {
  validateOnInput: true,
});
const [email, emailAttrs] = defineField("email", {
  validateOnInput: true,
});
const [feePerMinute, feePerMinuteAttrs] = defineField("feePerMinute", {
  validateOnInput: true,
});
const [active, activeAttrs] = defineField("active", {
  validateOnInput: true,
});



const onSubmit = handleSubmit(async (values:any) => {
  const doctor: Doctor = {
    id: doctorStore.doctor.id,
full_name: values.fullName,
    email: values.email,
    phone: values.phone,
    is_active:values.active,
    fee_per_minutes: values.feePerMinute,
  };
  // if(doctorStore.doctor.full_name!=values.fullName){
  //   doctor.full_name = values.fullName;
  // }
  // if(doctorStore.doctor.email!=values.email){
  //   doctor.email = values.email;
  // }
  // if(doctorStore.doctor.phone!=values.phone){
  //   doctor.phone = values.phone;
  // }
  // if(doctorStore.doctor.fee_per_minutes!=values.fullName){
  //   doctor.fee_per_minutes = values.fullName;
  // }

  clearNuxtData();
  await doctorStore
    .updateDoctor(doctor)
    .then(() => {
      toastStatus.value = "success";
      message.value = "Cập nhật thành công";
      addToast();
    })
    .catch((e: string) => {
      toastStatus.value = "error";
      message.value = e;
      addToast();
    });
});
</script>