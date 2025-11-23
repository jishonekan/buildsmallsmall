import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  containerClassName?: string;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24", className)}
        {...props}
      >
        <Container className={containerClassName}>
          {children}
        </Container>
      </section>
    );
  }
);
Section.displayName = "Section";

