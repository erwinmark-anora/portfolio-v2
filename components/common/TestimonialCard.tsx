import * as React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { ITestimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

const TestimonialCard: React.FunctionComponent<TestimonialCardProps> = ({ 
  testimonial
}) => {
  return (
    <div className="
      relative my-4 rounded-xl border border-gray-700 px-8 pb-8 pt-6 text-white shadow-2xl
      transition-all duration-300 ease-in-out transform cursor-pointer group
      hover:-translate-y-2 hover:shadow-3xl hover:shadow-accent/20 hover:border-accent/50
    ">
      <div className="left-0 top-0 flex justify-center md:absolute md:left-5 md:top-[-75px]">
        <Image
          className="
            h-[150px] w-[150px] rounded-full shadow-lg shadow-accent/50 object-cover border-4
            transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:border-accent
          "
          src={testimonial.image}
          width={150}
          height={150}
          alt={testimonial.name}
          loading="lazy"
        />
      </div>
      
      <div className="flex flex-col items-center justify-center pt-16 md:pt-0">
        <h6 className="text-center text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
          {testimonial.name}
        </h6>
        {testimonial.position && (
          <p className="text-center text-sm text-gray-400 mb-2 group-hover:text-gray-300 transition-colors duration-300">
            {testimonial.position}
          </p>
        )}
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <StarIcon 
                key={index} 
                className="h-6 w-6 text-yellow-400 transition-all duration-300 group-hover:scale-110" 
                style={{ transitionDelay: `${index * 50}ms` }}
              />
            );
          })}
        </div>
      </div>
      
      <div className="my-6 border-2 border-secondary group-hover:border-accent transition-colors duration-300"></div>
      
      <p className="mt-4 text-center italic text-gray-300 group-hover:text-white transition-colors duration-300">
        &ldquo;{testimonial.description}&rdquo;
      </p>
    </div>
  );
};

export default TestimonialCard;