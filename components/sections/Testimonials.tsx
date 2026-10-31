import TestimonialCard from '@/components/common/TestimonialCard';
import Reveal from '@/components/common/Reveal';
import Link from 'next/link';
import { testimonials } from '@/content/portfolio';

const Testimonials: React.FunctionComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto">
        <Reveal>
        <h2 className="text-5xl font-medium pb-10 md:pb-20 mb-10 md:mb-20">
          <Link 
            href="#testimonials"
            className={`text-primary-light text-7xl font-bold mr-1 hover:text-accent transition-colors duration-300 cursor-pointer`}
          >
            #
          </Link>
          {testimonials.heading}
        </h2>
        </Reveal>
        
        <div className='flex flex-col lg:flex-row gap-6'>
          {testimonials.items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 150}>
              <TestimonialCard testimonial={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
