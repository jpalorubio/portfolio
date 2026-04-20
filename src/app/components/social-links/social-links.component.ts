import { Component, input } from '@angular/core';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent {
  compact = input<boolean>(false); // para el footer más pequeño
}