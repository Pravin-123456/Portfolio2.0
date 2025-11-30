export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string;
  image: string;
  stats?: string;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  SERVICES = 'services',
  CONTACT = 'contact'
}