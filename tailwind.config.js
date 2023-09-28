/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            colors: {
                'zeus': {
                    50: '#F4F4F4',
                    100: '#E9E9E8',
                    200: '#C9C8C7',
                    300: '#A8A7A5',
                    400: '#666461',
                    500: '#25221D',
                    600: '#211F1A',
                    700: '#161411',
                    800: '#110F0D',
                    900: '#0B0A09',
                },
                'native': {
                    50: 'rgb(238 242 255)',
                    100: 'rgb(224 231 255)',
                    200: 'rgb(199 210 254)',
                    300: 'rgb(165 180 252)',
                    400: 'rgb(129 140 248)',
                    500: 'rgb(99 102 241)',
                    600: 'rgb(79 70 229)',
                }
            },
            fontSize: {
                xxs: '0.7rem',
            },
            keyframes: {
                "shimmer": {
                    "100%": {
                        "transform": "translateX(100%)",
                    },
                },
            }
        },
    },
    plugins: [],
}

