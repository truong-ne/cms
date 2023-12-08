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
    } catch (error) {
      throw error;
    }
  }
  async function getConsultationMoneyArea() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "consultation/doctor/consultation/money/chart",
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
            specialty: doctor.specialty,
            experience: doctor.experience,
            fee_per_minutes: doctor.fee_per_minutes,
          }),
        }
      );

      if (data.value !== null) {
      } else {
        console.log(error);
        doctors.value = [];
        throw "Cập nhật tài khoản thất bại";
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

  return {
    doctor,
    doctors,
    consultationPie,
    doctorQuantity,
    moneyQuantity,
    moneyMonth,
    consultationQuantity,
    chooseDoctor,
    patientConsultation,
    getQuantityDoctor,
    getConsultationDashboard,
    getConsultationPie,
    updateDoctor,
    saveDoctors,
    createDoctor,
    getPatientConsultation,
    resetPassword,
    getConsultationMoney,
    getConsultationMoneyArea,
  };
});
