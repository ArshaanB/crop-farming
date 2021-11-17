/** @jsx jsx */
import { jsx } from '@emotion/core';

import 'authenticated-app.css';
import { Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, ErrorMessage, FullPageErrorFallback } from './components/lib';
import * as colors from './styles/colors';
import { useAuth } from './context/auth-context';
import { HomeScreen } from 'screens/home';
import { AboutScreen } from 'screens/about';
import { DepositScreen } from 'screens/deposit';
import { InvestScreen } from 'screens/invest';
import { DepositSuccessScreen } from 'screens/deposit-success';
import React, { useState } from 'react';

function ErrorFallback({ error }) {
  return (
    <ErrorMessage
      error={error}
      css={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    />
  );
}

function AuthenticatedApp() {
  const { user, logout } = useAuth();
  const locationPath = useLocation().pathname;
  const [enablePrimaryMenu, setEnablePrimaryMenu] = useState(true);

  React.useEffect(() => {
    setEnablePrimaryMenu(locationPath === '/' || locationPath === '/about');
  }, [locationPath]);

  return (
    <ErrorBoundary
      FallbackComponent={FullPageErrorFallback}
      css={{
        display: 'flex',
      }}
    >
      <div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '10px',
            left: '10px',
          }}
        >
          <RouterLink
            to='/'
            css={{
              display: 'flex',
            }}
            className='logo'
          >
            <img src='logo.png' width='40' height='40' alt='' />
            <div
              css={{
                color: colors.green,
                fontWeight: 600,
                fontSize: '24px',
              }}
            >
              Crop Farming
            </div>
          </RouterLink>
          {enablePrimaryMenu ? (
            <RouterLink to='/deposit'>
              <Button
                css={{
                  marginLeft: '20px',
                  borderRadius: '7px',
                  fontSize: '18px',
                }}
                className='deposit'
              >
                Getting Started
              </Button>
            </RouterLink>
          ) : null}
          {enablePrimaryMenu ? (
            <RouterLink
              css={{
                fontSize: '18px',
                padding: '0px 10px',
                color: colors.text,
              }}
              to='/about'
              className='about'
            >
              About
            </RouterLink>
          ) : null}
          {!enablePrimaryMenu ? (
            <RouterLink to='/deposit'>
              <Button
                css={{
                  marginLeft: '20px',
                  borderRadius: '7px',
                  fontSize: '18px',
                }}
                className='deposit'
              >
                Step 1: Deposit
              </Button>
            </RouterLink>
          ) : null}
          {!enablePrimaryMenu ? (
            <RouterLink to='/invest'>
              <Button
                css={{
                  marginLeft: '20px',
                  borderRadius: '7px',
                  fontSize: '18px',
                }}
                className='invest'
              >
                Step 2: Invest
              </Button>
            </RouterLink>
          ) : null}
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            top: '10px',
            right: '10px',
          }}
        >
          {user}
          <Button variant='secondary' css={{ marginLeft: '10px' }} onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
      <div
        css={{
          padding: '4em 2em',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <main>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppRoutes />
          </ErrorBoundary>
        </main>
      </div>
    </ErrorBoundary>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen />} />
      <Route path='/about' element={<AboutScreen />} />
      <Route path='/deposit' element={<DepositScreen />} />
      <Route path='/deposit-success' element={<DepositSuccessScreen />} />
      <Route path='/invest' element={<InvestScreen />} />
    </Routes>
  );
}

export default AuthenticatedApp;
