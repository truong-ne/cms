// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  imports: {
    dirs: ["stores", "utils"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/cloudinary",
    'nuxt-meilisearch',
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  tailwindcss: { exposeConfig: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Healthline",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      script: [
        {
          src: "https://cdn.lordicon.com/lordicon-1.2.0.js",
        },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["lord-icon"].includes(tag),
    },
  },
  // // Simple usage:
  ssr: false,
  // spaLoadingTemplate: "spa-loading-template.html",

  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.PUBLIC_API,
    },
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
  },
  meilisearch: {
    hostUrl: 'https://meilisearch-truongne.koyeb.app',
    searchApiKey: 'CHOPPER_LOVE_MEILISEARCH',
    useInstantSearch: true
  }
});
