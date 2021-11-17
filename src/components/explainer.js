import * as React from 'react';
import { LightningBoltIcon, BookOpenIcon } from '@heroicons/react/outline';

const features = [
  {
    name: 'Deposit funds',
    description: 'Choose from one of our payment methods and deposit some funds.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Browse investment pools',
    description:
      'Browse our investment opportunities and select one that fits your risk profile best.',
    icon: BookOpenIcon,
  },
];

function Explainer() {
  return (
    <div className='bg-gray-50 overflow-hidden border-t-2 border-opacity-35	'>
      <div className='relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
        <div className='relative lg:grid lg:grid-cols-3 lg:gap-x-8'>
          <div className='lg:col-span-1'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              How does this all work?
            </h2>
          </div>
          <dl className='mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2'>
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className='flex items-center justify-center h-12 w-12 rounded-md bg-yellow-300 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='mt-5 text-lg leading-6 font-medium text-gray-900'>{feature.name}</p>
                </dt>
                <dd className='mt-2 text-base text-gray-500'>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className='mt-16 mx-auto'>
          <p className='text-center text-3xl font-semibold'>
            Now sit back, relax, and watch your investment grow.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Explainer };
