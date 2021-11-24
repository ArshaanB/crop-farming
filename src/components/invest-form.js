import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth-context';
import { useAsync } from 'utils/hooks';

import { createRequest } from 'utils/financial-details';

function InvestForm() {
  const navigate = useNavigate();
  const { run } = useAsync();
  const { user: userDetails } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const { cropPool, amount } = event.target.elements;

    run(createRequest(userDetails.user.uid, cropPool.value, amount.value));

    navigate('/invest-success');
  }

  return (
    <div>
      <form className='space-y-8 divide-y mt-12 max-w-lg mx-auto' onSubmit={handleSubmit}>
        <div className='space-y-8 divide-y'>
          <div className='pt-8'>
            <div>
              <h3 className='text-2xl leading-6 font-medium text-gray-900'>Invest your funds</h3>
              <p className='mt-1 text-md text-gray-500'>
                Use the form below to invest your "Available Balance" into a pool.
              </p>
            </div>
            <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-3'>
              <div className='sm:col-span-3'>
                <label htmlFor='cropPool' className='block text-md font-medium text-gray-700'>
                  Pick Crop Pool
                </label>
                <div className='mt-1'>
                  <select
                    id='cropPool'
                    name='cropPool'
                    className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                  >
                    <option value='pool1'>Crop Pool 1</option>
                    <option value='pool2' disabled>
                      Crop Pool 2 (Coming Soon!)
                    </option>
                    <option value='pool3' disabled>
                      Crop Pool 3 (Coming Soon!)
                    </option>
                  </select>
                </div>
              </div>
              <div className='sm:col-span-3'>
                <label htmlFor='amount' className='block font-medium text-gray-700'>
                  Deposit
                </label>
                <p className='text-sm text-gray-500'>
                  This will use the money from your "Available Balance".
                </p>
                <div className='mt-1 flex rounded-md'>
                  <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm'>
                    $
                  </span>
                  <input
                    type='number'
                    name='amount'
                    id='amount'
                    className='flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full max-w-xs min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='pt-5'>
          <div className='flex justify-end'>
            <button
              type='submit'
              className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full'
            >
              Submit Request
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export { InvestForm };
