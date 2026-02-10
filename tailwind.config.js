/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                playfair: ['"Playfair Display"', 'serif'],
            },
            colors: {
                background: "var(--bg-primary)",
                foreground: "var(--text-primary)",
                primary: "var(--accent-primary)",
                secondary: "var(--accent-secondary)",
            }
        },
    },
    plugins: [],
}
