import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import {
  DoctorSchema,
  type Doctor,
  type PatientConsultation,
  PatientConsultationSchema,
} from "./structs/doctor_struct";
import { DataArraySchema, DataObjectSchema } from "./structs/response_struct";
// import { useAuthStore } from "./auth";
// import { toastStore } from "./toast";

export const useDataDoctor = defineStore("doctor", () => {
  const doctorQuantity = ref<number>(0);
  const doctors = ref<Doctor[]>([]);
  const doctor = ref<Doctor>();
  const patientConsultation = ref<PatientConsultation>();
  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  function chooseDoctor(id: string) {
    doctors.value.forEach((e) => {
      if (e.id == id) {
        doctor.value = e;
        return;
      }
    });
  }

  async function getQuantityDoctor() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
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
        const response = mask(data.value, DataObjectSchema);
        doctorQuantity.value = mask(response.data.quantity, number());
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
    // try {
    //   if (authorization === "Bearer ") throw "Không thể xác định danh tính";
    //   const { data, error } = await useFetch(
    //     "consultation/doctor/consultation/dashboard",
    //     {
    //       baseURL: useRuntimeConfig().public.baseURL,
    //       method: "GET",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: authorization,
    //       },
    //     }
    //   );

    //   if (data.value !== null) {
    //     console.log(data.value);
    //     // const response = mask(data.value, DataObjectSchema);
    //     // doctorQuantity.value = mask(response.data.quantity, number());
    //   } else {
    //     throw error;
    //   }
    // } catch (error) {
    //   throw error;
    // }
  }
  function saveDoctors(listDoctor: Doctor[]) {
    doctors.value = listDoctor;
  }
  // async function getAllDoctorPerPage(page: number, num: number) {
  //   try {
  //     if (authorization === "Bearer ") throw "Không thể xác định danh tính";

  //     const { data, error } = await useFetch(
  //       "/doctor-management/doctor/information/" + page + "/" + 50,
  //       {
  //         baseURL: useRuntimeConfig().public.baseURL,
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: authorization,
  //         },
  //       }
  //     );

  //     if (data.value !== null) {
  //       const response = mask(data.value, DataArraySchema);

  //       doctors.value = mask(response.data, array(DoctorSchema));
  //     } else {
  //       console.log(error);
  //       // navigateTo("/error");
  //       doctors.value = [];
  //       throw error;
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  async function createDoctor(doctor: Doctor) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";

      const { data, error } = await useFetch("/doctor-management/doctor/", {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
        body: JSON.stringify({
          phone: doctor.phone,
          email: doctor.email,
          full_name: doctor.full_name,
          specialty: doctor.specialty,
          experience: doctor.experience,
          fee_per_minutes: doctor.fee_per_minutes,
          fixed_times: [],
        }),
      });

      if (data.value !== null) {
        // const response = mask(data.value, DataArraySchema);
        // doctors.value = mask(response.data, array(DoctorSchema));
      } else {
        console.log(error);
        // navigateTo("/error");
        doctors.value = [];
        throw "Thêm tài khoản thất bại";
      }
    } catch (error) {
      throw error;
    }
  }
  async function updateDoctor(doctor: Doctor) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";

      const { data, error } = await useFetch(
        "/doctor-management/doctor/modify",
        {
          baseURL: useRuntimeConfig().public.baseURL,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
          body: JSON.stringify({
            doctor_id: doctor.id,
            phone: doctor.phone,
            email: doctor.email,
            full_name: doctor.full_name,
            specialty: doctor.specialty,
            experience: doctor.experience,
            fee_per_minutes: doctor.fee_per_minutes,
          }),
        }
      );

      if (data.value !== null) {
        // const response = mask(data.value, DataArraySchema);
        // doctors.value = mask(response.data, array(DoctorSchema));
      } else {
        console.log(error);
        // navigateTo("/error");
        doctors.value = [];
        throw "Thêm tài khoản thất bại";
      }
    } catch (error) {
      throw error;
    }
  }
  async function getPatientConsultation(id: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";

      const { data, error } = await useFetch(
        "/consultation/doctor/information/" + id,
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
        const response = mask(data.value, DataObjectSchema);
        patientConsultation.value = mask(
          response.data,
          PatientConsultationSchema
        );
      } else {
        console.log(error);
        // navigateTo("/error");
        doctors.value = [];
        throw "Tải dữ liệu bệnh nhân thất bại";
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    doctor,
    doctors,
    doctorQuantity,
    chooseDoctor,
    patientConsultation,
    getQuantityDoctor,
    updateDoctor,
    saveDoctors,
    createDoctor,
    getPatientConsultation,
  };
});
