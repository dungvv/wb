/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    // preflight: false
  },
  theme: {
    extend: {
      fontFamily: {
        lexend: ['LexendDeca'],
        inter: ['Inter']
      },
      colors: {
        primary: {
          50: '#FCFEFD',
          500: '#8DE2C8',
          700: '#34CB9E',
          800: '#1D7158'
        },
        green: {
          shamrock: '#34CB9E',
          caribbean: '#CCF2E7'
        },
        gray: {
          50: '#FCFCFD',
          300: '#C8CED9',
          800: '#242B35',
          900: '#191D24'
        }
      },
      screens: {
        // 'min-1440': { min: '1440px' }
      },
      boxShadow: {
        default: '0px 4px 56px 0px #0000001A'
      }
    }
  },
  plugins: []
}
