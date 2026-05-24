/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // ─── Brand ────────────────────────────────────────────────────────────
      colors: {
        brand: {
          50:  '#eef4ff',
          100: '#dce9ff',
          200: '#b9d3ff',
          300: '#87b6fe',
          400: '#548efa',
          500: '#2f66f6',   // ← primary action color
          600: '#1a4de0',
          700: '#143bb3',
          800: '#163192',
          900: '#182e76',
          950: '#111d4e',
        },
        // ─── Semantic ───────────────────────────────────────────────────────
        success: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        warning: {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        error: {
          50:  '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
        },
        info: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // ─── Neutral gray scale ─────────────────────────────────────────────
        neutral: {
          50:  '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          850: '#172033',
          900: '#0f172a',
          950: '#080e1c',
        },
      },

      // ─── Typography ────────────────────────────────────────────────────────
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },

      // ─── Animations ────────────────────────────────────────────────────────
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 8px 0px rgba(47, 102, 246, 0.4)' },
          '50%':      { boxShadow: '0 0 20px 4px rgba(47, 102, 246, 0.7)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'fade-in':    'fade-in 0.4s ease-out both',
        'shimmer':    'shimmer 2.5s linear infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
      },

      // ─── Box shadows ───────────────────────────────────────────────────────
      boxShadow: {
        'glass':  '0 4px 24px 0 rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glow-brand': '0 0 20px 4px rgba(47,102,246,0.35)',
        'card':   '0 2px 16px 0 rgba(0,0,0,0.45)',
        'card-hover': '0 8px 32px 0 rgba(0,0,0,0.6)',
      },

      // ─── Backdrop blur ─────────────────────────────────────────────────────
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
