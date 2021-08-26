import React, { useState } from 'react';

import { Section } from '../layouts/Section';

export const Footer: React.FC = () => {
  const [showSourceCodeLink, setShowSourceCodeLink] = useState(false);
  return (
    <Section as='footer' className='bg-yellow-50'>
      <div className='flex md:flex-row flex-col py-16 md:gap-4 gap-8'>
        <div className='md:w-2/5 flex flex-col gap-2'>
          <h3 className='sm:font-bold font-semibold sm:text-lg text-xl'>
            Fiber
          </h3>
          <p className='text-gray-500 sm:text-base text-lg'>
            With Fiber, you can setup your own personal portfolio in minutes
            with dozens of premade beautiful templates.
          </p>
          <p
            className='text-gray-500 mt-4 sm:text-base text-lg'
            onMouseEnter={() => setShowSourceCodeLink(true)}
            onMouseLeave={() => setShowSourceCodeLink(false)}
          >
            {showSourceCodeLink ? (
              <a
                href='https://github.com/lucaxue/fiber-challenge'
                target='_blank'
                rel='noopener noreferrer'
              >
                View source code
              </a>
            ) : (
              <>Made with ♥ in the Netherlands.</>
            )}
          </p>
        </div>
        <div className='flex sm:flex-row flex-col md:w-3/5 sm:gap-0 gap-8'>
          <div className='flex-1'>
            <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
              Sitemap
            </h3>
            <ul className='grid gap-2 text-gray-500 md:text-base text-lg'>
              <li>
                <a className='hover:underline' href='/#'>
                  Homepage
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#pricing'>
                  Pricing
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#testimonials'>
                  Testimonials
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#features'>
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
              Resources
            </h3>
            <ul className='grid gap-2 text-gray-500 sm:text-base text-lg'>
              <li>
                <a className='hover:underline' href='/#'>
                  Support
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#'>
                  Contact
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#'>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
              Company
            </h3>
            <ul className='grid gap-2 text-gray-500 sm:text-base text-lg'>
              <li>
                <a className='hover:underline' href='/#'>
                  About
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#'>
                  Customers
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#'>
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className='flex-1'>
            <h3 className='sm:font-bold font-semibold mb-2 sm:text-lg text-xl'>
              Portfolios
            </h3>
            <ul className='grid gap-2 text-gray-500 sm:text-base text-lg'>
              <li>
                <a className='hover:underline' href='/#sarah-andrews'>
                  Sarah Andrews
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#matthew-higgings'>
                  Matthew Higgings
                </a>
              </li>
              <li>
                <a className='hover:underline' href='/#janice-dave'>
                  Janice Dave
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};
