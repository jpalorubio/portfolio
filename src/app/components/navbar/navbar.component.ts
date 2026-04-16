import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { TranslateModule } from '@ngx-translate/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, LanguageSwitcherComponent, TranslateModule, ThemeSwitcherComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

//array de labels y rutas para el routerlink de los botones
  menu= [

  { label: 'menu.home', ruta: '/' },
  { label: 'menu.about', ruta: '/about' },
  { label: 'menu.works', ruta: '/works' },
  { label: 'menu.contact', ruta: '/contact' },

]

}
