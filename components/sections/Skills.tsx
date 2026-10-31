import { ISkillGroup } from '@/lib/types';
import Reveal from '@/components/common/Reveal';
import { skills } from '@/content/portfolio';

// Every group is visible at once so the full stack reads in one skim: no tabs, no autoplay, no progress bars.
const Skills: React.FunctionComponent = () => {
  return (
    <div>
      <Reveal>
        <h2 className="mb-10 text-heading font-bold tracking-tight">{skills.heading}</h2>
      </Reveal>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.groups.map((item: ISkillGroup, index) => (
          <li key={item.group}>
            <Reveal delay={index * 100} className="h-full">
              <section aria-labelledby={`skills-group-${index}`} className="glass h-full p-card">
                <h3 id={`skills-group-${index}`} className="font-mono text-label uppercase text-accent">
                  {item.group}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-2.5 py-1.5 text-small"
                      >
                        <Icon aria-hidden="true" className="h-4 w-4 shrink-0" style={{ color: skill.color }} />
                        {skill.name}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
