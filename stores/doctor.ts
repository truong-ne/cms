import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import { DoctorSchema, type Doctor } from "./structs/doctor_struct";
import { DataArraySchema, DataObjectSchema } from "./structs/response_struct";
// import { useAuthStore } from "./auth";
// import { toastStore } from "./toast";

export const useDataDoctor = defineStore("doctor", () => {
  const doctorQuantity = ref<number>(0);
  const doctors = ref<Doctor[]>([]);
  const idChoosed = ref<string>();
  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  async function getQuantityDoctor() {
    if (authorization === "Bearer ") return;
    const { data, error } = await useFetch(
      "doctor-management/doctor/quantity",
      {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      }
    );

    if (data.value !== null) {
      const message = mask(data.value, DataObjectSchema);
      doctorQuantity.value = mask(message.data.quantity, number());
    } else {
      navigateTo("error");
    }
  }

  async function getAllDoctorPerPage(page: number, num: number) {
    const { data, error } = await useFetch(
      "/doctor-management/doctor/information/" + page + "/" + num,
      {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      }
    );

    if (data.value !== null) {
      const message = mask(data.value, DataArraySchema);

      doctors.value = mask(message.data, array(DoctorSchema));
    } else {
      console.log(error);
      // navigateTo("/error");
      doctors.value = [];
    }
  }
  async function createDoctor(doctor: Doctor) {
    const { data, error } = await useFetch("/doctor-management/doctor/", {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authorization,
      },
      body: JSON.stringify({
        phone: doctor.phone,
        password: "",
        full_name: doctor.full_name,
        specialty: doctor.specialty,
        experience: doctor.experience,
        fee_per_minutes: doctor.fee_per_minutes,
        fixed_times: [],
      }),
    });

    if (data.value !== null) {
      // const message = mask(data.value, DataArraySchema);
      // doctors.value = mask(message.data, array(DoctorSchema));
    } else {
      // console.log(error);
      // // navigateTo("/error");
      // doctors.value = [];
    }
  }

  return {
    idChoosed,
    doctors,
    doctorQuantity,
    getQuantityDoctor,
    getAllDoctorPerPage,
  };
});
