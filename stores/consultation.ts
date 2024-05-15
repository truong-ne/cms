import { array, mask } from "superstruct";
import {
  MoneyChartOfMonth,
  type AllConsultation,
  type ConsultationChart,
} from "./structs/consultation_struct";

export const useDataConsultation = defineStore("consultation", () => {
  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  const consultationChart = ref<ConsultationChart>();
  const moneyMonth = ref<MoneyMonth[]>([]);
  const topDoctors = ref<TopDoctor[]>();
  const allConsultation = ref<AllConsultation>();
  const moneyChartByMonth = ref<MoneyChartOfMonth>();

  async function getConsultationChart(month: number, year: number) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        `consultation/admin/consultation/chart/${month}/${year}`,
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
        consultationChart.value = mask(response.data, ConsultationChartschema);
      } else {
        throw error;
      }
      // consultationPie.value = mask(
      //   { cancel: 10, confirm: 12, finish: 5, pending: 7 },
      //   ConsultationPieSchema
      // );
    } catch (error) {
      throw error;
    }
  }
  async function getMoneyChart(year: number) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        `consultation/admin/money/chart/${year}`,
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
      // moneyMonth.value = mask(
      //   [
      //     { month: 1, totalMoneyThisMonth: 10 },
      //     { month: 2, totalMoneyThisMonth: 100 },
      //     { month: 3, totalMoneyThisMonth: 50 },
      //     { month: 4, totalMoneyThisMonth: 70 },
      //     { month: 5, totalMoneyThisMonth: 150 },
      //     { month: 6, totalMoneyThisMonth: 20 },
      //     { month: 7, totalMoneyThisMonth: 200 },
      //     { month: 8, totalMoneyThisMonth: 170 },
      //     { month: 9, totalMoneyThisMonth: 10 },
      //     { month: 10, totalMoneyThisMonth: 0 },
      //     { month: 11, totalMoneyThisMonth: 90 },
      //     { month: 12, totalMoneyThisMonth: 180 },
      //   ],
      //   array(MoneyMonthSchema)
      // );
    } catch (error) {
      throw error;
    }
  }
  async function getTop10Doctor(month: number, year: number) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        `consultation/admin/top-10-doctor/${month}/${year}`,
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
        const response = mask(data.value, DataArraySchema);
        topDoctors.value = mask(response.data, array(TopDoctorSchema));
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  async function getAllConsultationOfDoctor(doctorId: string) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        `consultation/admin/doctor/${doctorId}`,
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
        allConsultation.value = mask(response.data, AllConsultationschema);
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  async function getMoneyChartOfMonth(
    doctorId: string,
    month: number,
    year: number
  ) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        `consultation/admin/money/doctor/chart/${doctorId}/${month}/${year}`,
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
        moneyChartByMonth.value = mask(response.data, MoneyChartOfMonthSchema);
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }
  return {
    getConsultationChart,
    consultationChart,
    moneyMonth,
    getMoneyChart,
    topDoctors,
    getTop10Doctor,
    allConsultation,
    getAllConsultationOfDoctor,
    moneyChartByMonth,
    getMoneyChartOfMonth,
  };
});
