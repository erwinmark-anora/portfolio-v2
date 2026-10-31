// All site text lives here. Components only read from this file.
import { IExperience, INavItem, IProject, ISkillGroup, ITestimonial } from '@/lib/types';
import { FaGraduationCap } from 'react-icons/fa';
import {
  SiLaravel, SiLivewire, SiFilament, SiPhp, SiPython, SiDjango, SiPostgresql, SiMysql,
  SiVuedotjs, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3,
  SiGithubactions, SiDocker, SiGit, SiGithub, SiGitlab, SiBitbucket,
  SiStripe, SiXendit, SiClaude, SiPostman, SiFigma,
} from 'react-icons/si';

export const site = {
  url: 'https://erwinmarkanora.vercel.app',
  name: 'Erwin Mark Añora',
  title: 'Erwin Mark Añora | Full-Stack Developer, Laravel First',
  description: 'Full-stack developer with 10+ years building web apps from database to deployment. Laravel and Livewire, Vue, React, Next.js and Python/Django.',
};

export const links = {
  resume: 'https://drive.google.com/file/d/1l9LgHrubxfBEzhZjIX-eXz9k2GV9ftLL/view',
  github: 'https://github.com/solomon0918',
  linkedin: 'https://www.linkedin.com/in/erwin-mark-anora/',
  email: 'mailto:erwinmark.anora@gmail.com',
};

export const navigationItems: INavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#how-i-work', label: 'How I work' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export const about = {
  name: 'Erwin Mark Añora',
  roles: [
    'Full-Stack Developer',
    'Laravel Developer',
    'Python / Django Developer',
    'Vue & React Developer',
  ],
  summary: 'Full-stack developer, Laravel first. 10+ years building web apps from database to deployment.',
  // highlight: true renders the segment in the accent color
  intro: [
    { text: 'Hi, I’m Erwin Mark, a full-stack developer with 10+ years of experience, and Laravel is my main stack. I currently build Laravel apps on contract for ' },
    { text: '@Born Malta', highlight: true },
    { text: ' and work on Open edX learning platforms with Python, Django and React at ' },
    { text: '@Cloudswyft', highlight: true },
    { text: '. Before that, I built web apps with Laravel, Vue and React for teams and clients in the US, Singapore and the Philippines. I use an AI-assisted SDLC with Claude Code to plan, build, deploy and maintain, and I review and own all code that ships.' },
  ],
  resumeLabel: 'Download Resume',
  contactLabel: 'Contact',
  // accessible names for the icon-only links
  socialLabels: {
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
};

export const experience = {
  heading: 'Experiences',
  resumeLabel: 'View Full Resume',
  items: [
    {
      title: "Full-Stack Developer",
      company: "Born Malta (via Webee)",
      workType: "Contract · Concurrent role",
      duration: "Sep 2025 - Present",
      description: [
        'Own end-to-end development of a social-services / benefits web application using Laravel and JavaScript/jQuery, from feature design through deployment.',
        'Work across four concurrent team projects, contributing to and unblocking multiple Laravel codebases beyond primary ownership, including an internal license-management system built with Laravel and Livewire.',
        'Integrated AI-assisted development into my workflow using Claude Code, authoring reusable skills, workflow examples, and CLAUDE.md conventions for faster, more consistent delivery.'
      ],
      technologies: ['Laravel', 'Livewire', 'JavaScript', 'jQuery', 'Claude Code']
    },
    {
      title: "Senior Full-Stack Engineer",
      company: "Cloudswyft Global Systems",
      workType: "Concurrent role",
      duration: "Oct 2022 - Present",
      description: [
        'Built the front-end of ICEI\'s Open edX learning platform, which served 30,000+ active learners.',
        'Lead development of Cloudswyft\'s own learning platform (Open edX Sumac, Python/Django, React micro-frontends), not yet launched, using an AI-assisted SDLC with Claude Code; supervise 4–5 interns building features for it.',
        'Maintained ICEI\'s production platform: fixed client-reported issues across the Python/Django and React codebases and resolved Xendit payment and enrollment edge cases, working with DevOps.'
      ],
      technologies: ['Open edX', 'Python', 'Django', 'React', 'Xendit', 'Claude Code']
    },
    {
      title: "Full-Stack Developer",
      company: "Offshorly",
      duration: "Feb 2022 - Oct 2022",
      description: [
        'Led development of AuctionTale, a real-time bidding platform (Vue, Laravel 9), from build to MVP launch.',
        'Led a remote team of 4 developers (2 back-end, 2 front-end) as full-stack lead: planned tasks, reviewed code, and set code-review standards.'
      ],
      technologies: ['Laravel', 'Vue']
    },
    {
      title: "Independent Full-Stack Contractor",
      company: "Self-employed",
      workType: "Freelance / Contract",
      duration: "2018 - 2023",
      description: [
        'Built web applications for 5 clients in the US, Singapore and the Philippines (Laravel, Vue, React).',
        'Built California Ticket King\'s (US) Stripe payment portal in Slim PHP and jQuery, plus a Laravel/Vue internal dashboard for customer and transaction management.',
        'Built the AngularJS front-end of SBHE\'s (Singapore) project-management app and contributed to its Laravel APIs.'
      ],
      technologies: ['Laravel', 'Vue', 'React', 'Slim PHP', 'jQuery', 'Stripe', 'AngularJS']
    },
  ] as IExperience[],
};

export const skills = {
  heading: 'Skills',
  // color = official brand color; white for black logos (Next.js, GitHub), as on their dark-mode logos
  groups: [
    {
      group: "Back-end",
      skills: [
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
        { name: 'Livewire', icon: SiLivewire, color: '#FB70A9' },
        { name: 'Filament', icon: SiFilament, color: '#FDAE4B' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'Python', icon: SiPython, color: '#FFD43B' },
        { name: 'Django', icon: SiDjango, color: '#44B78B' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ]
    },
    {
      group: "Front-end",
      skills: [
        { name: 'Vue', icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      ]
    },
    {
      group: "DevOps",
      skills: [
        { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
        { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
        { name: 'Bitbucket', icon: SiBitbucket, color: '#2684FF' },
      ]
    },
    {
      group: "Platforms",
      skills: [
        { name: 'Open edX', icon: FaGraduationCap, color: '#FFFFFF' },
        { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
        { name: 'Xendit', icon: SiXendit, color: '#4573FF' },
        { name: 'AI-assisted SDLC (Claude Code)', icon: SiClaude, color: '#D97757' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      ]
    },
  ] as ISkillGroup[],
};

export const howIWork = {
  heading: 'How I work',
  steps: [
    {
      name: 'Plan',
      text: 'Claude helps me break a feature into small tickets, read the codebase and write a plan. I decide the scope and approve the plan.',
    },
    {
      name: 'Build',
      text: 'I use Claude as a tool to draft code and unit tests. I read every diff and test the feature by hand against a checklist.',
    },
    {
      name: 'Deploy',
      text: 'Every change goes through a pull request and a CI/CD pipeline. Claude helps write a clear PR description, and I check what goes out.',
    },
    {
      name: 'Maintain',
      text: 'Claude helps turn bug reports and error alerts into tickets and trace the cause. I confirm the fix before it ships.',
    },
  ],
  closing: 'I review and own all code that ships.',
};

export const projects = {
  heading: 'Projects',
  items: [
    {
      title: "Gintanao",
      image: "/images/projects/gintanao-stack.png",
      status: "In development",
      description: "A real estate listing portal for Davao City. Buyers search homes for sale, view full listing details and photos, and contact the listing agent directly.",
      highlights: [
        "Built the Next.js front-end: home page, property search with filters, and listing pages with photo galleries.",
        "Built the Laravel back-end and API, with a Filament admin panel for managing listings.",
        "Added agent contact options on each listing (Messenger, WhatsApp, Viber, call, viewing requests) and a home loan calculator.",
      ],
      technologies: ["Next.js", "Laravel", "Filament", "shadcn/ui", "TailwindCSS"],
    },
    {
      title: "ICEI (Indonesia Cyber Education Institute)",
      image: "/images/projects/ICE ( Indonesia Cyber Education Institute ).png",
      status: "Past project · site since rebranded",
      description: "ICEI's Open edX learning platform, built at Cloudswyft. It served 30,000+ active learners and supported learners, instructors, partner schools and admins.",
      highlights: [
        "Built the front-end of the platform.",
        "Fixed client-reported issues across the Python/Django and React codebases.",
        "Resolved Xendit payment and enrollment edge cases, working with DevOps.",
      ],
      technologies: ["Open edX", "Python", "Django", "React", "Xendit"],
    },
    {
      title: "AuctionTale",
      image: "/images/projects/AuctionTale.png",
      description: "An auction platform for vintage collectibles. Sellers list items, buyers bid in real time, and admins approve and schedule auctions.",
      highlights: [
        "Led development with Vue and Laravel 9 at Offshorly, from build to MVP launch.",
        "Led a team of 4 developers (2 back-end, 2 front-end) as full-stack lead.",
        "Planned tasks, reviewed code, and set code-review standards for the team.",
      ],
      technologies: ["Laravel", "VueJS", "TailwindCSS"],
      link: "https://auctiontale.com/"
    },
    {
      title: "California Ticket King Dashboard",
      image: "/images/projects/Dashboard California Ticket King.png",
      description: "An internal dashboard for California Ticket King's attorneys and staff, built with Vue and Laravel.",
      highlights: [
        "Built case management: create and track client cases, and assign courthouses to attorneys.",
        "Built user management and payment coupons.",
        "Integrated Stripe for client payments.",
      ],
      technologies: ["Laravel", "VueJS", "Stripe"],
    },
    {
      title: "Easy BDI Course",
      image: "/images/projects/Easy BDI Course.png",
      description: "A learning platform for people taking BDI courses.",
      highlights: [
        "Built and deployed the platform with Vue 2 and Laravel.",
        "Built interactive learning modules and automated exams.",
        "Added automatic certificates for learners who pass.",
      ],
      technologies: ["Laravel", "VueJS"],
    },
    {
      title: "Virtual Assistants Finder",
      image: "/images/projects/Virtual Assistants Finder.png",
      description: "A platform that matches virtual assistants with employers.",
      highlights: [
        "Rebuilt the app from scratch in React.",
        "Built dashboards for employers and job seekers, with job posts and application management.",
        "Added real-time chat and time tracking.",
      ],
      technologies: ["Python", "ReactJS", "MaterialUI"],
    },
  ] as IProject[],
  imagePlaceholder: 'Project Image',
};

export const testimonials = {
  heading: 'Testimonials',
  items: [
    {
      image: "/images/testimonials/scott-hullinger.png",
      name: "Scott Hullinger",
      description: "Like a keystone, Erwin’s contributions to California Ticket King are integral to its success as a leader in online-attorney-ticket-resolution. He has built, tested and implemented PHP using Slim and Laravel libraries. He is timely, consistent and persistent, qualities seen only in full stack engineers."
    },
    {
      image: "/images/testimonials/gemini-bataican.jpg",
      name: "Gemini Bataican",
      description: "We hired Erwin to collaborate with us for a web app payment system. He is outstanding to work with, smart and attentive. He gave input on how to make the app even better. We are genuinely happy with the result. We will always consider him in our other coming projects. I would highly recommend his services to anyone."
    }
  ] as ITestimonial[],
};

export const contact = {
  heading: "Let's Connect",
  text: 'Whether you have a question, a project idea, or just want to say hi, feel free to drop me a message. I aim to respond within 24–48 hours.',
  buttonLabel: 'Say Hello',
};

export const footer = {
  copyrightName: 'Erwin Mark Añora',
};
