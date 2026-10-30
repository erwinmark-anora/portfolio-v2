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
      featured: true,
      description: "A real estate listing portal for Davao City. Buyers search homes for sale, view full listing details and photos, and contact the listing agent directly.",
      highlights: [
        "Built the Next.js front-end: home page, property search with filters, and listing pages with photo galleries.",
        "Built the Laravel back-end and API, with a Filament admin panel for managing listings.",
        "Added agent contact options on each listing (Messenger, WhatsApp, Viber, call, viewing requests) and a home loan calculator.",
      ],
      technologies: ["Next.js", "Laravel", "Filament"],
    },
    {
      title: "ICEI (Indonesia Cyber Education Institute)",
      image: "/images/projects/ICE ( Indonesia Cyber Education Institute ).png",
      description: "A comprehensive Learning Management System (LMS) designed to facilitate online education. Built on the robust edX platform, ICEI supports various user roles, including learners, instructors (dosen), partners (mitra), and administrators. The system is designed to provide a seamless educational experience, allowing learners to enroll in courses offered by various partner institutions.",
      technologies: ["Python", "Javascript", "JQuery"],
      link: "https://icei.ac.id/"
    },
    {
      title: "AuctionTale",
      image: "/images/projects/AuctionTale.png",
      description: "An advanced auction platform built with Vue.js and Laravel, utilizing Tailwind CSS for a sleek and responsive design. This application enables sellers to list items for auction, buyers to place competitive bids, and administrators to oversee the entire process by approving, rejecting, and scheduling auctions. Key features include real-time updates, user-friendly interfaces, and robust administrative controls. Auction Tale ensures a seamless and efficient auction experience for all users, enhancing the traditional auction process with modern technology.",
      technologies: ["Laravel", "VueJS", "TailwindCSS"],
      link: "https://auctiontale.com/"
    },
    {
      title: "Easy BDI Course",
      image: "/images/projects/Easy BDI Course.png",
      description: "A modern Learning Management System (LMS) built with Vue.js and Laravel, designed specifically for individuals taking BDI courses. It offers an intuitive interface for accessing and managing course materials, engaging with interactive learning modules, and completing customizable exams. Upon passing exams, learners receive their certificates automatically. EasyBDI ensures a secure, scalable, and user-friendly experience, making it the ideal platform for your BDI certification journey.",
      technologies: ["Laravel", "VueJS"],
    },
    {
      title: "Virtual Assistants Finder",
      image: "/images/projects/Virtual Assistants Finder.png",
      description: "Developed a new application from scratch for finding virtual assistants using ReactJS. The application features comprehensive dashboards for both employers and job seekers, including functionalities such as real-time chat, time tracking, job postings, and application management. It also offers search filters and profile management to streamline the hiring process. The goal was to revamp their site, enhancing user experience, performance, and overall efficiency.",
      technologies: ["Python", "ReactJS", "MaterialUI"],
    },
    {
      title: "Dashboard California Ticket King",
      image: "/images/projects/Dashboard California Ticket King.png",
      description: "A website built on Vue.js and Laravel for company attorneys and staff. The application records and creates cases from clients, allows user creation and updates, manages payment coupons, assigns courthouses for attorneys, and integrates Stripe accounts. It ensures efficient case management and payment processing.",
      technologies: ["Laravel", "VueJS"],
    },
    {
      title: "SBHE Project Management",
      image: "/images/projects/SBHE Project Management.png",
      description: "An application built on Laravel and AngularJS used by company employees and owners to oversee and manage projects and employee work. It records all ongoing construction projects and tracks workers, including their attendance and hours. The application also maintains equipment backlogs and conditions, providing a comprehensive view of company resources and project status.",
      technologies: ["Laravel", "AngularJS"],
    },
    {
      title: "California Ticket King Payment Portal",
      image: "/images/projects/California Ticket King Payment Portal.png",
      description: "A payment portal built on Slim PHP and jQuery. This website collects information and payments via Stripe from clients with traffic tickets who hire attorneys to resolve them. Currently, the application serves clients in California counties only.",
      technologies: ["SlimPHP", "Javascript", "JQuery"],
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
