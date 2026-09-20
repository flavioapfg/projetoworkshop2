/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lima: '#E7FE8E',
          'lima-hover': '#DCFA6E',
          'lima-dark': '#88A714',
          lime: '#D2F542',
          limeDark: '#BCE82E',
          limeSoft: '#F3FCD2',
          limeIcon: '#8EB500',
          'lime-light': '#f5fcd2',
          'lime-icon': '#96c810',
          grayBg: '#F4F5F7',
          modalBg: '#FFFFFF',
          closeBg: '#EEF2F6',
          borderLight: '#EDF1F7',
          textPrimary: '#1E232A',
          textSecondary: '#6B7280',
        },
        surface: {
          app: '#ECEDF5',
          card: '#FFFFFF',
          subtle: '#F7F8FC',
        },
        neutral: {
          canvas: '#ECEDF5',
          surface: '#FFFFFF',
          border: '#D5D8E4',
          'border-subtle': '#E8EAF2',
          heading: '#12161C',
          body: '#2A313C',
          muted: '#697282',
        },
        app: {
          bg: '#ECEDF5',
          card: '#FFFFFF',
          dark: '#12161C',
          body: '#2A313C',
          muted: '#5C6675',
          input: '#ECEEF6',
          purple: '#7C3AED',
          purpleBorder: '#8B5CF6',
        },
        modal: {
          cancel: '#ebf0f7',
          'cancel-hover': '#e1e7f0',
          border: '#e6ebf2',
        },
        gooday: {
          lime: '#D2F843',
          limeButton: '#E7FE8E',
          limeDark: '#62810C',
          limeText: '#5A750B',
          bgLight: '#F3F4F6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      borderRadius: {
        xl2: '22px',
        '3xl': '24px',
        '4xl': '32px',
        modal: '24px',
      },
      boxShadow: {
        card: '0 2px 10px -2px rgba(18, 22, 28, 0.04)',
        float: '0 10px 25px -5px rgba(0, 0, 0, 0.08)',
        modal: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
