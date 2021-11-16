import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import * as React from 'react';

const faqs = [
  {
    question: 'What do you actually do with my money?',
    answer: [
      `To keep it brief (a more in-depth explanation is coming soon) owning crypto assets is like owning an extra house.`,
      `You don't want to leave your house idle so you decide to rent it out. Similarly, you can earn income on your crypto assets.`,
      `To use more accurate technical terms (explanations coming soon), we will be "yield
      farming" after converting your dollars to certain crypto assets (i.e. stablecoins like
      USDC).`,
    ],
  },
  {
    question: 'I have a problem, how do I get in touch?',
    answer: [
      `Email questions@cropfarming.org if you have any urgent questions or want to get in touch!`,
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function FAQ() {
  return (
    <div className='bg-gray-50'>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto divide-y-2 divide-gray-200'>
          <h2 className='text-center text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Frequently asked questions
          </h2>
          <dl className='mt-6 space-y-6 divide-y divide-gray-200'>
            {faqs.map((faq) => (
              <Disclosure as='div' key={faq.question} className='pt-6'>
                {({ open }) => (
                  <>
                    <dt className='text-lg'>
                      <Disclosure.Button className='text-left w-full flex justify-between items-start text-gray-400'>
                        <span className='font-medium text-gray-900'>{faq.question}</span>
                        <span className='ml-6 h-7 flex items-center'>
                          <ChevronDownIcon
                            className={classNames(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden='true'
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                      {Array.isArray(faq.answer) ? (
                        faq.answer.map((answer) => (
                          <p className='text-base text-gray-500'>{answer}</p>
                        ))
                      ) : (
                        <p className='text-base text-gray-500'>{faq.answer}</p>
                      )}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
