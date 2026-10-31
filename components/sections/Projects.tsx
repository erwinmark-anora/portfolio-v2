import ProjectCard from '@/components/common/ProjectCard';
import Reveal from '@/components/common/Reveal';
import Link from 'next/link';
import { projects } from '@/content/portfolio';

const Projects: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <Reveal>
        <h2 className="text-5xl font-medium mb-12">
          <Link 
            href="#projects"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer`}
          >
            #
          </Link>
          {projects.heading}
        </h2>
        </Reveal>
        
        <ul>
          {projects.items.map((item, idx) => (
            <li key={idx}>
              <Reveal>
                <ProjectCard project={item} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
