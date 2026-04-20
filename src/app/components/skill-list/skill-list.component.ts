import { Component, input, output } from '@angular/core';
import { SKILL_ICONS } from '../../models/skill.model';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent {
  skills = input.required<string[]>();
  filterable = input<boolean>(false);
  selectedTechs = input<string[]>([]);

  techSelected = output<string>();

  skillIcons = SKILL_ICONS;

  toggle(skill: string) {
    if (this.filterable()) {
      this.techSelected.emit(skill);
    }
  }

  isSelected(skill: string) {
    return this.selectedTechs().includes(skill);
  }
}