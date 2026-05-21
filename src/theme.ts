export type Theme = 'wine' | 'light'

const STORAGE_KEY = 'portfolio-theme'

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'wine'
  const v = window.localStorage.getItem(STORAGE_KEY)
  return v === 'light' || v === 'wine' ? v : 'wine'
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  window.localStorage.setItem(STORAGE_KEY, theme)
}
