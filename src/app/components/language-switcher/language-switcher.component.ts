import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService, AppLanguage } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  private languageService = inject(LanguageService);

  lang = this.languageService.lang;

languages = [
  { code: 'es' as AppLanguage, flag: 'assets/flags/es.png' },
  { code: 'en' as AppLanguage, flag: 'assets/flags/gb.png' },
  { code: 'pt' as AppLanguage, flag: 'assets/flags/pt.png' },
];
  change(lang: AppLanguage) {
    this.languageService.setLanguage(lang);
  }
}