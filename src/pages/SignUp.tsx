import { SplitPage } from 'components/layouts/SplitPage';
import { CreateAccountForm } from 'components/sections/CreateAccountForm';
import React from 'react';
import page from '../assets/sign-up-image.png';

export const SignUp: React.FC = () => (
  <SplitPage
    style={{
      background: `linear-gradient(to right, #fff 50%, #4F46E5 50%)`,
    }}
    firstPage={<CreateAccountForm />}
    secondPage={
      <div className='flex w-full pt-32 min-h-screen justify-end'>
        <div className='w-96'>
          <img className='mb-8' src={page} alt='Fiber preview' />
          <h2 className='text-3xl text-white font-semibold text-center mb-2'>
            Unparalleled Templates
          </h2>
          <p className='text-gray-200 font-light text-center'>
            Crafted by a team of professional designers, our templates are
            eunparalleled in the market.
          </p>
        </div>
      </div>
    }
  />
);
