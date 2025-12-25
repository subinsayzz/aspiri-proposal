/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1A1A1A',     // Dark Gray/Black for text
                secondary: '#4A4A4A',   // Medium Gray
                accent: '#B8860B',      // Dark GoldenRod (better contrast on white than pure gold)
                bg: '#FAFAFA',          // Off-white paper background
                surface: '#FFFFFF',     // Pure white for cards
                dim: 'rgba(0, 0, 0, 0.05)', // Subtle darkening
            },
            fontFamily: {
                heading: ['"Futura LT"', 'sans-serif'],
                body: ['"Poppins"', 'sans-serif'],
            },
            boxShadow: {
                'premium': '0 20px 40px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
                'gold': '0 10px 30px -5px rgba(184, 134, 11, 0.2)',
            }
        },
    },
    plugins: [],
}
