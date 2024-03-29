export default {
    head: {
        title: 'chashi',
        htmlAttrs: {
        lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { 
                rel: 'icon', 
                type: 'image/x-icon', 
                href: '/favicon.ico' 
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;900&display=swap'
            }
        ]
    },

    css: [
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        '~/assets/css/slick-carousel.theme.css',
    ],

    plugins: [
        '~/plugins/vue-slick-carousel.js',
    ],

    components: true,

    buildModules: ['@nuxtjs/tailwindcss'],

    modules: [
        '@nuxtjs/axios',
    ],

    axios: {},

    build: {}
}
