import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  templateUrl: './theme-switcher.component.html'  // ← templateUrl
})
export class ThemeSwitcherComponent {  // ← nombre consistente
  themeService = inject(ThemeService);
}

