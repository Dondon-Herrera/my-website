import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
       colors: {
        card: 'rgba(255, 255, 255, 0.05)',
        background: 'rgba(0,0,0,0.8)',
        'muted-foreground': '#d1d5db',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-purple-cyan': 'linear-gradient(90deg, #a855f7, #06b6d4)',
        'gradient-cyan-blue': 'linear-gradient(90deg, #06b6d4, #3b82f6)',
        'gradient-yellow-orange': 'linear-gradient(90deg, #facc15, #f97316)',
        'gradient-green-teal': 'linear-gradient(90deg, #10b981, #14b8a6)',
      },
    },
  },
  plugins: [],
}
export default config


