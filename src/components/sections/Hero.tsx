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
    <Section as='header' className='bg-yellow-50'>
      <NavBar />
      <div className='flex mt-10'>
        <div className='w-1/2 flex flex-col justify-center gap-4'>
          <div className='flex items-center gap-2'>
            {[1, 2, 3, 4, 5].map(i => (
              <Star />
            ))}
            <p className='text-gray-600'>Rated 4.8/5 (243 reviews)</p>
          </div>
          <h1 className='text-5xl font-semibold'>
            Create your portfolio in minutes.
          </h1>
          <p className='text-gray-500'>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
          <div className='flex items-center gap-8 relative'>
            <ButtonLink to='#'>Start Free Trial</ButtonLink>
            <Link to='#' className='font-bold text-indigo-600 underline'>
              View Examples
            </Link>
          </div>
          <div className='flex items-center gap-2'>
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
        <img
          className='w-1/2 transform scale-110 translate-x-8'
          src={hero}
          alt='Hero Illustration'
        />
      </div>
    </Section>
  );
};
