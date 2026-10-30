import { IProject } from '@/lib/types';
import { useMemo } from 'react';
import ProjectCard from '@/components/common/ProjectCard';
import Link from 'next/link';

const Projects: React.FunctionComponent = () => {
  const projects: IProject[] = useMemo(() => [
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
  ], []); 

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-medium mb-12">
          <Link 
            href="#projects"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer`}
          >
            #
          </Link>
          Projects
        </h2>
        
        <ul>
          {projects.map((item, idx) => (
            <li key={idx}>
              <ProjectCard project={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
