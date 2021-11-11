/** @jsx jsx */
import { jsx } from '@emotion/core';

import 'authenticated-app.css';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Button, ErrorMessage, FullPageErrorFallback } from './components/lib';
// import * as mq from './styles/media-queries';
import * as colors from './styles/colors';
import { useAuth } from './context/auth-context';
import { HomeScreen } from 'screens/home';
import { AboutScreen } from 'screens/about';

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
          <RouterLink to='/getting-started'>
            <Button
              css={{
                marginLeft: '20px',
                borderRadius: '7px',
                fontSize: '18px',
              }}
              className='getting-started'
            >
              Getting Started
            </Button>
          </RouterLink>
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
      {/* Removed margin: '0 auto', from css below.
        [mq.small]: {
          width: '100%',
        }, and many more styles.*/}
      <div
        css={{
          padding: '4em 2em',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <main
          css={{
            width: '80%',
          }}
        >
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
      {/* <Route path='/list' element={<ReadingListScreen />} />
      <Route path='/finished' element={<FinishedScreen />} />
      <Route path='/discover' element={<DiscoverBooksScreen />} />
      <Route path='/book/:bookId' element={<BookScreen />} />
      <Route path='*' element={<NotFoundScreen />} /> */}
    </Routes>
  );
}

export default AuthenticatedApp;
