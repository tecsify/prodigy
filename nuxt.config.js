export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    host: '0.0.0.0',
    port: 7744, // default: 7744
  },

  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title:
      'Tecsify Prodigy: Da el siguiente paso en tu carrera profesional',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'author',
        name: 'author',
        content: 'tecsify',
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'hMvPTPU_1B3OvsDWBBV0g0ySj9V0sIrZPASB-6BWDmk',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://tecsify.com/',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'icon.png',
      },
    ],
    htmlAttrs: {
      lang: 'es',
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/styles/styles.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/composition-api/module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-nested': {},
      },
    },
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },
  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        name: 'English',
      },
      {
        code: 'es',
        file: 'es.json',
        name: 'Español',
      },
      {
        code: 'fr',
        file: 'fr.json',
        name: 'French',
      },
      {
        code: 'de',
        file: 'de.json',
        name: 'German',
      },
      {
        code: 'pt',
        file: 'pt.json',
        name: 'Portuguese',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
  },
  router: {
    linkActiveClass: 'form__btn--active',
  },
  pwa: {
    meta: {
      theme_color: '#030399',
    },
  },
};
