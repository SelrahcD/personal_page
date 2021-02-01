module.exports = {
    purge: {
        content: ["_site/**/*.html"],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            colors: {
                scarlet: {
                    '50':  '#fcf8f6',
                    '100': '#fcefee',
                    '200': '#fad5db',
                    '300': '#f9b1ba',
                    '400': '#f97d85',
                    '500': '#fa5157',
                    '600': '#f3323a',
                    '700': '#c14953',
                    '800': '#a91f2e',
                    '900': '#861a27',
                },
                gray: {
                    '50':  '#f6f8f7',
                    '100': '#f2f2f1',
                    '200': '#e4e5e1',
                    '300': '#d7d9ce',
                    '400': '#afb0a9',
                    '500': '#8b8984',
                    '600': '#6d6565',
                    '700': '#584e54',
                    '800': '#463d46',
                    '900': '#383239',
                },
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/forms'),
    ],
};