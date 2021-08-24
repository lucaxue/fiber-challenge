import React from 'react';
import { Section } from '../layouts/Section';

export const Footer: React.FC = () => (
  <Section as='footer' className='bg-yellow-50'>
    <div className='flex sm:flex-row flex-col py-16 sm:gap-4 gap-8'>
      <div className='sm:w-2/5 flex flex-col gap-2'>
        <h3 className='sm:font-bold font-semibold sm:text-lg text-xl'>Fiber</h3>
        <p className='text-gray-500 sm:text-base text-lg'>
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade beautiful templates.
        </p>
        <p className='text-gray-500 mt-4 sm:text-base text-lg'>
          Made with ♥ in the Netherlands.
        </p>
      </div>
      <div className='flex sm:flex-row flex-col sm:w-3/5 sm:gap-0 gap-8'>
        <div className='flex-1'>
          <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
            Sitemap
          </h3>
          <ul className='grid gap-2 text-gray-500 sm:text-base text-lg'>
            <li>Homepage</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Features</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
            Resources
          </h3>
          <ul className='grid gap-2 text-gray-500 sm:text-base text-lg'>
            <li>Support</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
            Company
          </h3>
          <ul className='grid gap-2 text-gray-500 sm:text-base text-lg'>
            <li>About</li>
            <li>Customers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
            Portfolios
          </h3>
          <ul className='grid gap-2 text-gray-500 sm:text-base text-lg'>
            <li>Sarah Andrews</li>
            <li>Matthew Higgins</li>
            <li>Janice Dave</li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);
