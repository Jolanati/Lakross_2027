import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        carmine: {
          DEFAULT: '#9B1B30',
          dark: '#6B0F20',
          light: '#C42847',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          deep: '#0D0D0D',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E0C970',
        },
        cream: '#FAFAF7',
      },
      fontFamily: {
        display: ['Inter Tight', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
