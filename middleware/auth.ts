import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();

  try {
    // if (authStore.getAccesToken != null) {
    //   if (to.path == "/authenticate") {
    //     return navigateTo("/");
    //   }
    //   return;
    // } else {
    //   if (to.path != "/authenticate") {
    //     return navigateTo("/authenticate");
    //   } else return;
    // }
  } catch (e) {
    // navigateTo("/authenticate");
  }
});
