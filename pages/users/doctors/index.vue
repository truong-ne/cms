<template>
  <section>
    <UserHeader :header="header" />
    <UserDoctorBody :field="field" :data="data" />
    <!-- <UserDoctorFormcreate />
    <UserDoctorFormupdate /> -->
  </section>
</template>

<script setup lang="ts">
const header = {
  title: "Bác sĩ",
  quantity: 123,
  name: "doctor",
};
const field = ["Họ tên", "Số điện thoại", "Email", "Chuyên ngành", "Cập nhật"];
const data = [
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },

  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    specialty: "Da liễu",
    rating: 4.8,
    fee: 5000,
    updateAt: "12/11/2023",
  },
];
</script>