import TestimonialCard from '@/components/common/TestimonialCard';
import Reveal from '@/components/common/Reveal';
import { testimonials } from '@/content/portfolio';

const Testimonials: React.FunctionComponent = () => {
  return (
    <div>
      <Reveal>
        <h2 className="mb-10 text-heading font-bold tracking-tight">{testimonials.heading}</h2>
      </Reveal>

      <ul className="grid gap-6 md:grid-cols-2">
        {testimonials.items.map((item, idx) => (
          <li key={item.name}>
            <Reveal delay={idx * 100} className="h-full">
              <TestimonialCard testimonial={item} />
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Testimonials;
