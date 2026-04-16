import { Injectable, signal } from '@angular/core';

export type AppTheme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'app_theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private readonly themeSignal = signal<AppTheme>('light');
  readonly theme = this.themeSignal.asReadonly();

  constructor() {
    const storedTheme = this.getStoredTheme();
    const initialTheme = storedTheme ?? 'light';

    this.themeSignal.set(initialTheme);
    this.applyTheme(initialTheme);
  }

  toggleTheme() {
    const nextTheme: AppTheme =
      this.themeSignal() == 'light' ? 'dark' : 'light';

    this.setTheme(nextTheme);
  }

  setTheme(theme: AppTheme) {
    if (theme == this.themeSignal()) return;

    this.themeSignal.set(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: AppTheme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }

  private getStoredTheme(): AppTheme | null {
    const theme = localStorage.getItem(THEME_STORAGE_KEY);
    return theme == 'light' || theme == 'dark'
      ? theme
      : null;
  }
}