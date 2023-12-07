import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import {
  MedicalRecordSchema,
  type MedicalRecord,
  type MedicalRecordInfo,
  MedicalRecordInfoSchema,
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
  const userInfo = ref<MedicalRecordInfo>();

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

  // async function getQuantityPatient() {
  //   const { data, error } = await useFetch(
  //     "user-management/medical-record/quantity",
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
  //     const message = mask(data.value, DataNumberSchema);
  //     medicalQuantity.value = mask(message.data, number());
  //   } else {
  //     console.log(error);
  //   }
  // }

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

        userInfo.value = mask(message.data, array(MedicalRecordInfoSchema))[0];
      } else {
        console.log(error);
      }
    } catch (error) {
      throw error;
    }
  }

  return {
    medicals,
    medicalInfo,
    userInfo,
    medicalQuantity,
    choosePatient,
    savePatients,
    saveQuantity,
    getProfileById,
    // getQuantityPatient,
  };
});
