import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ButtonLink } from './ButtonLink';

import { ReactComponent as HamburgerMenu } from '../assets/hamburger-menu.svg';

interface Props {
  className?: string;
}

export const NavBar: React.FC<Props> = ({ className }) => {
  const [dropdownIsShown, setDropdownIsShown] = useState(false);
  const toggleDropdown = () => setDropdownIsShown(!dropdownIsShown);

  document.body.className = dropdownIsShown
    ? 'overflow-hidden'
    : 'overflow-auto';

  return (
    <>
      <nav
        className={`flex justify-between w-full py-8 items-center relative ${className}`}
      >
        <Link to='/'>
          <h3 className='sm:font-bold font-semibold sm:text-lg text-xl'>
            Fiber
          </h3>
        </Link>
        <ul className='md:flex hidden gap-4 items-center text-gray-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <li>
            <a className='hover:underline' href='/#testimonials'>
              Community
            </a>
          </li>
          <li>
            <a className='hover:underline' href='/#pricing'>
              Pricing
            </a>
          </li>
          <li>
            <a className='hover:underline' href='/#features'>
              Features
            </a>
          </li>
        </ul>
        <div className='md:flex hidden items-center gap-8'>
          <Link to='/sign-up'>
            <h3 className='font-bold text-lg hover:underline'>Sign In</h3>
          </Link>
          <ButtonLink to='/sign-up'>Sign Up</ButtonLink>
        </div>
        <div className='md:hidden'>
          <HamburgerMenu onClick={toggleDropdown} className='cursor-pointer' />
        </div>
      </nav>
      {dropdownIsShown && (
        <div className='h-screen w-full'>
          <ul className='flex flex-col gap-2 text-lg'>
            <li>
              <a
                className='hover:underline'
                href='/#testimonials'
                onClick={toggleDropdown}
              >
                Community
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='/#pricing'
                onClick={toggleDropdown}
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className='hover:underline'
                href='/#features'
                onClick={toggleDropdown}
              >
                Features
              </a>
            </li>
          </ul>
          <div className='flex justify-between items-center gap-8 fixed bottom-10 right-10'>
            <Link to='/sign-up'>
              <h3 className='font-bold text-lg hover:underline'>Sign In</h3>
            </Link>
            <ButtonLink to='/sign-up'>Sign Up</ButtonLink>
          </div>
        </div>
      )}
    </>
  );
};
