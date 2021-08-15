import React from 'react';

interface Props {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

export const Section: React.FC<Props> = ({
  className = '',
  as: Wrapper = 'div',
  children,
}) => {
  return (
    <Wrapper className={`min-h-screen ${className}`}>
      <div className='container max-w-screen-lg mx-auto'>{children}</div>
    </Wrapper>
  );
};
