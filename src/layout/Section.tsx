import React from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  id?: string;
  children: React.ReactNode;
};

const Section = React.forwardRef<HTMLDivElement, ISectionProps>(
  ({ title, description, yPadding, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`max-w-screen-lg mx-auto px-3 lg:px-0 ${yPadding || 'py-16'}`}
      {...props}
    >
      {(title || description) && (
        <div className="mb-12 text-center">
          {title && (
            <h2 className="text-4xl text-gray-900 font-bold">{title}</h2>
          )}
          {description && (
            <div className="mt-4 text-xl md:px-20">{description}</div>
          )}
        </div>
      )}

      {children}
    </div>
  )
);
Section.displayName = 'Section';

export { Section };
