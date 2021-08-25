import React from 'react';

interface Props {
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Section: React.FC<Props> = ({
  className = '',
  as: Wrapper = 'div',
  children,
  style,
}) => {
  return (
    <Wrapper className={className} style={style}>
      <div className='container max-w-screen-lg mx-auto xl:px-0 px-10 overflow-hidden'>
        {children}
      </div>
    </Wrapper>
  );
};
