import TestimonialCard from '@/components/common/TestimonialCard';
import Reveal from '@/components/common/Reveal';
import Link from 'next/link';

const Testimonials: React.FunctionComponent = () => {
  const testimonials = [
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
  ];

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
          Testimonials
        </h2>
        </Reveal>
        
        <div className='flex flex-col lg:flex-row gap-6'>
          {testimonials.map((item, idx) => (
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
