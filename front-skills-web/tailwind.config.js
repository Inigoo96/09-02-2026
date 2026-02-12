/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Neon Tokyo
                neon: {
                    magenta: '#FF00FF',
                    cyan: '#00FFFF',
                    pink: '#FF10F0',
                    blue: '#00D4FF',
                },
                // Santorini
                santorini: {
                    white: '#FAFCFF',
                    blue: '#0EA5E9',
                    azure: '#7DD3FC',
                    cream: '#FEF9F3',
                },
                // Brand base
                brand: {
                    dark: '#0A0A1A',
                    navy: '#0F172A',
                    midnight: '#1E1B4B',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Inter', 'system-ui', 'sans-serif'],
            },
            boxShadow: {
                'glow-magenta': '0 0 20px rgba(255, 0, 255, 0.5)',
                'glow-cyan': '0 0 20px rgba(0, 255, 255, 0.5)',
                'glow-soft': '0 0 40px rgba(255, 0, 255, 0.2)',
            },
            animation: {
                'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
            },
            keyframes: {
                'glow-pulse': {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)' },
                    '50%': { boxShadow: '0 0 40px rgba(255, 0, 255, 0.8)' },
                },
            },
        },
    },
    plugins: [],
};
