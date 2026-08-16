/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        'bg-elevated': 'var(--bg-elevated)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        accent: 'var(--accent)',
        'accent-muted': 'var(--accent-muted)',
        'accent-strong': 'var(--accent-strong)',
        border: 'var(--border)',
        ring: 'var(--accent)',
        primary: 'var(--accent)',
        'primary-foreground': '#020617',
        secondary: 'rgba(255, 255, 255, 0.05)',
        'secondary-foreground': 'var(--text-muted)',
        muted: 'rgba(255, 255, 255, 0.05)',
        'muted-foreground': 'var(--text-muted)',
        destructive: '#ef4444',
        'destructive-foreground': '#fafafa',
        popover: 'var(--surface)',
        'popover-foreground': 'var(--text)',
        card: 'var(--bg-elevated)',
        'card-foreground': 'var(--text)'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.18)',
        panel: '0 18px 40px rgba(0, 0, 0, 0.14)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}
