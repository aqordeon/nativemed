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
    css: ['~/assets/stylesheet/index.scss'],
    modules: [
        '@pinia/nuxt',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
