import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SkillListComponent } from '../../components/skill-list/skill-list.component';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatProgressSpinnerModule, CardComponent, SkillListComponent, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  private projectService = inject(ProjectService);

  projects = signal<Project[]>([]);
  skills = signal<string[]>([]);
  selectedTechs = signal<string[]>([]);
  loading = signal(true);

  filteredProjects = computed(() => {
    if (this.selectedTechs().length === 0) return this.projects();
    return this.projects().filter(p =>
      this.selectedTechs().some(tech => p.techs.includes(tech))
    );
  });

  ngOnInit() {
    this.projectService.getAll().subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      }
    });

    this.projectService.getSkills().subscribe({
      next: (data) => this.skills.set(data)
    });
  }

  toggleTech(tech: string) {
    this.selectedTechs.update(selected =>
      selected.includes(tech)
        ? selected.filter(t => t !== tech)
        : [...selected, tech]
    );
  }
}