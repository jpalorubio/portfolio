import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EducationItem, ExperienceItem } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule, RouterModule, TranslateModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  private el = inject(ElementRef);

  experience$!: Observable<ExperienceItem[]>;
  education$!: Observable<EducationItem[]>;

  constructor(private translate: TranslateService) {
    this.experience$ = this.translate.stream(
      'about.experience.items'
    ) as Observable<ExperienceItem[]>;

    this.education$ = this.translate.stream(
      'about.education.items'
    ) as Observable<EducationItem[]>;
  }

  ngAfterViewInit() {
    const el = this.el.nativeElement;

    // Foto entra desde la izquierda
    gsap.from(el.querySelector('.about-photo'), {
      opacity: 0,
      x: -60,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'all'
    });

    // Texto entra desde la derecha
    gsap.from(el.querySelector('.about-intro'), {
      opacity: 0,
      x: 60,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'all'
    });

    // Timeline en cascada desde abajo
    gsap.from(el.querySelectorAll('.timeline-item'), {
      opacity: 0,
      y: 30,
      duration: 0.5,
      ease: 'power2.out',
      stagger: { each: 0.15 },
      delay: 0.3,
      clearProps: 'all'
    });
  }
}