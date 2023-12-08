import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
// import {
//   MedicalRecordSchema,
//   type MedicalRecord,
//   type MedicalRecordInfo,
//   MedicalRecordInfoSchema,
//   type MedicalQuantity,
//   MedicalQuantitySchema,
// } from "./structs/medical_record_struct";
// import {
//   DataArraySchema,
//   DataNumberSchema,
//   DataObjectSchema,
// } from "./structs/response_struct";

export const useDataMedicalRecord = defineStore("medical_record", () => {
  const medicals = ref<MedicalRecord[]>([]);
  const medical = ref<MedicalRecord>();
  const medicalInfo = ref<MedicalRecordInfo>();
  const vaccinationRecord = ref<VaccinationRecord[]>([]);
  const medicalQuantity = ref<MedicalQuantity>();
  // const userInfo = ref<MedicalRecordInfo>();

  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  // function saveQuantity(value: number) {
  //   medicalQuantity.value = value;
  // }

  function savePatients(listPatient: MedicalRecord[]) {
    medicals.value = listPatient;
  }

  function choosePatient(id: string) {
    medicals.value.forEach((e) => {
      if (e.id == id) {
        medical.value = e;
        return;
      }
    });
  }

  async function getProfileById(id: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "user-management/medical-record/" + id,
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
        medicals.value = mask(message.data, array(MedicalRecordSchema));
        medical.value = medicals.value.find((e) => e.isMainProfile == true);
      } else {
        console.log(error);
      }
    } catch (error) {
      throw error;
    }
  }

  async function getVaccinationRecord(id: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch("/vaccination/record/user/" + id, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      });

      if (data.value !== null) {
        const response = mask(data.value, DataArraySchema);
        vaccinationRecord.value = mask(
          response.data,
          array(VaccinationRecordSchema)
        );
      } else {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function getQuantityMedical() {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        "user-management/medical-record/statistical/quantity",
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
        medicalQuantity.value = mask(response.data, MedicalQuantitySchema);
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async function resetPassword(id: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";

      const { data, error } = await useFetch(
        "user-management/user/reset-password/" + id,
        {
          baseURL: useRuntimeConfig().public.baseURL,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
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
    medicals,
    medical,
    medicalInfo,
    medicalQuantity,
    vaccinationRecord,
    choosePatient,
    savePatients,
    getProfileById,
    getVaccinationRecord,
    getQuantityMedical,
    resetPassword,
    // getQuantityPatient,
  };
});
