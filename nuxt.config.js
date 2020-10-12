export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'آزمون آنلاین هوش',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'یک آزمون هوش آنلاین بسیار عالی برای تست هوش افراد باهوش'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/fonts/fonts.css',
        '~/assets/css/style.css'
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/axios',
    ],
    axios: {
        // proxyHeaders: false
    },
    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {}
}
