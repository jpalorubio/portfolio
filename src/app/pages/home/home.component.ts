import { Component, inject, OnInit, AfterViewInit, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SkillListComponent } from '../../components/skill-list/skill-list.component';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { TranslateModule } from '@ngx-translate/core';
import { gsap } from 'gsap';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, SkillListComponent, TranslateModule, RouterModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, AfterViewInit {
  private projectService = inject(ProjectService);

  projects = signal<Project[]>([]);
  loading = signal(true);
  skills = signal<string[]>([]);

  ngOnInit() {
    this.projectService.getAll().subscribe({
      next: (data) => {
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        this.projects.set(shuffled.slice(0, 3));
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });

    this.projectService.getSkills().subscribe({
      next: (data) => this.skills.set(data)
    });
  }

  ngAfterViewInit() {
    gsap.from('.hero', {
      opacity: 0,
      y: 40,
      duration: 2,
      ease: 'power3.out'
    });

    
  }
}