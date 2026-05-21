import type { Theme } from '../theme'

type Props = {
  theme: Theme
  onChange: (t: Theme) => void
}

export function ThemeToggle({ theme, onChange }: Props) {
  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      <button
        type="button"
        aria-pressed={theme === 'wine'}
        onClick={() => onChange('wine')}
      >
        Wine
      </button>
      <button
        type="button"
        aria-pressed={theme === 'light'}
        onClick={() => onChange('light')}
      >
        White
      </button>
    </div>
  )
}
