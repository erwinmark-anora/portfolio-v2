import ProjectCard, { FeaturedProjectCard } from '@/components/common/ProjectCard';
import Reveal from '@/components/common/Reveal';
import { projects } from '@/content/portfolio';

// The featured project (strongest) comes first and bigger; the rest sit in a grid below it.
const Projects: React.FunctionComponent = () => {
  const featured = projects.items.filter((item) => item.featured);
  const others = projects.items.filter((item) => !item.featured);

  return (
    <div>
      <Reveal>
        <h2 className="mb-10 text-heading font-bold tracking-tight">{projects.heading}</h2>
      </Reveal>

      {featured.map((item, idx) => (
        <Reveal key={idx} className="mb-8">
          <FeaturedProjectCard project={item} />
        </Reveal>
      ))}

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((item, idx) => (
          <li key={idx}>
            <Reveal className="h-full">
              <ProjectCard project={item} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
