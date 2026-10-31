import { ISkillGroup } from '@/lib/types';
import Reveal from '@/components/common/Reveal';
import { skills } from '@/content/portfolio';

// Plain rows, one per group, like the skills block of a resume, so the full stack reads in one skim.
// No tabs, no autoplay, no progress bars.
const Skills: React.FunctionComponent = () => {
  return (
    <div>
      <Reveal>
        <h2 className="mb-10 text-heading font-bold tracking-tight">{skills.heading}</h2>
      </Reveal>

      <Reveal>
        <dl className="divide-y divide-border border-y border-border">
          {skills.groups.map((item: ISkillGroup) => (
            <div key={item.group} className="grid gap-2 py-6 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
              <dt className="text-body font-semibold text-muted-foreground">{item.group}</dt>
              <dd>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5 text-lead text-foreground">
                  {item.skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                      <li key={skill.name} className="inline-flex items-center gap-2">
                        <Icon aria-hidden="true" className="h-4 w-4 shrink-0" style={{ color: skill.color }} />
                        {skill.name}
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </div>
  );
};

export default Skills;
