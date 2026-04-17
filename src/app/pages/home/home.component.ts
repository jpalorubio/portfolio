import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CardComponent} from '../../components/card/card.component';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, MatChipsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private projectService = inject(ProjectService);

  projects = signal<Project[]>([]);
  selectedTechs = signal<string[]>([]);
  loading = signal(true);
  skills = signal<string[]>([]);

  filteredProjects = computed(() => {
    if (this.selectedTechs().length === 0) return this.projects();
    return this.projects().filter(p =>
      this.selectedTechs().some(tech => p.techs.includes(tech))
    );
  });

  toggleTech(tech: string) {
  this.selectedTechs.update(selected =>
    selected.includes(tech)
      ? selected.filter(t => t !== tech)
      : [...selected, tech]
  );
}

isSelected(tech: string) {
  return this.selectedTechs().includes(tech);
}

  ngOnInit() {
    this.projectService.getAll().subscribe({
      next: (data) => {
        this.projects.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });

      this.projectService.getSkills().subscribe({
    next: (data) => this.skills.set(data)
  });
  }
}