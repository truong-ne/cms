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
          <h3 class="text-lg font-semibold text-gray-900">
            Chỉnh sửa thông tin
          </h3>
          <button
            id="buttonClose"
            type="button"
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
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Họ và tên</label
                >
                <input
                  type="text"
                  name="name"
                  id="name"
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Tổ/Thôn/Phường/Xã..."
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="blood"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Nhóm máu</label
                ><input
                  type="text"
                  name="blood"
                  id="blood"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="A+"
                  required
                />
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Nhân viên bán hàng"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Giới tính</label
                ><input
                  type="text"
                  name="gender"
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Nam"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="marital"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Tình trạng hôn nhân</label
                ><input
                  type="text"
                  name="marital"
                  id="marital"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                  placeholder="Đã kết hôn"
                  required
                />
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
              class="text-white inline-flex bg-primary items-center justify-center hover:bg-primary/80 focus:ring-0 font-medium rounded-xl text-sm px-5 py-2.5 text-center w-full sm:w-auto"
            >
              + Tạo tài khoản
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
onMounted(() => {});
</script>