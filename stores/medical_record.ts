import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import {
  MedicalRecordSchema,
  type MedicalRecord,
  type MedicalRecordInfo,
  MedicalRecordInfoSchema,
  type VaccinationRecord,
} from "./structs/medical_record_struct";
import {
  DataArraySchema,
  DataNumberSchema,
  DataObjectSchema,
} from "./structs/response_struct";

export const useDataMedicalRecord = defineStore("medical_record", () => {
  const medicalQuantity = ref<number>(0);
  const medicals = ref<MedicalRecord[]>([]);
  const medical = ref<MedicalRecord>();
  const medicalInfo = ref<MedicalRecordInfo>();
  const vaccinationRecord = ref<VaccinationRecord[]>([]);
  // const userInfo = ref<MedicalRecordInfo>();

  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  function saveQuantity(value: number) {
    medicalQuantity.value = value;
  }

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
      const { data, error } = await useFetch("vaccination/record/" + id, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      });

      if (data.value !== null) {
        const message = mask(data.value, DataArraySchema);
        vaccinationRecord.value = mask(
          message.data,
          array(VaccinationRecordSchema)
        );
      } else {
        console.log(error);
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
    choosePatient,
    savePatients,
    saveQuantity,
    getProfileById,
    getVaccinationRecord,
    // getQuantityPatient,
  };
});
