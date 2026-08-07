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
        border: 'var(--border)'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.18)',
        panel: '0 18px 40px rgba(0, 0, 0, 0.14)'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
