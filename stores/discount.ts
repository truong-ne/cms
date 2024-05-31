import { defineStore } from "pinia";
import { array, mask, number } from "superstruct";
import { DiscountSchema, type Discount } from "./structs/discount_struct";
import { DataArraySchema, DataObjectSchema } from "./structs/response_struct";
// import { useAuthStore } from "./auth";
// import { toastStore } from "./toast";

export const useDataDiscount = defineStore("discount", () => {
  const discount = ref<Discount>();
  const discounts = ref<Discount[]>([]);

  const storeAuth = useAuthStore();
  const authorization = "Bearer " + (storeAuth.getAccesToken ?? "");

  function chooseDiscount(id: string) {
    discounts.value.forEach((e) => {
      if (e.id == id) {
        discount.value = e;
        return;
      }
    });
    // discount.value = {
    //   id: "fQ5s_2YycIjlke75SIP24",
    //   expiration_time: "2023-12-12T00:00:00.000Z",
    //   code: "NOEL_CHOPPERa",
    //   value: 200000,
    //   type: "%",
    // };
  }

  function saveDiscounts(listDiscount: Discount[]) {
    discounts.value = listDiscount;
  }

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
        else throw "Thêm thất bại"
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
      throw error;
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
        const response = mask(data.value, DataStringSchema);
        return response.message;
      } else if (error.value != null) {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async function getDiscounts() {}

  return {
    discount,
    discounts,
    saveDiscounts,
    chooseDiscount,
    createDiscount,
    updateDiscount,
    deleteDiscount,
  };
});
