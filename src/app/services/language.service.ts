import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type AppLanguage = 'es' | 'en' | 'pt';

const LANG_STORAGE_KEY = 'app_language';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private readonly langSignal = signal<AppLanguage>('es');
  readonly lang = this.langSignal.asReadonly();

  constructor(private translate: TranslateService) {
    const storedLang = this.getStoredLanguage();
    const initialLang = storedLang ?? 'es';

    this.langSignal.set(initialLang);
    this.translate.setFallbackLang('es');
    this.translate.use(initialLang);
  }

  setLanguage(lang: AppLanguage) {
    if (lang == this.langSignal()) return;

    this.langSignal.set(lang);
    this.translate.use(lang);
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  }

  private getStoredLanguage(): AppLanguage | null {
    const lang = localStorage.getItem(LANG_STORAGE_KEY);
    return lang == 'es' || lang == 'en' || lang == 'pt'
      ? lang
      : null;
  }
}