<template>
  <!-- Create modal -->
  <div
    id="updateDoctor"
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
            id="buttonClose"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  id="education-certifications-styled-tab"
                  data-tabs-target="#styled-education-certifications"
                  type="button"
                  role="tab"
                  aria-controls="education-certifications"
                  aria-selected="false"
                >
                  Giáo dục và trình độ
                </button>
              </li>
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                  id="specialty-styled-tab"
                  data-tabs-target="#styled-specialty"
                  type="button"
                  role="tab"
                  aria-controls="specialty"
                  aria-selected="false"
                >
                  Chuyên ngành
                </button>
              </li>
              <li class="me-2" role="presentation">
                <button
                  class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300"
                  id="career-styled-tab"
                  data-tabs-target="#styled-career"
                  type="button"
                  role="tab"
                  aria-controls="career"
                  aria-selected="false"
                >
                  Nghề nghiệp
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-auto"
                  required
                />
              </div>
              <div class="col-span-2">
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập họ và tên"
                  required
                />
              </div>
              <div class="col-span-2">
                <div class="relative">
                  <label
                    for="dayOfBirth"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Ngày sinh</label
                  >
                  <div
                    class="absolute inset-y-0 start-0 top-7 flex items-center ps-3.5 pointer-events-none"
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
                    datepicker
                    datepicker-autohide
                    datepicker-format="dd/mm/yyyy"
                    name="date"
                    type="text"
                    required
                    v-model="dayOfBirth"
                    v-bind="dayOfBirthAttrs"
                    id="dayOfBirth"
                    class="bg-gray-50 ps-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Chọn ngày sinh"
                  />
                </div>
              </div>
              <div class="col-span-2">
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div class="col-span-2">
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập số điện thoại"
                  required
                />
              </div>
              <div class="col-span-2">
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập địa chỉ thường trú"
                  required
                />
              </div>

              <div class="col-span-2">
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Giới tính</label
                >
                <select
                  v-model="gender"
                  v-bind="genderAttrs"
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option selected disabled value="">Chọn giới tính</option>
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                  <option value="orther">Khác</option>
                </select>
              </div>
              <div class="col-span-6">
                <label
                  for="introduce"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Giới thiệu</label
                >
                <textarea
                  type="text"
                  name="introduce"
                  id="introduce"
                  v-model="introduce"
                  v-bind="introduceAttrs"
                  rows="4"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập tiểu sử"
                  required
                ></textarea>
              </div>
            </div>
          </div>

          <div
            class="hidden p-4"
            id="styled-education-certifications"
            role="tabpanel"
            aria-labelledby="education-certifications-tab"
          >
            <div class="grid gap-4 mb-4 sm:grid-cols-6 w-full">
              <div class="col-span-2">
                <label
                  for="typeOfEdu"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Loại hình giáo dục</label
                >
                <select
                  v-model="typeOfEdu"
                  v-bind="typeOfEduAttrs"
                  id="typeOfEdu"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option selected disabled value="">
                    Chọn loại hình giáo dục
                  </option>
                  <option value="education">Giáo dục</option>
                  <option value="experience">Kinh nghiệm</option>
                </select>
              </div>
              <div class="col-span-2">
                <label
                  for="degreeOfEdu"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Trình độ học vấn</label
                >
                <select
                  v-model="degreeOfEdu"
                  v-bind="degreeOfEduAttrs"
                  id="degreeOfEdu"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option selected disabled value="">
                    Chọn trình độ học vấn
                  </option>
                  <option value="master">Thạc sĩ</option>
                  <option value="doctor">Tiến sĩ</option>
                </select>
              </div>
              <div class="col-span-2">
                <label
                  for="institution"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Tổ chức</label
                ><input
                  type="text"
                  name="institution"
                  id="institution"
                  v-model="institution"
                  v-bind="institutionAttrs"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập tên tổ chức"
                  required
                />
              </div>
              <div class="col-span-2">
                <label
                  for="specialtyByDiploma"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Chuyên ngành theo văn bằng</label
                >
                <select
                  v-model="specialtyByDiploma"
                  v-bind="specialtyByDiplomaAttrs"
                  id="degreeOfEdu"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option selected disabled value="">Chọn chuyên ngành</option>
                  <!-- <option value="master">Thạc sĩ</option>
                <option value="doctor">Tiến sĩ</option> -->
                </select>
              </div>
              <div class="col-span-2">
                <label
                  for="addressEdu"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Địa chỉ</label
                ><input
                  type="text"
                  name="addressEdu"
                  id="addressEdu"
                  v-model="addressEdu"
                  v-bind="addressEduAttrs"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập địa chỉ"
                  required
                />
              </div>
              <div class="col-span-2">
                <label
                  for="diplomaNum"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Số sê-ri văn bằng</label
                ><input
                  type="text"
                  name="diplomaNum"
                  id="diplomaNum"
                  v-model="diplomaNum"
                  v-bind="diplomaNumAttrs"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập sê-ri văn bằng"
                  required
                />
              </div>
              <div class="col-span-2">
                <div class="relative">
                  <label
                    for="dateOfReceipt"
                    class="block mb-2 text-sm font-medium text-gray-900"
                    >Ngày nhận bằng</label
                  >
                  <div
                    class="absolute inset-y-0 start-0 top-7 flex items-center ps-3.5 pointer-events-none"
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
                    datepicker
                    datepicker-autohide
                    datepicker-format="dd/mm/yyyy"
                    name="date"
                    type="text"
                    required
                    v-model="dateOfReceipt"
                    v-bind="dateOfReceiptAttrs"
                    id="dateOfReceipt"
                    class="bg-gray-50 ps-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Chọn ngày nhận văn bằng"
                  />
                </div>
              </div>
              <div class="col-span-4">
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
            </div>
          </div>
          <div
            class="hidden p-4"
            id="styled-specialty"
            role="tabpanel"
            aria-labelledby="specialty-tab"
          >
            <div class="grid gap-4 mb-4 sm:grid-cols-6 w-full">
              <div class="col-span-2">
                <label
                  for="specialty"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Chuyên ngành</label
                >
                <select
                  v-model="specialty"
                  v-bind="specialtyAttrs"
                  id="specialty"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option selected disabled value="">Chọn chuyên ngành</option>
                  <!-- <option value="education">Giáo dục</option>
                <option value="experience">Kinh nghiệm</option> -->
                </select>
              </div>
              <div class="col-span-2">
                <label
                  for="levelOfSpe"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Trình độ</label
                >
                <select
                  v-model="levelOfSpe"
                  v-bind="levelOfSpeAttrs"
                  id="levelOfSpe"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option selected disabled value="">Chọn trình độ</option>
                  <option value="high">Cao</option>
                  <option value="medium">Trung bình</option>
                  <option value="low">Thấp</option>
                </select>
              </div>

              <div class="col-span-2">
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
            </div>
          </div>
          <div
            class="hidden p-4"
            id="styled-career"
            role="tabpanel"
            aria-labelledby="career-tab"
          >
            <div class="grid gap-4 mb-4 sm:grid-cols-6 w-full">
              <div class="col-span-3">
                <label
                  for="medicalInstitution"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Cơ sở y tế</label
                ><input
                  type="text"
                  name="medicalInstitution"
                  id="medicalInstitution"
                  v-model="medicalInstitution"
                  v-bind="medicalInstitutionAttrs"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập cơ sở y tế"
                  required
                />
              </div>
              <div class="col-span-3">
                <label
                  for="position"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Vị trí</label
                ><input
                  type="text"
                  name="position"
                  id="position"
                  v-model="position"
                  v-bind="positionAttrs"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Nhập vị trí"
                  required
                />
              </div>

              <div date-rangepicker id="datePeriod" class="col-span-6">
                <label
                  for="period"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Thời gian</label
                >
                <div class="flex items-center">
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
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
                      name="periodStart"
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Chọn thời gian bắt đầu"
                    />
                  </div>
                  <span class="mx-4 text-gray-500">đến</span>
                  <div class="relative">
                    <div
                      class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
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
                      name="periodEnd"
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Chọn thời gian kết thúc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex items-center justify-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex items-center justify-center text-white bg-colorDF9F1E hover:bg-colorDF9F1E/80 focus:ring-0 font-medium rounded-xl text-sm px-4 py-2.5"
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

const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

const { doctorStore } = defineProps(["doctorStore"]);

const currentId = ref();

// onUpdated(() => {
//   if (currentId.value != doctorStore.doctor.id) {
//     currentId.value = doctorStore.doctor.id;
//     setFieldValue("fullName", doctorStore.doctor.full_name);
//     setFieldValue("email", doctorStore.doctor.email);
//     setFieldValue("phone", doctorStore.doctor.phone);
//     setFieldValue("experience", doctorStore.doctor.experience);
//     setFieldValue("feePerMinute", doctorStore.doctor.fee_per_minutes);
//     setFieldValue("specialty", doctorStore.doctor.specialty);
//   }
// });

// const mapSpecialty = Object.entries(Specialty).map(([key, value]) => ({
//   key: key,
//   value: value,
// }));

const { defineField, resetForm, isSubmitting, handleSubmit, errors } = useForm({
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
    gender: yup.string().trim().required("Giới tính không hợp lệ"),
    dayOfBirth: yup
      .date()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .required()
      .min(new Date(1900), "Date cannot be this early")
      .max(new Date(), "Date too much in the future")
      .test(
        "format",
        "Date is invalid",
        (date) => (date?.getFullYear() ?? 0) > new Date().getFullYear()
      ),
  }),
  initialValues: {
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    dayOfBirth: "",
    address: "",
    introduce: "",
    typeOfEdu: "",
    degreeOfEdu: "",
    institution: "",
    specialtyByDiploma: "",
    addressEdu: "",
    diplomaNum: "",
    dateOfReceipt: "",
    specialty: "",
    levelOfSpe: "",
    medicalInstitution: "",
    position: "",
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
const [gender, genderAttrs] = defineField("gender", {
  validateOnInput: true,
});
const [address, addressAttrs] = defineField("address", {});
const [introduce, introduceAttrs] = defineField("introduce", {});
const [dayOfBirth, dayOfBirthAttrs] = defineField("dayOfBirth", {
  validateOnInput: true,
});
const [typeOfEdu, typeOfEduAttrs] = defineField("typeOfEdu", {
  validateOnInput: true,
});
const [degreeOfEdu, degreeOfEduAttrs] = defineField("degreeOfEdu", {
  validateOnInput: true,
});
const [institution, institutionAttrs] = defineField("institution", {
  validateOnInput: true,
});
const [specialtyByDiploma, specialtyByDiplomaAttrs] = defineField(
  "specialtyByDiploma",
  {
    validateOnInput: true,
  }
);
const [addressEdu, addressEduAttrs] = defineField("addressEdu", {});
const [diplomaNum, diplomaNumAttrs] = defineField("diplomaNum", {
  validateOnInput: true,
});
const [dateOfReceipt, dateOfReceiptAttrs] = defineField("dateOfReceipt", {
  validateOnInput: true,
});
const [specialty, specialtyAttrs] = defineField("specialty", {
  validateOnInput: true,
});
const [levelOfSpe, levelOfSpeAttrs] = defineField("levelOfSpe", {
  validateOnInput: true,
});
const [position, positionAttrs] = defineField("position", {
  validateOnInput: true,
});
const [medicalInstitution, medicalInstitutionAttrs] = defineField(
  "medicalInstitution",
  {
    validateOnInput: true,
  }
);

// const onSubmit = handleSubmit(async (values) => {
//   const doctor: Doctor = {
//     id: doctorStore.doctor.id,
//     full_name: values.fullName,
//     specialty: values.specialty,
//     email: values.email,
//     phone: values.phone,
//     experience: values.experience,
//     fee_per_minutes: values.feePerMinute,
//     updated_at: "",
//   };

//   clearNuxtData();
//   await doctorStore
//     .updateDoctor(doctor)
//     .then(() => {
//       toastStatus.value = "success";
//       message.value = "Thêm thành công";
//       addToast();
//     })
//     .catch((e: string) => {
//       toastStatus.value = "error";
//       message.value = e;
//       addToast();
//     });
// });
</script>