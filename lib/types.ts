import { IconType } from "react-icons";

export interface IExperience {
  title: string;
  company: string;
  workType?: string;
  duration: string;
  // true for roles held at the same time; consecutive concurrent roles are grouped side by side
  concurrent?: boolean;
  description: string[];
  technologies: string[];
}

export interface ISkill {
  name: string;
  icon: IconType;
  color: string;
}

export interface ISkillGroup {
  group: string;
  skills: ISkill[];
}

export interface IProject {
  title: string;
  image: string;
  // extra screenshots shown after `image` in the lightbox
  screenshots?: string[];
  description: string;
  technologies: string[];
  link?: string;
  status?: string;
  highlights?: string[];
  featured?: boolean;
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
