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
      if (authorization === "Bearer ") return;
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
        const response = mask(data.value, DataObjectSchema);
        return response.message;
      } else if (error.value != null) {
        throw error;
      }
    } catch (error) {
      navigateTo("/error");
    }
  }
  //     );

  //     if (data.value !== null) {
  //       const message = mask(data.value, DataObjectSchema);
  //       doctorQuantity.value = mask(message.data.quantity, number());
  //     } else {
  //       navigateTo("error");
  //     }
  //   }

  //   async function getAllDoctorPerPage(page: number, num: number) {
  //     const { data, error } = await useFetch(
  //       "/doctor-management/doctor/information/" + page + "/" + num,
  //       {
  //         baseURL: useRuntimeConfig().public.baseURL,
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlYWx0aGxpbmV2biIsImlkIjoid2dfcmozQWZSRXQwcTZSTGRXNUg5IiwiaWF0IjoxNzAxMDcwODA3LCJleHAiOjE3MDE0MTY0MDd9.AsBkOlsxPsAZCTRzG6FQKA0xo0LYBbz2TD13IGdIIi4",
  //         },
  //       }
  //     );

  //     if (data.value !== null) {
  //       const message = mask(data.value, DataArraySchema);

  //       doctors.value = mask(message.data, array(DoctorSchema));
  //     } else {
  //       console.log(error);
  //       // navigateTo("/error");
  //       doctors.value = [];
  //     }
  //   }

  return {
    // doctors,
    // doctorQuantity,
    // getQuantityDoctor,
    // getAllDoctorPerPage,
  };
});
