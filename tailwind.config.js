module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require('daisyui')],
  darkMode: ['class'],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      aspectRatio: {
        '22/23': '22 / 23',
      },
      boxShadow: {
        blue: '0px 4px 0px rgba(37, 99, 235, 0.35)',
      },
      colors: {
        blue: {
          100: '#DBEAFE',
          600: '#2563EB',
          900: '#1E3A8A',
        },
        green: {
          300: '#86EFAC',
          500: '#22C55E',
          700: '#15803D',
        },
        neutral: {
          50: '#FAFAFA',
          200: '#E5E5E5',
          500: '#737373',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        orange: {
          50: '#FFF7ED',
          200: '#FDBA74',
          300: '#F26D64',
          500: '#F36E65',
          600: '#EED082',
          700: '#C2410C',
        },
        red: {
          400: '#F87171',
          600: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['UncutSans'],
      },
      fontSize: {
        mobileNav: ['24px', { lineHeight: '24px' }],
        deviceCode: ['30px', { lineHeight: '36px' }],
        xxs: ['12px', { lineHeight: '16px' }],
        xs: ['13px', { lineHeight: '24px', letterSpacing: '0.1em' }],
        sm: ['16px', { lineHeight: '24px' }],
        base: ['20px', { lineHeight: '28px' }],
        lg: ['24px', { lineHeight: '32px' }],
        xl: ['38px', { lineHeight: '48px' }],
        '2xl': ['50px', { lineHeight: '62px' }],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(102%)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
      },
      screens: {
        xs: '360px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      width: {
        narrowModal: '327px',
        wideModal: '471px',
      },
      zIndex: {
        max: '1000', // High enough to appear above the modal(999)
      },
    },
  },
};
