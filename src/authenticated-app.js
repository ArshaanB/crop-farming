/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorMessage, FullPageErrorFallback } from './components/lib';
import { HomeScreen } from 'screens/home';
import { CompanyScreen } from 'screens/company';
import { DepositScreen } from 'screens/deposit';
import { InvestScreen } from 'screens/invest';
import { DepositSuccessScreen } from 'screens/deposit-success';
import { NotFoundScreen } from 'screens/not-found';
import { NavigationComponent } from 'components/navigation';

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
  return (
    <ErrorBoundary
      FallbackComponent={FullPageErrorFallback}
      css={{
        display: 'flex',
      }}
    >
      <NavigationComponent></NavigationComponent>
      <div
        css={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <main className='w-full'>
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
      <Route path='/company' element={<CompanyScreen />} />
      <Route path='/deposit' element={<DepositScreen />} />
      <Route path='/deposit-success' element={<DepositSuccessScreen />} />
      <Route path='/invest' element={<InvestScreen />} />
      <Route path='*' element={<NotFoundScreen />} />
    </Routes>
  );
}

export default AuthenticatedApp;
