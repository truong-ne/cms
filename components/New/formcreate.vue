<template>
  <!-- Create modal -->
  <div
    id="createNews"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] md:max-h-md p-2"
  >
    <div class="relative w-full max-w-3xl md:max-h-full">
      <!-- Modal content -->
      <div class="sm:relative p-4 bg-white rounded-lg shadow sm:p-5">
        <!-- Modal header -->
        <div
          class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5"
        >
          <h3 class="text-lg font-semibold text-gray-900">Thêm tin</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-target="createNews"
            data-modal-toggle="createNews"
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
                for="image"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errorImage,
                  'text-red-500 peer-focus:text-red-600 ': errorImage,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Ảnh</label
              ><input
                type="file"
                name="image"
                id="image"
                accept=".png, .jpg, .jpeg, .svg"
                :class="{
                  'border-gray-300 focus:border-blue-600 focus:ring-primary-600':
                    !errorImage,
                  'border-red-300 focus:border-red-600 focus:ring-red-600':
                    errorImage,
                }"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full px-2.5 border-gray-300 focus:border-blue-600 focus:ring-primary-600"
                v-on:change="uploadImage"
              />
              <span for="tag" class="text-xs text-red-500">
                {{ errorImage }}</span
              >
            </div>
            <!-- <div class="sm:col-span-1">
              <label
                for="tag"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.tag,
                  'text-red-500 peer-focus:text-red-600 ': errors.tag,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Nhãn</label
              >

              <input
                type="text"
                name="tag"
                id="tag"
                v-bind="tag"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
                :class="{
                  'border-gray-300 focus:border-blue-600 focus:ring-primary-600':
                    !errors.tag,
                  'border-red-300 focus:border-red-600 focus:ring-red-600':
                    errors.tag,
                }"
                placeholder="vd: covid-19"
              />
              <span for="tag" class="text-xs text-red-500">
                {{ errors.tag }}</span
              >
            </div> -->
            <div class="col-span-full">
              <label
                for="title"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.title,
                  'text-red-500 peer-focus:text-red-600 ': errors.title,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Tiêu đề bảng tin</label
              >
              <input
                type="text"
                name="title"
                id="title"
                v-bind="title"
                class="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
                :class="{
                  'border-gray-300 focus:border-blue-600 focus:ring-primary-600':
                    !errors.title,
                  'border-red-300 focus:border-red-600 focus:ring-red-600':
                    errors.title,
                }"
                placeholder="Tiêu đề"
              />
              <span for="title" class="text-xs text-red-500">
                {{ errors.title }}</span
              >
            </div>

            <div class="col-span-full">
              <label
                for="content"
                :class="{
                  'text-gray-500  peer-focus:text-blue-600 ': !errors.content,
                  'text-red-500 peer-focus:text-red-600 ': errors.content,
                }"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Nội dung</label
              >
              <textarea
                type="text"
                name="content"
                id="content"
                rows="10"
                v-bind="content"
                class="resize-none bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5"
                :class="{
                  'border-gray-300 focus:border-blue-600 focus:ring-primary-600':
                    !errors.content,
                  'border-red-300 focus:border-red-600 focus:ring-red-600':
                    errors.content,
                }"
                placeholder="Nội dung bảng tin"
              ></textarea>
              <span for="content" class="text-xs text-red-500">
                {{ errors.content }}</span
              >
              <!-- <select
                v-bind="content"
                id="content"
                :class="{
                  'border-gray-300  focus:border-blue-600 focus:ring-primary-500':
                    !errors.content,
                  'border-red-300  focus:border-red-600 focus:ring-red-500':
                    errors.content,
                }"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              >
                <option selected disabled value="">Chọn loại</option>
                <option value="%">%</option>
              </select>
              <span for="content" class="text-xs text-red-500">
                {{ errors.content }}</span
              > -->
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
              Tạo phiếu
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import "@vuepic/vue-datepicker/dist/main.css";
import * as yup from "yup";
import { useForm } from "vee-validate";

const { data } = defineProps(["data"]);

onMounted(() => {});

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

const { defineInputBinds, resetForm, isSubmitting, handleSubmit, errors } =
  useForm({
    validationSchema: yup.object({
      title: yup
        .string()
        .trim()
        .required("Bạn phải nhập tiêu đề cho bảng tin")
        .min(8, "Tiêu đề phải có ít nhất 8 kí tự"),
      // tag: yup.string().trim().required("Bạn phải nhập nhãn cho bảng tin"),

      content: yup
        .string()
        .trim()
        .required("Bạn phải nhập nôi dung cho bảng tin")
        .min(100, "Nội dung phải có ít nhất 100 kí tự"),
    }),
  });

resetForm();

const title = defineInputBinds("title", {
  validateOnInput: true,
});

const content = defineInputBinds("content", {
  validateOnInput: true,
});
const image = ref();
const errorImage = ref();

function uploadImage(e: any) {
  const validImageTypes = ["image/jpg", "image/jpeg", "image/png", "image/svg"];

  if (validImageTypes.includes(e.target.files[0].type)) {
    console.log(e.target.files[0].type);
    image.value = e.target.files[0];
    errorImage.value = undefined;
  } else {
    errorImage.value = "Hình ảnh không đúng định dạng .pnd, .jpeg, .jpg, .cvg";
  }
}

const onSubmit = handleSubmit(async (values) => {
  try {
    if (image.value == undefined) {
      errorImage.value = "Bạn phải thêm ảnh cho bảng tin";
    } else {
      clearNuxtData();
      await data
        .editBlog(image.value, "", values.title, values.content)
        .then(() => {
          toastStatus.value = "success";
          message.value = "Thêm thành công";
        })
        .catch((e: string) => {
          toastStatus.value = "error";
          message.value = e;
        });
      addToast();
    }
  } catch (error) {
    console.log(error);
  }
});
</script>