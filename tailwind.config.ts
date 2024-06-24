import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        pt: {
          purple: {
            50: '#F5F0FF',
            100: '#DECEFF',
            200: '#C8ADFF',
            300: '#5D4',
            400: '#5D4',
            500: '#5D4',
            600: '#6538C1',
            700: '#5d4',
            800: '#004AAD',
            900: '#000',
            DEFAULT: '#5d4'
          },
          teal: {
            light: '#35F0D0',
            dark: '#0DC5A5',
            DEFAULT: '#35F0D0'
          },
          pink: {
            light: '#FA48E8',
            dark: '#B623A7',
            DEFAULT: '#FA48E8'
          },
          bg: {
            purple: {
              light: '#5D4',
              dark: '#2D0C66',
              darker: '#000',
              DEFAULT: '#000'
            }
          },
          warning: {
            light: '#FFB6B6',
            dark: '#8B0000',
            DEFAULT: '#8B0000'
          },
          gold: '#FFB636',
          transparent: '#F5F0FF1A'
        }
      }
    }
  },
  plugins: []
}

export default config
