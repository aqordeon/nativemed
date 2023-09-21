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
            fontSize: {
                xxs: '0.7rem',
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
                    50: '#F5F5FB',
                    100: '#5E5FA133',
                    200: '#5E5FA166',
                    300: '#5E5FA199',
                    400: '#5E5FA1CC',
                    500: '#7D7EB3',
                    600: '#5E5FA1',
                }
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

