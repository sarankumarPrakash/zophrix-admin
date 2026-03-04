export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                theme: '#141d2b',
            },
            // fontFamily: {
            //     sans: ['Lato', 'sans-serif'],
            // },
            lineHeight: {
                'tight-custom': '1.1',
            }
        },
    },
    plugins: [],
}
