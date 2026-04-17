import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private http = inject(HttpClient);

  getAll(): Observable<Project[]> {
    return this.http.get<Project[]>('assets/data/projects.json');
  }

  getSkills(): Observable<string[]> {
    return this.getAll().pipe(
      map(projects => {
        const all = projects.flatMap(p => p.techs);
        return [...new Set(all)];
      })
    );
  }
}