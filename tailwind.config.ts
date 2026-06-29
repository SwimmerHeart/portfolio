import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './app/**/*.{vue,ts}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        accent: {
          DEFAULT: '#45A29E',
          light: '#66FCF1',
          10: 'rgba(69, 162, 158, 0.1)',
          20: 'rgba(69, 162, 158, 0.2)',
          30: 'rgba(69, 162, 158, 0.3)',
          40: 'rgba(69, 162, 158, 0.4)',
          50: 'rgba(69, 162, 158, 0.5)',
          80: 'rgba(69, 162, 158, 0.8)'
        },
        'text': {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)'
        }
      }
    }
  }
}
