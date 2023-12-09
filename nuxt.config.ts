// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from 'path'

export default defineNuxtConfig({
    alias: {
        '@comps': resolve(__dirname, './components'),
        '@imgs': resolve(__dirname, './assets/images'),
        '@styles': resolve(__dirname, './styles'),
        '@libs': resolve(__dirname, './libraries'),
        '@factory': resolve(__dirname, './factory'),
        '@models': resolve(__dirname, './models'),
    },
    app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
        }
    },
    css: ['~/assets/stylesheet/index.scss'],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/supabase',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    ssr: true,
    supabase: {
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            exclude: ['/', '/register'],
        }
    }
})
