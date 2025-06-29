import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';
  private readonly SYSTEM_THEME = 'system';

  constructor() {}

  initTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      this.applyTheme(savedTheme);
    } else {
      this.applyTheme(this.SYSTEM_THEME);
    }
  }

  setTheme(theme: string): void {
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme: string): void {
    if (theme === this.SYSTEM_THEME) {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? this.DARK_THEME : this.LIGHT_THEME;
      document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
} 