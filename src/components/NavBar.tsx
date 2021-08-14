import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLink } from './ButtonLink';

export const NavBar: React.FC = () => {
  return (
    <nav className='flex justify-between w-full py-8 items-center relative'>
      <Link to='/'>
        <h1 className='font-bold'>Fiber</h1>
      </Link>
      <ul className='flex gap-4 text-gray-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <li>
          <Link to='/community'>Community</Link>
        </li>
        <li>
          <Link to='/pricing'>Pricing</Link>
        </li>
        <li>
          <Link to='/features'>Features</Link>
        </li>
      </ul>
      <div className='flex items-center gap-8'>
        <Link to='/sign-in'>
          <h1 className='font-bold'>Sign In</h1>
        </Link>
        <ButtonLink to='/sign-up'>Sign Up</ButtonLink>
      </div>
    </nav>
  );
};