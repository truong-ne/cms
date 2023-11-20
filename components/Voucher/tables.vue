<template>
  <section id="default-tab-content" class="w-full">
    <!-- Start coding here -->
    <div class="relative overflow-hidden rounded-xl bg-white w-full">
      <div
        class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 md:p-4 p-2"
      >
        <div class="w-full md:w-1/3">
          <form class="flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 p-2"
                placeholder="Tìm kiếm"
              />
            </div>
          </form>
        </div>
        <div
          class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0"
        >
          <button
            type="button"
            class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            <svg
              class="h-3.5 w-3.5 mr-2"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              />
            </svg>
            Thêm tài khoản
          </button>
          <div class="flex items-center space-x-3 w-full md:w-auto">
            <button
              id="filterDropdownButton"
              data-dropdown-toggle="filterDropdown"
              class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-4 w-4 mr-2 text-gray-400"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path
                  d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2l32.4 35.3V64c0-17.7 14.3-32 32-32s32 14.3 32 32v301.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32h128c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128l16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3l-7.2-14.3h-88.4l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32l64-128c5.4-10.8 16.5-17.7 28.6-17.7zm-20.2 144h40.4L416 359.6L395.8 400z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                class="h-4 w-4 mr-2 text-gray-400"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path
                  d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2l32.4-35.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8h128c17.7 0 32-14.3 32-32s-14.3-32-32-32h-50.7l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9S493 32 480 32H352c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128l-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32l-64-128c-5.4-10.9-16.5-17.7-28.6-17.7zm-20.2 144l20.2-40.4l20.2 40.4h-40.4z"
                />
              </svg>
              Sắp xếp
            </button>
          </div>
        </div>
      </div>

      <div class="p-4 rounded-xl bg-white w-full">
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" class="px-4 py-3">Họ và tên</th>
                <th scope="col" class="px-4 py-3">Ngày sinh</th>
                <th scope="col" class="px-4 py-3">Email</th>
                <th scope="col" class="px-4 py-3">Số điện thoại</th>
                <th scope="col" class="px-4 py-3">Chuyên ngành</th>
                <th scope="col" class="px-4 py-3">Xếp hạng</th>
                <th scope="col" class="px-4 py-3">Giá khám</th>
                <th scope="col" class="px-4 py-3">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody v-for="doctor in doctors" :key="doctor">
              <tr class="border-b dark:border-gray-700">
                <th
                  scope="row"
                  class="flex items-center px-4 py-3 mr-4 font-normal text-gray-900 whitespace-nowrap"
                >
                  <img
                    class="w-8 h-8 rounded-full"
                    :src="doctor.image"
                    alt="Neil image"
                  />
                  <span class="ml-2">{{ doctor.name }}</span>
                </th>
                <td class="px-4 py-3 mr-4">{{ doctor.specialty }}</td>
                <td class="px-4 py-3 mr-4">{{ doctor.consultation }}</td>
                <td class="px-4 py-3 mr-4">{{ doctor.joined }}</td>
                <td class="px-4 py-3 mr-4">{{ doctor.price }}</td>
                <td class="px-4 py-3 mr-4">{{ doctor.patient }}</td>
                <td class="px-4 py-3 mr-4">{{ doctor.rating }}</td>
                <td class="px-4 py-3 flex items-center justify-end">
                  <button
                    id="apple-imac-27-dropdown-button"
                    data-dropdown-toggle="apple-imac-27-dropdown"
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
                    id="apple-imac-27-dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="apple-imac-27-dropdown-button"
                    >
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100"
                          >Chi tiết</a
                        >
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100"
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
      <nav
        class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Hiển thị
          <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white">1000</span>
        </span>
        <ul class="inline-flex items-stretch -space-x-px">
          <li>
            <a
              href="#"
              class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >...</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >100</a
            >
          </li>
          <li>
            <a
              href="#"
              class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
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
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- </div> -->
  </section>
</template>
  
  <script setup>
const doctors = [
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Harry Potter",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "harrypotter@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Ginny Weasley",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "ginnyweasley@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Dumbledore",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "dumbledore@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Sirius Black",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "siriusblack@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Cho Chang",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "chochang@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Cho Chang",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "chochang@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Cho Chang",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "chochang@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Cho Chang",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "chochang@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Cho Chang",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "chochang@hogwart.com",
    payment: "12000",
  },
  {
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Cho Chang",
    specialty: "nha khoa",
    consultation: 123,
    joined: "12/12/2023",
    price: 200,
    patient: 200,
    rating: 4,
    account: "chochang@hogwart.com",
    payment: "12000",
  },
];
</script>