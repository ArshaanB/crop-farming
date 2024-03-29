/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Link as RouterLink } from 'react-router-dom';

import './cta.css';
import * as colors from '../styles/colors';

function CTA() {
  return (
    <div className='relative bg-gray-50 overflow-hidden'>
      <div className='relative pt-6 pb-16 sm:pb-24'>
        <main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <span className='block xl:inline'>You can earn</span>{' '}
              <span
                css={{
                  color: colors.yellow,
                }}
                className='block xl:inline'
              >
                20%, 50% or 150%
              </span>{' '}
              <span className='block xl:inline'>on your dollars every year!</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Crop Farming takes the difficult process of earning yield on idle crypto-assets and
              makes it accessible to you, the general public.
            </p>
            <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
              <div className='rounded-md shadow'>
                <RouterLink
                  id='cta-getting-started'
                  to='/deposit'
                  css={{
                    backgroundColor: colors.green,
                    '&:hover,&:focus': colors.yellow,
                  }}
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-20'
                >
                  <span>Get Started</span>
                </RouterLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export { CTA };
