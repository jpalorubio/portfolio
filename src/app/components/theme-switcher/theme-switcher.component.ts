import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  imports: [],
  templateUrl: './theme-switcher.component.html',
  styleUrl: './theme-switcher.component.scss'
})
export class ThemeSwitcherComponent {

 private themeService = inject(ThemeService);

  // Solo lectura (por si quieres mostrar iconos distintos)
  theme = this.themeService.theme;

  toggle() {
    this.themeService.toggleTheme();
  }

}


