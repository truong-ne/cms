<template>
  <button
    type="button"
    data-dropdown-toggle="notification-dropdown"
    class="fixed z-20 md:bottom-0 right-0 text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 p-1 md:p-2 bg-white rounded-xl md:shadow-xl shadow-none m-3 border border-gray-50"
  >
    <span class="sr-only">View notifications</span>
    <!-- Bell icon -->
    <lord-icon
      src="https://cdn.lordicon.com/lznlxwtc.json"
      trigger="hover"
      state="loop-bell"
      colors="primary:#e8b730"
      class="w-8 md:w-12 h-8 md:h-12"
    >
    </lord-icon>
    <div
      class="absolute inline-flex items-center justify-center w-5 md:w-6 h-5 md:h-6 text-[8px] md:text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 md:-top-2 -end-1 md:-end-2 dark:border-gray-900"
    >
      20
    </div>
  </button>

  <div
    class="hidden overflow-hidden right-0 m-3 z-50 md:max-w-sm w-full text-base list-none bg-white divide-y divide-gray-100 shadow-lg rounded-xl"
    id="notification-dropdown"
  >
    <div
      class="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50"
    >
      Thông báo
    </div>
    <div>
      <a
        href="#"
        class="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
      >
        <div class="flex-shrink-0">
          <img
            class="w-11 h-11 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
            alt="Robert image"
          />
          <div
            class="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700"
          >
            <svg
              aria-hidden="true"
              class="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="pl-3 w-full">
          <div
            class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
          >
            <span class="font-semibold text-gray-900 dark:text-white"
              >Robert Brown</span
            >
            posted a new video: Glassmorphism - learn how to implement the new
            design trend.
          </div>
          <div
            class="text-xs font-medium text-primary-600 dark:text-primary-500"
          >
            3 hours ago
          </div>
        </div>
      </a>
    </div>
    <a
      href="#"
      class="block py-2 text-md font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-600 dark:text-white dark:hover:underline"
    >
      <div class="inline-flex items-center">
        <svg
          aria-hidden="true"
          class="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path
            fill-rule="evenodd"
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        View all
      </div>
    </a>
  </div>
</template>