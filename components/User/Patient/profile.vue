<template>
  <section class="flex flex-col items-center justify-start md:gap-4 gap-2">
    <div
      class="md:grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 w-full items-start justify-start bg-white rounded-xl md:p-8 p-4"
    >
      <div
        class="flex flex-col items-center justify-start mb-2 md:mb-4 pr-8 md:col-span-1 border-r h-full"
      >
        <div class="md:w-40 md:h-40 w-40 h-40 mb-2">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
            alt=""
            class="object-cover rounded-full"
          />
        </div>
        <!-- <div class="flex flex-col"> -->
        <span
          class="mb-5 lg:text-2xl md:text-xl text-lg font-extrabold leading-none text-black overflow-hidden truncate ..."
        >
          Tài khoản bệnh nhân
        </span>
        <div class="flex flex-col items-start justify-start w-full">
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Họ tên:
            <span class="font-thin">Tran Huynh Tan Phat</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Số dư tài khoản:
            <span class="font-thin">5000</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Ngày sinh:
            <span class="font-thin ">08/05/2002</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Email:
            <span class="font-thin hover:underline">example@gmail.com</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Số điện thoại:
            <a href="tel:0389052811" class="font-thin hover:underline"
              >0389052811</a
            >
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Địa chỉ:
            <span class="font-thin">Võ văn ngân thử đức</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Ngày tạo:
            <span class="font-thin">11/05/2023</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Ngày cập nhật:
            <span class="font-thin">11/05/2023</span>
          </span>
        </div>

        <!-- </div> -->
      </div>

      <div
        class="col-span-2 flex flex-col items-center justify-start md:pl-4 overflow-x-auto"
      >
        <span
          class="mb-5 lg:text-xl md:text-lg text-md font-bold leading-none text-black overflow-hidden truncate ..."
        >
          Hồ sơ bệnh nhân
        </span>
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-4 py-3">Họ tên</th>
              <th scope="col" class="px-4 py-3">Mối quan hệ</th>
              <th scope="col" class="px-4 py-3">Địa chỉ</th>

              <th scope="col" class="px-4 py-3">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-gray-700 hover:bg-gray-200">
              <th
                scope="row"
                class="flex items-center px-4 py-3 font-normal text-gray-900 whitespace-nowrap"
              >
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/102436754_2703375993320827_5581036782011466343_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=G0OjNR7xDEYAX-eWfuk&_nc_ht=scontent-hkg4-1.xx&oh=00_AfAHTZmeEclmv2RMU6wguQaOF7g_BvwGvEg4RTHv-fjSUA&oe=6586D39D"
                  alt="Neil image"
                />
                <span class="ml-2">Trần Huỳnh Tấn Phát</span>
              </th>

              <td class="px-4 py-3 mr-4"></td>
              <td class="px-4 py-3 mr-4"></td>
              <td class="px-4 py-3 flex items-center justify-end">
                <button
                  :id="'data-' + 1 + '-button'"
                  :data-dropdown-toggle="'data-' + 1"
                  class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M8 256a56 56 0 1 1 112 0a56 56 0 1 1-112 0zm160 0a56 56 0 1 1 112 0a56 56 0 1 1-112 0zm216-56a56 56 0 1 1 0 112a56 56 0 1 1 0-112z"
                    />
                  </svg>
                </button>
                <div
                  :id="'data-' + 1"
                  class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    :aria-labelledby="'data-' + 1 + '-button'"
                  >
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100"
                        >Chi tiết</a
                      >
                    </li>
                    <li>
                      <a
                        href="/edit-k"
                        class="block py-2 px-4 hover:bg-gray-100"
                        >Chỉnh sửa</a
                      >
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-red-500 hover:bg-gray-100"
                      >Xoá</a
                    >
                  </div>
                </div>
              </td>
            </tr>
            <tr class="border-b dark:border-gray-700 hover:bg-gray-200">
              <th
                scope="row"
                class="flex items-center px-4 py-3 font-normal text-gray-900 whitespace-nowrap"
              >
                <img
                  class="w-8 h-8 rounded-full"
                  src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/102436754_2703375993320827_5581036782011466343_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_ohc=G0OjNR7xDEYAX-eWfuk&_nc_ht=scontent-hkg4-1.xx&oh=00_AfAHTZmeEclmv2RMU6wguQaOF7g_BvwGvEg4RTHv-fjSUA&oe=6586D39D"
                  alt="Neil image"
                />
                <span class="ml-2">Trần Huỳnh Hoài An</span>
              </th>

              <td class="px-4 py-3 mr-4">Anh/ Chị em</td>
              <td class="px-4 py-3 mr-4"></td>
              <td class="px-4 py-3 flex items-center justify-end">
                <button
                  :id="'data-' + 1 + '-button'"
                  :data-dropdown-toggle="'data-' + 1"
                  class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M8 256a56 56 0 1 1 112 0a56 56 0 1 1-112 0zm160 0a56 56 0 1 1 112 0a56 56 0 1 1-112 0zm216-56a56 56 0 1 1 0 112a56 56 0 1 1 0-112z"
                    />
                  </svg>
                </button>
                <div
                  :id="'data-' + 1"
                  class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    :aria-labelledby="'data-' + 1 + '-button'"
                  >
                    <li>
                      <a href="#" class="block py-2 px-4 hover:bg-gray-100"
                        >Chi tiết</a
                      >
                    </li>
                    <li>
                      <a
                        href="/edit-k"
                        class="block py-2 px-4 hover:bg-gray-100"
                        >Chỉnh sửa</a
                      >
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block py-2 px-4 text-sm text-red-500 hover:bg-gray-100"
                      >Xoá</a
                    >
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="md:flex grid md:gap-4 gap-2 w-full">
      <div class="flex flex-col rounded-xl bg-white w-full h-auto p-4 md:p-8">
        <div class="flex items-center">
          <span
            class="text-md items font-bold leading-none text-black md:text-lg lg:text-xl"
          >
            Chỉ số sức khoẻ</span
          >
        </div>
        <div
          class="w-full mt-5 pt-4 border-t flex flex-col items-start justify-start"
        >
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Nhịp tim:
            <span class="font-thin">100 bpm</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Nhóm máu:
            <span class="font-thin">O</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Chiều cao:
            <span class="font-thin">180 cm</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Cân nặng:
            <span class="font-thin">70 Kg</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            BMI:
            <span class="font-thin">20</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Nhiệt độ:
            <span class="font-thin">36,6 C</span>
          </span>
        </div>
      </div>
      <div class="flex flex-col rounded-xl bg-white w-full h-auto p-4 md:p-8">
        <div class="flex items-center">
          <span
            class="text-md items font-bold leading-none text-black md:text-lg lg:text-xl"
          >
            Lịch sử tiêm chủng</span
          >
        </div>
        <div
          class="w-full mt-5 py-4 border-t flex flex-col items-start justify-start"
        >
          <ul
            class="space-y-4 text-black list-disc list-inside lg:text-md md:text-base text-sm font-semibold w-full"
          >
            <li>
              Lào

              <ol class="ml-5 mt-3 flex items-center w-full">
                <li
                  class="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-900 after:border-1 after:inline-block"
                >
                  <span
                    class="flex items-center justify-center w-6 h-6 bg-primary-900 rounded-full lg:h-8 lg:w-8 shrink-0"
                  >
                    <svg
                      class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                </li>
                <li
                  class="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-900 after:border-1 after:inline-block"
                >
                  <span
                    class="flex items-center justify-center w-6 h-6 bg-primary-900 rounded-full lg:h-8 lg:w-8 shrink-0"
                  >
                    <svg
                      class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                </li>
                <li class="flex w-full items-center text-white font-light">
                  <span
                    class="flex items-center justify-center w-6 h-6 bg-primary-900 rounded-full lg:h-8 lg:w-8 shrink-0"
                  >
                    3
                  </span>
                </li>
              </ol>
              <ol
                class="ml-5 mt-8 flex items-center w-full font-normal md:text-md text-sm"
              >
                Thời gian tiêm mũi cuối: 31/10/2023
              </ol>
            </li>
            <li>
              HPV
              <ol class="ml-5 mt-3 flex items-center w-full">
                <li
                  class="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-900 after:border-1 after:inline-block"
                >
                  <span
                    class="flex items-center justify-center w-6 h-6 bg-primary-900 rounded-full lg:h-8 lg:w-8 shrink-0"
                  >
                    <svg
                      class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                </li>
                <li
                  class="flex w-full items-center text-white after:content-[''] after:w-full after:h-1 after:border-b after:border-primary-900 after:border-1 after:inline-block"
                >
                  <span
                    class="flex items-center justify-center w-6 h-6 bg-primary-900 rounded-full lg:h-8 lg:w-8 shrink-0"
                  >
                    <svg
                      class="w-3.5 h-3.5 text-white lg:w-4 lg:h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5.917 5.724 10.5 15 1.5"
                      />
                    </svg>
                  </span>
                </li>
                <li class="flex w-full items-center text-white font-light">
                  <span
                    class="flex items-center justify-center w-6 h-6 bg-primary-900 rounded-full lg:h-8 lg:w-8 shrink-0"
                  >
                    3
                  </span>
                </li>
              </ol>
              <ol
                class="ml-5 mt-8 flex items-center w-full font-normal md:text-md text-sm"
              >
                Thời gian tiêm mũi cuối: 31/10/2023
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-col rounded-xl bg-white w-full h-auto p-4 md:p-8">
      <div class="flex items-center">
        <span
          class="text-md items font-bold leading-none text-black md:text-lg lg:text-xl"
        >
          Bệnh án</span
        >
      </div>
      <div
        class="w-full mt-5 py-4 border-t flex flex-col items-start justify-start overflow-x-auto"
      >
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-4 py-3">Thư mục</th>
              <th scope="col" class="px-4 py-3">Tệp</th>
              <th scope="col" class="px-4 py-3">Kích thước</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b dark:border-gray-700 hover:bg-gray-200">
              <th
                scope="row"
                class="flex items-center px-4 py-3 font-normal text-gray-900 whitespace-nowrap"
              >
                Default
              </th>

              <td class="px-4 py-3 mr-4">Xét nghiệm máu</td>
              <td class="px-4 py-3 mr-4">1 MB</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
<script>
</script>