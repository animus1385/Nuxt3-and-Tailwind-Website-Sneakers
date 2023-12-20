// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ['@nuxt/ui'],
    colorMode: {
        preference: 'light',
    },
    tailwindcss: {
        cssPath: '~/assets/scss/tailwind.scss',
        configPath: 'tailwind.config.ts',
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
});
