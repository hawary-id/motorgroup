import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Toyota Type'],
            },
            fontSize: {
                '2xl': '21.6px',
            },
            colors: {
                primary: '#202230',
                'red-600': '#CE0307',
            },
        },
    },

    plugins: [forms],
};
