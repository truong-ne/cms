<template>
  <section class="w-full md:mb-4">
    <div class="relative overflow-hidden rounded-2xl bg-white w-full mt-8 p-4">
      <div class="text-2xl mb-8 mt-4 ml-4 font-bold">Danh sách thuốc</div>
      <div class="overflow-x-auto">
        <table
          id="listPatient"
          class="text-left mt- w-full text-sm table-auto bg-transparent border-separate border-spacing-x-0 border-spacing-y-2 border-translate"
        >
          <thead class="text-black uppercase text-xs">
            <tr>
              <th class="px-4 py-2 border-l-2">
                <input
                  disabled
                  type="checkbox"
                  value="false"
                  class="w-4 h-4 border-gray-300 rounded focus:ring-0"
                />
              </th>
              <th class="px-4 border-l-2">ID</th>
              <th class="px-4 border-l-2">Tên thuốc</th>
              <th class="px-4 border-l-2">Dạng</th>
              <th class="px-4 border-l-2">Nhà sản xuất</th>
              <th class="px-4 border-l-2">Đơn giá</th>
              <th class="px-4 border-l-2">Mô tả</th>
              <th class="px-4 border-l-2">Cập nhật lần cuối</th>

              <th class="px-4 border-r-2">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-primary/20">
              <th class="rounded-l-2xl px-4 items-center">
                <input
                  type="checkbox"
                  value="false"
                  class="w-4 h-4 border-gray-300 rounded focus:ring-0"
                />
              </th>
              <td class="p-4">3jfiu84f434</td>
              <td class="p-4">Paradol</td>

              <td class="p-4">NSX</td>
              <td class="p-4">1000</td>
              <td class="p-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci assumenda est rerum sapiente repellendus placeat fugit
                officiis harum! Libero iure ratione, eum minima odit tenetur
                possimus consequuntur sint delectus deserunt!
              </td>

              <td class="p-4">
                {{ Date() }}
              </td>
              <td class="rounded-r-2xl px-4">
                <button
                  type="button"
                  class="flex items-center justify-center w-full md:w-auto text-primary-700 bg-white hover:bg-primary-300 hover:text-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                >
                  Chỉnh sửa
                </button>
                <!-- <button
                  v-show="currentId == patient.id"
                  type="button"
                  class="flex items-center justify-center w-full md:w-auto text-primary-700 bg-white hover:bg-primary-300 hover:text-primary-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                >
                  Hồ sơ
                </button> -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- <nav
        class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
          Hiển thị
          <span class="font-semibold text-gray-900"
            >{{ hitsPerPage * (currentPage - 1) + 1 }}-{{
              hitsPerPage * currentPage > totalHits
                ? totalHits
                : hitsPerPage * currentPage
            }}</span
          >
          của
          <span class="font-semibold text-gray-900 dark:text-white">{{
            totalHits
          }}</span>
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
              class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-primary-100 hover:text-primary-700"
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
      </nav> -->
    </div>
    <!-- </div> -->
  </section>
</template>