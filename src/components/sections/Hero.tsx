import React from 'react';

import hero from '../../assets/hero-illustration.png';
import { ReactComponent as Checkmark } from '../../assets/checkmark.svg';
import { ReactComponent as Star } from '../../assets/star.svg';

import { Section } from '../layouts/Section';
import { NavBar } from '../NavBar';
import { ButtonLink } from '../ButtonLink';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <Section as='header' className='bg-yellow-50 xl:min-h-screen'>
      <NavBar />
      <div className='flex sm:flex-row flex-col flex-col-reverse items-center sm:my-10 -mt-16'>
        <div className='sm:w-1/2 flex flex-col justify-center gap-4'>
          <div className='sm:flex items-center gap-2 hidden'>
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} />
            ))}
            <p className='text-gray-600 '>Rated 4.8/5 (243 reviews)</p>
          </div>
          <h1 className='sm:text-5xl text-4xl font-semibold'>
            Create your portfolio in minutes.
          </h1>
          <p className='text-gray-500 sm:text-base text-lg'>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <div className='flex sm:flex-row flex-col items-center sm:gap-8 gap-4 relative'>
            <ButtonLink to='#' className='md:max-w-max w-full' stretch>
              Start Free Trial
            </ButtonLink>
            <Link to='#' className='font-bold text-indigo-600 underline'>
              View Examples
            </Link>
          </div>
          <div className='flex sm:flex-row flex-col sm:items-center gap-4 sm:pb-0 pb-10'>
            <div className='flex gap-2'>
              <Checkmark />
              <p className='text-gray-500'>No Credit Card Required</p>
            </div>
            <div className='flex gap-2'>
              <Checkmark />
              <p className='text-gray-500'>10 Free Templates</p>
            </div>
          </div>
        </div>
        <img className='sm:w-1/2 mb-8' src={hero} alt='Hero Illustration' />
      </div>
    </Section>
  );
};
