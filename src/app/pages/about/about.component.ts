import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { EducationItem, ExperienceItem } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule, RouterModule, TranslateModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {



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


}