import { ButtonLink } from 'components/ButtonLink';
import { Section } from 'components/layouts/Section';
import React from 'react';
import { Link } from 'react-router-dom';

export const SignUp: React.FC = () => (
  <Section
    as='main'
    className='rounded'
    style={{
      background: `linear-gradient(to right, #fff 50%, #4F46E5 50%)`,
    }}
  >
    <div className='flex w-full min-h-screen'>
      <div className='w-1/2'>
        <Link
          to='/'
          className='flex items-center my-8 py-3 sm:font-bold font-semibold sm:text-lg text-xl'
        >
          Fiber
        </Link>

        <h2 className='text-3xl font-semibold mb-12'>
          Create your Fiber account
        </h2>

        <form className='flex flex-col gap-8 w-96 px-1'>
          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='name'>
              Your Name
            </label>
            <input
              className='w-full form-input border border-gray-300 rounded placeholder-gray-400 py-3 px-4'
              name='name'
              type='text'
              autoComplete='off'
              placeholder='John Doe'
            />
          </div>

          <div>
            <label className='block text-sm font-semibold mb-1' htmlFor='email'>
              E-mail
            </label>
            <input
              className='w-full form-input border border-gray-300 rounded placeholder-gray-400 py-3 px-4'
              name='email'
              type='email'
              autoComplete='off'
              placeholder='john@example.com'
            />
          </div>

          <div>
            <label
              className='block text-sm font-semibold mb-1'
              htmlFor='password'
            >
              Password
            </label>
            <input
              className='w-full form-input border border-gray-300 rounded placeholder-gray-400 py-3 px-4'
              name='password'
              type='password'
              autoComplete='off'
              placeholder='At least 8 characters'
            />
          </div>

          <div className='flex gap-2'>
            <input
              className='rounded border-gray-300 mt-1'
              type='checkbox'
              name='terms-and-conditions'
            />
            <label htmlFor='terms-and-conditions'>
              By creating an account on Fiber, you agree to the{' '}
              <Link to='#' className='font-bold text-indigo-600 underline'>
                Terms & Conditions
              </Link>
            </label>
          </div>

          <ButtonLink to='#' stretch>
            Create Fiber Account
          </ButtonLink>

          <div className='flex justify-center -mt-4'>
            <span>
              Already have an account?{' '}
              <Link to='/sign-in' className='text-indigo-600'>
                Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className='w-1/2'>Unparalleled Templates</div>
    </div>
  </Section>
);
