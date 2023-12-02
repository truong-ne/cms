// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["@vuepic/vue-datepicker"],
  },
  devtools: { enabled: true },
  imports: {
    dirs: ["stores", "utils"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-meilisearch",
    "@nuxt/image",
    [
      "@vee-validate/nuxt",
      {
        // disable or enable auto imports
        autoImports: true,
        // Use different names for components
        componentNames: {
          Form: "VeeForm",
          Field: "VeeField",
          FieldArray: "VeeFieldArray",
          ErrorMessage: "VeeErrorMessage",
        },
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
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
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/datepicker.min.js",
        },
      ],
    },
  },
  image: {
    format: ["webp"],
    domains: ["avatars0.githubusercontent.com"],
    provider: "cloudinary",
    cloudinary: {
      baseURL: "https://res.cloudinary.com/dsvlwyl7i/image/upload/",
      modifiers: {
        effect: "sharpen:100",
        quality: "auto:best",
      },
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
      cloudName: process.env.CLOUDINARY_CLOUD_NAME,
      cloudApiKey: process.env.CLOUDINARY_API_KEY,
      cloudApiSecret: process.env.CLOUDINARY_API_SECRET,
      cloudPreset: process.env.CLOUDINARY_PRESET,
      meilisearchURL: process.env.MEILISEARCH_URL,
      meilisearchKey: process.env.MEILISEARCH_KEY,
    },
  },
  // cloudinary: {
  //   cloudName: process.env.CLOUDINARY_NAME,
  // },
  meilisearch: {
    hostUrl: process.env.MEILISEARCH_URL,
    searchApiKey: process.env.MEILISEARCH_KEY,
    useInstantSearch: true,
  },
});
