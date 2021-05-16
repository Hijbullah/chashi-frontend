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
                href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap'
            }
        ]
    },

    css: [],

    plugins: [],

    components: true,

    buildModules: ['@nuxtjs/tailwindcss'],

    modules: [
        '@nuxtjs/axios',
    ],

    axios: {},

    build: {}
}
