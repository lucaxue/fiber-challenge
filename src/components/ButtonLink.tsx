import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  className?: string;
  color?: 'primary' | 'secondary';
  stretch?: boolean;
  children: string | string[];
}

export const ButtonLink: React.FC<Props> = ({
  to,
  color = 'primary',
  stretch = false,
  className = '',
  children,
}) => (
  <Link
    to={to}
    className={`rounded-md py-3 px-6 font-semibold text-lg text-center ${
      color === 'primary'
        ? 'bg-indigo-600 text-white'
        : 'bg-white text-indigo-600'
    } ${!stretch && 'max-w-max'} ${className}`}
  >
    {children}
  </Link>
);
