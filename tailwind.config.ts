import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-playfair)'],
        navbar: ['var(--font-futura)'],
        cta: ['var(--font-source-sans)'],
        body: ['var(--font-open-sans)'],
        quote: ['var(--font-lora)'],
      },
      backgroundColor: {
        'primary': '#FAA342',
        'secondary': '#BC309D',
        'tertiary': '#EB3678',
        'accent': '#5D1049',
        'yellow': '#FFD700',
        'white': '#F4F4F1',
        'black': '#12101D',
      },
      colors: {
        'primary': '#FAA342',
        'secondary': '#BC309D',
        'tertiary': '#EB3678',
        'accent': '#5D1049',
        'yellow': '#FFD700',
        'cyan': '#c9636a',
        'white': '#F4F4F1',
        'black': '#12101D',
        'teal': '#006989',
        'blue': '#001F3F',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'ping-slow': 'ping 6s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.container': {
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '12px',
          paddingRight: '12px',
          maxWidth: '100%',

          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        },
      });
    }),
  ],
};

export default config;
