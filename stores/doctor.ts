import { defineStore } from "pinia";
import { array, mask, number, string } from "superstruct";
// import {
//   DoctorSchema,
//   type Doctor,
//   type PatientConsultation,
//   PatientConsultationSchema,
//   MoneyQuantitySchema,
//   type DoctorQuantity,
//   type ConsultationQuantity,
//   type ConsultationPie,
//   type MoneyQuantity,
//   MoneyMonth,
//   type MoneyMonthSchema,
// } from "./structs/doctor_struct";
// import { DataArraySchema, DataObjectSchema } from "./structs/response_struct";

export const useDataDoctor = defineStore("doctor", () => {
  const doctorQuantity = ref<DoctorQuantity>();
  const quantityDoctorBySpecialty = ref<QuantityDoctorBySpecialty>();
  const consultationQuantity = ref<ConsultationQuantity>();
  const consultationPie = ref<ConsultationPie>();
  const moneyQuantity = ref<MoneyQuantity>();

  const doctors = ref<Doctor[]>([]);
  const doctor = ref<Doctor>();
  // const patientConsultation = ref<PatientConsultation>();
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

  async function getQuantityDoctorBySpecialty() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "doctor-management/doctor/admin/specialty",
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
      quantityDoctorBySpecialty.value = mask(response.data, QuantityDoctorBySpecialtySchema);
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
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
      doctorQuantity.value = mask(response.data, DoctorQuantitySchema);
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async function getConsultationDashboard() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "consultation/doctor/consultation/dashboard",
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
        consultationQuantity.value = mask(
          response.data,
          ConsultationQuantitySchema
        );
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  async function getConsultationPie() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "consultation/doctor/consultation/chart",
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
        consultationPie.value = mask(response.data, ConsultationPieSchema);
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  async function getConsultationMoney() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "consultation/doctor/consultation/money",
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
        moneyQuantity.value = mask(response.data, MoneyQuantitySchema);
      } else {
        throw error;
      }
      // moneyQuantity.value = mask(
      //   { total: 10000, quantityThisMonth: 4 },
      //   MoneyQuantitySchema
      // );
    } catch (error) {
      throw error;
    }
  }
  

  async function uploadImage(files: Array<File>, phone: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const formdata: FormData = new FormData();

      formdata.append("files", files[0]);
      formdata.append("phone", phone);

      const { data, error } = await useFetch("/file-upload/doctor/specialty", {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data;",
          // "Accept-Encoding": "gzip, deflate, br",
          // "Accept":"*/*",
          // "Connection": "keep-alive",
          // Authorization: authorization,
        },
        body: formdata,
      });

      if (data.value !== null) {
        return data.value;
      } else {
        throw "Thêm tài khoản thất bại";
      }
    } catch (error) {
      throw error;
    }
  }

  function saveDoctors(listDoctor: Doctor[]) {
    doctors.value = listDoctor;
  }

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
          full_name: doctor.full_name,
          avatar: doctor.avatar,
          email: doctor.email,
          phone: doctor.phone,
          gender: doctor.gender,
          dayOfBirth: doctor.dayOfBirth,
          address: doctor.address,
          careers: [
            {
              medicalInstitute: doctor.careers![0].medicalInstitute,
              position: doctor.careers![0].position,
              periodStart: doctor.careers![0].periodStart,
              periodEnd: doctor.careers![0].periodEnd,
            },
          ],
          specialty: [
            {
              specialty: doctor.specialty![0].specialty,
              levelOfSpecialty: doctor.specialty![0].levelOfSpecialty,
              image: doctor.specialty![0].image,
            },
          ],
          educationAndCertification: [
            {
              image: doctor.educationAndCertification![0].image,
              typeOfEducationAndExperience:
                doctor.educationAndCertification![0]
                  .typeOfEducationAndExperience,
              degreeOfEducation:
                doctor.educationAndCertification![0].degreeOfEducation,
              institution: doctor.educationAndCertification![0].institution,
              specialtyByDiploma:
                doctor.educationAndCertification![0].specialtyByDiploma,
              address: doctor.educationAndCertification![0].address,
              diplomaNumberAndSeries:
                doctor.educationAndCertification![0].diplomaNumberAndSeries,
              dateOfReceiptOfDiploma:
                doctor.educationAndCertification![0].dateOfReceiptOfDiploma,
            },
          ],
          fixed_times: [[0], [0], [0], [0], [0], [0], [0]],
          biography: doctor.biography,
          is_active: true,
        }),
      });

      if (data.value !== null) {
        location.reload()
        return;
      } else {
        console.log(error);
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
            is_Active:doctor.is_active,
            fee_per_minutes: doctor.fee_per_minutes,
          }),
        }
      );

      if (error.value!=null){
        console.log(error);
        throw "Cập nhật tài khoản thất bại";
      }

      location.reload()
    } catch (error) {
      throw error;
    }
  }
  async function banDoctor() {
    try {
      if (authorization === "Bearer " || doctor==undefined ) throw "Không thể xác định danh tính";

      const { data, error } = await useFetch(
        `doctor-management/doctor/admin/doctor/ban/${doctor.value!.id}`,
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
      } else {
        console.log(error);
        doctors.value = [];
        throw "Khoá tài khoản thất bại";
      }

      location.reload()
    } catch (error) {
      throw error;
    }
  }
  // async function banDoctor() {
  //   try {
  //     if (authorization === "Bearer " || doctor==undefined ) throw "Không thể xác định danh tính";

  //     const { data, error } = await useFetch(
  //       `doctor-management/doctor/admin/doctor/ban/${doctor.value!.id}`,
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
  //     } else {
  //       console.log(error);
  //       doctors.value = [];
  //       throw "Khoá tài khoản thất bại";
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  // async function getPatientConsultation(id: string) {
  //   try {
  //     if (authorization === "Bearer ") throw "Không thể xác định danh tính";

  //     const { data, error } = await useFetch(
  //       "/consultation/doctor/information/" + id,
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
  //       const response = mask(data.value, DataObjectSchema);
  //       patientConsultation.value = mask(
  //         response.data,
  //         PatientConsultationSchema
  //       );
  //     } else {
  //       // navigateTo("/error");
  //       doctors.value = [];
  //       throw "Tải dữ liệu bệnh nhân thất bại";
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  async function resetPassword(doctorId: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";

      const { data } = await useFetch(
        "doctor-management/doctor/reset-password",
        {
          baseURL: useRuntimeConfig().public.baseURL,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
          body: JSON.stringify({
            doctor_id: doctorId,
          }),
        }
      );

      if (data.value !== null) {
        return;
      } else {
        throw "Đặt lại mật khẩu thất bại";
      }

      location.reload()
    } catch (error) {
      throw error;
    }
  }

  // async function getConsultationMoneyAreaById(id: string) {
  //   try {
  //     if (authorization === "Bearer ") throw "Không thể xác định danh tính";
  //     const { data, error } = await useFetch(
  //       "consultation/doctor/consultation/money/chart/" + id,
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
  //       const response = mask(data.value, DataObjectSchema);
  //       moneyMonth.value = mask(
  //         response.data.moneyByMonth,
  //         array(MoneyMonthSchema)
  //       );
  //     } else {
  //       throw error;
  //     }
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  

  return {
    doctor,
    doctors,
    consultationPie,
    doctorQuantity,
    moneyQuantity,
    // moneyMonth,
    consultationQuantity,
    chooseDoctor,
    uploadImage,

    getQuantityDoctor,
    // getConsultationMoneyAreaById,
    getConsultationDashboard,
    getConsultationPie,

    updateDoctor,
    saveDoctors,
    createDoctor,
    resetPassword,
    getConsultationMoney,
    quantityDoctorBySpecialty,
    getQuantityDoctorBySpecialty,
    banDoctor
  };
});
