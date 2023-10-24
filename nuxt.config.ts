// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: { exposeConfig: true },
  app: {
    head: {
      title: "Analytics",
      link: [
        // Favicon
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        //Inter font
        // { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
        // { rel: "preconnect", href: "https://rsms.me/" },
      ],
    },
  },
});
