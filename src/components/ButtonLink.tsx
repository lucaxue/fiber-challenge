import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children: string;
}

export const ButtonLink: React.FC<Props> = ({ to, children }) => (
  <Link
    to={to}
    className='bg-indigo-600 rounded-md py-3 px-6 font-semibold text-white'
  >
    {children}
  </Link>
);
