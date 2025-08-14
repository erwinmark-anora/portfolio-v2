export interface IExperience {
  title: string;
  company: string;
  workType?: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface IProject {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface ITestimonial {
  image: string;
  name: string;
  description: string;
  position?: string;
}

export interface INavItem {
  href: string;
  label: string;
}
