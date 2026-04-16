import { Injectable, signal, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private doc = inject(DOCUMENT);
  isDark = signal<boolean>(false);

  constructor() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.isDark.set(saved === 'dark');
    } else {
      this.isDark.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    effect(() => {
      this.doc.body.classList.toggle('dark-theme', this.isDark());
      localStorage.setItem('theme', this.isDark() ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.isDark.update(v => !v);
  }
}