/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,css,ts}"
    ],
    theme: {
        extend: {
            fontFamily: {
                'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
                'okra': ['Okra', 'Helvetica', 'sans-serif']
            },
            spacing: {
                '1/2': '50%'
            }
        },
    },
    plugins: [],
    corePlugins: {
        content: true
    }
}

