import React from 'react';
import { ButtonLink } from './ButtonLink';

type Testimonial = {
  name: { first_name: string; last_name: string };
  avatar_file: string;
  revenue: string;
  quote: string;
  portfolio_url: string;
};

interface Props {
  data: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<Props> = ({
  data: {
    name: { first_name, last_name },
    avatar_file,
    revenue,
    quote,
    portfolio_url,
  },
  className = '',
}) => (
  <div
    className={`grid border border-gray-200 rounded p-6 bg-white w-96 gap-4 ${className}`}
  >
    <div className='flex items-center gap-4'>
      <img
        src={require(`../assets/${avatar_file}`).default}
        alt={`${first_name} ${last_name}`}
        width='45'
      />
      <div>
        <h4 className='text-indigo-600 text-sm font-bold'>
          {first_name} {last_name}
        </h4>
        <p className='text-sm text-gray-600'>{revenue} in revenue</p>
      </div>
    </div>
    <p className='sm:text-base text-lg'>{quote}</p>
    <ButtonLink
      to={portfolio_url}
      color='secondary'
      className='border border-gray-200'
      stretch
    >
      View {first_name}'s Portfolio
    </ButtonLink>
  </div>
);
