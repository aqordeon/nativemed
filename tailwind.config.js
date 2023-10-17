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
                'basic': {
                    50: '#FEFEFE',
                    100: '#F5F5F5',
                    200: '#E4E4E4',
                    300: '#CFCFCF',
                    400: '#A3A3A3',
                    500: '#767676',
                    600: '#4A4A4A',
                    700: '#1E1E1E',
                },
                'native': {
                    50: '#F5F5FB',
                    100: '#EBEBF9',
                    200: '#DDDDF9',
                    300: '#BFC0F7',
                    400: '#9FA1F5',
                    500: '#8184F3',
                    600: '#6366F1',
                    700: '#4E51E3',
                },
                'secondary': {
                    50: '#F8F0EB',
                    100: '#F8EEE7',
                    200: '#F7E4D4',
                    300: '#F3CCAD',
                    400: '#EDB485',
                    500: '#E99C5E',
                    600: '#E58537',
                    700: '#E17218',
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

