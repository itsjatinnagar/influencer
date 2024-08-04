/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "rgb(var(--background))",
                foreground: "rgb(var(--foreground))",
                primary: {
                    DEFAULT: "rgb(var(--primary))",
                    foreground: "rgb(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "rgb(var(--secondary))",
                },
                accent: {
                    DEFAULT: "rgb(var(--accent))",
                },
            },
        },
    },
    plugins: [],
};
