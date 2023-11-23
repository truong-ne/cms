<template>
  <!-- Create modal -->
  <div
    id="updatePatient"
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
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Chỉnh sửa thông tin
          </h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-target="updatePatient"
            data-modal-toggle="updatePatient"
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
        <form action="#">
          <div class="grid gap-4 mb-4 sm:grid-cols-3 w-full">
            <div class="sm:col-span-2">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Họ tên</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Họ và tên bác sĩ"
                required
              />
            </div>
            <div class="sm:col-span-1">
              <label
                for="avatar"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Ảnh</label
              ><input
                type="file"
                name="avatar"
                id="avatar"
                accept=".png, jpg, jpeg, svg"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-auto"
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div class="sm:col-span-1">
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Số điện thoại</label
              >
              <input
                type="phone"
                name="phone"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="+84 "
                required
              />
            </div>
            <div class="sm:col-span-3">
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Địa chỉ</label
              ><input
                type="text"
                name="address"
                id="address"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Tổ/Thôn/Phường/Xã..."
                required
              />
            </div>
          </div>
          <div class="w-full flex items-center justify-center">
            <button
              type="submit"
              class="text-white inline-flex items-center justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full sm:w-auto"
            >
              <svg
                class="mr-1 -ml-1 w-6 h-6"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
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