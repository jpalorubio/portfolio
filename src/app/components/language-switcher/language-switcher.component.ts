import { Component, inject } from '@angular/core';
import { LanguageService, AppLanguage } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {


private languageService = inject(LanguageService);

  lang = this.languageService.lang;

  change(lang: AppLanguage) {
    this.languageService.setLanguage(lang);
  }


}
