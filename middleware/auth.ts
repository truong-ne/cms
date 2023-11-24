import { useAuthStore } from "@/stores/auth";

export default defineNuxtRouteMiddleware(async (to, from) => {
  try {
  const authStore = useAuthStore();
  if (authStore.getAccesToken != "") {
    if (to.path == "/authenticate") {
      return navigateTo("/");
    }
    return;
  } else {
    if (to.path != "/authenticate") {
      return navigateTo("/authenticate");
    } else return;
  }
  } catch (e) {
    console.log(e);
    navigateTo("/authenticate");
  }
});
