import { defineStore } from 'pinia';
import { array, mask } from 'superstruct'
import { MedicalRecordSchema, type MedicalRecord, type MedicalRecordInfo, MedicalRecordInfoSchema } from './structs/medical_record_struct';
import { DataArraySchema, DataObjectSchema } from './structs/response_struct';
// import { useAuthStore } from "./auth";
// import { toastStore } from "./toast";

export const useDataMedicalRecord = defineStore('medical_record', () => {
    // const storeToast = toastStore();
    // const storeAuth = useAuthStore();
    // const authorization = ("Bearer " + String(storeAuth.getAccessToken)) || "";
    const medicals = ref<MedicalRecord[]>([])
    const medicalInfo = ref<MedicalRecordInfo>()

    async function getAllMedicalRecordPerPage(page: number, num: number) {
        const { data, error } = await useFetch('/user-management/medical-record/all/' + page + '/' + num , {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        // onRequest({ request, options }) {
        //     const headers = options?.headers ? new Headers(options.headers) : new Headers()
        //     if (!headers.has("authorization")) {
        //         headers.set("authorization", authorization);
        //     }
        //     options.headers = headers
        // }
        });
        
        if(data.value !== null) {
            const message = mask(data.value, DataArraySchema)
            // storeToast.add({
            //     message: message.message,
            //     toastStatus: "success",
            // });
            medicals.value = mask(message.data, array(MedicalRecordSchema))
        } else {
            console.log(error)
            //window.location.href = 'error'
        }   
    }

    async function getMedicalRecordInfomation(medicalId: string) {
        const { data, error } = await useFetch('patient-record/record/medical/' + medicalId, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "GET",
        // onRequest({ request, options }) {
        //     const headers = options?.headers ? new Headers(options.headers) : new Headers()
        //     if (!headers.has("authorization")) {
        //         headers.set("authorization", authorization);
        //     }
        //     options.headers = headers
        // }
        });
        
        if(data.value !== null) {
        const message = mask(data.value, DataObjectSchema)
        // storeToast.add({
        //     message: message.message,
        //     toastStatus: "success",
        // });
        medicalInfo.value = mask(message.data, MedicalRecordInfoSchema)

        } else {
            window.location.href = 'error'
        }   
    }
  
    return { medicals, medicalInfo, getAllMedicalRecordPerPage, getMedicalRecordInfomation }
})