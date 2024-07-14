<template>
  <!-- Header -->

  <!-- Body -->
  <section class="w-full md:mb-4">
    <div class="bg-white rounded-2xl w-full mt-8 p-4 flex flex-col">
      <div class="w-full flex justify-center text-colorDF9F1E mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="58"
          height="50"
          viewBox="0 0 640 512"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0l-23.6 47.8l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37l-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8l46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1l38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32zM32 320c-17.7 0-32 14.3-32 32v128c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32zm416 96v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32"
          />
        </svg>
        <div class="font-bold text-2xl self-end ml-8">Bảng xếp hạng</div>
      </div>
      <div class="flex gap-8 justify-center">
        <div
          class="relative w-24 h-36"
          v-for="(doctor, index) in topDoctors"
          :key="index"
        >
          <div
            class="rounded-full bg-primary border-4 overflow-hidden"
            :class="{
              'border-yellow-300': index == 0,
              'border-gray-300': index == 1,
              'border-orange-200': index == 2,
            }"
          >
            <div
              class="absolute z-10 bottom-0 left-3 right-3 flex flex-col items-center"
            >
              <svg
                v-if="index == 0"
                width="72"
                height="71"
                viewBox="0 0 72 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.0088 39.7678L19.613 28L0.0361638 58.6031L14.9397 55.3283L18.2349 70.3245L18.3958 70.4274L38.0088 39.7678Z"
                  fill="#3D81C4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.0997 27.9998L35 38.5869L52.6127 70.361L56.8187 55.693L71.5779 59.9252L71.7449 59.8326L54.0997 27.9998Z"
                  fill="#3D81C4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.6967 4.28978C44.0855 4.26166 42.522 3.73851 41.2183 2.79135L40.7123 2.42369C37.9024 0.382209 34.0976 0.382207 31.2877 2.42369L30.9295 2.68398C29.7536 3.53831 28.3316 3.98667 26.8783 3.96131V3.96131C23.979 3.9107 21.3768 5.73278 20.4327 8.47459L20.324 8.79033C19.846 10.1783 18.9527 11.3856 17.765 12.2485L17.0304 12.7823C14.1642 14.8647 12.9648 18.5559 14.0596 21.9253L14.1697 22.2641C14.647 23.7331 14.6332 25.3176 14.1303 26.778V26.778C13.127 29.6918 14.114 32.9202 16.5751 34.7747L16.8586 34.9883C18.1044 35.9271 19.0313 37.2266 19.5134 38.7102L19.6527 39.139C20.6382 42.172 23.4645 44.2254 26.6536 44.2254V44.2254C28.2521 44.2254 29.8071 44.7458 31.0837 45.7077L31.2616 45.8418C34.0387 47.9345 37.8476 48.001 40.6962 46.0064L41.3916 45.5195C42.5945 44.6772 44.0274 44.2254 45.4958 44.2254H45.8299C48.7307 44.2254 51.3015 42.3576 52.1979 39.5988V39.5988C52.6472 38.216 53.5344 37.017 54.7255 36.183L55.13 35.8998C58.0299 33.8692 59.2925 30.2023 58.2575 26.8168L58.0328 26.082C57.5775 24.5927 57.5914 22.9994 58.0727 21.5182L58.1821 21.1813C59.1328 18.2555 58.0914 15.0503 55.6025 13.2421V13.2421C54.355 12.3357 53.4365 11.048 52.9856 9.57335L52.9615 9.49445C52.0308 6.45036 49.2459 4.35173 46.0632 4.29618L45.6967 4.28978Z"
                  fill="#FFCB28"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36 41C45.3888 41 53 33.3888 53 24C53 14.6112 45.3888 7 36 7C26.6112 7 19 14.6112 19 24C19 33.3888 26.6112 41 36 41ZM38.6719 32V14.9258H38.3086L31.043 17.4688V20.3047L35.0039 19.0977V32H38.6719Z"
                  fill="#FAA629"
                />
              </svg>
              <svg
                v-else-if="index == 1"
                width="72"
                height="69"
                viewBox="0 0 72 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.0088 37.7678L19.613 26L0.0361943 56.6031L14.9397 53.3283L18.2349 68.3245L18.3958 68.4274L38.0088 37.7678Z"
                  fill="#3D81C4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.0997 25.9998L35 36.5869L52.6127 68.361L56.8187 53.693L71.5779 57.9252L71.7449 57.8326L54.0997 25.9998Z"
                  fill="#3D81C4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M46.5306 4.49755C44.5886 4.49755 42.7262 3.72611 41.353 2.35292L41.2488 2.24878C38.2505 -0.749591 33.3891 -0.749593 30.3908 2.24878L30.1395 2.5001C28.8605 3.77905 27.1259 4.49755 25.3172 4.49755V4.49755C21.5508 4.49755 18.4975 7.55084 18.4975 11.3173V11.3173C18.4975 13.126 17.779 14.8606 16.5 16.1395L16.2487 16.3908C13.2504 19.3891 13.2504 24.2504 16.2487 27.2487L16.3528 27.3527C17.726 28.726 18.4975 30.5884 18.4975 32.5305V32.5305C18.4975 36.5745 21.7758 39.8529 25.8199 39.8529H25.9672C27.8149 39.8529 29.587 40.5869 30.8935 41.8934V41.8934C33.6142 44.6142 38.0254 44.6142 40.7461 41.8934V41.8934C42.0527 40.5869 43.8247 39.8529 45.6724 39.8529H46.0279C50.3495 39.8529 53.8528 36.3495 53.8528 32.0279V31.6726C53.8528 29.8248 54.5868 28.0527 55.8934 26.7462V26.7462C58.6142 24.0254 58.6142 19.6141 55.8934 16.8933V16.8933C54.5868 15.5868 53.8528 13.8147 53.8528 11.9669V11.8198C53.8528 7.77582 50.5745 4.49755 46.5306 4.49755V4.49755Z"
                  fill="#B0BEC5"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36 39C45.3888 39 53 31.3888 53 22C53 12.6112 45.3888 5 36 5C26.6112 5 19 12.6112 19 22C19 31.3888 26.6112 39 36 39ZM41.9766 30V27.1523H34.957L37.5352 24.2227C38.1445 23.6133 38.6914 23.0352 39.1758 22.4883C39.6602 21.9336 40.0742 21.3906 40.418 20.8594C40.7617 20.3281 41.0234 19.793 41.2031 19.2539C41.3906 18.7148 41.4844 18.1562 41.4844 17.5781C41.4844 16.5547 41.2695 15.6797 40.8398 14.9531C40.4102 14.2266 39.7773 13.668 38.9414 13.2773C38.1055 12.8867 37.0703 12.6914 35.8359 12.6914C34.6328 12.6914 33.582 12.9492 32.6836 13.4648C31.7852 13.9727 31.0859 14.6562 30.5859 15.5156C30.0859 16.3672 29.8359 17.3125 29.8359 18.3516H33.5156C33.5156 17.8125 33.6055 17.332 33.7852 16.9102C33.9648 16.4805 34.2227 16.1445 34.5586 15.9023C34.8945 15.6602 35.2969 15.5391 35.7656 15.5391C36.2031 15.5391 36.5742 15.6328 36.8789 15.8203C37.1836 16.0078 37.4141 16.2773 37.5703 16.6289C37.7344 16.9805 37.8164 17.4102 37.8164 17.918C37.8164 18.2305 37.7461 18.5742 37.6055 18.9492C37.4648 19.3164 37.2383 19.7266 36.9258 20.1797C36.6211 20.6328 36.2109 21.1562 35.6953 21.75L30.1875 27.5859V30H41.9766Z"
                  fill="#546F7A"
                />
              </svg>
              <svg
                v-else-if="index == 2"
                width="72"
                height="69"
                viewBox="0 0 72 69"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M38.0088 37.7678L19.613 26L0.0361943 56.6031L14.9397 53.3283L18.2349 68.3245L18.3958 68.4274L38.0088 37.7678Z"
                  fill="#3D81C4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.0997 25.9998L35 36.5869L52.6127 68.361L56.8187 53.693L71.5779 57.9252L71.7449 57.8326L54.0997 25.9998Z"
                  fill="#3D81C4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M48.8481 7.5424C46.3 7.5424 43.9455 6.183 42.6714 3.97629L42.553 3.7712C39.65 -1.25707 32.3923 -1.25707 29.4892 3.7712L29.3814 3.9579C28.1008 6.17599 25.7341 7.5424 23.1729 7.5424C17.6542 7.5424 14.213 13.5304 16.9723 18.3097C18.2464 20.5164 18.249 23.2398 16.975 25.4465C14.2298 30.2013 17.6613 36.1449 23.1517 36.1449C25.6998 36.1449 28.0543 37.5043 29.3284 39.711L29.4468 39.9161C32.3498 44.9443 39.6075 44.9443 42.5106 39.916L42.6184 39.7294C43.899 37.5113 46.2657 36.1449 48.8269 36.1449C54.3456 36.1449 57.7868 30.1569 55.0275 25.3775C53.7534 23.1708 53.7508 20.4474 55.0248 18.2407C57.77 13.4859 54.3385 7.5424 48.8481 7.5424Z"
                  fill="#D99433"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M36 39C45.3888 39 53 31.3888 53 22C53 12.6112 45.3888 5 36 5C26.6112 5 19 12.6112 19 22C19 31.3888 26.6112 39 36 39ZM35.5781 19.9102H33.7148V20.8008V21.8086V22.6641H35.5781C36.125 22.6641 36.5938 22.75 36.9844 22.9219C37.375 23.0859 37.6719 23.3516 37.875 23.7188C38.0859 24.0781 38.1914 24.5547 38.1914 25.1484C38.1914 25.5859 38.0938 25.9727 37.8984 26.3086C37.7109 26.6445 37.4336 26.9102 37.0664 27.1055C36.707 27.293 36.2695 27.3867 35.7539 27.3867C35.3242 27.3867 34.9258 27.2969 34.5586 27.1172C34.1992 26.9297 33.9141 26.6797 33.7031 26.3672C33.5 26.0469 33.3984 25.6875 33.3984 25.2891H29.7305C29.7305 26.1484 29.9023 26.8906 30.2461 27.5156C30.5898 28.1328 31.0469 28.6445 31.6172 29.0508C32.1875 29.4492 32.8242 29.7461 33.5273 29.9414C34.2305 30.1367 34.9375 30.2344 35.6484 30.2344C36.5312 30.2344 37.3516 30.125 38.1094 29.9062C38.8672 29.6797 39.5273 29.3516 40.0898 28.9219C40.6523 28.4922 41.0898 27.9648 41.4023 27.3398C41.7148 26.7148 41.8711 26.0039 41.8711 25.207C41.8711 24.5352 41.7422 23.9258 41.4844 23.3789C41.2266 22.832 40.8516 22.3672 40.3594 21.9844C39.9602 21.6739 39.4916 21.4225 38.9536 21.2302C39.3734 21.0347 39.7482 20.8017 40.0781 20.5312C40.5625 20.1328 40.9336 19.6797 41.1914 19.1719C41.457 18.6562 41.5898 18.1211 41.5898 17.5664C41.5898 16.5039 41.3398 15.6133 40.8398 14.8945C40.3477 14.168 39.6523 13.6211 38.7539 13.2539C37.8633 12.8789 36.8281 12.6914 35.6484 12.6914C34.625 12.6914 33.6797 12.8828 32.8125 13.2656C31.9531 13.6406 31.2617 14.1758 30.7383 14.8711C30.2227 15.5664 29.9648 16.3906 29.9648 17.3438H33.6328C33.6328 16.9688 33.7344 16.6484 33.9375 16.3828C34.1406 16.1094 34.4023 15.9023 34.7227 15.7617C35.0508 15.6133 35.3945 15.5391 35.7539 15.5391C36.2539 15.5391 36.6602 15.6328 36.9727 15.8203C37.293 16 37.5312 16.2461 37.6875 16.5586C37.8438 16.8711 37.9219 17.2266 37.9219 17.625C37.9219 18.0859 37.8359 18.4883 37.6641 18.832C37.5 19.1758 37.2422 19.4414 36.8906 19.6289C36.5469 19.8164 36.1094 19.9102 35.5781 19.9102Z"
                  fill="#FBEBB7"
                />
              </svg>
              <div class="font-normal text-md text-balance">
                {{
                  doctor.full_name.split(" ")[
                    doctor.full_name.split(" ").length - 1
                  ]
                }}
              </div>
            </div>
            <NuxtImg
              v-if="
                doctor.avatar != null &&
                doctor.avatar != ''
              "
              provider="cloudinary"
              width="400"
              height="400"
              :src="doctor.avatar"
              :alt="doctor.full_name"
              class="object-cover h-full group-hover:scale-[1.15] duration-200 transform ease-linear"
            />

            <NuxtImg
              v-else
              provider="cloudinary"
              src="healthline/avatar/doctors/default"
              width="700"
              height="700"
              class="object-cover h-full group-hover:scale-[1.15] duration-200 transform ease-linear"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden rounded-2xl bg-white w-full mt-8 p-8">
      <div class="text-2xl mb-6 mt-4 ml-4 font-bold">Danh sách bác sĩ</div>

      <div class="grid grid-cols-2 gap-8">
        <button
          class="relative col-span-1 w-full bg-white rounded-2xl group cursor-pointer outline outline-offset-2 outline-2 outline-primary/20 hover:outline-8"
          v-for="doctor in doctorStore.doctors"
          :key="doctor.id"
          @click="chooseDoctor(doctor.id)"
        >
          <div class="grid grid-cols-7 rounded-s-2xl">
            <div class="col-span-3 h-80 rounded-s-2xl overflow-hidden">
              <NuxtImg
                v-if="
                  doctor.avatar != null &&
                  doctor.avatar != ''
                "
                provider="cloudinary"
                width="400"
                height="400"
                :src="doctor.avatar"
                :alt="doctor.full_name"
                class="object-cover h-full group-hover:scale-[1.15] duration-200 transform ease-linear bg-primary/80"
              />

              <NuxtImg
                v-else
                provider="cloudinary"
                src="healthline/avatar/doctors/default"
                width="700"
                height="700"
                class="object-cover h-full group-hover:scale-[1.15] duration-200 transform ease-linear"
                :alt="doctor.full_name"
              />
            </div>
            <div
              class="relative col-span-4 p-4 flex flex-col place-items-start"
            >
              <div class="text-lg text-black font-bold">
                {{ doctor.full_name }}
              </div>
              <div class="text-xs text-gray-500 font-medium">
                ID: {{ doctor.id }}
              </div>

              <div class="flex items-center">
                <svg
                  class="w-4 h-4 me-1"
                  :class="{
                    'text-gray-300': i > doctor.ratings,
                    ' text-yellow-300': i <= doctor.ratings,
                  }"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                  v-for="i in 5"
                  :key="i"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </div>
              <div v-for="s in doctor.specialty" :key="s">
                <div class="text-xs font-light text-gray-500 mt-3">
                  {{ getByKey(s.specialty).toUpperCase() }}
                </div>
              </div>
              <div class="text-xs font-light text-gray-500 mt-1">
                {{ doctor.feePerMinutes ?? 0 }} ₫/phút
              </div>
              <div
                class="text-sm text-left font-normal text-gray-500 line-clamp-3 mt-6"
              >
                {{ doctor.biography }}
              </div>
              <div
                class="text-xs mt-4"
                :class="{
                  'text-green-500': doctor.is_active,
                  ' text-gray-300': !doctor.is_active,
                }"
              >
                {{ doctor.is_active ? "Đã kích hoạt" : "Chưa kích hoạt" }}
              </div>

              <div
                class="absolute bottom-0 left-0 right-0 my-5 flex gap-4 justify-center"
              >
                <a
                  :href="'/doctors/' + doctor.id"
                  class="flex items-center justify-center w-full md:w-auto text-white bg-colorDF9F1E font-medium rounded-xl text-sm px-4 py-2.5 hover:bg-colorDF9F1E/80"
                >
                  Xem hồ sơ
                </a>
                <button
                  type="button"
                  @click="toggle"
                  class="flex items-center justify-center w-full md:w-auto text-colorDF9F1E bg-white font-medium rounded-xl text-sm px-4 py-2.5 hover:outline-1 outline-colorDF9F1E outline outline-0"
                >
                  Chỉnh sửa
                </button>
                <button
                  type="button"
                  @click="showPopupDelete(doctor.id)"
                  class="flex items-center justify-center w-full md:w-auto text-red-500 bg-white font-medium rounded-xl text-sm px-4 py-2.5 hover:outline-1 outline-red-500 outline outline-0"
                >
                  Khoá
                </button>
              </div>
            </div>
          </div>
        </button>
      </div>

      <nav
        class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500">
          Hiển thị
          <span class="font-semibold text-gray-900"
            >{{ hitsPerPage * (currentPage - 1) + 1 }}-{{
              hitsPerPage * currentPage > totalHits
                ? totalHits
                : hitsPerPage * currentPage
            }}</span
          >
          của
          <span class="font-semibold text-gray-900">{{ totalHits }}</span>
        </span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <button
              type="button"
              :class="
                currentPage != 1
                  ? 'border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-gray-500'
                  : 'text-gray-300'
              "
              @click="previous"
              class="flex items-center justify-center h-full py-1.5 px-3 ml-0 bg-white rounded-l-lg border"
            >
              <span class="sr-only">Trước</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </li>

          <li>
            <button
              type="button"
              @click="choosePage(currentPage - 2)"
              v-if="currentPage - 2 >= 1"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage - 2 }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage - 1)"
              v-if="currentPage - 1 >= 1"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage - 1 }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage)"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-gray-100 border border-gray-300"
            >
              {{ currentPage }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage + 1)"
              v-if="currentPage + 1 <= totalPages"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage + 1 }}
            </button>
          </li>
          <li>
            <button
              type="button"
              @click="choosePage(currentPage + 2)"
              v-if="currentPage + 2 <= totalPages"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            >
              {{ currentPage + 2 }}
            </button>
          </li>

          <li>
            <button
              href="#"
              :class="
                totalPages != currentPage && totalHits > 0
                  ? 'border-gray-300 hover:bg-gray-100 hover:text-gray-700 text-gray-500'
                  : 'text-gray-300'
              "
              @click="next"
              class="flex items-center justify-center h-full py-1.5 px-3 leading-tight bg-white rounded-r-lg border b"
            >
              <span class="sr-only">Tiếp</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewbox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div
      id="delete-alert"
      tabindex="-1"
      aria-hidden="true"
      class="hidden bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 max-h-full"
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
          >
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white"
              v-if="doctorStore.doctor"
            >
              Khoá tài khoản
            </h3>
            <button
              type="button"
              id="close-delete"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5 space-y-4" v-if="doctorStore.doctor">
            <div
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              Bấm khoá để khoá tài khoản
              <p class="inline font-bold">{{ doctorStore.doctor.id }}</p>
            </div>
          </div>
          <!-- Modal footer -->
          <div
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
          >
            <button
              id="button-delete"
              @click="banDoctor()"
              type="button"
              class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Khoá
            </button>
            <button
              id="button-cancel"
              type="button"
              @click="closePopupDelete"
              class="py-2.5 px-5 ms-3 text-sm font-medium text-primary focus:outline-none bg-white rounded-lg border border-primary hover:bg-gray-100"
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface } from "flowbite";

const { search, result } = useMeiliSearch("doctors");

const mapSpecialty = Object.entries(Specialty).map(([key, value]) => ({
  key: key,
  value: value,
}));
const route = useRoute();
const storeToast = toastStore();
const toastStatus = ref("");
const message = ref("");

const loading = ref(false);
const { doctorStore, consultationStore } = defineProps([
  "doctorStore",
  "consultationStore",
]);

function showPopupDelete(id: string) {
  try {
    chooseDoctor(id);
    // if (popUpDelete.value.isHidden) {
    popUpDelete.value.show();
    // }
  } catch (e) {
    console.log(e);
  }
}

function closePopupDelete() {
  // if (popUpDelete.value.isVisible()) {
  popUpDelete.value.hide();
  // }
}

// onBeforeMount(async () => {
//   meilisearch();
//   try {
//     let date = new Date();
//     await consultationStore.getTop10Doctor(
//       date.getMonth() + 1,
//       date.getFullYear()
//     );
//     topDoctors.value = consultationStore.topDoctors;
//   } catch (e) {
//     console.log(e);
//   }
// });
onMounted(async () => {
  meilisearch();
  try {
    let date = new Date();
    await consultationStore.getTop10Doctor(
      date.getMonth() + 1,
      date.getFullYear()
    );
    topDoctors.value = consultationStore.topDoctors;
  } catch (e) {
    console.log(e);
  }
  setTimeout(() => {
    try {
      // select the two elements that we'll work with
      const $modalElement = document.getElementById("updateDoctor");
      const $closeButton = document.getElementById("buttonClose");
      const $popupDelete = document.getElementById("delete-alert");
      const $closeDelete = document.getElementById("close-delete");
      const $inputSeach = document.getElementById("input-search-doctor");

      if ($inputSeach) {
        $inputSeach.addEventListener("input", (event) => {
          // console.log(event.target.value);
          keySearch.value = event.target.value;
          meilisearch();
        });
      }

      // set modal options
      const modalOptions: ModalOptions = {
        backdropClasses: "bg-gray-900/50  fixed inset-0 z-40",
      };
      // create a new modal instance
      if ($modalElement) {
        modal.value = new Modal($modalElement, modalOptions);

        // set event listeners for the button to show the modal
        $closeButton!.addEventListener("click", () => modal.value.hide());
      }
      if ($modalElement) {
        popUpDelete.value = new Modal($popupDelete, modalOptions);

        // set event listeners for the button to show the modal
        $closeDelete!.addEventListener("click", () => popUpDelete.value.hide());
      }
    } catch (e) {
      console.log(e);
    }
  }, 0);
});

function toggle() {
  try {
    modal.value.toggle();
  } catch (e) {
    console.log(e);
  }
}

function chooseDoctor(id: string) {
  if (id != currentId.value) {
    currentId.value = id;
    doctorStore.chooseDoctor(id);
  }
}

function addToast() {
  storeToast.add({
    message: message.value,
    toastStatus: toastStatus.value,
  });
}

async function banDoctor() {
  try {
    await doctorStore
      .banDoctor()
      .then(() => {
        toastStatus.value = "success";
        message.value = "Khoá tài khoản thành công";
        addToast();
      })
      .catch((error: string) => {
        toastStatus.value = "error";
        message.value = error;
        addToast();
      });
    loading.value = false;
  } catch (error) {
    console.log(error);
  }
  closePopupDelete();
}

const modal = ref();
const popUpDelete = ref();
const keySearch = ref("");
const resultSearch = ref();
const hitsPerPage = ref(10);
const currentPage = ref(1);
const totalPages = ref();
const totalHits = ref(0);
const currentId = ref();
const topDoctors = ref<TopDoctor[]>([]);

function getByKey(searchKey: string) {
  for (let { key, value } of mapSpecialty) {
    if (key === searchKey) return value;
  }
  return "Không xác định";
}

async function previous() {
  if (currentPage.value > 1) {
    currentPage.value = currentPage.value - 1;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    currentId.value = undefined;
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
    doctorStore.saveDoctors(resultSearch.value);
  }
}

async function next() {
  if (currentPage.value < totalPages.value) {
    currentPage.value = currentPage.value + 1;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    currentId.value = undefined;
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
    doctorStore.saveDoctors(resultSearch.value);
  }
}
async function choosePage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    result.value = await search(keySearch.value.trim(), {
      hitsPerPage: hitsPerPage.value,
      page: currentPage.value,
    });
    currentId.value = undefined;
    resultSearch.value = result.value.hits;
    totalHits.value = result.value.totalHits;
    totalPages.value = result.value.totalPages;
    doctorStore.saveDoctors(resultSearch.value);
  }
}

async function meilisearch() {
  currentId.value = 1;
  result.value = await search(keySearch.value.trim(), {
    sort: ["ratings:desc"],
    hitsPerPage: hitsPerPage.value,
    page: 1,
  });
  currentId.value = undefined;
  resultSearch.value = result.value.hits;
  totalHits.value = result.value.totalHits;
  totalPages.value = result.value.totalPages;
  doctorStore.saveDoctors(resultSearch.value);
}
</script>