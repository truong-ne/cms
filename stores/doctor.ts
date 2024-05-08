import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
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
  const consultationQuantity = ref<ConsultationQuantity>();
  const consultationPie = ref<ConsultationPie>();
  const moneyQuantity = ref<MoneyQuantity>();
  const moneyMonth = ref<MoneyMonth[]>([]);
  const feedbackBar = ref<number[]>([]);
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

      // if (data.value !== null) {
      const response = mask(data.value, DataObjectSchema);
      doctorQuantity.value = mask(response.data, DoctorQuantitySchema);
      // } else {
      //   throw error;
      // }
      // doctorQuantity.value = mask(
      //   { quantity: 10, doctorThisMonth: 12 },
      //   DoctorQuantitySchema
      // );
    } catch (error) {
      throw error;
    }
  }

  async function getConsultationDashboard() {
    try {
      // if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      // const { data, error } = await useFetch(
      //   "consultation/doctor/consultation/dashboard",
      //   {
      //     baseURL: useRuntimeConfig().public.baseURL,
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: authorization,
      //     },
      //   }
      // );

      // if (data.value !== null) {
      //   const response = mask(data.value, DataObjectSchema);
      //   consultationQuantity.value = mask(
      //     response.data,
      //     ConsultationQuantitySchema
      //   );
      // } else {
      //   throw error;
      // }
      consultationQuantity.value = mask(
        { quantity: 40, quantityThisMonth: 4 },
        ConsultationQuantitySchema
      );
    } catch (error) {
      throw error;
    }
  }
  async function getConsultationPie() {
    try {
      // if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      // const { data, error } = await useFetch(
      //   "consultation/doctor/consultation/chart",
      //   {
      //     baseURL: useRuntimeConfig().public.baseURL,
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: authorization,
      //     },
      //   }
      // );

      // if (data.value !== null) {
      //   const response = mask(data.value, DataObjectSchema);
      //   consultationPie.value = mask(response.data, ConsultationPieSchema);
      // } else {
      //   throw error;
      // }
      consultationPie.value = mask(
        { cancel: 10, confirm: 12, finish: 5, pending: 7 },
        ConsultationPieSchema
      );
    } catch (error) {
      throw error;
    }
  }
  async function getConsultationMoney() {
    try {
      // if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      // const { data, error } = await useFetch(
      //   "consultation/doctor/consultation/money",
      //   {
      //     baseURL: useRuntimeConfig().public.baseURL,
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: authorization,
      //     },
      //   }
      // );

      // if (data.value !== null) {
      //   const response = mask(data.value, DataObjectSchema);
      //   moneyQuantity.value = mask(response.data, MoneyQuantitySchema);
      // } else {
      //   throw error;
      // }
      moneyQuantity.value = mask(
        { total: 10000, quantityThisMonth: 4 },
        MoneyQuantitySchema
      );
    } catch (error) {
      throw error;
    }
  }
  async function getConsultationMoneyArea() {
    try {
      // if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      // const { data, error } = await useFetch(
      //   "consultation/doctor/consultation/money/chart",
      //   {
      //     baseURL: useRuntimeConfig().public.baseURL,
      //     method: "GET",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: authorization,
      //     },
      //   }
      // );

      // if (data.value !== null) {
      //   const response = mask(data.value, DataObjectSchema);
      //   moneyMonth.value = mask(
      //     response.data.moneyByMonth,
      //     array(MoneyMonthSchema)
      //   );
      // } else {
      //   throw error;
      // }
      moneyMonth.value = mask(
        [
          { month: 1, totalMoneyThisMonth: 10 },
          { month: 2, totalMoneyThisMonth: 100 },
          { month: 3, totalMoneyThisMonth: 50 },
          { month: 4, totalMoneyThisMonth: 70 },
          { month: 5, totalMoneyThisMonth: 150 },
          { month: 6, totalMoneyThisMonth: 20 },
          { month: 7, totalMoneyThisMonth: 200 },
          { month: 8, totalMoneyThisMonth: 170 },
          { month: 9, totalMoneyThisMonth: 10 },
          { month: 10, totalMoneyThisMonth: 0 },
          { month: 11, totalMoneyThisMonth: 90 },
          { month: 12, totalMoneyThisMonth: 180 },
        ],
        array(MoneyMonthSchema)
      );
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
              medicalInstitute: doctor.careers[0].medicalInstitute,
              position: doctor.careers[0].position,
              periodStart: doctor.careers[0].periodStart,
              periodEnd: doctor.careers[0].periodEnd,
            },
          ],
          specialty: [
            {
              specialty: doctor.specialty[0].specialty,
              levelOfSpecialty: doctor.specialty[0].levelOfSpecialty,
              image: doctor.specialty[0].image,
            },
          ],
          educationAndCertification: [
            {
              typeOfEducationAndExperience:
                doctor.educationAndCertification[0]
                  .typeOfEducationAndExperience,
              degreeOfEducation:
                doctor.educationAndCertification[0].degreeOfEducation,
              institution: doctor.educationAndCertification[0].institution,
              specialtyByDiploma:
                doctor.educationAndCertification[0].specialtyByDiploma,
              address: doctor.educationAndCertification[0].address,
              diplomaNumberAndSeries:
                doctor.educationAndCertification[0].diplomaNumberAndSeries,
              dateOfReceiptOfDiploma:
                doctor.educationAndCertification[0].dateOfReceiptOfDiploma,
            },
          ],
          fixed_times: [[], [], [], [], [], [], []],
          biography: doctor.biography,
          is_active: true,
        }),
      });

      if (data.value !== null) {
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

      // const { data, error } = await useFetch(
      //   "/doctor-management/doctor/modify",
      //   {
      //     baseURL: useRuntimeConfig().public.baseURL,
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: authorization,
      //     },
      //     body: JSON.stringify({
      //       doctor_id: doctor.id,
      //       phone: doctor.phone,
      //       email: doctor.email,
      //       full_name: doctor.full_name,
      //       specialty: doctor.specialty,
      //       fee_per_minutes: doctor.fee_per_minutes,
      //     }),
      //   }
      // );

      // if (data.value !== null) {
      // } else {
      //   console.log(error);
      //   doctors.value = [];
      //   throw "Cập nhật tài khoản thất bại";
      // }
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
  async function resetPassword(id: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";

      const { data, error } = await useFetch(
        "doctor-management/doctor/reset-password",
        {
          baseURL: useRuntimeConfig().public.baseURL,
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
          body: JSON.stringify({
            doctor_id: id,
          }),
        }
      );

      if (data.value !== null) {
        return;
      } else {
        console.log(error);
        // navigateTo("/error");
        doctors.value = [];
        throw "Reset mật khẩu thất bại";
      }
    } catch (error) {
      throw error;
    }
  }

  async function getConsultationMoneyAreaById(id: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "consultation/doctor/consultation/money/chart/" + id,
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
        moneyMonth.value = mask(
          response.data.moneyByMonth,
          array(MoneyMonthSchema)
        );
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  async function getConsultationFeedbackBar(id: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch("consultation/feedback/" + id, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      });

      if (data.value !== null) {
        const response = mask(data.value, DataArraySchema);
        feedbackBar.value = mask(response.data, array(number()));
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    doctor,
    doctors,
    consultationPie,
    doctorQuantity,
    moneyQuantity,
    moneyMonth,
    feedbackBar,
    consultationQuantity,
    chooseDoctor,
    patientConsultation,
    getQuantityDoctor,
    getConsultationMoneyAreaById,
    getConsultationDashboard,
    getConsultationPie,
    getConsultationFeedbackBar,
    updateDoctor,
    saveDoctors,
    createDoctor,
    getPatientConsultation,
    resetPassword,
    getConsultationMoney,
    getConsultationMoneyArea,
  };
});
