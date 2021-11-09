/** @jsx jsx */
import { jsx } from '@emotion/core';

import { Routes } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, ErrorMessage, FullPageErrorFallback } from './components/lib';
import * as mq from './styles/media-queries';
// import * as colors from './styles/colors';
import { useAuth } from './context/auth-context';

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

  return (
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
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
      <div
        css={{
          margin: '0 auto',
          padding: '4em 2em',
          maxWidth: '840px',
          width: '100%',
          display: 'grid',
          gridGap: '1em',
          gridTemplateColumns: '1fr 3fr',
          [mq.small]: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: 'auto',
            width: '100%',
          },
        }}
      >
        <main css={{ width: '100%' }}>
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
      {/* <Route path='/list' element={<ReadingListScreen />} />
      <Route path='/finished' element={<FinishedScreen />} />
      <Route path='/discover' element={<DiscoverBooksScreen />} />
      <Route path='/book/:bookId' element={<BookScreen />} />
      <Route path='*' element={<NotFoundScreen />} /> */}
    </Routes>
  );
}

export default AuthenticatedApp;
