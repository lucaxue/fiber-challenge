import React from 'react';
import { ButtonLink } from './ButtonLink';

type Testimonial = {
  name: { firstName: string; lastName: string };
  Avatar: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  revenue: number;
  quote: string;
  portfolioURL: string;
};

interface Props {
  data: Testimonial;
  className?: string;
}

export const Testimonial: React.FC<Props> = ({
  data: {
    name: { firstName, lastName },
    Avatar,
    revenue,
    quote,
    portfolioURL,
  },
  className = '',
}) => (
  <div
    className={`grid border border-gray-200 rounded p-6 bg-white w-96 gap-4 ${className}`}
  >
    <div className='flex items-center gap-4'>
      <Avatar width='45' />
      <div>
        <h4 className='text-indigo-600 text-sm font-bold'>
          {firstName} {lastName}
        </h4>
        <p className='text-sm'>${revenue}k in revenue</p>
      </div>
    </div>
    <p>{quote}</p>
    <ButtonLink
      to={portfolioURL}
      color='secondary'
      className='border border-gray-200'
      stretch
    >
      View {firstName}'s Portfolio
    </ButtonLink>
  </div>
);
