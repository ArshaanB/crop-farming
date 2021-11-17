import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/auth-context';
import { useAsync } from 'utils/hooks';
import { depositTicket } from 'utils/financial-details';

function DepositForm() {
  const navigate = useNavigate();

  const { user: email } = useAuth();
  const { run } = useAsync();
  function handleSubmit(event) {
    event.preventDefault();
    const { amount, depositMethod, referenceNumber } = event.target.elements;

    let depositMethodValue = null;
    for (let i of depositMethod) {
      if (i.checked === true) {
        depositMethodValue = i.id;
        break;
      }
    }

    run(
      depositTicket({
        email: email,
        amount: amount.value,
        depositMethod: depositMethodValue,
        referenceNumber: referenceNumber.value,
      })
    );

    navigate('/deposit-success');
  }

  return (
    <form
      className='space-y-8 divide-y divide-gray-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'
      onSubmit={handleSubmit}
    >
      <div className='space-y-8 divide-y divide-gray-200'>
        <div className='pt-8'>
          <div>
            <h3 className='text-xl leading-6 font-medium text-gray-900'>Deposit Form</h3>
            <p className='mt-1 text-md text-gray-500'>
              If you have any questions about this form, don't hesitate to contact us at
              questions@cropfarming.org
            </p>
          </div>
          <fieldset className='mt-6'>
            <div>
              <legend className='text-base font-medium text-gray-900'>Deposit Method</legend>
              <p className='text-sm text-gray-500'>
                How would you like to deposit money into your account? There is only 1 available
                option for now "e-Transfer".
              </p>
            </div>
            <div className='mt-4 space-y-4'>
              <div className='flex items-center'>
                <input
                  id='eTransfer'
                  name='depositMethod'
                  type='radio'
                  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                />
                <label htmlFor='eTransfer' className='ml-3 block text-sm font-medium text-gray-700'>
                  e-Transfer
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='cryptoTransfer'
                  name='depositMethod'
                  type='radio'
                  className='focus:ring-indigo-500 h-4 w-4 text-gray-400 border-gray-300'
                  disabled={true}
                />
                <label
                  htmlFor='cryptoTransfer'
                  className='ml-3 block text-sm font-medium text-gray-400'
                  disabled={true}
                >
                  Crypto transfer (Coming Soon!)
                </label>
              </div>
            </div>
          </fieldset>
          <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label htmlFor='amount' className='block text-md font-medium text-gray-700'>
                Amount
              </label>
              <p className='text-sm text-gray-500'>
                How much money would you like to deposit into your account? (We're limiting deposits
                to a maximum of $1000 per person for now).
              </p>
              <div className='mt-1 flex rounded-md shadow-sm'>
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
          <p className='mt-5 text-md text-gray-800'>
            Finally, please send your e-Transfer to the email:{' '}
            <span className='font-semibold'>deposit@cropfarming.org</span>
          </p>
          <p className='mt-1 text-md text-gray-800'>
            You will receive a "Reference Number" (e.g. CH6j2veF), please enter that number below.
          </p>
          <div className='mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
            <div className='sm:col-span-4'>
              <label htmlFor='username' className='block text-md font-medium text-gray-700'>
                Reference Number
              </label>
              <div className='mt-1 flex rounded-md shadow-sm'>
                <input
                  type='text'
                  name='referenceNumber'
                  id='referenceNumber'
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
            className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
          >
            Submit Deposit
          </button>
        </div>
      </div>
    </form>
  );
}

export { DepositForm };
