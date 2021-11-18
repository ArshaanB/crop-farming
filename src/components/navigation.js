import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

import { useAuth } from '../context/auth-context';

const navigation = [
  { name: 'Get Started', to: '/deposit', menuType: 'primary' },
  { name: 'Step 1: Deposit', to: '/deposit', menuType: 'secondary' },
  { name: 'Step 2: Invest', to: '/invest', menuType: 'secondary' },
  { name: 'Company', to: '/company', menuType: 'always' },
];

function NavigationComponent() {
  const { user, logout } = useAuth();
  const locationPath = useLocation().pathname;
  const [menuType, setMenuType] = useState('primary');

  React.useEffect(() => {
    if (locationPath === '/' || locationPath === '/company') {
      setMenuType('primary');
    } else {
      setMenuType('secondary');
    }
  }, [locationPath]);

  return (
    <header className='bg-gray-500'>
      <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' aria-label='Top'>
        <div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
          <div className='flex items-center'>
            <RouterLink to='/' className='flex hover:no-underline focus:no-underline'>
              <img className='h-10 w-auto' src='logo.png' alt='' />
              <span className='text-2xl font-bold self-center text-yellow-300'>Crop Farming</span>
            </RouterLink>
            <div className='hidden ml-10 space-x-8 lg:block'>
              {navigation
                .filter((link) => link.menuType === menuType || link.menuType === 'always')
                .map((link) => (
                  <RouterLink
                    key={link.name}
                    to={link.to}
                    className={`text-base font-medium text-white hover:no-underline focus:no-underline hover:text-yellow-400 ${
                      locationPath === link.to ? 'border-b-2 border-yellow-400' : ''
                    }`}
                  >
                    {link.name}
                  </RouterLink>
                ))}
            </div>
          </div>
          <div className='ml-10 space-x-2'>
            <p className='inline-block py-2 px-4 border border-transparent rounded-md text-base font-medium text-white'>
              {user}
            </p>
            <button
              className='inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50'
              onClick={logout}
            >
              Logout
            </button>
          </div>
        </div>
        <div className='py-4 flex flex-wrap justify-center space-x-6 lg:hidden'>
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className='text-base font-medium text-white hover:text-indigo-50'
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export { NavigationComponent };
