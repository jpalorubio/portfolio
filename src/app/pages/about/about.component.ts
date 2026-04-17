import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  experience = [
    {
      company: 'Empresa S.L.',
      role: 'Fullstack Developer',
      period: '2022 — Actualidad',
      desc: 'Descripción de tus responsabilidades y logros en este puesto.'
    },
    {
      company: 'Otra Empresa',
      role: 'Frontend Developer',
      period: '2020 — 2022',
      desc: 'Descripción de tus responsabilidades y logros en este puesto.'
    },
  ];

  education = [
    {
      center: 'Universidad / Centro',
      title: 'Grado en Ingeniería Informática',
      period: '2016 — 2020',
    },
    {
      center: 'Centro FP',
      title: 'CFGS Desarrollo de Aplicaciones Web',
      period: '2014 — 2016',
    },
  ];
}