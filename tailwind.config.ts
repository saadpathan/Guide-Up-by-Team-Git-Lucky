import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: '#e0fbfc',
        foreground: '#293241',
        primary: {
          DEFAULT: '#3d5a80',
          hover: '#32495e',
          foreground: '#e0fbfc'
        },
        secondary: {
          DEFAULT: '#98c1d9',
          hover: '#7ba9c7',
          foreground: '#293241'
        },
        destructive: {
          DEFAULT: '#ee6c4d',
          foreground: '#e0fbfc'
        },
        muted: {
          DEFAULT: '#e0fbfc',
          foreground: '#293241'
        },
        accent: {
          DEFAULT: '#98c1d9',
          foreground: '#293241'
        },
        popover: {
          DEFAULT: '#e0fbfc',
          foreground: '#293241'
        },
        card: {
          DEFAULT: '#e0fbfc',
          foreground: '#293241'
        },
        link: {
          hover: '#3d5a80'
        }
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px'
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
