export interface Project {
  name: string;
  type: string;
  desc: string;
  image?: string;
  techs: string[];
  urlWeb?: string;
  urlCode?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
   functions: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
}