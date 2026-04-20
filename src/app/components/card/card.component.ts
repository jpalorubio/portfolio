import { Component, input, AfterViewInit, ElementRef, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Project } from '../../models/project.model';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatChipsModule, TranslateModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements AfterViewInit {
  private el = inject(ElementRef);
  project = input.required<Project>();

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      ease: 'power2.out',
      clearProps: 'all'
    });
  }
}