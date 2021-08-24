import React from 'react';

import page from '../../assets/page-image.png';
import { ReactComponent as Time } from '../../assets/time.svg';
import { ReactComponent as Code } from '../../assets/code.svg';
import { ReactComponent as AllSizes } from '../../assets/allSizes.svg';

import { ReactComponent as SarahAvatar } from '../../assets/user-avatar-1.svg';
// import { ReactComponent as MatthewAvatar } from '../../assets/user-avatar-2.svg';
// import { ReactComponent as JaniceAvatar } from '../../assets/user-avatar-3.svg';

import { Section } from '../layouts/Section';
import { ButtonLink } from '../ButtonLink';
import { Testimonial } from '../Testimonial';

import testimonialsJson from '../../data/testimonials.json';

const testimonials = testimonialsJson.map(testimonial => ({
  ...testimonial,
  Avatar: SarahAvatar,
}));

export const Main: React.FC = () => {
  return (
    <Section as='main'>
      <div className='py-8'>
        <div className='sm:w-1/2 flex flex-col gap-4 my-8'>
          <p className='text-indigo-600 font-semibold'>Why Fiber?</p>
          <h2 className='sm:text-3xl text-4xl sm:font-bold font-semibold'>
            A good portfolio means good employability.
          </h2>
        </div>
        <div className='flex sm:flex-row flex-col w-full gap-10 my-8'>
          <div className='flex-1 flex flex-col gap-4'>
            <Time />
            <h4 className='text-sm font-bold'>Build in minutes</h4>
            <p className='text-gray-500 sm:text-base text-lg'>
              With a selection of premade templates, you can build out a
              portfolio in less than 10 minutes.
            </p>
          </div>
          <div className='flex-1 flex flex-col gap-4'>
            <Code />
            <h4 className='text-sm font-bold'>Add custom CSS</h4>
            <p className='text-gray-500 sm:text-base text-lg'>
              Customize your personal portfolio even with the ability to add
              your own custom CSS styles.
            </p>
          </div>
          <div className='flex-1 flex flex-col gap-4'>
            <AllSizes />
            <h4 className='text-sm font-bold'>Responsive</h4>
            <p className='text-gray-500 sm:text-base text-lg'>
              All Fiber templates are fully responsive to ensure the experience
              is seemless across all devices
            </p>
          </div>
        </div>
      </div>

      <div className='flex sm:flex-row flex-col bg-indigo-600 rounded-md'>
        <div className='flex flex-col gap-4 sm:w-5/12 px-8 self-center py-10'>
          <h2 className='sm:text-3xl text-4xl text-white sm:font-bold font-semibold'>
            Diversify your portfolio.
          </h2>
          <p className='text-gray-200 sm:text-base text-lg'>
            Create an even more impressive portfolio by creating case studies
            for your projects. Simply follow our step-by-step guide.
          </p>
          <ButtonLink color='secondary' to='#' className='sm:max-w-max' stretch>
            Start Free Trial
          </ButtonLink>
        </div>
        <img
          className='sm:w-7/12 sm:pt-8 sm:pr-8 px-8 object-cover'
          src={page}
          alt='Case studies page preview.'
        />
      </div>

      <div className='flex sm:flex-row flex-col overflow-x-auto flex-nowrap my-16 gap-8'>
        {testimonials.map((testimonial, i) => (
          <Testimonial
            key={i}
            data={testimonial}
            className='flex-none sm:w-96 w-full'
          />
        ))}
      </div>
    </Section>
  );
};
