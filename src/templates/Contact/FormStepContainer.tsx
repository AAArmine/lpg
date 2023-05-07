import React from 'react';

interface FormStepContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  description?: string;
}

export const FormStepContainer: React.FC<FormStepContainerProps> = ({
  children,
  description,
  className,
  ...props
}) => (
  <div className={`form-step ${description ? 'with-description' : ''}`}>
    {description && <div className="description">{description}</div>}
    <div className={`form-step-container ${className || ''}`} {...props}>
      {children}
    </div>
  </div>
);
