<template>
  <!-- 
  <div
    id="createPatient"
    tabindex="-1"
    aria-hidden="true"
    class="hidden sm:overflow-y-auto sm:overflow-x-hidden sm:fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div
      class="fixed overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 sm:relative p-4 w-full max-w-3xl max-h-full"
    >
      
    </div>
  </div> -->
  <section class="mt-8 bg-white rounded-2xl p-12">
    <div class="flex flex-col">
      <div class="text-lg text-black font-extrabold py-5 px-4">
        Thêm tài khoản bệnh nhân
      </div>
      <form action="#">
        <div class="mb-4 border-b border-gray-200">
          <ul
            class="flex flex-unwrap justify-start -mb-px text-sm font-medium text-center"
            id="default-styled-tab"
            data-tabs-toggle="#default-styled-tab-content"
            data-tabs-active-classes="text-purple-600 hover:text-purple-600  border-purple-600 "
            data-tabs-inactive-classes=" text-gray-500 hover:text-gray-600 border-gray-100 hover:border-gray-300 "
            role="tablist"
          >
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg"
                id="profile-styled-tab"
                data-tabs-target="#styled-profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Thông tin cá nhân
              </button>
            </li>
            <li class="me-2" role="presentation">
              <button
                class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                id="guardian-styled-tab"
                data-tabs-target="#styled-guardian"
                type="button"
                role="tab"
                aria-controls="guardian"
                aria-selected="false"
              >
                Thông tin người giám hộ
              </button>
            </li>
          </ul>
        </div>
        <div
          class="hidden p-4 text-md font-normal text-gray-500"
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div class="grid gap-4 mb-4 sm:grid-cols-6 w-full">
            <div class="col-span-6">
              <label
                for="avatar"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Ảnh</label
              ><input
                type="file"
                name="avatar"
                id="avatar"
                accept=".png, jpg, jpeg, svg"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-auto"
                required
              />
            </div>
            <div class="sm:col-span-2">
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
                placeholder="Họ và tên bệnh nhân"
                required
              />
            </div>

            <div class="sm:col-span-2">
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
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div class="sm:col-span-2">
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
                placeholder="+84 "
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Địa chỉ</label
              ><input
                type="text"
                name="address"
                id="address"
                v-model="address"
                v-bind="addressAttrs"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Tổ/Thôn/Phường/Xã..."
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="bloodGroup"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Nhóm máu</label
              >
              <select
                v-model="bloodGroup"
                v-bind="bloodGroupAttrs"
                id="bloodGroup"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              >
                <option selected disabled value="">Chọn nhóm máu</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </select>
              <!-- <span for="type" class="text-xs text-red-500">
                {{ errors.type }}</span
              > -->
            </div>
            <div class="sm:col-span-2">
              <label
                for="gender"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Giới tính</label
              >
              <select
                v-model="gender"
                v-bind="genderAttrs"
                id="gender"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              >
                <option selected disabled value="">Chọn giới tính</option>
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="orther">Khác</option>
              </select>
              <!-- <span for="type" class="text-xs text-red-500">
                {{ errors.type }}</span
              > -->
            </div>
            <div class="sm:col-span-2">
              <label
                for="occupation"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Nghề nghiệp</label
              ><input
                type="text"
                name="occupation"
                id="occupation"
                v-model="occupation"
                v-bind="occupationAttrs"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Nhân viên bán hàng"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="marital"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Tình trạng hôn nhân</label
              >
              <select
                v-model="marital"
                v-bind="maritalAttrs"
                id="marital"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              >
                <option selected disabled value="">
                  Chọn tình trạng hôn nhân
                </option>
                <option value="married">Đã kết hôn</option>
                <option value="single">Độc thân</option>
              </select>
              <!-- <span for="type" class="text-xs text-red-500">
                {{ errors.type }}</span
              > -->
            </div>
          </div>
        </div>

        <div
          class="hidden p-4"
          id="styled-guardian"
          role="tabpanel"
          aria-labelledby="guardian-tab"
        >
          <div class="grid gap-4 mb-4 sm:grid-cols-6 w-full">
            <div class="sm:col-span-2">
              <label
                for="guardian"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Người giám hộ</label
              ><input
                type="text"
                name="guardian"
                id="guardian"
                v-model="guardian"
                v-bind="guardianAttrs"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Họ và tên người giám hộ"
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-guardian"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Số điện thoại</label
              >
              <input
                type="phone-guardian"
                name="phone-guardian"
                id="phone-guardian"
                v-model="phoneGuardian"
                v-bind="phoneGuardianAttrs"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="+84 "
                required
              />
            </div>
            <div class="sm:col-span-2">
              <label
                for="address-guardian"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Địa chỉ</label
              ><input
                type="text"
                name="address-guardian"
                id="address-guardian"
                v-model="addressGuardian"
                v-bind="addressGuardianAttrs"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Tổ/Thôn/Phường/Xã..."
                required
              />
            </div>
          </div>
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
              Thêm
            </span>
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
<script setup lang="ts">
import * as yup from "yup";
import { useForm } from "vee-validate";

// const storeToast = toastStore();
// const toastStatus = ref("");
// const message = ref("");

// function addToast() {
//   storeToast.add({
//     message: message.value,
//     toastStatus: toastStatus.value,
//   });
// }

const { defineField, resetForm, isSubmitting, handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    bloodGroup: yup.string().trim().required("Bạn phải chọn nhóm máu"),
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
    gender: yup.string().trim().required("Giới tính không hợp lệ"),
  }),
  initialValues: {
    bloodGroup: "",
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    occupation: "",
    address: "",
    marital: "",
    guardian: "",
    phoneGuardian: "",
    addressGuardian: "",
  },
});

// resetForm();

const [bloodGroup, bloodGroupAttrs] = defineField("bloodGroup", {
  validateOnInput: true,
});
const [fullName, fullNameAttrs] = defineField("fullName", {
  validateOnInput: true,
});
const [phone, phoneAttrs] = defineField("phone", {
  validateOnInput: true,
});
const [email, emailAttrs] = defineField("email", {
  validateOnInput: true,
});
const [gender, genderAttrs] = defineField("gender", {
  validateOnInput: true,
});
const [occupation, occupationAttrs] = defineField("occupation", {
  validateOnInput: true,
});
const [address, addressAttrs] = defineField("address", {});
const [marital, maritalAttrs] = defineField("marital", {
  validateOnInput: true,
});
const [guardian, guardianAttrs] = defineField("guardian", {
  validateOnInput: true,
});
const [phoneGuardian, phoneGuardianAttrs] = defineField("phoneGuardian", {
  validateOnInput: true,
});
const [addressGuardian, addressGuardianAttrs] = defineField("addressGuardian", {
  validateOnInput: true,
});

const onSubmit = handleSubmit(async (values) => {});
</script>