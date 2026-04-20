import { Component, input, output, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SKILL_ICONS } from '../../models/skill.model';
import { gsap } from 'gsap';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [],
  templateUrl: './skill-list.component.html',
  styleUrl: './skill-list.component.scss'
})
export class SkillListComponent implements AfterViewInit {
  @ViewChild('grid') grid!: ElementRef;

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

ngAfterViewInit() {
  setTimeout(() => {
    const chips = this.grid.nativeElement.children;
    gsap.from(chips, {
      opacity: 0,
      x: -30,
      duration: 0.4,
      ease: 'power2.out',
      stagger: { each: 0.08, from: 'start' },
      clearProps: 'all'
    });
  }, 100);
}
}