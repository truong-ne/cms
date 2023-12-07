<template>
  <div class="flex flex-col items-center justify-start md:gap-4 gap-2">
    <div
      class="md:grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 w-full items-start justify-start bg-white rounded-xl md:p-8 p-4"
    >
      <div
        class="flex flex-col items-center justify-start mb-2 md:mb-4 pr-8 md:col-span-1 border-r h-full"
        v-if="data.userInfo"
      >
        <div
          class="md:w-40 md:h-40 w-40 h-40 mb-2 rounded-full overflow-hidden"
        >
          <NuxtImg
            v-if="data.userInfo.avatar != 'default'"
            provider="cloudinary"
            :src="data.userInfo.avatar"
            width="700"
            height="700"
            class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
            :alt="data.userInfo.full_name"
          />
          <NuxtImg
            v-else
            provider="cloudinary"
            src="healthline/avatar/doctors/default"
            width="700"
            height="700"
            class="object-cover group-hover:scale-[1.15] duration-200 transform ease-linear"
            :alt="data.userInfo.full_name"
          />
        </div>
        <span
          class="mb-5 lg:text-2xl md:text-xl text-lg font-extrabold leading-none text-black overflow-hidden truncate ..."
        >
          Tài khoản chính
        </span>
        <div class="flex flex-col items-start justify-start w-full">
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Họ tên:
            <span class="font-thin">{{ data.userInfo.full_name }}</span>
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
            <span class="font-thin">{{
              getDate(data.userInfo.date_of_birth)
            }}</span>
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Email:
            <a
              class="font-thin hover:underline"
              :href="'mailto:' + data.userInfo.email"
              >{{ data.userInfo.email }}</a
            >
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Số điện thoại:
            <a
              :href="'tel:' + data.userInfo.phone"
              class="font-thin hover:underline"
              >{{ data.userInfo.phone }}</a
            >
          </span>
          <span
            class="mb-1 lg:text-md md:text-base text-sm font-semibold leading-none text-black overflow-hidden truncate ..."
          >
            Địa chỉ:
            <span class="font-thin">{{ data.userInfo.address }}</span>
          </span>

          <span
            class="mb-1 lg:text-md md:text-base text-sm font-thin leading-none text-black overflow-hidden truncate ..."
          >
            Cập nhật {{ getDateTime(data.userInfo.updated_at) }}
          </span>
        </div>
      </div>

      <div
        class="col-span-2 flex flex-col items-center justify-start md:pl-4 overflow-x-auto"
      >
        <span
          class="mb-5 lg:text-xl md:text-lg text-md font-bold leading-none text-black overflow-hidden truncate ..."
        >
          Hồ sơ bệnh nhân
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const { data } = defineProps(["data"]);
</script>