import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import { DiscountSchema, type Discount } from "./structs/discount_struct";
import { DataArraySchema, DataObjectSchema } from "./structs/response_struct";
// import { useAuthStore } from "./auth";
// import { toastStore } from "./toast";

export const useDataDiscount = defineStore("discount", () => {
  
  const discounts = ref<Discount[]>([]);

  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  async function createDiscount(discount: Discount) {
    try {
      if (authorization === "Bearer ") throw "Không thể xác định danh tính";
      const { data, error } = await useFetch("/consultation/discount", {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
        body: JSON.stringify({
          code: discount.code,
          value: discount.value,
          type: discount.type,
          expiration_time: discount.expiration_time,
        }),
      });

      if (data.value !== null) {
        return;
      } else if (error.value != null) {
        if (error.value.statusCode == 409) throw "Trùng mã giảm giá";
      }
    } catch (error) {
      throw error;
    }
  }

  async function updateDiscount(discount: Discount) {
    try {
      if (authorization === "Bearer ") return;
      const { data, error } = await useFetch(
        "/consultation/discount/" + discount.id,
        {
          baseURL: useRuntimeConfig().public.baseURL,
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorization,
          },
          body: JSON.stringify({
            code: discount.code,
            value: discount.value,
            type: discount.type,
            expiration_time: discount.expiration_time,
          }),
        }
      );

      if (data.value !== null) {
        const response = mask(data.value, DataObjectSchema);
        return response.message;
      } else if (error.value != null) {
        throw error;
      }
    } catch (error) {
      navigateTo("/error");
    }
  }

  async function deleteDiscount(id: string) {
    try {
      if (authorization === "Bearer ") return;
      const { data, error } = await useFetch("/consultation/discount/" + id, {
        baseURL: useRuntimeConfig().public.baseURL,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorization,
        },
      });

      if (data.value !== null) {
        const response = mask(data.value, DataObjectSchema);
        return response.message;
      } else if (error.value != null) {
        throw error;
      }
    } catch (error) {
      navigateTo("/error");
    }
  }

  async function getDiscounts() {
  }


  return {
    discounts,
    getDiscounts,
    createDiscount,
    updateDiscount,
    deleteDiscount,
  };
});
