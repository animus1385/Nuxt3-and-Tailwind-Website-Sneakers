/** @type {import('tailwindcss').Config} */
export default {
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './app.vue', './error.vue'],

    theme: {
        screens: {
            xl: '1645px',
        },
        container: {
            center: true,
            padding: {
                sm: '20px',
                md: '30px',
                lg: '40px',
                xl: '50px',
                '2xl': '60px',
            },
        },
        extend: {},
    },
    plugins: [
        function ({ addUtilities }) {
            const newUtilities = {
                '.container': {
                    paddingLeft: '74px',
                    paddingRight: '33px',
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
