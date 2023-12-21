// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],
    colorMode: {
        preference: 'light',
    },
    tailwindcss: {
        cssPath: '~/assets/scss/tailwind.scss',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        viewer: false,
    },
    ssr: false,
    ui: {
        icons: 'all',
    },
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    pinia: {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
    },
});
