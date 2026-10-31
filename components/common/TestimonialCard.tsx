import * as React from "react";
import Image from "next/image";
import { ITestimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: ITestimonial;
}

// A clean quote card: the quote first, then who said it.
const TestimonialCard: React.FunctionComponent<TestimonialCardProps> = ({
  testimonial
}) => {
  return (
    <figure className="glass flex h-full flex-col p-card sm:p-8">
      <span aria-hidden="true" className="font-mono text-heading leading-none text-accent">
        &ldquo;
      </span>

      <blockquote className="mt-2 flex-1 text-body text-muted-foreground">
        <p>{testimonial.description}</p>
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <Image
          className="h-12 w-12 shrink-0 rounded-full border border-border object-cover"
          src={testimonial.image}
          width={48}
          height={48}
          alt={testimonial.name}
          loading="lazy"
        />
        <div>
          <p className="font-semibold text-foreground">{testimonial.name}</p>
          {testimonial.position && (
            <p className="text-small text-muted-foreground">{testimonial.position}</p>
          )}
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
