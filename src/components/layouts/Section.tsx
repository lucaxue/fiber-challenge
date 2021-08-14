import React from 'react';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({ className, children }) => (
  <div className={`${className} min-h-screen`}>
    <div className='max-w-screen-lg mx-auto'>{children}</div>
  </div>
);
