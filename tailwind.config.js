const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./src/**/*.{html,js}", './index.html'],
    theme: {
        extend: {},
        // tabSize: [1, 2, 3, 4, 5].reduce((map, i) => {
        //     map[i] = i + '';
        //     return map;
        // }, {}),
    },
    plugins: [
        // plugin(function ({
        //     addUtilities,
        //     addComponents,
        //     matchUtilities,
        //     theme,
        // }) {
        //     addUtilities({
        //         '.nil-red': {
        //             'background-color': '#f44336',
        //         },
        //     });
        //     addComponents({
        //         '.nil-card': {
        //             'background-color': '#fff',
        //             'border-radius': '.25rem',
        //             'box-shadow': '0 2px 4px rgba(0,0,0,0.2)',
        //         },
        //     });
        //     matchUtilities(
        //         {
        //             tab: (value) => ({
        //                 tabSize: value,
        //             }),
        //         },
        //         { values: theme('tabSize') }
        //     );
        // }),
    ],
};
