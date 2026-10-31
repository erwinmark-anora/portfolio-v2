import { IExperience } from '@/lib/types';
import ExperienceCard from '@/components/common/ExperienceCard';
import LinkButton from '@/components/ui/LinkButton';
import Reveal from '@/components/common/Reveal';
import { experience, links } from '@/content/portfolio';

// Consecutive concurrent roles share one timeline point, so they read as "at the same time".
const groupConcurrent = (items: IExperience[]): IExperience[][] =>
  items.reduce<IExperience[][]>((groups, item) => {
    const last = groups[groups.length - 1];
    if (item.concurrent && last?.[0].concurrent) {
      last.push(item);
    } else {
      groups.push([item]);
    }
    return groups;
  }, []);

const Experience: React.FunctionComponent = () => {
  const groups = groupConcurrent(experience.items);

  return (
    <div>
      <Reveal>
        <h2 className="mb-10 text-heading font-bold tracking-tight">{experience.heading}</h2>
      </Reveal>

      <ol className="relative ml-1 space-y-8 border-l border-border">
        {groups.map((group, index) => {
          const isConcurrent = group.length > 1;

          return (
            <li key={index} className="relative pl-6 sm:pl-8">
              <span
                aria-hidden="true"
                className={`absolute -left-[6.5px] top-7 h-3 w-3 rounded-full ring-4 ring-background ${isConcurrent ? 'bg-accent' : 'bg-muted-foreground'}`}
              ></span>

              <Reveal>
                {isConcurrent ? (
                  <ul className="grid gap-4 rounded-xl border border-accent/30 bg-accent-soft/40 p-2 sm:p-3 lg:grid-cols-2">
                    {group.map((item, idx) => (
                      <li key={idx}>
                        <ExperienceCard experience={item} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ExperienceCard experience={group[0]} />
                )}
              </Reveal>
            </li>
          );
        })}
      </ol>

      <Reveal className="mt-10 pl-7 sm:pl-9">
        <LinkButton href={links.resume}>{experience.resumeLabel}</LinkButton>
      </Reveal>
    </div>
  );
};

export default Experience;
