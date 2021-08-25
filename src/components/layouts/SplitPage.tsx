import React from 'react';
import { Section } from './Section';

interface Props {
  firstPage: React.ReactNode;
  secondPage: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const SplitPage: React.FC<Props> = ({
  firstPage,
  secondPage,
  style,
  className,
}) => (
  <Section as='main' className={className} style={style}>
    <div className='flex w-full min-h-screen'>
      <div className='lg:w-1/2 w-full'>{firstPage}</div>
      <div className='lg:w-1/2 lg:flex hidden'>{secondPage}</div>
    </div>
  </Section>
);
