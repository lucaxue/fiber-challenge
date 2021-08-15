import React from 'react';
import { Section } from '../layouts/Section';

export const Footer: React.FC = () => (
  <Section as='footer' className='bg-yellow-50'>
    <div className='flex py-16 gap-4'>
      <div className='w-2/5 flex flex-col gap-2'>
        <h3 className='font-bold text-lg'>Fiber</h3>
        <p className='text-gray-500'>
          With Fiber, you can setup your own personal portfolio in minutes with
          dozens of premade beautiful templates.
        </p>
        <p className='text-gray-500 mt-4'>Made with ♥ in the Netherlands.</p>
      </div>
      <div className='flex w-3/5'>
        <div className='flex-1'>
          <h3 className='font-bold mb-2 text-lg'>Sitemap</h3>
          <ul className='grid gap-2 text-gray-500'>
            <li>Homepage</li>
            <li>Pricing</li>
            <li>Testimonials</li>
            <li>Features</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='font-bold mb-2 text-lg'>Resources</h3>
          <ul className='grid gap-2 text-gray-500'>
            <li>Support</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='font-bold mb-2 text-lg'>Company</h3>
          <ul className='grid gap-2 text-gray-500'>
            <li>About</li>
            <li>Customers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='font-bold mb-2 text-lg'>Portfolios</h3>
          <ul className='grid gap-2 text-gray-500'>
            <li>Sarah Andrews</li>
            <li>Matthew Higgins</li>
            <li>Janice Dave</li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);
