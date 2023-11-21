<template>
  <section>
    <UserHeader :header="header" />
    <UserPatientBody :field="field" :data="data" />
  </section>
</template>

<script setup lang="ts">
const header = {
  title: "Bệnh nhân",
  quantity: 200,
  name: "patient",
};
const field = ["Họ tên","Số điện thoại", "Email", "Ngày sinh", "Cập nhật"];
const data = [
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
  {
    avatar:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
    name: "Trần Huỳnh Tấn Phát",
    phone: "0389052811",
    email: "example@gmail.com",
    dayOfBirth: "01/01/2002",
    updateAt: "12/11/2023",
  },
];
</script>