import { mask } from "superstruct";

export const useDataPatient = defineStore("patient", () => {
  const quantityNewPatient = ref<QuantityNewPatient>();
  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");
  async function createPatient(patient: Patient) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(`user-management/user`, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
        body: JSON.stringify(patient),
      });

      if (data.value !== null) {
        return;
      } else {
        throw "Thêm tài khoản thất bại";
      }
    } catch (error) {
      throw error;
    }
  }
  async function getQuantityNewPatient(year: number) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch(
        `user-management/user/admin/user/${year}`,
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
        quantityNewPatient.value = mask(
          response.data,
          QuantityNewPatientSchema
        );
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
        `user-management/user/reset-password/${id}`,
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
        throw "Reset mật khẩu thất bại";
      }
    } catch (error) {
      throw error;
    }
  }
  return {
    quantityNewPatient,
    getQuantityNewPatient,
    createPatient,
    resetPassword,
  };
});
