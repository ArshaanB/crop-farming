/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as React from 'react';

import { useAuth } from 'context/auth-context';

import { getCustomer } from 'utils/financial-details';

import { InvestForm } from '../components/invest-form';

// import * as React from 'react';

// These could be useful for colour coating later on.
// bg-pink-100
// bg-green-100
const posts = [
  {
    title: 'Crop Pool 1',
    category: { name: 'Low Risk', color: 'bg-indigo-100 text-indigo-800' },
    description: 'This pool is lowest-risk with the lowest rewards at 20% APY.',
    expectedReturns: '20% APY',
    assetExposure: 'Stablecoins (e.g. USDC, USDT)',
  },
  {
    title: 'Crop Pool 2',
    category: { name: 'Medium Risk (Coming Soon!)', color: 'bg-gray-500 text-white' },
    description:
      'This pool is medium-risk with the rewards at 50% APY. This pool will likely open January 2022.',
    expectedReturns: '50% APY',
    assetExposure: 'Unknown',
  },
  {
    title: 'Crop Pool 3',
    category: { name: 'High Risk (Coming Soon!)', color: 'bg-gray-500 text-white' },
    description:
      'This pool is high-risk with the rewards at 150% APY. This pool will likely open February 2022.',
    expectedReturns: '150% APY',
    assetExposure: 'Unknown',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function calculateInvestedBalance(allPools) {
  let sum = 0;
  allPools.forEach((e) => {
    sum += e;
  });
  return sum;
}

function InvestScreen() {
  const { user: userDetails } = useAuth();

  const [customerDetails, setCustomerDetails] = React.useState({
    availableBalance: 0,
    invested: {
      pool1: 0,
      pool2: 0,
      pool3: 0,
    },
  });

  const investedBalance = calculateInvestedBalance(Object.values(customerDetails.invested));

  React.useEffect(() => {
    getCustomer(userDetails.user.uid).then((customerBalances) => {
      setCustomerDetails(customerBalances);
    });
  }, [userDetails]);

  return (
    <div className='bg-white pt-12 pb-20 px-4 sm:px-6 lg:pt-12 lg:pb-28 lg:px-8'>
      <div className='relative max-w-lg mx-auto divide-y-2 divide-gray-100 lg:max-w-7xl'>
        <div>
          <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
            Overview
          </h2>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Available Balance:{' '}
            <span className='text-gray-900 pl-2'>${customerDetails.availableBalance}</span>
          </p>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Invested Balance: <span className='text-gray-900 pl-2'>${investedBalance}</span>
          </p>
          <p className='mt-3 text-xl text-gray-500 sm:mt-4'>
            Total Balance:{' '}
            <span className='text-gray-900 pl-2'>
              ${customerDetails.availableBalance + investedBalance}
            </span>
          </p>
        </div>
        <div className='my-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12'>
          {posts.map((post) => (
            <div key={post.title} className='border p-8 rounded-lg'>
              <div>
                <span
                  className={classNames(
                    post.category.color,
                    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
                  )}
                >
                  {post.category.name}
                </span>
              </div>
              <div className='mt-4'>
                <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
                <p className='mt-3 text-base text-gray-500'>{post.description}</p>
                <p className='mt-3 text-base text-gray-900 font-bold'>
                  <span className='text-green-500 font-semibold'>Expected Returns:</span>{' '}
                  {post.expectedReturns}
                </p>
              </div>
            </div>
          ))}
        </div>
        <InvestForm></InvestForm>
      </div>
    </div>
  );
}

export { InvestScreen };
